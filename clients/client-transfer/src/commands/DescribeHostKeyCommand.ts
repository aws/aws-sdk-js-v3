// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeHostKeyRequest, DescribeHostKeyResponse } from "../models/models_0";
import { DescribeHostKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeHostKeyCommand}.
 */
export interface DescribeHostKeyCommandInput extends DescribeHostKeyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHostKeyCommand}.
 */
export interface DescribeHostKeyCommandOutput extends DescribeHostKeyResponse, __MetadataBearer {}

/**
 * Returns the details of the host key that's specified by the `HostKeyId` and `ServerId`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeHostKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeHostKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // DescribeHostKeyRequest
 *   ServerId: "STRING_VALUE", // required
 *   HostKeyId: "STRING_VALUE", // required
 * };
 * const command = new DescribeHostKeyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHostKeyResponse
 * //   HostKey: { // DescribedHostKey
 * //     Arn: "STRING_VALUE", // required
 * //     HostKeyId: "STRING_VALUE",
 * //     HostKeyFingerprint: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     DateImported: new Date("TIMESTAMP"),
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     StorageType: "SERVICE_MANAGED" || "SECRETS_MANAGER",
 * //     SecretId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeHostKeyCommandInput - {@link DescribeHostKeyCommandInput}
 * @returns {@link DescribeHostKeyCommandOutput}
 * @see {@link DescribeHostKeyCommandInput} for command's `input` shape.
 * @see {@link DescribeHostKeyCommandOutput} for command's `response` shape.
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
export class DescribeHostKeyCommand extends command<DescribeHostKeyCommandInput, DescribeHostKeyCommandOutput>(
  _ep0,
  _mw0,
  "DescribeHostKey",
  DescribeHostKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHostKeyRequest;
      output: DescribeHostKeyResponse;
    };
    sdk: {
      input: DescribeHostKeyCommandInput;
      output: DescribeHostKeyCommandOutput;
    };
  };
}
