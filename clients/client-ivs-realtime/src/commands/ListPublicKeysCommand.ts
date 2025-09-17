// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { ListPublicKeysRequest, ListPublicKeysResponse } from "../models/models_0";
import { de_ListPublicKeysCommand, se_ListPublicKeysCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPublicKeysCommand}.
 */
export interface ListPublicKeysCommandInput extends ListPublicKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListPublicKeysCommand}.
 */
export interface ListPublicKeysCommandOutput extends ListPublicKeysResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about all public keys in your account, in the AWS region where the API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, ListPublicKeysCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, ListPublicKeysCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // ListPublicKeysRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPublicKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListPublicKeysResponse
 * //   publicKeys: [ // PublicKeyList // required
 * //     { // PublicKeySummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPublicKeysCommandInput - {@link ListPublicKeysCommandInput}
 * @returns {@link ListPublicKeysCommandOutput}
 * @see {@link ListPublicKeysCommandInput} for command's `input` shape.
 * @see {@link ListPublicKeysCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class ListPublicKeysCommand extends $Command
  .classBuilder<
    ListPublicKeysCommandInput,
    ListPublicKeysCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "ListPublicKeys", {})
  .n("IVSRealTimeClient", "ListPublicKeysCommand")
  .f(void 0, void 0)
  .ser(se_ListPublicKeysCommand)
  .de(de_ListPublicKeysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPublicKeysRequest;
      output: ListPublicKeysResponse;
    };
    sdk: {
      input: ListPublicKeysCommandInput;
      output: ListPublicKeysCommandOutput;
    };
  };
}
