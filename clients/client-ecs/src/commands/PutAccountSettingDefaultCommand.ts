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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { PutAccountSettingDefaultRequest, PutAccountSettingDefaultResponse } from "../models/models_0";
import { de_PutAccountSettingDefaultCommand, se_PutAccountSettingDefaultCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutAccountSettingDefaultCommand}.
 */
export interface PutAccountSettingDefaultCommandInput extends PutAccountSettingDefaultRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountSettingDefaultCommand}.
 */
export interface PutAccountSettingDefaultCommandOutput extends PutAccountSettingDefaultResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies an account setting for all users on an account for whom no individual
 * 			account setting has been specified. Account settings are set on a per-Region
 * 			basis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutAccountSettingDefaultCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutAccountSettingDefaultCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // PutAccountSettingDefaultRequest
 *   name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization" || "fargateTaskRetirementWaitPeriod", // required
 *   value: "STRING_VALUE", // required
 * };
 * const command = new PutAccountSettingDefaultCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountSettingDefaultResponse
 * //   setting: { // Setting
 * //     name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization" || "fargateTaskRetirementWaitPeriod",
 * //     value: "STRING_VALUE",
 * //     principalArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAccountSettingDefaultCommandInput - {@link PutAccountSettingDefaultCommandInput}
 * @returns {@link PutAccountSettingDefaultCommandOutput}
 * @see {@link PutAccountSettingDefaultCommandInput} for command's `input` shape.
 * @see {@link PutAccountSettingDefaultCommandOutput} for command's `response` shape.
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
 * @example To modify the default account settings for all IAM users or roles on an account
 * ```javascript
 * // This example modifies the default account setting for the specified resource for all IAM users or roles on an account. These changes apply to the entire AWS account, unless an IAM user or role explicitly overrides these settings for themselves.
 * const input = {
 *   "name": "serviceLongArnFormat",
 *   "value": "enabled"
 * };
 * const command = new PutAccountSettingDefaultCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "setting": {
 *     "name": "serviceLongArnFormat",
 *     "value": "enabled",
 *     "principalArn": "arn:aws:iam::<aws_account_id>:root"
 *   }
 * }
 * *\/
 * // example id: to-modify-the-default-account-settings-for-all-iam-users-or-roles-on-your-account-1549523794603
 * ```
 *
 */
export class PutAccountSettingDefaultCommand extends $Command<
  PutAccountSettingDefaultCommandInput,
  PutAccountSettingDefaultCommandOutput,
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
  constructor(readonly input: PutAccountSettingDefaultCommandInput) {
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
  ): Handler<PutAccountSettingDefaultCommandInput, PutAccountSettingDefaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAccountSettingDefaultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "PutAccountSettingDefaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "PutAccountSettingDefault",
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
  private serialize(input: PutAccountSettingDefaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutAccountSettingDefaultCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccountSettingDefaultCommandOutput> {
    return de_PutAccountSettingDefaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
