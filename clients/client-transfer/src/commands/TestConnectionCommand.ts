// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { TestConnectionRequest, TestConnectionResponse } from "../models/models_0";
import { TestConnection$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestConnectionCommand}.
 */
export interface TestConnectionCommandInput extends TestConnectionRequest {}
/**
 * @public
 *
 * The output of {@link TestConnectionCommand}.
 */
export interface TestConnectionCommandOutput extends TestConnectionResponse, __MetadataBearer {}

/**
 * <p>Tests whether your SFTP connector is set up successfully. We highly recommend that you call this operation to test your ability to transfer files between local Amazon Web Services storage and a trading partner's SFTP server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, TestConnectionCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, TestConnectionCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // TestConnectionRequest
 *   ConnectorId: "STRING_VALUE", // required
 * };
 * const command = new TestConnectionCommand(input);
 * const response = await client.send(command);
 * // { // TestConnectionResponse
 * //   ConnectorId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   StatusMessage: "STRING_VALUE",
 * //   SftpConnectionDetails: { // SftpConnectorConnectionDetails
 * //     HostKey: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param TestConnectionCommandInput - {@link TestConnectionCommandInput}
 * @returns {@link TestConnectionCommandOutput}
 * @see {@link TestConnectionCommandInput} for command's `input` shape.
 * @see {@link TestConnectionCommandOutput} for command's `response` shape.
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
export class TestConnectionCommand extends $Command
  .classBuilder<
    TestConnectionCommandInput,
    TestConnectionCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "TestConnection", {})
  .n("TransferClient", "TestConnectionCommand")
  .sc(TestConnection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestConnectionRequest;
      output: TestConnectionResponse;
    };
    sdk: {
      input: TestConnectionCommandInput;
      output: TestConnectionCommandOutput;
    };
  };
}
