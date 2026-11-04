// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetServiceSettingsRequest, GetServiceSettingsResponse } from "../models/models_0";
import { GetServiceSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetServiceSettingsCommand}.
 */
export interface GetServiceSettingsCommandInput extends GetServiceSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceSettingsCommand}.
 */
export interface GetServiceSettingsCommandOutput extends GetServiceSettingsResponse, __MetadataBearer {}

/**
 * Gets the License Manager settings for the current Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetServiceSettingsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetServiceSettingsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = {};
 * const command = new GetServiceSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceSettingsResponse
 * //   S3BucketArn: "STRING_VALUE",
 * //   SnsTopicArn: "STRING_VALUE",
 * //   OrganizationConfiguration: { // OrganizationConfiguration
 * //     EnableIntegration: true || false, // required
 * //   },
 * //   EnableCrossAccountsDiscovery: true || false,
 * //   LicenseManagerResourceShareArn: "STRING_VALUE",
 * //   CrossRegionDiscoveryHomeRegion: "STRING_VALUE",
 * //   CrossRegionDiscoverySourceRegions: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   ServiceStatus: { // ServiceStatus
 * //     CrossAccountDiscovery: { // CrossAccountDiscoveryServiceStatus
 * //       Message: "STRING_VALUE",
 * //     },
 * //     CrossRegionDiscovery: { // CrossRegionDiscoveryStatus
 * //       Message: { // RegionStatusMap
 * //         "<keys>": { // RegionStatus
 * //           Status: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceSettingsCommandInput - {@link GetServiceSettingsCommandInput}
 * @returns {@link GetServiceSettingsCommandOutput}
 * @see {@link GetServiceSettingsCommandInput} for command's `input` shape.
 * @see {@link GetServiceSettingsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to resource denied.
 *
 * @throws {@link AuthorizationException} (client fault)
 *
 * The Amazon Web Services user account does not have permission to perform the action. Check the IAM policy associated with this account.
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *
 * Too many requests have been submitted. Try again after a brief wait.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link LicenseManagerServiceException}
 *
 * Base exception class for all service exceptions from LicenseManager service.
 *
 * @public
 */
export class GetServiceSettingsCommand extends command<GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetServiceSettings",
  GetServiceSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetServiceSettingsResponse;
    };
    sdk: {
      input: GetServiceSettingsCommandInput;
      output: GetServiceSettingsCommandOutput;
    };
  };
}
