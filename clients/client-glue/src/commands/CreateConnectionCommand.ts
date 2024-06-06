// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateConnectionRequest, CreateConnectionResponse } from "../models/models_1";
import { de_CreateConnectionCommand, se_CreateConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandInput extends CreateConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandOutput extends CreateConnectionResponse, __MetadataBearer {}

/**
 * <p>Creates a connection definition in the Data Catalog.</p>
 *          <p>Connections used for creating federated resources require the IAM <code>glue:PassConnection</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateConnectionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateConnectionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateConnectionRequest
 *   CatalogId: "STRING_VALUE",
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
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectionResponse
 * //   CreateConnectionStatus: "READY" || "IN_PROGRESS" || "FAILED",
 * // };
 *
 * ```
 *
 * @param CreateConnectionCommandInput - {@link CreateConnectionCommandInput}
 * @returns {@link CreateConnectionCommandOutput}
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class CreateConnectionCommand extends $Command
  .classBuilder<
    CreateConnectionCommandInput,
    CreateConnectionCommandOutput,
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
  .s("AWSGlue", "CreateConnection", {})
  .n("GlueClient", "CreateConnectionCommand")
  .f(void 0, void 0)
  .ser(se_CreateConnectionCommand)
  .de(de_CreateConnectionCommand)
  .build() {}
