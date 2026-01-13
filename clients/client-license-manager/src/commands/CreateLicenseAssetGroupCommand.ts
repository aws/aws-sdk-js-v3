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
import type { CreateLicenseAssetGroupRequest, CreateLicenseAssetGroupResponse } from "../models/models_0";
import { CreateLicenseAssetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLicenseAssetGroupCommand}.
 */
export interface CreateLicenseAssetGroupCommandInput extends CreateLicenseAssetGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateLicenseAssetGroupCommand}.
 */
export interface CreateLicenseAssetGroupCommandOutput extends CreateLicenseAssetGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a license asset group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseAssetGroupCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseAssetGroupCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateLicenseAssetGroupRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   LicenseAssetGroupConfigurations: [ // LicenseAssetGroupConfigurationList // required
 *     { // LicenseAssetGroupConfiguration
 *       UsageDimension: "STRING_VALUE",
 *     },
 *   ],
 *   AssociatedLicenseAssetRulesetARNs: [ // LicenseAssetRulesetArnList // required
 *     "STRING_VALUE",
 *   ],
 *   Properties: [ // LicenseAssetGroupPropertyList
 *     { // LicenseAssetGroupProperty
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateLicenseAssetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateLicenseAssetGroupResponse
 * //   LicenseAssetGroupArn: "STRING_VALUE", // required
 * //   Status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateLicenseAssetGroupCommandInput - {@link CreateLicenseAssetGroupCommandInput}
 * @returns {@link CreateLicenseAssetGroupCommandOutput}
 * @see {@link CreateLicenseAssetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseAssetGroupCommandOutput} for command's `response` shape.
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
export class CreateLicenseAssetGroupCommand extends $Command
  .classBuilder<
    CreateLicenseAssetGroupCommandInput,
    CreateLicenseAssetGroupCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "CreateLicenseAssetGroup", {})
  .n("LicenseManagerClient", "CreateLicenseAssetGroupCommand")
  .sc(CreateLicenseAssetGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLicenseAssetGroupRequest;
      output: CreateLicenseAssetGroupResponse;
    };
    sdk: {
      input: CreateLicenseAssetGroupCommandInput;
      output: CreateLicenseAssetGroupCommandOutput;
    };
  };
}
