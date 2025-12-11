// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeActionConnectorRequest, DescribeActionConnectorResponse } from "../models/models_3";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeActionConnector } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeActionConnectorCommand}.
 */
export interface DescribeActionConnectorCommandInput extends DescribeActionConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeActionConnectorCommand}.
 */
export interface DescribeActionConnectorCommandOutput extends DescribeActionConnectorResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about an action connector, including its configuration, authentication settings, enabled actions, and current status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeActionConnectorCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeActionConnectorCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeActionConnectorRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ActionConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DescribeActionConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeActionConnectorResponse
 * //   ActionConnector: { // ActionConnector
 * //     Arn: "STRING_VALUE", // required
 * //     ActionConnectorId: "STRING_VALUE", // required
 * //     Type: "GENERIC_HTTP" || "SERVICENOW_NOW_PLATFORM" || "SALESFORCE_CRM" || "MICROSOFT_OUTLOOK" || "PAGERDUTY_ADVANCE" || "JIRA_CLOUD" || "ATLASSIAN_CONFLUENCE" || "AMAZON_S3" || "AMAZON_BEDROCK_AGENT_RUNTIME" || "AMAZON_BEDROCK_RUNTIME" || "AMAZON_BEDROCK_DATA_AUTOMATION_RUNTIME" || "AMAZON_TEXTRACT" || "AMAZON_COMPREHEND" || "AMAZON_COMPREHEND_MEDICAL" || "MICROSOFT_ONEDRIVE" || "MICROSOFT_SHAREPOINT" || "MICROSOFT_TEAMS" || "SAP_BUSINESSPARTNER" || "SAP_PRODUCTMASTERDATA" || "SAP_PHYSICALINVENTORY" || "SAP_BILLOFMATERIALS" || "SAP_MATERIALSTOCK" || "ZENDESK_SUITE" || "SMARTSHEET" || "SLACK" || "ASANA" || "BAMBOO_HR", // required
 * //     Name: "STRING_VALUE", // required
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //     Error: { // ActionConnectorError
 * //       Message: "STRING_VALUE",
 * //       Type: "INTERNAL_FAILURE",
 * //     },
 * //     Description: "STRING_VALUE",
 * //     AuthenticationConfig: { // ReadAuthConfig
 * //       AuthenticationType: "BASIC" || "API_KEY" || "OAUTH2_CLIENT_CREDENTIALS" || "NONE" || "IAM" || "OAUTH2_AUTHORIZATION_CODE", // required
 * //       AuthenticationMetadata: { // ReadAuthenticationMetadata Union: only one key present
 * //         AuthorizationCodeGrantMetadata: { // ReadAuthorizationCodeGrantMetadata
 * //           BaseEndpoint: "STRING_VALUE", // required
 * //           RedirectUrl: "STRING_VALUE", // required
 * //           ReadAuthorizationCodeGrantCredentialsDetails: { // ReadAuthorizationCodeGrantCredentialsDetails Union: only one key present
 * //             ReadAuthorizationCodeGrantDetails: { // ReadAuthorizationCodeGrantDetails
 * //               ClientId: "STRING_VALUE", // required
 * //               TokenEndpoint: "STRING_VALUE", // required
 * //               AuthorizationEndpoint: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           AuthorizationCodeGrantCredentialsSource: "PLAIN_CREDENTIALS",
 * //         },
 * //         ClientCredentialsGrantMetadata: { // ReadClientCredentialsGrantMetadata
 * //           BaseEndpoint: "STRING_VALUE", // required
 * //           ReadClientCredentialsDetails: { // ReadClientCredentialsDetails Union: only one key present
 * //             ReadClientCredentialsGrantDetails: { // ReadClientCredentialsGrantDetails
 * //               ClientId: "STRING_VALUE", // required
 * //               TokenEndpoint: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           ClientCredentialsSource: "PLAIN_CREDENTIALS",
 * //         },
 * //         BasicAuthConnectionMetadata: { // ReadBasicAuthConnectionMetadata
 * //           BaseEndpoint: "STRING_VALUE", // required
 * //           Username: "STRING_VALUE", // required
 * //         },
 * //         ApiKeyConnectionMetadata: { // ReadAPIKeyConnectionMetadata
 * //           BaseEndpoint: "STRING_VALUE", // required
 * //           Email: "STRING_VALUE",
 * //         },
 * //         NoneConnectionMetadata: { // ReadNoneConnectionMetadata
 * //           BaseEndpoint: "STRING_VALUE", // required
 * //         },
 * //         IamConnectionMetadata: { // ReadIamConnectionMetadata
 * //           RoleArn: "STRING_VALUE", // required
 * //           SourceArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //     EnabledActions: [ // ActionIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     VpcConnectionArn: "STRING_VALUE",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeActionConnectorCommandInput - {@link DescribeActionConnectorCommandInput}
 * @returns {@link DescribeActionConnectorCommandOutput}
 * @see {@link DescribeActionConnectorCommandInput} for command's `input` shape.
 * @see {@link DescribeActionConnectorCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
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
export class DescribeActionConnectorCommand extends $Command
  .classBuilder<
    DescribeActionConnectorCommandInput,
    DescribeActionConnectorCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeActionConnector", {})
  .n("QuickSightClient", "DescribeActionConnectorCommand")
  .sc(DescribeActionConnector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeActionConnectorRequest;
      output: DescribeActionConnectorResponse;
    };
    sdk: {
      input: DescribeActionConnectorCommandInput;
      output: DescribeActionConnectorCommandOutput;
    };
  };
}
