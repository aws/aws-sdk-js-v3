// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartRemoteDeleteRequest, StartRemoteDeleteResponse } from "../models/models_0";
import { de_StartRemoteDeleteCommand, se_StartRemoteDeleteCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartRemoteDeleteCommand}.
 */
export interface StartRemoteDeleteCommandInput extends StartRemoteDeleteRequest {}
/**
 * @public
 *
 * The output of {@link StartRemoteDeleteCommand}.
 */
export interface StartRemoteDeleteCommandOutput extends StartRemoteDeleteResponse, __MetadataBearer {}

/**
 * <p>Deletes a file or directory on the remote SFTP server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, StartRemoteDeleteCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, StartRemoteDeleteCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // StartRemoteDeleteRequest
 *   ConnectorId: "STRING_VALUE", // required
 *   DeletePath: "STRING_VALUE", // required
 * };
 * const command = new StartRemoteDeleteCommand(input);
 * const response = await client.send(command);
 * // { // StartRemoteDeleteResponse
 * //   DeleteId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartRemoteDeleteCommandInput - {@link StartRemoteDeleteCommandInput}
 * @returns {@link StartRemoteDeleteCommandOutput}
 * @see {@link StartRemoteDeleteCommandInput} for command's `input` shape.
 * @see {@link StartRemoteDeleteCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
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
export class StartRemoteDeleteCommand extends $Command
  .classBuilder<
    StartRemoteDeleteCommandInput,
    StartRemoteDeleteCommandOutput,
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
  .s("TransferService", "StartRemoteDelete", {})
  .n("TransferClient", "StartRemoteDeleteCommand")
  .f(void 0, void 0)
  .ser(se_StartRemoteDeleteCommand)
  .de(de_StartRemoteDeleteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRemoteDeleteRequest;
      output: StartRemoteDeleteResponse;
    };
    sdk: {
      input: StartRemoteDeleteCommandInput;
      output: StartRemoteDeleteCommandOutput;
    };
  };
}
