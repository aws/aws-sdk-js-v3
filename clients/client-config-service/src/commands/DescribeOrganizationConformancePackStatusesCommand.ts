// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeOrganizationConformancePackStatusesRequest,
  DescribeOrganizationConformancePackStatusesResponse,
} from "../models/models_0";
import { DescribeOrganizationConformancePackStatuses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationConformancePackStatusesCommand}.
 */
export interface DescribeOrganizationConformancePackStatusesCommandInput extends DescribeOrganizationConformancePackStatusesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationConformancePackStatusesCommand}.
 */
export interface DescribeOrganizationConformancePackStatusesCommandOutput extends DescribeOrganizationConformancePackStatusesResponse, __MetadataBearer {}

/**
 * Provides organization conformance pack deployment status for an organization.
 *
 * > **Note:**
 * >
 * > The status is not considered successful until organization conformance pack is successfully deployed in all the member accounts with an exception of excluded accounts.
 * >
 * > When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance pack names. They are only applicable, when you request all the organization conformance packs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConformancePackStatusesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConformancePackStatusesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeOrganizationConformancePackStatusesRequest
 *   OrganizationConformancePackNames: [ // OrganizationConformancePackNames
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeOrganizationConformancePackStatusesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationConformancePackStatusesResponse
 * //   OrganizationConformancePackStatuses: [ // OrganizationConformancePackStatuses
 * //     { // OrganizationConformancePackStatus
 * //       OrganizationConformancePackName: "STRING_VALUE", // required
 * //       Status: "CREATE_SUCCESSFUL" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_SUCCESSFUL" || "DELETE_FAILED" || "DELETE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED", // required
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationConformancePackStatusesCommandInput - {@link DescribeOrganizationConformancePackStatusesCommandInput}
 * @returns {@link DescribeOrganizationConformancePackStatusesCommandOutput}
 * @see {@link DescribeOrganizationConformancePackStatusesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConformancePackStatusesCommandOutput} for command's `response` shape.
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
export class DescribeOrganizationConformancePackStatusesCommand extends command<DescribeOrganizationConformancePackStatusesCommandInput, DescribeOrganizationConformancePackStatusesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeOrganizationConformancePackStatuses",
  DescribeOrganizationConformancePackStatuses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOrganizationConformancePackStatusesRequest;
      output: DescribeOrganizationConformancePackStatusesResponse;
    };
    sdk: {
      input: DescribeOrganizationConformancePackStatusesCommandInput;
      output: DescribeOrganizationConformancePackStatusesCommandOutput;
    };
  };
}
