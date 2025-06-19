// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetParametersForExportInput,
  GetParametersForExportOutput,
  GetParametersForExportOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { de_GetParametersForExportCommand, se_GetParametersForExportCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetParametersForExportCommand}.
 */
export interface GetParametersForExportCommandInput extends GetParametersForExportInput {}
/**
 * @public
 *
 * The output of {@link GetParametersForExportCommand}.
 */
export interface GetParametersForExportCommandOutput extends GetParametersForExportOutput, __MetadataBearer {}

/**
 * <p>Gets the export token and the signing key certificate to initiate a TR-34 key export from Amazon Web Services Payment Cryptography.</p> <p>The signing key certificate signs the wrapped key under export within the TR-34 key payload. The export token and signing key certificate must be in place and operational before calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ExportKey.html">ExportKey</a>. The export token expires in 30 days. You can use the same export token to export multiple keys from your service account.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ExportKey.html">ExportKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html">GetParametersForImport</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, GetParametersForExportCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, GetParametersForExportCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * const client = new PaymentCryptographyClient(config);
 * const input = { // GetParametersForExportInput
 *   KeyMaterialType: "STRING_VALUE", // required
 *   SigningKeyAlgorithm: "STRING_VALUE", // required
 * };
 * const command = new GetParametersForExportCommand(input);
 * const response = await client.send(command);
 * // { // GetParametersForExportOutput
 * //   SigningKeyCertificate: "STRING_VALUE", // required
 * //   SigningKeyCertificateChain: "STRING_VALUE", // required
 * //   SigningKeyAlgorithm: "STRING_VALUE", // required
 * //   ExportToken: "STRING_VALUE", // required
 * //   ParametersValidUntilTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetParametersForExportCommandInput - {@link GetParametersForExportCommandInput}
 * @returns {@link GetParametersForExportCommandOutput}
 * @see {@link GetParametersForExportCommandInput} for command's `input` shape.
 * @see {@link GetParametersForExportCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyClientResolvedConfig | config} for PaymentCryptographyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request can cause an inconsistent state for the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to an invalid resource error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p>
 *
 * @throws {@link PaymentCryptographyServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptography service.</p>
 *
 *
 * @public
 */
export class GetParametersForExportCommand extends $Command
  .classBuilder<
    GetParametersForExportCommandInput,
    GetParametersForExportCommandOutput,
    PaymentCryptographyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PaymentCryptographyControlPlane", "GetParametersForExport", {})
  .n("PaymentCryptographyClient", "GetParametersForExportCommand")
  .f(void 0, GetParametersForExportOutputFilterSensitiveLog)
  .ser(se_GetParametersForExportCommand)
  .de(de_GetParametersForExportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetParametersForExportInput;
      output: GetParametersForExportOutput;
    };
    sdk: {
      input: GetParametersForExportCommandInput;
      output: GetParametersForExportCommandOutput;
    };
  };
}
