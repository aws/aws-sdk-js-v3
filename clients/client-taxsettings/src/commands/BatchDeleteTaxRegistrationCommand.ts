// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchDeleteTaxRegistrationRequest,
  BatchDeleteTaxRegistrationResponse,
  BatchDeleteTaxRegistrationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchDeleteTaxRegistrationCommand, se_BatchDeleteTaxRegistrationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteTaxRegistrationCommand}.
 */
export interface BatchDeleteTaxRegistrationCommandInput extends BatchDeleteTaxRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteTaxRegistrationCommand}.
 */
export interface BatchDeleteTaxRegistrationCommandOutput extends BatchDeleteTaxRegistrationResponse, __MetadataBearer {}

/**
 * <p>Deletes tax registration for multiple accounts in batch. This can be used to delete tax
 *       registrations for up to five accounts in one batch. </p>
 *          <note>
 *             <p>This API operation can't be used to delete your tax registration in Brazil. Use the <a href="https://console.aws.amazon.com/billing/home#/paymentpreferences/paymentmethods">Payment preferences</a> page in the Billing and Cost Management console instead.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, BatchDeleteTaxRegistrationCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, BatchDeleteTaxRegistrationCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * const client = new TaxSettingsClient(config);
 * const input = { // BatchDeleteTaxRegistrationRequest
 *   accountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteTaxRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteTaxRegistrationResponse
 * //   errors: [ // BatchDeleteTaxRegistrationErrors // required
 * //     { // BatchDeleteTaxRegistrationError
 * //       accountId: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //       code: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteTaxRegistrationCommandInput - {@link BatchDeleteTaxRegistrationCommandInput}
 * @returns {@link BatchDeleteTaxRegistrationCommandOutput}
 * @see {@link BatchDeleteTaxRegistrationCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteTaxRegistrationCommandOutput} for command's `response` shape.
 * @see {@link TaxSettingsClientResolvedConfig | config} for TaxSettingsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The exception when the input is creating conflict with the given state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception thrown when an unexpected error occurs when processing a request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception when the input doesn't pass validation for at least one of the input
 *       parameters. </p>
 *
 * @throws {@link TaxSettingsServiceException}
 * <p>Base exception class for all service exceptions from TaxSettings service.</p>
 *
 * @public
 */
export class BatchDeleteTaxRegistrationCommand extends $Command
  .classBuilder<
    BatchDeleteTaxRegistrationCommandInput,
    BatchDeleteTaxRegistrationCommandOutput,
    TaxSettingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TaxSettingsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TaxSettings", "BatchDeleteTaxRegistration", {})
  .n("TaxSettingsClient", "BatchDeleteTaxRegistrationCommand")
  .f(void 0, BatchDeleteTaxRegistrationResponseFilterSensitiveLog)
  .ser(se_BatchDeleteTaxRegistrationCommand)
  .de(de_BatchDeleteTaxRegistrationCommand)
  .build() {}
