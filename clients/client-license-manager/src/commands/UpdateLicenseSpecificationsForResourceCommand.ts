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
import type {
  UpdateLicenseSpecificationsForResourceRequest,
  UpdateLicenseSpecificationsForResourceResponse,
} from "../models/models_0";
import { UpdateLicenseSpecificationsForResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLicenseSpecificationsForResourceCommand}.
 */
export interface UpdateLicenseSpecificationsForResourceCommandInput extends UpdateLicenseSpecificationsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLicenseSpecificationsForResourceCommand}.
 */
export interface UpdateLicenseSpecificationsForResourceCommandOutput extends UpdateLicenseSpecificationsForResourceResponse, __MetadataBearer {}

/**
 * <p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p>
 *          <p>You can update the license specifications of AMIs, instances, and hosts.
 *          You cannot update the license specifications for launch templates and CloudFormation templates,
 *          as they send license configurations to the operation that creates the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseSpecificationsForResourceCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseSpecificationsForResourceCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // UpdateLicenseSpecificationsForResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   AddLicenseSpecifications: [ // LicenseSpecifications
 *     { // LicenseSpecification
 *       LicenseConfigurationArn: "STRING_VALUE", // required
 *       AmiAssociationScope: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveLicenseSpecifications: [
 *     {
 *       LicenseConfigurationArn: "STRING_VALUE", // required
 *       AmiAssociationScope: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateLicenseSpecificationsForResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLicenseSpecificationsForResourceCommandInput - {@link UpdateLicenseSpecificationsForResourceCommandInput}
 * @returns {@link UpdateLicenseSpecificationsForResourceCommandOutput}
 * @see {@link UpdateLicenseSpecificationsForResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseSpecificationsForResourceCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Try your request again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>License Manager cannot allocate a license to a resource because of its state. </p>
 *          <p>For example, you cannot allocate a license to an instance in the process of shutting
 *          down.</p>
 *
 * @throws {@link LicenseUsageException} (client fault)
 *  <p>You do not have enough licenses available to support a new resource launch.</p>
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
export class UpdateLicenseSpecificationsForResourceCommand extends $Command
  .classBuilder<
    UpdateLicenseSpecificationsForResourceCommandInput,
    UpdateLicenseSpecificationsForResourceCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "UpdateLicenseSpecificationsForResource", {})
  .n("LicenseManagerClient", "UpdateLicenseSpecificationsForResourceCommand")
  .sc(UpdateLicenseSpecificationsForResource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLicenseSpecificationsForResourceRequest;
      output: {};
    };
    sdk: {
      input: UpdateLicenseSpecificationsForResourceCommandInput;
      output: UpdateLicenseSpecificationsForResourceCommandOutput;
    };
  };
}
