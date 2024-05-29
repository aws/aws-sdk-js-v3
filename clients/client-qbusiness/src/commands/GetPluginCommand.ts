// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPluginRequest, GetPluginResponse, GetPluginResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetPluginCommand, se_GetPluginCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPluginCommand}.
 */
export interface GetPluginCommandInput extends GetPluginRequest {}
/**
 * @public
 *
 * The output of {@link GetPluginCommand}.
 */
export interface GetPluginCommandOutput extends GetPluginResponse, __MetadataBearer {}

/**
 * <p>Gets information about an existing Amazon Q Business plugin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetPluginCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetPluginCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // GetPluginRequest
 *   applicationId: "STRING_VALUE", // required
 *   pluginId: "STRING_VALUE", // required
 * };
 * const command = new GetPluginCommand(input);
 * const response = await client.send(command);
 * // { // GetPluginResponse
 * //   applicationId: "STRING_VALUE",
 * //   pluginId: "STRING_VALUE",
 * //   displayName: "STRING_VALUE",
 * //   type: "SERVICE_NOW" || "SALESFORCE" || "JIRA" || "ZENDESK" || "CUSTOM",
 * //   serverUrl: "STRING_VALUE",
 * //   authConfiguration: { // PluginAuthConfiguration Union: only one key present
 * //     basicAuthConfiguration: { // BasicAuthConfiguration
 * //       secretArn: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //     },
 * //     oAuth2ClientCredentialConfiguration: { // OAuth2ClientCredentialConfiguration
 * //       secretArn: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //     },
 * //     noAuthConfiguration: {},
 * //   },
 * //   customPluginConfiguration: { // CustomPluginConfiguration
 * //     description: "STRING_VALUE", // required
 * //     apiSchemaType: "OPEN_API_V3", // required
 * //     apiSchema: { // APISchema Union: only one key present
 * //       payload: "STRING_VALUE",
 * //       s3: { // S3
 * //         bucket: "STRING_VALUE", // required
 * //         key: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * //   buildStatus: "READY" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
 * //   pluginArn: "STRING_VALUE",
 * //   state: "ENABLED" || "DISABLED",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetPluginCommandInput - {@link GetPluginCommandInput}
 * @returns {@link GetPluginCommandOutput}
 * @see {@link GetPluginCommandInput} for command's `input` shape.
 * @see {@link GetPluginCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
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
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 * @public
 */
export class GetPluginCommand extends $Command
  .classBuilder<
    GetPluginCommandInput,
    GetPluginCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "GetPlugin", {})
  .n("QBusinessClient", "GetPluginCommand")
  .f(void 0, GetPluginResponseFilterSensitiveLog)
  .ser(se_GetPluginCommand)
  .de(de_GetPluginCommand)
  .build() {}
