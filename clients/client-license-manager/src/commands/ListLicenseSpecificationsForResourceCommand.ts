// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  ListLicenseSpecificationsForResourceRequest,
  ListLicenseSpecificationsForResourceResponse,
} from "../models/models_0";
import {
  de_ListLicenseSpecificationsForResourceCommand,
  se_ListLicenseSpecificationsForResourceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLicenseSpecificationsForResourceCommand}.
 */
export interface ListLicenseSpecificationsForResourceCommandInput extends ListLicenseSpecificationsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListLicenseSpecificationsForResourceCommand}.
 */
export interface ListLicenseSpecificationsForResourceCommandOutput
  extends ListLicenseSpecificationsForResourceResponse,
    __MetadataBearer {}

/**
 * <p>Describes the license configurations for the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseSpecificationsForResourceCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseSpecificationsForResourceCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // ListLicenseSpecificationsForResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLicenseSpecificationsForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListLicenseSpecificationsForResourceResponse
 * //   LicenseSpecifications: [ // LicenseSpecifications
 * //     { // LicenseSpecification
 * //       LicenseConfigurationArn: "STRING_VALUE", // required
 * //       AmiAssociationScope: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLicenseSpecificationsForResourceCommandInput - {@link ListLicenseSpecificationsForResourceCommandInput}
 * @returns {@link ListLicenseSpecificationsForResourceCommandOutput}
 * @see {@link ListLicenseSpecificationsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListLicenseSpecificationsForResourceCommandOutput} for command's `response` shape.
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
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class ListLicenseSpecificationsForResourceCommand extends $Command
  .classBuilder<
    ListLicenseSpecificationsForResourceCommandInput,
    ListLicenseSpecificationsForResourceCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "ListLicenseSpecificationsForResource", {})
  .n("LicenseManagerClient", "ListLicenseSpecificationsForResourceCommand")
  .f(void 0, void 0)
  .ser(se_ListLicenseSpecificationsForResourceCommand)
  .de(de_ListLicenseSpecificationsForResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLicenseSpecificationsForResourceRequest;
      output: ListLicenseSpecificationsForResourceResponse;
    };
    sdk: {
      input: ListLicenseSpecificationsForResourceCommandInput;
      output: ListLicenseSpecificationsForResourceCommandOutput;
    };
  };
}
