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
import { DeleteAccountSettingRequest, DeleteAccountSettingResponse } from "../models/models_0";
import { de_DeleteAccountSettingCommand, se_DeleteAccountSettingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccountSettingCommand}.
 */
export interface DeleteAccountSettingCommandInput extends DeleteAccountSettingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountSettingCommand}.
 */
export interface DeleteAccountSettingCommandOutput extends DeleteAccountSettingResponse, __MetadataBearer {}

/**
 * @public
 * <p>Disables an account setting for a specified  user, role, or the root user for
 * 			an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteAccountSettingCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteAccountSettingCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DeleteAccountSettingRequest
 *   name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization", // required
 *   principalArn: "STRING_VALUE",
 * };
 * const command = new DeleteAccountSettingCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccountSettingResponse
 * //   setting: { // Setting
 * //     name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization",
 * //     value: "STRING_VALUE",
 * //     principalArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteAccountSettingCommandInput - {@link DeleteAccountSettingCommandInput}
 * @returns {@link DeleteAccountSettingCommandOutput}
 * @see {@link DeleteAccountSettingCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountSettingCommandOutput} for command's `response` shape.
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
 * @example To delete your account setting
 * ```javascript
 * // This example deletes the account setting for your user for the specified resource type.
 * const input = {
 *   "name": "serviceLongArnFormat"
 * };
 * const command = new DeleteAccountSettingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "setting": {
 *     "name": "serviceLongArnFormat",
 *     "value": "enabled",
 *     "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *   }
 * }
 * *\/
 * // example id: to-delete-the-account-setting-for-your-user-account-1549524548115
 * ```
 *
 * @example To delete the account settings for a specific IAM user or IAM role
 * ```javascript
 * // This example deletes the account setting for a specific IAM user or IAM role for the specified resource type. Only the root user can view or modify the account settings for another user.
 * const input = {
 *   "name": "containerInstanceLongArnFormat",
 *   "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 * };
 * const command = new DeleteAccountSettingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "setting": {
 *     "name": "containerInstanceLongArnFormat",
 *     "value": "enabled",
 *     "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *   }
 * }
 * *\/
 * // example id: to-delete-the-account-setting-for-a-specific-iam-user-or-iam-role-1549524612917
 * ```
 *
 */
export class DeleteAccountSettingCommand extends $Command<
  DeleteAccountSettingCommandInput,
  DeleteAccountSettingCommandOutput,
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
  constructor(readonly input: DeleteAccountSettingCommandInput) {
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
  ): Handler<DeleteAccountSettingCommandInput, DeleteAccountSettingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAccountSettingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DeleteAccountSettingCommand";
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
  private serialize(input: DeleteAccountSettingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteAccountSettingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAccountSettingCommandOutput> {
    return de_DeleteAccountSettingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
