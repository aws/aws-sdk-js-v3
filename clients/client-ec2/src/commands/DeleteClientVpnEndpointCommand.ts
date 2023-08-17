// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteClientVpnEndpointRequest, DeleteClientVpnEndpointResult } from "../models/models_2";
import { de_DeleteClientVpnEndpointCommand, se_DeleteClientVpnEndpointCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteClientVpnEndpointCommand}.
 */
export interface DeleteClientVpnEndpointCommandInput extends DeleteClientVpnEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClientVpnEndpointCommand}.
 */
export interface DeleteClientVpnEndpointCommandOutput extends DeleteClientVpnEndpointResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified Client VPN endpoint. You must disassociate all target networks before you
 * 			can delete a Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteClientVpnEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteClientVpnEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteClientVpnEndpointRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteClientVpnEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteClientVpnEndpointResult
 * //   Status: { // ClientVpnEndpointStatus
 * //     Code: "pending-associate" || "available" || "deleting" || "deleted",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteClientVpnEndpointCommandInput - {@link DeleteClientVpnEndpointCommandInput}
 * @returns {@link DeleteClientVpnEndpointCommandOutput}
 * @see {@link DeleteClientVpnEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteClientVpnEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteClientVpnEndpointCommand extends $Command<
  DeleteClientVpnEndpointCommandInput,
  DeleteClientVpnEndpointCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeleteClientVpnEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteClientVpnEndpointCommandInput, DeleteClientVpnEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteClientVpnEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteClientVpnEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteClientVpnEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteClientVpnEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClientVpnEndpointCommandOutput> {
    return de_DeleteClientVpnEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
