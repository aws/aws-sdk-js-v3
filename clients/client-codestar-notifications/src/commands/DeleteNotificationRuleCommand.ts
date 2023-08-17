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
import { DeleteNotificationRuleRequest, DeleteNotificationRuleResult } from "../models/models_0";
import { de_DeleteNotificationRuleCommand, se_DeleteNotificationRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteNotificationRuleCommand}.
 */
export interface DeleteNotificationRuleCommandInput extends DeleteNotificationRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNotificationRuleCommand}.
 */
export interface DeleteNotificationRuleCommandOutput extends DeleteNotificationRuleResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a notification rule for a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, DeleteNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, DeleteNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const input = { // DeleteNotificationRuleRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteNotificationRuleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNotificationRuleResult
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNotificationRuleCommandInput - {@link DeleteNotificationRuleCommandInput}
 * @returns {@link DeleteNotificationRuleCommandOutput}
 * @see {@link DeleteNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>AWS CodeStar Notifications can't complete the request because the resource is being modified by
 *       another process. Wait a few minutes and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>One of the AWS CodeStar Notifications limits has been exceeded. Limits apply to
 *             accounts, notification rules, notifications, resources, and targets. For more
 *             information, see Limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link CodestarNotificationsServiceException}
 * <p>Base exception class for all service exceptions from CodestarNotifications service.</p>
 *
 */
export class DeleteNotificationRuleCommand extends $Command<
  DeleteNotificationRuleCommandInput,
  DeleteNotificationRuleCommandOutput,
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
  constructor(readonly input: DeleteNotificationRuleCommandInput) {
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
  ): Handler<DeleteNotificationRuleCommandInput, DeleteNotificationRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteNotificationRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodestarNotificationsClient";
    const commandName = "DeleteNotificationRuleCommand";
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
  private serialize(input: DeleteNotificationRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteNotificationRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNotificationRuleCommandOutput> {
    return de_DeleteNotificationRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
