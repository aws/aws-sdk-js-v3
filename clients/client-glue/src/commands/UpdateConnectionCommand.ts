// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateConnectionRequest, UpdateConnectionResponse } from "../models/models_2";
import { de_UpdateConnectionCommand, se_UpdateConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectionCommand}.
 */
export interface UpdateConnectionCommandInput extends UpdateConnectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectionCommand}.
 */
export interface UpdateConnectionCommandOutput extends UpdateConnectionResponse, __MetadataBearer {}

/**
 * <p>Updates a connection definition in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateConnectionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateConnectionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // UpdateConnectionRequest
 *   CatalogId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   ConnectionInput: { // ConnectionInput
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     ConnectionType: "JDBC" || "SFTP" || "MONGODB" || "KAFKA" || "NETWORK" || "MARKETPLACE" || "CUSTOM" || "SALESFORCE", // required
 *     MatchCriteria: [ // MatchCriteria
 *       "STRING_VALUE",
 *     ],
 *     ConnectionProperties: { // ConnectionProperties // required
 *       "<keys>": "STRING_VALUE",
 *     },
 *     PhysicalConnectionRequirements: { // PhysicalConnectionRequirements
 *       SubnetId: "STRING_VALUE",
 *       SecurityGroupIdList: [ // SecurityGroupIdList
 *         "STRING_VALUE",
 *       ],
 *       AvailabilityZone: "STRING_VALUE",
 *     },
 *     AuthenticationConfiguration: { // AuthenticationConfigurationInput
 *       AuthenticationType: "BASIC" || "OAUTH2" || "CUSTOM",
 *       SecretArn: "STRING_VALUE",
 *       OAuth2Properties: { // OAuth2PropertiesInput
 *         OAuth2GrantType: "AUTHORIZATION_CODE" || "CLIENT_CREDENTIALS" || "JWT_BEARER",
 *         OAuth2ClientApplication: { // OAuth2ClientApplication
 *           UserManagedClientApplicationClientId: "STRING_VALUE",
 *           AWSManagedClientApplicationReference: "STRING_VALUE",
 *         },
 *         TokenUrl: "STRING_VALUE",
 *         TokenUrlParametersMap: { // TokenUrlParametersMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         AuthorizationCodeProperties: { // AuthorizationCodeProperties
 *           AuthorizationCode: "STRING_VALUE",
 *           RedirectUri: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     ValidateCredentials: true || false,
 *   },
 * };
 * const command = new UpdateConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConnectionCommandInput - {@link UpdateConnectionCommandInput}
 * @returns {@link UpdateConnectionCommandOutput}
 * @see {@link UpdateConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class UpdateConnectionCommand extends $Command
  .classBuilder<
    UpdateConnectionCommandInput,
    UpdateConnectionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "UpdateConnection", {})
  .n("GlueClient", "UpdateConnectionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConnectionCommand)
  .de(de_UpdateConnectionCommand)
  .build() {}
