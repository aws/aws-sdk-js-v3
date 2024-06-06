// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { CreateGrantVersionRequest, CreateGrantVersionResponse } from "../models/models_0";
import { de_CreateGrantVersionCommand, se_CreateGrantVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGrantVersionCommand}.
 */
export interface CreateGrantVersionCommandInput extends CreateGrantVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateGrantVersionCommand}.
 */
export interface CreateGrantVersionCommandOutput extends CreateGrantVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a new version of the specified grant. For more information, see
 *          <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateGrantVersionCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateGrantVersionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateGrantVersionRequest
 *   ClientToken: "STRING_VALUE", // required
 *   GrantArn: "STRING_VALUE", // required
 *   GrantName: "STRING_VALUE",
 *   AllowedOperations: [ // AllowedOperationList
 *     "CreateGrant" || "CheckoutLicense" || "CheckoutBorrowLicense" || "CheckInLicense" || "ExtendConsumptionLicense" || "ListPurchasedLicenses" || "CreateToken",
 *   ],
 *   Status: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "PENDING_DELETE" || "DISABLED" || "WORKFLOW_COMPLETED",
 *   StatusReason: "STRING_VALUE",
 *   SourceVersion: "STRING_VALUE",
 *   Options: { // Options
 *     ActivationOverrideBehavior: "DISTRIBUTED_GRANTS_ONLY" || "ALL_GRANTS_PERMITTED_BY_ISSUER",
 *   },
 * };
 * const command = new CreateGrantVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateGrantVersionResponse
 * //   GrantArn: "STRING_VALUE",
 * //   Status: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "PENDING_DELETE" || "DISABLED" || "WORKFLOW_COMPLETED",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGrantVersionCommandInput - {@link CreateGrantVersionCommandInput}
 * @returns {@link CreateGrantVersionCommandOutput}
 * @see {@link CreateGrantVersionCommandInput} for command's `input` shape.
 * @see {@link CreateGrantVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
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
 * @public
 */
export class CreateGrantVersionCommand extends $Command
  .classBuilder<
    CreateGrantVersionCommandInput,
    CreateGrantVersionCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "CreateGrantVersion", {})
  .n("LicenseManagerClient", "CreateGrantVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateGrantVersionCommand)
  .de(de_CreateGrantVersionCommand)
  .build() {}
