// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TestConnectionRequest, TestConnectionResponse } from "../models/models_0";
import { TestConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Tests whether your SFTP connector is set up successfully. We highly recommend that you call this operation to test your ability to transfer files between local Amazon Web Services storage and a trading partner's SFTP server.
 *
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
 *
 * This exception is thrown when an error occurs in the Transfer Family service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed because the Amazon Web ServicesTransfer Family service is not available.
 *
 * @throws {@link TransferServiceException}
 *
 * Base exception class for all service exceptions from Transfer service.
 *
 * @public
 */
export class TestConnectionCommand extends command<TestConnectionCommandInput, TestConnectionCommandOutput>(
  _ep0,
  _mw0,
  "TestConnection",
  TestConnection$
) {
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
