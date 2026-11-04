// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeOrganizationConformancePacksRequest,
  DescribeOrganizationConformancePacksResponse,
} from "../models/models_0";
import { DescribeOrganizationConformancePacks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationConformancePacksCommand}.
 */
export interface DescribeOrganizationConformancePacksCommandInput extends DescribeOrganizationConformancePacksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationConformancePacksCommand}.
 */
export interface DescribeOrganizationConformancePacksCommandOutput extends DescribeOrganizationConformancePacksResponse, __MetadataBearer {}

/**
 * Returns a list of organization conformance packs.
 *
 * > **Note:**
 * >
 * > When you specify the limit and the next token, you receive a paginated response.
 * >
 * > Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs.
 * >
 * > *For accounts within an organization*
 * >
 * > If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The `DescribeOrganizationConfigRules` and `DescribeOrganizationConformancePacks` APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConformancePacksCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConformancePacksCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeOrganizationConformancePacksRequest
 *   OrganizationConformancePackNames: [ // OrganizationConformancePackNames
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeOrganizationConformancePacksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationConformancePacksResponse
 * //   OrganizationConformancePacks: [ // OrganizationConformancePacks
 * //     { // OrganizationConformancePack
 * //       OrganizationConformancePackName: "STRING_VALUE", // required
 * //       OrganizationConformancePackArn: "STRING_VALUE", // required
 * //       DeliveryS3Bucket: "STRING_VALUE",
 * //       DeliveryS3KeyPrefix: "STRING_VALUE",
 * //       ConformancePackInputParameters: [ // ConformancePackInputParameters
 * //         { // ConformancePackInputParameter
 * //           ParameterName: "STRING_VALUE", // required
 * //           ParameterValue: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       ExcludedAccounts: [ // ExcludedAccounts
 * //         "STRING_VALUE",
 * //       ],
 * //       LastUpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationConformancePacksCommandInput - {@link DescribeOrganizationConformancePacksCommandInput}
 * @returns {@link DescribeOrganizationConformancePacksCommandOutput}
 * @see {@link DescribeOrganizationConformancePacksCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConformancePacksCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *
 * The specified limit is outside the allowable range.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The specified next token is not valid. Specify the `nextToken` string that was returned in the previous response to get the next page of results.
 *
 * @throws {@link NoSuchOrganizationConformancePackException} (client fault)
 *
 * Config organization conformance pack that you passed in the filter does not exist.
 *
 * For DeleteOrganizationConformancePack, you tried to delete an organization conformance pack that does not exist.
 *
 * @throws {@link OrganizationAccessDeniedException} (client fault)
 *
 * For `PutConfigurationAggregator` API, you can see this exception for the following reasons:
 *
 * - No permission to call `EnableAWSServiceAccess` API
 * - The configuration aggregator cannot be updated because your Amazon Web Services Organization management account or the delegated administrator role changed. Delete this aggregator and create a new one with the current Amazon Web Services Organization.
 * - The configuration aggregator is associated with a previous Amazon Web Services Organization and Config cannot aggregate data with current Amazon Web Services Organization. Delete this aggregator and create a new one with the current Amazon Web Services Organization.
 * - You are not a registered delegated administrator for Config with permissions to call `ListDelegatedAdministrators` API. Ensure that the management account registers delagated administrator for Config service principal name before the delegated administrator creates an aggregator.
 *
 * For all `OrganizationConfigRule` and `OrganizationConformancePack` APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class DescribeOrganizationConformancePacksCommand extends command<DescribeOrganizationConformancePacksCommandInput, DescribeOrganizationConformancePacksCommandOutput>(
  _ep0,
  _mw0,
  "DescribeOrganizationConformancePacks",
  DescribeOrganizationConformancePacks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOrganizationConformancePacksRequest;
      output: DescribeOrganizationConformancePacksResponse;
    };
    sdk: {
      input: DescribeOrganizationConformancePacksCommandInput;
      output: DescribeOrganizationConformancePacksCommandOutput;
    };
  };
}
