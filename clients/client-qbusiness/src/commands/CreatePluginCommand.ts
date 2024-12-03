// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePluginRequest, CreatePluginRequestFilterSensitiveLog, CreatePluginResponse } from "../models/models_0";
import { de_CreatePluginCommand, se_CreatePluginCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePluginCommand}.
 */
export interface CreatePluginCommandInput extends CreatePluginRequest {}
/**
 * @public
 *
 * The output of {@link CreatePluginCommand}.
 */
export interface CreatePluginCommandOutput extends CreatePluginResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Q Business plugin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, CreatePluginCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, CreatePluginCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // CreatePluginRequest
 *   applicationId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE", // required
 *   type: "SERVICE_NOW" || "SALESFORCE" || "JIRA" || "ZENDESK" || "CUSTOM" || "QUICKSIGHT" || "SERVICENOW_NOW_PLATFORM" || "JIRA_CLOUD" || "SALESFORCE_CRM" || "ZENDESK_SUITE" || "ATLASSIAN_CONFLUENCE" || "GOOGLE_CALENDAR" || "MICROSOFT_TEAMS" || "MICROSOFT_EXCHANGE" || "PAGERDUTY_ADVANCE" || "SMARTSHEET" || "ASANA", // required
 *   authConfiguration: { // PluginAuthConfiguration Union: only one key present
 *     basicAuthConfiguration: { // BasicAuthConfiguration
 *       secretArn: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *     },
 *     oAuth2ClientCredentialConfiguration: { // OAuth2ClientCredentialConfiguration
 *       secretArn: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *       authorizationUrl: "STRING_VALUE",
 *       tokenUrl: "STRING_VALUE",
 *     },
 *     noAuthConfiguration: {},
 *     idcAuthConfiguration: { // IdcAuthConfiguration
 *       idcApplicationArn: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *     },
 *   },
 *   serverUrl: "STRING_VALUE",
 *   customPluginConfiguration: { // CustomPluginConfiguration
 *     description: "STRING_VALUE", // required
 *     apiSchemaType: "OPEN_API_V3", // required
 *     apiSchema: { // APISchema Union: only one key present
 *       payload: "STRING_VALUE",
 *       s3: { // S3
 *         bucket: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreatePluginCommand(input);
 * const response = await client.send(command);
 * // { // CreatePluginResponse
 * //   pluginId: "STRING_VALUE",
 * //   pluginArn: "STRING_VALUE",
 * //   buildStatus: "READY" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
 * // };
 *
 * ```
 *
 * @param CreatePluginCommandInput - {@link CreatePluginCommandInput}
 * @returns {@link CreatePluginCommandOutput}
 * @see {@link CreatePluginCommandInput} for command's `input` shape.
 * @see {@link CreatePluginCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have
 *             provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q Business service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 * @public
 */
export class CreatePluginCommand extends $Command
  .classBuilder<
    CreatePluginCommandInput,
    CreatePluginCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "CreatePlugin", {})
  .n("QBusinessClient", "CreatePluginCommand")
  .f(CreatePluginRequestFilterSensitiveLog, void 0)
  .ser(se_CreatePluginCommand)
  .de(de_CreatePluginCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePluginRequest;
      output: CreatePluginResponse;
    };
    sdk: {
      input: CreatePluginCommandInput;
      output: CreatePluginCommandOutput;
    };
  };
}
