// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ImportHostKeyRequest,
  ImportHostKeyRequestFilterSensitiveLog,
  ImportHostKeyResponse,
} from "../models/models_0";
import { de_ImportHostKeyCommand, se_ImportHostKeyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportHostKeyCommand}.
 */
export interface ImportHostKeyCommandInput extends ImportHostKeyRequest {}
/**
 * @public
 *
 * The output of {@link ImportHostKeyCommand}.
 */
export interface ImportHostKeyCommandOutput extends ImportHostKeyResponse, __MetadataBearer {}

/**
 * <p>Adds a host key to the server that's specified by the <code>ServerId</code>
 *       parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ImportHostKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ImportHostKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // ImportHostKeyRequest
 *   ServerId: "STRING_VALUE", // required
 *   HostKeyBody: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ImportHostKeyCommand(input);
 * const response = await client.send(command);
 * // { // ImportHostKeyResponse
 * //   ServerId: "STRING_VALUE", // required
 * //   HostKeyId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ImportHostKeyCommandInput - {@link ImportHostKeyCommandInput}
 * @returns {@link ImportHostKeyCommandOutput}
 * @see {@link ImportHostKeyCommandInput} for command's `input` shape.
 * @see {@link ImportHostKeyCommandOutput} for command's `response` shape.
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
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
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
export class ImportHostKeyCommand extends $Command
  .classBuilder<
    ImportHostKeyCommandInput,
    ImportHostKeyCommandOutput,
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
  .s("TransferService", "ImportHostKey", {})
  .n("TransferClient", "ImportHostKeyCommand")
  .f(ImportHostKeyRequestFilterSensitiveLog, void 0)
  .ser(se_ImportHostKeyCommand)
  .de(de_ImportHostKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportHostKeyRequest;
      output: ImportHostKeyResponse;
    };
    sdk: {
      input: ImportHostKeyCommandInput;
      output: ImportHostKeyCommandOutput;
    };
  };
}
