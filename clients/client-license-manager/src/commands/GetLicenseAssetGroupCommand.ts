// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLicenseAssetGroupRequest, GetLicenseAssetGroupResponse } from "../models/models_0";
import { GetLicenseAssetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLicenseAssetGroupCommand}.
 */
export interface GetLicenseAssetGroupCommandInput extends GetLicenseAssetGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetLicenseAssetGroupCommand}.
 */
export interface GetLicenseAssetGroupCommandOutput extends GetLicenseAssetGroupResponse, __MetadataBearer {}

/**
 * Gets a license asset group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseAssetGroupCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseAssetGroupCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // GetLicenseAssetGroupRequest
 *   LicenseAssetGroupArn: "STRING_VALUE", // required
 * };
 * const command = new GetLicenseAssetGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetLicenseAssetGroupResponse
 * //   LicenseAssetGroup: { // LicenseAssetGroup
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     LicenseAssetGroupConfigurations: [ // LicenseAssetGroupConfigurationList
 * //       { // LicenseAssetGroupConfiguration
 * //         UsageDimension: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AssociatedLicenseAssetRulesetARNs: [ // LicenseAssetRulesetArnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     Properties: [ // LicenseAssetGroupPropertyList
 * //       { // LicenseAssetGroupProperty
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     LicenseAssetGroupArn: "STRING_VALUE", // required
 * //     Status: "ACTIVE" || "DISABLED" || "DELETED", // required
 * //     StatusMessage: "STRING_VALUE",
 * //     LatestUsageAnalysisTime: new Date("TIMESTAMP"),
 * //     LatestResourceDiscoveryTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLicenseAssetGroupCommandInput - {@link GetLicenseAssetGroupCommandInput}
 * @returns {@link GetLicenseAssetGroupCommandOutput}
 * @see {@link GetLicenseAssetGroupCommandInput} for command's `input` shape.
 * @see {@link GetLicenseAssetGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *
 * Too many requests have been submitted. Try again after a brief wait.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The provided input is not valid. Try your request again.
 *
 * @throws {@link LicenseManagerServiceException}
 *
 * Base exception class for all service exceptions from LicenseManager service.
 *
 * @public
 */
export class GetLicenseAssetGroupCommand extends command<GetLicenseAssetGroupCommandInput, GetLicenseAssetGroupCommandOutput>(
  _ep0,
  _mw0,
  "GetLicenseAssetGroup",
  GetLicenseAssetGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLicenseAssetGroupRequest;
      output: GetLicenseAssetGroupResponse;
    };
    sdk: {
      input: GetLicenseAssetGroupCommandInput;
      output: GetLicenseAssetGroupCommandOutput;
    };
  };
}
