// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetOrganizationDiscoveryConfigurationRequest,
  GetOrganizationDiscoveryConfigurationResponse,
} from "../models/models_0";
import { GetOrganizationDiscoveryConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetOrganizationDiscoveryConfigurationCommand}.
 */
export interface GetOrganizationDiscoveryConfigurationCommandInput extends GetOrganizationDiscoveryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetOrganizationDiscoveryConfigurationCommand}.
 */
export interface GetOrganizationDiscoveryConfigurationCommandOutput extends GetOrganizationDiscoveryConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves the organization-wide discovery configuration. Only the organization management
 * account and registered delegated administrators may call this operation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, GetOrganizationDiscoveryConfigurationCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, GetOrganizationDiscoveryConfigurationCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = {};
 * const command = new GetOrganizationDiscoveryConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationDiscoveryConfigurationResponse
 * //   discoveryConfiguration: { // OrganizationDiscoveryConfigurationData
 * //     arn: "STRING_VALUE", // required
 * //     status: "DISABLED" || "ENABLED" || "UPDATING",
 * //     discoverySources: [ // DiscoverySourceList
 * //       "API_GATEWAY" || "ELB" || "CLOUDFRONT",
 * //     ],
 * //     exclusionFilters: { // DiscoveryExclusionFilters
 * //       organizationalUnitIds: [ // OrganizationalUnitIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       accountIds: [ // AccountIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       resourceArns: [ // ResourceArnList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     discoveryFilters: { // OrganizationDiscoveryFilters Union: only one key present
 * //       exclusionFilters: {
 * //         organizationalUnitIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         accountIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         resourceArns: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       inclusionFilters: { // DiscoveryInclusionFilters
 * //         organizationalUnitIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         accountIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     features: [ // DiscoveryFeatureList
 * //       "AI_DISCOVERY",
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOrganizationDiscoveryConfigurationCommandInput - {@link GetOrganizationDiscoveryConfigurationCommandInput}
 * @returns {@link GetOrganizationDiscoveryConfigurationCommandOutput}
 * @see {@link GetOrganizationDiscoveryConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationDiscoveryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The service encountered an internal error. Try the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist, or you do not have access to it.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class GetOrganizationDiscoveryConfigurationCommand extends command<GetOrganizationDiscoveryConfigurationCommandInput, GetOrganizationDiscoveryConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetOrganizationDiscoveryConfiguration",
  GetOrganizationDiscoveryConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetOrganizationDiscoveryConfigurationResponse;
    };
    sdk: {
      input: GetOrganizationDiscoveryConfigurationCommandInput;
      output: GetOrganizationDiscoveryConfigurationCommandOutput;
    };
  };
}
