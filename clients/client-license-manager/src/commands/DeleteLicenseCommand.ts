// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { DeleteLicenseRequest, DeleteLicenseResponse } from "../models/models_0";
import { de_DeleteLicenseCommand, se_DeleteLicenseCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLicenseCommand}.
 */
export interface DeleteLicenseCommandInput extends DeleteLicenseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLicenseCommand}.
 */
export interface DeleteLicenseCommandOutput extends DeleteLicenseResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // DeleteLicenseRequest
 *   LicenseArn: "STRING_VALUE", // required
 *   SourceVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteLicenseCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLicenseResponse
 * //   Status: "PENDING_DELETE" || "DELETED",
 * //   DeletionDate: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteLicenseCommandInput - {@link DeleteLicenseCommandInput}
 * @returns {@link DeleteLicenseCommandOutput}
 * @see {@link DeleteLicenseCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseCommandOutput} for command's `response` shape.
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
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link RedirectException} (client fault)
 *  <p>This is not the correct Region for the resource. Try again.</p>
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
export class DeleteLicenseCommand extends $Command
  .classBuilder<
    DeleteLicenseCommandInput,
    DeleteLicenseCommandOutput,
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
  .s("AWSLicenseManager", "DeleteLicense", {})
  .n("LicenseManagerClient", "DeleteLicenseCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLicenseCommand)
  .de(de_DeleteLicenseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLicenseRequest;
      output: DeleteLicenseResponse;
    };
    sdk: {
      input: DeleteLicenseCommandInput;
      output: DeleteLicenseCommandOutput;
    };
  };
}
