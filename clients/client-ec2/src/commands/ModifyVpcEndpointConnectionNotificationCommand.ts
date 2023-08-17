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
import {
  ModifyVpcEndpointConnectionNotificationRequest,
  ModifyVpcEndpointConnectionNotificationResult,
} from "../models/models_6";
import {
  de_ModifyVpcEndpointConnectionNotificationCommand,
  se_ModifyVpcEndpointConnectionNotificationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcEndpointConnectionNotificationCommand}.
 */
export interface ModifyVpcEndpointConnectionNotificationCommandInput
  extends ModifyVpcEndpointConnectionNotificationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcEndpointConnectionNotificationCommand}.
 */
export interface ModifyVpcEndpointConnectionNotificationCommandOutput
  extends ModifyVpcEndpointConnectionNotificationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies a connection notification for VPC endpoint or VPC endpoint service. You
 *             can change the SNS topic for the notification, or the events for which to be notified. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointConnectionNotificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointConnectionNotificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcEndpointConnectionNotificationRequest
 *   DryRun: true || false,
 *   ConnectionNotificationId: "STRING_VALUE", // required
 *   ConnectionNotificationArn: "STRING_VALUE",
 *   ConnectionEvents: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyVpcEndpointConnectionNotificationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcEndpointConnectionNotificationResult
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyVpcEndpointConnectionNotificationCommandInput - {@link ModifyVpcEndpointConnectionNotificationCommandInput}
 * @returns {@link ModifyVpcEndpointConnectionNotificationCommandOutput}
 * @see {@link ModifyVpcEndpointConnectionNotificationCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointConnectionNotificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyVpcEndpointConnectionNotificationCommand extends $Command<
  ModifyVpcEndpointConnectionNotificationCommandInput,
  ModifyVpcEndpointConnectionNotificationCommandOutput,
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
  constructor(readonly input: ModifyVpcEndpointConnectionNotificationCommandInput) {
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
  ): Handler<
    ModifyVpcEndpointConnectionNotificationCommandInput,
    ModifyVpcEndpointConnectionNotificationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ModifyVpcEndpointConnectionNotificationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcEndpointConnectionNotificationCommand";
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
  private serialize(
    input: ModifyVpcEndpointConnectionNotificationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyVpcEndpointConnectionNotificationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpcEndpointConnectionNotificationCommandOutput> {
    return de_ModifyVpcEndpointConnectionNotificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
