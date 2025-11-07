// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCertificateRequest, UpdateCertificateResponse } from "../models/models_0";
import { UpdateCertificate } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCertificateCommand}.
 */
export interface UpdateCertificateCommandInput extends UpdateCertificateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCertificateCommand}.
 */
export interface UpdateCertificateCommandOutput extends UpdateCertificateResponse, __MetadataBearer {}

/**
 * <p>Updates the active and inactive dates for a certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateCertificateCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateCertificateCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // UpdateCertificateRequest
 *   CertificateId: "STRING_VALUE", // required
 *   ActiveDate: new Date("TIMESTAMP"),
 *   InactiveDate: new Date("TIMESTAMP"),
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateCertificateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCertificateResponse
 * //   CertificateId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateCertificateCommandInput - {@link UpdateCertificateCommandInput}
 * @returns {@link UpdateCertificateCommandOutput}
 * @see {@link UpdateCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class UpdateCertificateCommand extends $Command
  .classBuilder<
    UpdateCertificateCommandInput,
    UpdateCertificateCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "UpdateCertificate", {})
  .n("TransferClient", "UpdateCertificateCommand")
  .sc(UpdateCertificate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCertificateRequest;
      output: UpdateCertificateResponse;
    };
    sdk: {
      input: UpdateCertificateCommandInput;
      output: UpdateCertificateCommandOutput;
    };
  };
}
