// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePluginRequest, UpdatePluginRequestFilterSensitiveLog, UpdatePluginResponse } from "../models/models_0";
import { de_UpdatePluginCommand, se_UpdatePluginCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePluginCommand}.
 */
export interface UpdatePluginCommandInput extends UpdatePluginRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePluginCommand}.
 */
export interface UpdatePluginCommandOutput extends UpdatePluginResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon Q Business plugin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, UpdatePluginCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, UpdatePluginCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // UpdatePluginRequest
 *   applicationId: "STRING_VALUE", // required
 *   pluginId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   state: "ENABLED" || "DISABLED",
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
 * };
 * const command = new UpdatePluginCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePluginCommandInput - {@link UpdatePluginCommandInput}
 * @returns {@link UpdatePluginCommandOutput}
 * @see {@link UpdatePluginCommandInput} for command's `input` shape.
 * @see {@link UpdatePluginCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q Business service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class UpdatePluginCommand extends $Command
  .classBuilder<
    UpdatePluginCommandInput,
    UpdatePluginCommandOutput,
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
  .s("ExpertQ", "UpdatePlugin", {})
  .n("QBusinessClient", "UpdatePluginCommand")
  .f(UpdatePluginRequestFilterSensitiveLog, void 0)
  .ser(se_UpdatePluginCommand)
  .de(de_UpdatePluginCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePluginRequest;
      output: {};
    };
    sdk: {
      input: UpdatePluginCommandInput;
      output: UpdatePluginCommandOutput;
    };
  };
}
