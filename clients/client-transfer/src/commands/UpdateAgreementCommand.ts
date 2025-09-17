// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAgreementRequest, UpdateAgreementResponse } from "../models/models_0";
import { de_UpdateAgreementCommand, se_UpdateAgreementCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAgreementCommand}.
 */
export interface UpdateAgreementCommandInput extends UpdateAgreementRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgreementCommand}.
 */
export interface UpdateAgreementCommandOutput extends UpdateAgreementResponse, __MetadataBearer {}

/**
 * <p>Updates some of the parameters for an existing agreement. Provide the <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to update, along with the new values for the parameters to update.</p> <note> <p>Specify <i>either</i> <code>BaseDirectory</code> or <code>CustomDirectories</code>, but not both. Specifying both causes the command to fail.</p> <p>If you update an agreement from using base directory to custom directories, the base directory is no longer used. Similarly, if you change from custom directories to a base directory, the custom directories are no longer used.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateAgreementCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateAgreementCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // UpdateAgreementRequest
 *   AgreementId: "STRING_VALUE", // required
 *   ServerId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Status: "ACTIVE" || "INACTIVE",
 *   LocalProfileId: "STRING_VALUE",
 *   PartnerProfileId: "STRING_VALUE",
 *   BaseDirectory: "STRING_VALUE",
 *   AccessRole: "STRING_VALUE",
 *   PreserveFilename: "ENABLED" || "DISABLED",
 *   EnforceMessageSigning: "ENABLED" || "DISABLED",
 *   CustomDirectories: { // CustomDirectoriesType
 *     FailedFilesDirectory: "STRING_VALUE", // required
 *     MdnFilesDirectory: "STRING_VALUE", // required
 *     PayloadFilesDirectory: "STRING_VALUE", // required
 *     StatusFilesDirectory: "STRING_VALUE", // required
 *     TemporaryFilesDirectory: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateAgreementCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgreementResponse
 * //   AgreementId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateAgreementCommandInput - {@link UpdateAgreementCommandInput}
 * @returns {@link UpdateAgreementCommandOutput}
 * @see {@link UpdateAgreementCommandInput} for command's `input` shape.
 * @see {@link UpdateAgreementCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The requested resource does not exist, or exists in a region other than the one specified for the command.</p>
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
export class UpdateAgreementCommand extends $Command
  .classBuilder<
    UpdateAgreementCommandInput,
    UpdateAgreementCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TransferService", "UpdateAgreement", {})
  .n("TransferClient", "UpdateAgreementCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAgreementCommand)
  .de(de_UpdateAgreementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgreementRequest;
      output: UpdateAgreementResponse;
    };
    sdk: {
      input: UpdateAgreementCommandInput;
      output: UpdateAgreementCommandOutput;
    };
  };
}
