// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateActionConnectorRequest, UpdateActionConnectorResponse } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateActionConnector } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateActionConnectorCommand}.
 */
export interface UpdateActionConnectorCommandInput extends UpdateActionConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateActionConnectorCommand}.
 */
export interface UpdateActionConnectorCommandOutput extends UpdateActionConnectorResponse, __MetadataBearer {}

/**
 * <p>Updates an existing action connector with new configuration details, authentication settings, or enabled actions.
 * 	          You can modify the connector's name, description, authentication configuration, and which actions are enabled. For more information,
 * 	          <a href="https://docs.aws.amazon.com/quicksuite/latest/userguide/quick-action-auth.html">https://docs.aws.amazon.com/quicksuite/latest/userguide/quick-action-auth.html</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateActionConnectorCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateActionConnectorCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateActionConnectorRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ActionConnectorId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   AuthenticationConfig: { // AuthConfig
 *     AuthenticationType: "BASIC" || "API_KEY" || "OAUTH2_CLIENT_CREDENTIALS" || "NONE" || "IAM" || "OAUTH2_AUTHORIZATION_CODE", // required
 *     AuthenticationMetadata: { // AuthenticationMetadata Union: only one key present
 *       AuthorizationCodeGrantMetadata: { // AuthorizationCodeGrantMetadata
 *         BaseEndpoint: "STRING_VALUE", // required
 *         RedirectUrl: "STRING_VALUE", // required
 *         AuthorizationCodeGrantCredentialsSource: "PLAIN_CREDENTIALS",
 *         AuthorizationCodeGrantCredentialsDetails: { // AuthorizationCodeGrantCredentialsDetails Union: only one key present
 *           AuthorizationCodeGrantDetails: { // AuthorizationCodeGrantDetails
 *             ClientId: "STRING_VALUE", // required
 *             ClientSecret: "STRING_VALUE", // required
 *             TokenEndpoint: "STRING_VALUE", // required
 *             AuthorizationEndpoint: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *       ClientCredentialsGrantMetadata: { // ClientCredentialsGrantMetadata
 *         BaseEndpoint: "STRING_VALUE", // required
 *         ClientCredentialsSource: "PLAIN_CREDENTIALS",
 *         ClientCredentialsDetails: { // ClientCredentialsDetails Union: only one key present
 *           ClientCredentialsGrantDetails: { // ClientCredentialsGrantDetails
 *             ClientId: "STRING_VALUE", // required
 *             ClientSecret: "STRING_VALUE", // required
 *             TokenEndpoint: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *       BasicAuthConnectionMetadata: { // BasicAuthConnectionMetadata
 *         BaseEndpoint: "STRING_VALUE", // required
 *         Username: "STRING_VALUE", // required
 *         Password: "STRING_VALUE", // required
 *       },
 *       ApiKeyConnectionMetadata: { // APIKeyConnectionMetadata
 *         BaseEndpoint: "STRING_VALUE", // required
 *         ApiKey: "STRING_VALUE", // required
 *         Email: "STRING_VALUE",
 *       },
 *       NoneConnectionMetadata: { // NoneConnectionMetadata
 *         BaseEndpoint: "STRING_VALUE", // required
 *       },
 *       IamConnectionMetadata: { // IAMConnectionMetadata
 *         RoleArn: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   VpcConnectionArn: "STRING_VALUE",
 * };
 * const command = new UpdateActionConnectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateActionConnectorResponse
 * //   Arn: "STRING_VALUE",
 * //   ActionConnectorId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   UpdateStatus: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateActionConnectorCommandInput - {@link UpdateActionConnectorCommandInput}
 * @returns {@link UpdateActionConnectorCommandOutput}
 * @see {@link UpdateActionConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateActionConnectorCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateActionConnectorCommand extends $Command
  .classBuilder<
    UpdateActionConnectorCommandInput,
    UpdateActionConnectorCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateActionConnector", {})
  .n("QuickSightClient", "UpdateActionConnectorCommand")
  .sc(UpdateActionConnector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateActionConnectorRequest;
      output: UpdateActionConnectorResponse;
    };
    sdk: {
      input: UpdateActionConnectorCommandInput;
      output: UpdateActionConnectorCommandOutput;
    };
  };
}
