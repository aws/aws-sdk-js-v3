// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TestIdentityProviderRequest, TestIdentityProviderResponse } from "../models/models_0";
import { TestIdentityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TestIdentityProviderCommand}.
 */
export interface TestIdentityProviderCommandInput extends TestIdentityProviderRequest {}
/**
 * @public
 *
 * The output of {@link TestIdentityProviderCommand}.
 */
export interface TestIdentityProviderCommandOutput extends TestIdentityProviderResponse, __MetadataBearer {}

/**
 * If the `IdentityProviderType` of a file transfer protocol-enabled server is `AWS_DIRECTORY_SERVICE` or `API_Gateway`, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.
 *
 * The `ServerId` and `UserName` parameters are required. The `ServerProtocol`, `SourceIp`, and `UserPassword` are all optional.
 *
 * Note the following:
 *
 * - You cannot use `TestIdentityProvider` if the `IdentityProviderType` of your server is `SERVICE_MANAGED`.
 * - `TestIdentityProvider` does not work with keys: it only accepts passwords.
 * - `TestIdentityProvider` can test the password operation for a custom Identity Provider that handles keys and passwords.
 * - If you provide any incorrect values for any parameters, the `Response` field is empty.
 * - If you provide a server ID for a server that uses service-managed users, you get an error:
 *
 *   `An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-server-ID not configured for external auth`
 * - If you enter a Server ID for the `--server-id` parameter that does not identify an actual Transfer server, you receive the following error:
 *
 *   `An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server`.
 *
 *   It is possible your sever is in a different region. You can specify a region by adding the following: `--region region-code`, such as `--region us-east-2` to specify a server in **US East (Ohio)**.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, TestIdentityProviderCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, TestIdentityProviderCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // TestIdentityProviderRequest
 *   ServerId: "STRING_VALUE", // required
 *   ServerProtocol: "SFTP" || "FTP" || "FTPS" || "AS2",
 *   SourceIp: "STRING_VALUE",
 *   UserName: "STRING_VALUE", // required
 *   UserPassword: "STRING_VALUE",
 * };
 * const command = new TestIdentityProviderCommand(input);
 * const response = await client.send(command);
 * // { // TestIdentityProviderResponse
 * //   Response: "STRING_VALUE",
 * //   StatusCode: Number("int"), // required
 * //   Message: "STRING_VALUE",
 * //   Url: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param TestIdentityProviderCommandInput - {@link TestIdentityProviderCommandInput}
 * @returns {@link TestIdentityProviderCommandOutput}
 * @see {@link TestIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link TestIdentityProviderCommandOutput} for command's `response` shape.
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
export class TestIdentityProviderCommand extends command<TestIdentityProviderCommandInput, TestIdentityProviderCommandOutput>(
  _ep0,
  _mw0,
  "TestIdentityProvider",
  TestIdentityProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestIdentityProviderRequest;
      output: TestIdentityProviderResponse;
    };
    sdk: {
      input: TestIdentityProviderCommandInput;
      output: TestIdentityProviderCommandOutput;
    };
  };
}
