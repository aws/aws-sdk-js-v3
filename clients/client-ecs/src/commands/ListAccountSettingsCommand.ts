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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListAccountSettingsRequest, ListAccountSettingsResponse } from "../models/models_0";
import { de_ListAccountSettingsCommand, se_ListAccountSettingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAccountSettingsCommand}.
 */
export interface ListAccountSettingsCommandInput extends ListAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountSettingsCommand}.
 */
export interface ListAccountSettingsCommandOutput extends ListAccountSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the account settings for a specified principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListAccountSettingsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListAccountSettingsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // ListAccountSettingsRequest
 *   name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization",
 *   value: "STRING_VALUE",
 *   principalArn: "STRING_VALUE",
 *   effectiveSettings: true || false,
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountSettingsResponse
 * //   settings: [ // Settings
 * //     { // Setting
 * //       name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization",
 * //       value: "STRING_VALUE",
 * //       principalArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountSettingsCommandInput - {@link ListAccountSettingsCommandInput}
 * @returns {@link ListAccountSettingsCommandOutput}
 * @see {@link ListAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link ListAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @example To view your effective account settings
 * ```javascript
 * // This example displays the effective account settings for your account.
 * const input = {
 *   "effectiveSettings": true
 * };
 * const command = new ListAccountSettingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "settings": [
 *     {
 *       "name": "containerInstanceLongArnFormat",
 *       "value": "disabled",
 *       "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *     },
 *     {
 *       "name": "serviceLongArnFormat",
 *       "value": "enabled",
 *       "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *     },
 *     {
 *       "name": "taskLongArnFormat",
 *       "value": "disabled",
 *       "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-view-your-account-settings-1549524118170
 * ```
 *
 * @example To view the effective account settings for a specific IAM user or IAM role
 * ```javascript
 * // This example displays the effective account settings for the specified user or role.
 * const input = {
 *   "effectiveSettings": true,
 *   "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 * };
 * const command = new ListAccountSettingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "settings": [
 *     {
 *       "name": "containerInstanceLongArnFormat",
 *       "value": "disabled",
 *       "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *     },
 *     {
 *       "name": "serviceLongArnFormat",
 *       "value": "enabled",
 *       "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *     },
 *     {
 *       "name": "taskLongArnFormat",
 *       "value": "disabled",
 *       "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-view-the-account-settings-for-a-specific-iam-user-or-iam-role-1549524237932
 * ```
 *
 */
export class ListAccountSettingsCommand extends $Command<
  ListAccountSettingsCommandInput,
  ListAccountSettingsCommandOutput,
  ECSClientResolvedConfig
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
  constructor(readonly input: ListAccountSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountSettingsCommandInput, ListAccountSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAccountSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListAccountSettingsCommand";
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
  private serialize(input: ListAccountSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAccountSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountSettingsCommandOutput> {
    return de_ListAccountSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
