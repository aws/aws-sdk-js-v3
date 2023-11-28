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

import { UpdateChatControlsConfigurationRequest, UpdateChatControlsConfigurationResponse } from "../models/models_0";
import {
  de_UpdateChatControlsConfigurationCommand,
  se_UpdateChatControlsConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateChatControlsConfigurationCommand}.
 */
export interface UpdateChatControlsConfigurationCommandInput extends UpdateChatControlsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChatControlsConfigurationCommand}.
 */
export interface UpdateChatControlsConfigurationCommandOutput
  extends UpdateChatControlsConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates an set of chat controls configured for an existing Amazon Q
 *             application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, UpdateChatControlsConfigurationCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, UpdateChatControlsConfigurationCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // UpdateChatControlsConfigurationRequest
 *   applicationId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   responseScope: "ENTERPRISE_CONTENT_ONLY" || "EXTENDED_KNOWLEDGE_ENABLED",
 *   blockedPhrasesConfigurationUpdate: { // BlockedPhrasesConfigurationUpdate
 *     blockedPhrasesToCreateOrUpdate: [ // BlockedPhrases
 *       "STRING_VALUE",
 *     ],
 *     blockedPhrasesToDelete: [
 *       "STRING_VALUE",
 *     ],
 *     systemMessageOverride: "STRING_VALUE",
 *   },
 *   topicConfigurationsToCreateOrUpdate: [ // TopicConfigurations
 *     { // TopicConfiguration
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       exampleChatMessages: [ // ExampleChatMessages
 *         "STRING_VALUE",
 *       ],
 *       rules: [ // Rules // required
 *         { // Rule
 *           includedUsersAndGroups: { // UsersAndGroups
 *             userIds: [ // UserIds
 *               "STRING_VALUE",
 *             ],
 *             userGroups: [ // UserGroups
 *               "STRING_VALUE",
 *             ],
 *           },
 *           excludedUsersAndGroups: {
 *             userIds: [
 *               "STRING_VALUE",
 *             ],
 *             userGroups: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           ruleType: "CONTENT_BLOCKER_RULE" || "CONTENT_RETRIEVAL_RULE", // required
 *           ruleConfiguration: { // RuleConfiguration Union: only one key present
 *             contentBlockerRule: { // ContentBlockerRule
 *               systemMessageOverride: "STRING_VALUE",
 *             },
 *             contentRetrievalRule: { // ContentRetrievalRule
 *               eligibleDataSources: [ // EligibleDataSources
 *                 { // EligibleDataSource
 *                   indexId: "STRING_VALUE",
 *                   dataSourceId: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           },
 *         },
 *       ],
 *     },
 *   ],
 *   topicConfigurationsToDelete: [
 *     {
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       exampleChatMessages: [
 *         "STRING_VALUE",
 *       ],
 *       rules: [ // required
 *         {
 *           includedUsersAndGroups: {
 *             userIds: [
 *               "STRING_VALUE",
 *             ],
 *             userGroups: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           excludedUsersAndGroups: {
 *             userIds: [
 *               "STRING_VALUE",
 *             ],
 *             userGroups: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           ruleType: "CONTENT_BLOCKER_RULE" || "CONTENT_RETRIEVAL_RULE", // required
 *           ruleConfiguration: {//  Union: only one key present
 *             contentBlockerRule: {
 *               systemMessageOverride: "STRING_VALUE",
 *             },
 *             contentRetrievalRule: {
 *               eligibleDataSources: [
 *                 {
 *                   indexId: "STRING_VALUE",
 *                   dataSourceId: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           },
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateChatControlsConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateChatControlsConfigurationCommandInput - {@link UpdateChatControlsConfigurationCommandInput}
 * @returns {@link UpdateChatControlsConfigurationCommandOutput}
 * @see {@link UpdateChatControlsConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateChatControlsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistences with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Make sure you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 */
export class UpdateChatControlsConfigurationCommand extends $Command<
  UpdateChatControlsConfigurationCommandInput,
  UpdateChatControlsConfigurationCommandOutput,
  QBusinessClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateChatControlsConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateChatControlsConfigurationCommandInput, UpdateChatControlsConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateChatControlsConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QBusinessClient";
    const commandName = "UpdateChatControlsConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ExpertQ",
        operation: "UpdateChatControlsConfiguration",
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
  private serialize(
    input: UpdateChatControlsConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateChatControlsConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateChatControlsConfigurationCommandOutput> {
    return de_UpdateChatControlsConfigurationCommand(output, context);
  }
}
