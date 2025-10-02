// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListHostKeysRequest, ListHostKeysResponse } from "../models/models_0";
import { de_ListHostKeysCommand, se_ListHostKeysCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHostKeysCommand}.
 */
export interface ListHostKeysCommandInput extends ListHostKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListHostKeysCommand}.
 */
export interface ListHostKeysCommandOutput extends ListHostKeysResponse, __MetadataBearer {}

/**
 * <p>Returns a list of host keys for the server that's specified by the <code>ServerId</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListHostKeysCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListHostKeysCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // ListHostKeysRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ServerId: "STRING_VALUE", // required
 * };
 * const command = new ListHostKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListHostKeysResponse
 * //   NextToken: "STRING_VALUE",
 * //   ServerId: "STRING_VALUE", // required
 * //   HostKeys: [ // ListedHostKeys // required
 * //     { // ListedHostKey
 * //       Arn: "STRING_VALUE", // required
 * //       HostKeyId: "STRING_VALUE",
 * //       Fingerprint: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       DateImported: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListHostKeysCommandInput - {@link ListHostKeysCommandInput}
 * @returns {@link ListHostKeysCommandOutput}
 * @see {@link ListHostKeysCommandInput} for command's `input` shape.
 * @see {@link ListHostKeysCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
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
export class ListHostKeysCommand extends $Command
  .classBuilder<
    ListHostKeysCommandInput,
    ListHostKeysCommandOutput,
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
  .s("TransferService", "ListHostKeys", {})
  .n("TransferClient", "ListHostKeysCommand")
  .f(void 0, void 0)
  .ser(se_ListHostKeysCommand)
  .de(de_ListHostKeysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHostKeysRequest;
      output: ListHostKeysResponse;
    };
    sdk: {
      input: ListHostKeysCommandInput;
      output: ListHostKeysCommandOutput;
    };
  };
}
