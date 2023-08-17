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
import { ConfirmProductInstanceRequest, ConfirmProductInstanceResult } from "../models/models_0";
import { de_ConfirmProductInstanceCommand, se_ConfirmProductInstanceCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ConfirmProductInstanceCommand}.
 */
export interface ConfirmProductInstanceCommandInput extends ConfirmProductInstanceRequest {}
/**
 * @public
 *
 * The output of {@link ConfirmProductInstanceCommand}.
 */
export interface ConfirmProductInstanceCommandOutput extends ConfirmProductInstanceResult, __MetadataBearer {}

/**
 * @public
 * <p>Determines whether a product code is associated with an instance. This action can only
 *             be used by the owner of the product code. It is useful when a product code owner must
 *             verify whether another user's instance is eligible for support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ConfirmProductInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ConfirmProductInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ConfirmProductInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ProductCode: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ConfirmProductInstanceCommand(input);
 * const response = await client.send(command);
 * // { // ConfirmProductInstanceResult
 * //   OwnerId: "STRING_VALUE",
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ConfirmProductInstanceCommandInput - {@link ConfirmProductInstanceCommandInput}
 * @returns {@link ConfirmProductInstanceCommandOutput}
 * @see {@link ConfirmProductInstanceCommandInput} for command's `input` shape.
 * @see {@link ConfirmProductInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To confirm the product instance
 * ```javascript
 * // This example determines whether the specified product code is associated with the specified instance.
 * const input = {
 *   "InstanceId": "i-1234567890abcdef0",
 *   "ProductCode": "774F4FF8"
 * };
 * const command = new ConfirmProductInstanceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OwnerId": "123456789012"
 * }
 * *\/
 * // example id: to-confirm-the-product-instance-1472712108494
 * ```
 *
 */
export class ConfirmProductInstanceCommand extends $Command<
  ConfirmProductInstanceCommandInput,
  ConfirmProductInstanceCommandOutput,
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
  constructor(readonly input: ConfirmProductInstanceCommandInput) {
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
  ): Handler<ConfirmProductInstanceCommandInput, ConfirmProductInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConfirmProductInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ConfirmProductInstanceCommand";
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
  private serialize(input: ConfirmProductInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ConfirmProductInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfirmProductInstanceCommandOutput> {
    return de_ConfirmProductInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
