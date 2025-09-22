// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeHostKeyRequest, DescribeHostKeyResponse } from "../models/models_0";
import { DescribeHostKey } from "../schemas/schemas_1_Host";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.</p>
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
export class DescribeHostKeyCommand extends $Command
  .classBuilder<
    DescribeHostKeyCommandInput,
    DescribeHostKeyCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "DescribeHostKey", {})
  .n("TransferClient", "DescribeHostKeyCommand")
  .sc(DescribeHostKey)
  .build() {
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
