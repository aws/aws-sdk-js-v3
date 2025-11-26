// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetOrganizationConformancePackDetailedStatusRequest,
  GetOrganizationConformancePackDetailedStatusResponse,
} from "../models/models_0";
import { GetOrganizationConformancePackDetailedStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOrganizationConformancePackDetailedStatusCommand}.
 */
export interface GetOrganizationConformancePackDetailedStatusCommandInput
  extends GetOrganizationConformancePackDetailedStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetOrganizationConformancePackDetailedStatusCommand}.
 */
export interface GetOrganizationConformancePackDetailedStatusCommandOutput
  extends GetOrganizationConformancePackDetailedStatusResponse,
    __MetadataBearer {}

/**
 * <p>Returns detailed status for each member account within an organization for a given organization conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetOrganizationConformancePackDetailedStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetOrganizationConformancePackDetailedStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // GetOrganizationConformancePackDetailedStatusRequest
 *   OrganizationConformancePackName: "STRING_VALUE", // required
 *   Filters: { // OrganizationResourceDetailedStatusFilters
 *     AccountId: "STRING_VALUE",
 *     Status: "CREATE_SUCCESSFUL" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_SUCCESSFUL" || "DELETE_FAILED" || "DELETE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED",
 *   },
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetOrganizationConformancePackDetailedStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationConformancePackDetailedStatusResponse
 * //   OrganizationConformancePackDetailedStatuses: [ // OrganizationConformancePackDetailedStatuses
 * //     { // OrganizationConformancePackDetailedStatus
 * //       AccountId: "STRING_VALUE", // required
 * //       ConformancePackName: "STRING_VALUE", // required
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
 * @param GetOrganizationConformancePackDetailedStatusCommandInput - {@link GetOrganizationConformancePackDetailedStatusCommandInput}
 * @returns {@link GetOrganizationConformancePackDetailedStatusCommandOutput}
 * @see {@link GetOrganizationConformancePackDetailedStatusCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationConformancePackDetailedStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link NoSuchOrganizationConformancePackException} (client fault)
 *  <p>Config organization conformance pack that you passed in the filter does not exist.</p>
 *          <p>For DeleteOrganizationConformancePack, you tried to delete an organization conformance pack that does not exist.</p>
 *
 * @throws {@link OrganizationAccessDeniedException} (client fault)
 *  <p>For <code>PutConfigurationAggregator</code> API, you can see this exception for the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>No permission to call <code>EnableAWSServiceAccess</code> API</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator cannot be updated because your Amazon Web Services Organization management account or the delegated administrator role changed.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator is associated with a previous Amazon Web Services Organization and Config cannot aggregate data with current Amazon Web Services Organization.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>You are not a registered delegated administrator for Config with permissions to call <code>ListDelegatedAdministrators</code> API.
 * 			Ensure that the management account registers delagated administrator for Config service principal name before the delegated administrator creates an aggregator.</p>
 *             </li>
 *          </ul>
 *          <p>For all <code>OrganizationConfigRule</code> and <code>OrganizationConformancePack</code> APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class GetOrganizationConformancePackDetailedStatusCommand extends $Command
  .classBuilder<
    GetOrganizationConformancePackDetailedStatusCommandInput,
    GetOrganizationConformancePackDetailedStatusCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "GetOrganizationConformancePackDetailedStatus", {})
  .n("ConfigServiceClient", "GetOrganizationConformancePackDetailedStatusCommand")
  .sc(GetOrganizationConformancePackDetailedStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOrganizationConformancePackDetailedStatusRequest;
      output: GetOrganizationConformancePackDetailedStatusResponse;
    };
    sdk: {
      input: GetOrganizationConformancePackDetailedStatusCommandInput;
      output: GetOrganizationConformancePackDetailedStatusCommandOutput;
    };
  };
}
