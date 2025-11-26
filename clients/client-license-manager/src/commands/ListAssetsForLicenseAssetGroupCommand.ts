// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LicenseManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerClient";
import type { ListAssetsForLicenseAssetGroupRequest, ListAssetsForLicenseAssetGroupResponse } from "../models/models_0";
import { ListAssetsForLicenseAssetGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssetsForLicenseAssetGroupCommand}.
 */
export interface ListAssetsForLicenseAssetGroupCommandInput extends ListAssetsForLicenseAssetGroupRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetsForLicenseAssetGroupCommand}.
 */
export interface ListAssetsForLicenseAssetGroupCommandOutput
  extends ListAssetsForLicenseAssetGroupResponse,
    __MetadataBearer {}

/**
 * <p>Lists assets for a license asset group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListAssetsForLicenseAssetGroupCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListAssetsForLicenseAssetGroupCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // ListAssetsForLicenseAssetGroupRequest
 *   LicenseAssetGroupArn: "STRING_VALUE", // required
 *   AssetType: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssetsForLicenseAssetGroupCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetsForLicenseAssetGroupResponse
 * //   Assets: [ // AssetList
 * //     { // Asset
 * //       AssetArn: "STRING_VALUE",
 * //       LatestAssetDiscoveryTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetsForLicenseAssetGroupCommandInput - {@link ListAssetsForLicenseAssetGroupCommandInput}
 * @returns {@link ListAssetsForLicenseAssetGroupCommandOutput}
 * @see {@link ListAssetsForLicenseAssetGroupCommandInput} for command's `input` shape.
 * @see {@link ListAssetsForLicenseAssetGroupCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class ListAssetsForLicenseAssetGroupCommand extends $Command
  .classBuilder<
    ListAssetsForLicenseAssetGroupCommandInput,
    ListAssetsForLicenseAssetGroupCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "ListAssetsForLicenseAssetGroup", {})
  .n("LicenseManagerClient", "ListAssetsForLicenseAssetGroupCommand")
  .sc(ListAssetsForLicenseAssetGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetsForLicenseAssetGroupRequest;
      output: ListAssetsForLicenseAssetGroupResponse;
    };
    sdk: {
      input: ListAssetsForLicenseAssetGroupCommandInput;
      output: ListAssetsForLicenseAssetGroupCommandOutput;
    };
  };
}
