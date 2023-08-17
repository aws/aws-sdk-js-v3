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
  CreateVpcEndpointConnectionNotificationRequest,
  CreateVpcEndpointConnectionNotificationResult,
} from "../models/models_2";
import {
  de_CreateVpcEndpointConnectionNotificationCommand,
  se_CreateVpcEndpointConnectionNotificationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcEndpointConnectionNotificationCommand}.
 */
export interface CreateVpcEndpointConnectionNotificationCommandInput
  extends CreateVpcEndpointConnectionNotificationRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcEndpointConnectionNotificationCommand}.
 */
export interface CreateVpcEndpointConnectionNotificationCommandOutput
  extends CreateVpcEndpointConnectionNotificationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a connection notification for a specified VPC endpoint or VPC endpoint
 *             service. A connection notification notifies you of specific endpoint events. You must
 *             create an SNS topic to receive notifications. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Create a Topic</a> in
 *             the <i>Amazon Simple Notification Service Developer Guide</i>.</p>
 *          <p>You can create a connection notification for interface endpoints only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcEndpointConnectionNotificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcEndpointConnectionNotificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVpcEndpointConnectionNotificationRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE",
 *   VpcEndpointId: "STRING_VALUE",
 *   ConnectionNotificationArn: "STRING_VALUE", // required
 *   ConnectionEvents: [ // ValueStringList // required
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateVpcEndpointConnectionNotificationCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcEndpointConnectionNotificationResult
 * //   ConnectionNotification: { // ConnectionNotification
 * //     ConnectionNotificationId: "STRING_VALUE",
 * //     ServiceId: "STRING_VALUE",
 * //     VpcEndpointId: "STRING_VALUE",
 * //     ConnectionNotificationType: "Topic",
 * //     ConnectionNotificationArn: "STRING_VALUE",
 * //     ConnectionEvents: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     ConnectionNotificationState: "Enabled" || "Disabled",
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateVpcEndpointConnectionNotificationCommandInput - {@link CreateVpcEndpointConnectionNotificationCommandInput}
 * @returns {@link CreateVpcEndpointConnectionNotificationCommandOutput}
 * @see {@link CreateVpcEndpointConnectionNotificationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointConnectionNotificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CreateVpcEndpointConnectionNotificationCommand extends $Command<
  CreateVpcEndpointConnectionNotificationCommandInput,
  CreateVpcEndpointConnectionNotificationCommandOutput,
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
  constructor(readonly input: CreateVpcEndpointConnectionNotificationCommandInput) {
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
    CreateVpcEndpointConnectionNotificationCommandInput,
    CreateVpcEndpointConnectionNotificationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        CreateVpcEndpointConnectionNotificationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpcEndpointConnectionNotificationCommand";
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
    input: CreateVpcEndpointConnectionNotificationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateVpcEndpointConnectionNotificationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcEndpointConnectionNotificationCommandOutput> {
    return de_CreateVpcEndpointConnectionNotificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
