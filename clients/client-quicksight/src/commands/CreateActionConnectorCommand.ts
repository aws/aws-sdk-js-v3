// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateActionConnectorRequest, CreateActionConnectorResponse } from "../models/models_3";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateActionConnector } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateActionConnectorCommand}.
 */
export interface CreateActionConnectorCommandInput extends CreateActionConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateActionConnectorCommand}.
 */
export interface CreateActionConnectorCommandOutput extends CreateActionConnectorResponse, __MetadataBearer {}

/**
 * <p>Creates an action connector that enables Amazon Quick Sight to connect to external services and perform actions.
 * 	          Action connectors support various authentication methods and can be configured with specific actions from supported connector types
 * 	          like Amazon S3, Salesforce, JIRA.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateActionConnectorCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateActionConnectorCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateActionConnectorRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ActionConnectorId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Type: "GENERIC_HTTP" || "SERVICENOW_NOW_PLATFORM" || "SALESFORCE_CRM" || "MICROSOFT_OUTLOOK" || "PAGERDUTY_ADVANCE" || "JIRA_CLOUD" || "ATLASSIAN_CONFLUENCE" || "AMAZON_S3" || "AMAZON_BEDROCK_AGENT_RUNTIME" || "AMAZON_BEDROCK_RUNTIME" || "AMAZON_BEDROCK_DATA_AUTOMATION_RUNTIME" || "AMAZON_TEXTRACT" || "AMAZON_COMPREHEND" || "AMAZON_COMPREHEND_MEDICAL" || "MICROSOFT_ONEDRIVE" || "MICROSOFT_SHAREPOINT" || "MICROSOFT_TEAMS" || "SAP_BUSINESSPARTNER" || "SAP_PRODUCTMASTERDATA" || "SAP_PHYSICALINVENTORY" || "SAP_BILLOFMATERIALS" || "SAP_MATERIALSTOCK" || "ZENDESK_SUITE" || "SMARTSHEET" || "SLACK" || "ASANA" || "BAMBOO_HR", // required
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
 *   Permissions: [ // ResourcePermissionList
 *     { // ResourcePermission
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // ActionList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   VpcConnectionArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateActionConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateActionConnectorResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationStatus: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //   ActionConnectorId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateActionConnectorCommandInput - {@link CreateActionConnectorCommandInput}
 * @returns {@link CreateActionConnectorCommandOutput}
 * @see {@link CreateActionConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateActionConnectorCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
export class CreateActionConnectorCommand extends $Command
  .classBuilder<
    CreateActionConnectorCommandInput,
    CreateActionConnectorCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "CreateActionConnector", {})
  .n("QuickSightClient", "CreateActionConnectorCommand")
  .sc(CreateActionConnector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateActionConnectorRequest;
      output: CreateActionConnectorResponse;
    };
    sdk: {
      input: CreateActionConnectorCommandInput;
      output: CreateActionConnectorCommandOutput;
    };
  };
}
