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
import type { ListLicenseAssetGroupsRequest, ListLicenseAssetGroupsResponse } from "../models/models_0";
import { ListLicenseAssetGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLicenseAssetGroupsCommand}.
 */
export interface ListLicenseAssetGroupsCommandInput extends ListLicenseAssetGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListLicenseAssetGroupsCommand}.
 */
export interface ListLicenseAssetGroupsCommandOutput extends ListLicenseAssetGroupsResponse, __MetadataBearer {}

/**
 * <p>Lists license asset groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseAssetGroupsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseAssetGroupsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // ListLicenseAssetGroupsRequest
 *   Filters: [ // Filters
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLicenseAssetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListLicenseAssetGroupsResponse
 * //   LicenseAssetGroups: [ // LicenseAssetGroupList
 * //     { // LicenseAssetGroup
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       LicenseAssetGroupConfigurations: [ // LicenseAssetGroupConfigurationList
 * //         { // LicenseAssetGroupConfiguration
 * //           UsageDimension: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AssociatedLicenseAssetRulesetARNs: [ // LicenseAssetRulesetArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Properties: [ // LicenseAssetGroupPropertyList
 * //         { // LicenseAssetGroupProperty
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       LicenseAssetGroupArn: "STRING_VALUE", // required
 * //       Status: "ACTIVE" || "DISABLED" || "DELETED", // required
 * //       StatusMessage: "STRING_VALUE",
 * //       LatestUsageAnalysisTime: new Date("TIMESTAMP"),
 * //       LatestResourceDiscoveryTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLicenseAssetGroupsCommandInput - {@link ListLicenseAssetGroupsCommandInput}
 * @returns {@link ListLicenseAssetGroupsCommandOutput}
 * @see {@link ListLicenseAssetGroupsCommandInput} for command's `input` shape.
 * @see {@link ListLicenseAssetGroupsCommandOutput} for command's `response` shape.
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
export class ListLicenseAssetGroupsCommand extends $Command
  .classBuilder<
    ListLicenseAssetGroupsCommandInput,
    ListLicenseAssetGroupsCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "ListLicenseAssetGroups", {})
  .n("LicenseManagerClient", "ListLicenseAssetGroupsCommand")
  .sc(ListLicenseAssetGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLicenseAssetGroupsRequest;
      output: ListLicenseAssetGroupsResponse;
    };
    sdk: {
      input: ListLicenseAssetGroupsCommandInput;
      output: ListLicenseAssetGroupsCommandOutput;
    };
  };
}
