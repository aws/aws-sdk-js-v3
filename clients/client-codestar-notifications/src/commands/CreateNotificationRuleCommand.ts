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

import {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import {
  CreateNotificationRuleRequest,
  CreateNotificationRuleRequestFilterSensitiveLog,
  CreateNotificationRuleResult,
} from "../models/models_0";
import { de_CreateNotificationRuleCommand, se_CreateNotificationRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNotificationRuleCommand}.
 */
export interface CreateNotificationRuleCommandInput extends CreateNotificationRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateNotificationRuleCommand}.
 */
export interface CreateNotificationRuleCommandOutput extends CreateNotificationRuleResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a notification rule for a resource. The rule specifies the events you want
 *             notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, CreateNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, CreateNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const input = { // CreateNotificationRuleRequest
 *   Name: "STRING_VALUE", // required
 *   EventTypeIds: [ // EventTypeIds // required
 *     "STRING_VALUE",
 *   ],
 *   Resource: "STRING_VALUE", // required
 *   Targets: [ // Targets // required
 *     { // Target
 *       TargetType: "STRING_VALUE",
 *       TargetAddress: "STRING_VALUE",
 *     },
 *   ],
 *   DetailType: "BASIC" || "FULL", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Status: "ENABLED" || "DISABLED",
 * };
 * const command = new CreateNotificationRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotificationRuleResult
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNotificationRuleCommandInput - {@link CreateNotificationRuleCommandInput}
 * @returns {@link CreateNotificationRuleCommandOutput}
 * @see {@link CreateNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link CreateNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>AWS CodeStar Notifications can't create the notification rule because you do not have sufficient
 *       permissions.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>AWS CodeStar Notifications can't complete the request because the resource is being modified by
 *       another process. Wait a few minutes and try again.</p>
 *
 * @throws {@link ConfigurationException} (client fault)
 *  <p>Some or all of the configuration is incomplete, missing, or not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>One of the AWS CodeStar Notifications limits has been exceeded. Limits apply to
 *             accounts, notification rules, notifications, resources, and targets. For more
 *             information, see Limits.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>A resource with the same name or ID already exists. Notification rule names must be
 *             unique in your Amazon Web Services account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link CodestarNotificationsServiceException}
 * <p>Base exception class for all service exceptions from CodestarNotifications service.</p>
 *
 */
export class CreateNotificationRuleCommand extends $Command<
  CreateNotificationRuleCommandInput,
  CreateNotificationRuleCommandOutput,
  CodestarNotificationsClientResolvedConfig
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
  constructor(readonly input: CreateNotificationRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodestarNotificationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNotificationRuleCommandInput, CreateNotificationRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNotificationRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodestarNotificationsClient";
    const commandName = "CreateNotificationRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNotificationRuleRequestFilterSensitiveLog,
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
  private serialize(input: CreateNotificationRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateNotificationRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNotificationRuleCommandOutput> {
    return de_CreateNotificationRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
