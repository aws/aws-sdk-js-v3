// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLicenseAssetGroupRequest, CreateLicenseAssetGroupResponse } from "../models/models_0";
import { CreateLicenseAssetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a license asset group.
 *
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
export class CreateLicenseAssetGroupCommand extends command<CreateLicenseAssetGroupCommandInput, CreateLicenseAssetGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateLicenseAssetGroup",
  CreateLicenseAssetGroup$
) {
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
