// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssetsForLicenseAssetGroupRequest, ListAssetsForLicenseAssetGroupResponse } from "../models/models_0";
import { ListAssetsForLicenseAssetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListAssetsForLicenseAssetGroupCommandOutput extends ListAssetsForLicenseAssetGroupResponse, __MetadataBearer {}

/**
 * Lists assets for a license asset group.
 *
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
export class ListAssetsForLicenseAssetGroupCommand extends command<ListAssetsForLicenseAssetGroupCommandInput, ListAssetsForLicenseAssetGroupCommandOutput>(
  _ep0,
  _mw0,
  "ListAssetsForLicenseAssetGroup",
  ListAssetsForLicenseAssetGroup$
) {
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
