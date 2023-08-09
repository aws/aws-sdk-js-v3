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
  UpdateNotificationRuleRequest,
  UpdateNotificationRuleRequestFilterSensitiveLog,
  UpdateNotificationRuleResult,
} from "../models/models_0";
import { de_UpdateNotificationRuleCommand, se_UpdateNotificationRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateNotificationRuleCommand}.
 */
export interface UpdateNotificationRuleCommandInput extends UpdateNotificationRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNotificationRuleCommand}.
 */
export interface UpdateNotificationRuleCommandOutput extends UpdateNotificationRuleResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates a notification rule for a resource. You can change the events that trigger the
 *             notification rule, the status of the rule, and the targets that receive the
 *             notifications.</p>
 *          <note>
 *             <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, UpdateNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, UpdateNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const input = { // UpdateNotificationRuleRequest
 *   Arn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Status: "ENABLED" || "DISABLED",
 *   EventTypeIds: [ // EventTypeIds
 *     "STRING_VALUE",
 *   ],
 *   Targets: [ // Targets
 *     { // Target
 *       TargetType: "STRING_VALUE",
 *       TargetAddress: "STRING_VALUE",
 *     },
 *   ],
 *   DetailType: "BASIC" || "FULL",
 * };
 * const command = new UpdateNotificationRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNotificationRuleCommandInput - {@link UpdateNotificationRuleCommandInput}
 * @returns {@link UpdateNotificationRuleCommandOutput}
 * @see {@link UpdateNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 * @throws {@link ConfigurationException} (client fault)
 *  <p>Some or all of the configuration is incomplete, missing, or not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>AWS CodeStar Notifications can't find a resource that matches the provided ARN. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link CodestarNotificationsServiceException}
 * <p>Base exception class for all service exceptions from CodestarNotifications service.</p>
 *
 */
export class UpdateNotificationRuleCommand extends $Command<
  UpdateNotificationRuleCommandInput,
  UpdateNotificationRuleCommandOutput,
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
  constructor(readonly input: UpdateNotificationRuleCommandInput) {
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
  ): Handler<UpdateNotificationRuleCommandInput, UpdateNotificationRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateNotificationRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodestarNotificationsClient";
    const commandName = "UpdateNotificationRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNotificationRuleRequestFilterSensitiveLog,
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
  private serialize(input: UpdateNotificationRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateNotificationRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNotificationRuleCommandOutput> {
    return de_UpdateNotificationRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
