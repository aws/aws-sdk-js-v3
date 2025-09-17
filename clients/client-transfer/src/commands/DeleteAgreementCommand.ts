// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAgreementRequest } from "../models/models_0";
import { de_DeleteAgreementCommand, se_DeleteAgreementCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAgreementCommand}.
 */
export interface DeleteAgreementCommandInput extends DeleteAgreementRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgreementCommand}.
 */
export interface DeleteAgreementCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete the agreement that's specified in the provided <code>AgreementId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteAgreementCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteAgreementCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // DeleteAgreementRequest
 *   AgreementId: "STRING_VALUE", // required
 *   ServerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAgreementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAgreementCommandInput - {@link DeleteAgreementCommandInput}
 * @returns {@link DeleteAgreementCommandOutput}
 * @see {@link DeleteAgreementCommandInput} for command's `input` shape.
 * @see {@link DeleteAgreementCommandOutput} for command's `response` shape.
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
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class DeleteAgreementCommand extends $Command
  .classBuilder<
    DeleteAgreementCommandInput,
    DeleteAgreementCommandOutput,
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
  .s("TransferService", "DeleteAgreement", {})
  .n("TransferClient", "DeleteAgreementCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAgreementCommand)
  .de(de_DeleteAgreementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgreementRequest;
      output: {};
    };
    sdk: {
      input: DeleteAgreementCommandInput;
      output: DeleteAgreementCommandOutput;
    };
  };
}
