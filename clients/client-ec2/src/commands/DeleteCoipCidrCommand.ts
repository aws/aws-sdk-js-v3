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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteCoipCidrRequest, DeleteCoipCidrResult } from "../models/models_2";
import { de_DeleteCoipCidrCommand, se_DeleteCoipCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCoipCidrCommand}.
 */
export interface DeleteCoipCidrCommandInput extends DeleteCoipCidrRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCoipCidrCommand}.
 */
export interface DeleteCoipCidrCommandOutput extends DeleteCoipCidrResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Deletes a range of customer-owned IP addresses.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteCoipCidrRequest
 *   Cidr: "STRING_VALUE", // required
 *   CoipPoolId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteCoipCidrCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCoipCidrResult
 * //   CoipCidr: { // CoipCidr
 * //     Cidr: "STRING_VALUE",
 * //     CoipPoolId: "STRING_VALUE",
 * //     LocalGatewayRouteTableId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteCoipCidrCommandInput - {@link DeleteCoipCidrCommandInput}
 * @returns {@link DeleteCoipCidrCommandOutput}
 * @see {@link DeleteCoipCidrCommandInput} for command's `input` shape.
 * @see {@link DeleteCoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteCoipCidrCommand extends $Command<
  DeleteCoipCidrCommandInput,
  DeleteCoipCidrCommandOutput,
  EC2ClientResolvedConfig
> {
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
  constructor(readonly input: DeleteCoipCidrCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCoipCidrCommandInput, DeleteCoipCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCoipCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteCoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DeleteCoipCidr",
      },
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
  private serialize(input: DeleteCoipCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCoipCidrCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCoipCidrCommandOutput> {
    return de_DeleteCoipCidrCommand(output, context);
  }
}
