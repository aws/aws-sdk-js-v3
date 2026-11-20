// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutOrganizationDiscoveryConfigurationRequest,
  PutOrganizationDiscoveryConfigurationResponse,
} from "../models/models_0";
import { PutOrganizationDiscoveryConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutOrganizationDiscoveryConfigurationCommand}.
 */
export interface PutOrganizationDiscoveryConfigurationCommandInput extends PutOrganizationDiscoveryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutOrganizationDiscoveryConfigurationCommand}.
 */
export interface PutOrganizationDiscoveryConfigurationCommandOutput extends PutOrganizationDiscoveryConfigurationResponse, __MetadataBearer {}

/**
 * Creates or updates the organization-wide discovery configuration. This is a singleton
 * per organization. Only the organization management account and registered delegated
 * administrators may call this operation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, PutOrganizationDiscoveryConfigurationCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, PutOrganizationDiscoveryConfigurationCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // PutOrganizationDiscoveryConfigurationRequest
 *   discoverySources: [ // NonEmptyDiscoverySourceList
 *     "API_GATEWAY" || "ELB" || "CLOUDFRONT",
 *   ],
 *   exclusionFilters: { // DiscoveryExclusionFilters
 *     organizationalUnitIds: [ // OrganizationalUnitIdList
 *       "STRING_VALUE",
 *     ],
 *     accountIds: [ // AccountIdList
 *       "STRING_VALUE",
 *     ],
 *     resourceArns: [ // ResourceArnList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   discoveryFilters: { // OrganizationDiscoveryFilters Union: only one key present
 *     exclusionFilters: {
 *       organizationalUnitIds: [
 *         "STRING_VALUE",
 *       ],
 *       accountIds: [
 *         "STRING_VALUE",
 *       ],
 *       resourceArns: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     inclusionFilters: { // DiscoveryInclusionFilters
 *       organizationalUnitIds: [
 *         "STRING_VALUE",
 *       ],
 *       accountIds: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   features: [ // DiscoveryFeatureList
 *     "AI_DISCOVERY",
 *   ],
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutOrganizationDiscoveryConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutOrganizationDiscoveryConfigurationResponse
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
 * @param PutOrganizationDiscoveryConfigurationCommandInput - {@link PutOrganizationDiscoveryConfigurationCommandInput}
 * @returns {@link PutOrganizationDiscoveryConfigurationCommandOutput}
 * @see {@link PutOrganizationDiscoveryConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutOrganizationDiscoveryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The request is not valid. The message identifies the field or value that failed validation.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource, for example because another operation on it is still in progress.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The service encountered an internal error. Try the request again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  The request rate or a service quota was exceeded. Reduce the request rate or the number of resources and try again.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class PutOrganizationDiscoveryConfigurationCommand extends command<PutOrganizationDiscoveryConfigurationCommandInput, PutOrganizationDiscoveryConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutOrganizationDiscoveryConfiguration",
  PutOrganizationDiscoveryConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutOrganizationDiscoveryConfigurationRequest;
      output: PutOrganizationDiscoveryConfigurationResponse;
    };
    sdk: {
      input: PutOrganizationDiscoveryConfigurationCommandInput;
      output: PutOrganizationDiscoveryConfigurationCommandOutput;
    };
  };
}
