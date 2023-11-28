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

import { GetChatControlsConfigurationRequest, GetChatControlsConfigurationResponse } from "../models/models_0";
import {
  de_GetChatControlsConfigurationCommand,
  se_GetChatControlsConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetChatControlsConfigurationCommand}.
 */
export interface GetChatControlsConfigurationCommandInput extends GetChatControlsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetChatControlsConfigurationCommand}.
 */
export interface GetChatControlsConfigurationCommandOutput
  extends GetChatControlsConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about an chat controls configured for an existing Amazon Q
 *             application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetChatControlsConfigurationCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetChatControlsConfigurationCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // GetChatControlsConfigurationRequest
 *   applicationId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetChatControlsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetChatControlsConfigurationResponse
 * //   responseScope: "ENTERPRISE_CONTENT_ONLY" || "EXTENDED_KNOWLEDGE_ENABLED",
 * //   blockedPhrases: { // BlockedPhrasesConfiguration
 * //     blockedPhrases: [ // BlockedPhrases
 * //       "STRING_VALUE",
 * //     ],
 * //     systemMessageOverride: "STRING_VALUE",
 * //   },
 * //   topicConfigurations: [ // TopicConfigurations
 * //     { // TopicConfiguration
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       exampleChatMessages: [ // ExampleChatMessages
 * //         "STRING_VALUE",
 * //       ],
 * //       rules: [ // Rules // required
 * //         { // Rule
 * //           includedUsersAndGroups: { // UsersAndGroups
 * //             userIds: [ // UserIds
 * //               "STRING_VALUE",
 * //             ],
 * //             userGroups: [ // UserGroups
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           excludedUsersAndGroups: {
 * //             userIds: [
 * //               "STRING_VALUE",
 * //             ],
 * //             userGroups: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           ruleType: "CONTENT_BLOCKER_RULE" || "CONTENT_RETRIEVAL_RULE", // required
 * //           ruleConfiguration: { // RuleConfiguration Union: only one key present
 * //             contentBlockerRule: { // ContentBlockerRule
 * //               systemMessageOverride: "STRING_VALUE",
 * //             },
 * //             contentRetrievalRule: { // ContentRetrievalRule
 * //               eligibleDataSources: [ // EligibleDataSources
 * //                 { // EligibleDataSource
 * //                   indexId: "STRING_VALUE",
 * //                   dataSourceId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetChatControlsConfigurationCommandInput - {@link GetChatControlsConfigurationCommandInput}
 * @returns {@link GetChatControlsConfigurationCommandOutput}
 * @see {@link GetChatControlsConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetChatControlsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Make sure you have provided the correct
 *             resource and try again.</p>
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
export class GetChatControlsConfigurationCommand extends $Command<
  GetChatControlsConfigurationCommandInput,
  GetChatControlsConfigurationCommandOutput,
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
  constructor(readonly input: GetChatControlsConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetChatControlsConfigurationCommandInput, GetChatControlsConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetChatControlsConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QBusinessClient";
    const commandName = "GetChatControlsConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ExpertQ",
        operation: "GetChatControlsConfiguration",
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
  private serialize(input: GetChatControlsConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetChatControlsConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetChatControlsConfigurationCommandOutput> {
    return de_GetChatControlsConfigurationCommand(output, context);
  }
}
