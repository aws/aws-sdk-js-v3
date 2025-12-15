// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import type { BatchGetStreamKeyRequest, BatchGetStreamKeyResponse } from "../models/models_0";
import { BatchGetStreamKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetStreamKeyCommand}.
 */
export interface BatchGetStreamKeyCommandInput extends BatchGetStreamKeyRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetStreamKeyCommand}.
 */
export interface BatchGetStreamKeyCommandOutput extends BatchGetStreamKeyResponse, __MetadataBearer {}

/**
 * <p>Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, BatchGetStreamKeyCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, BatchGetStreamKeyCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // BatchGetStreamKeyRequest
 *   arns: [ // StreamKeyArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetStreamKeyCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetStreamKeyResponse
 * //   streamKeys: [ // StreamKeys
 * //     { // StreamKey
 * //       arn: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //       channelArn: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // BatchErrors
 * //     { // BatchError
 * //       arn: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetStreamKeyCommandInput - {@link BatchGetStreamKeyCommandInput}
 * @returns {@link BatchGetStreamKeyCommandOutput}
 * @see {@link BatchGetStreamKeyCommandInput} for command's `input` shape.
 * @see {@link BatchGetStreamKeyCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class BatchGetStreamKeyCommand extends $Command
  .classBuilder<
    BatchGetStreamKeyCommandInput,
    BatchGetStreamKeyCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "BatchGetStreamKey", {})
  .n("IvsClient", "BatchGetStreamKeyCommand")
  .sc(BatchGetStreamKey$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetStreamKeyRequest;
      output: BatchGetStreamKeyResponse;
    };
    sdk: {
      input: BatchGetStreamKeyCommandInput;
      output: BatchGetStreamKeyCommandOutput;
    };
  };
}
