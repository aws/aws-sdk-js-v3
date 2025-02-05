// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { RemoveTagsFromStreamInput } from "../models/models_0";
import { de_RemoveTagsFromStreamCommand, se_RemoveTagsFromStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveTagsFromStreamCommand}.
 */
export interface RemoveTagsFromStreamCommandInput extends RemoveTagsFromStreamInput {}
/**
 * @public
 *
 * The output of {@link RemoveTagsFromStreamCommand}.
 */
export interface RemoveTagsFromStreamCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes tags from the specified Kinesis data stream. Removed tags are deleted and
 *             cannot be recovered after this operation successfully completes.</p>
 *          <note>
 *             <p>When invoking this API, you must use either the <code>StreamARN</code> or the
 *                     <code>StreamName</code> parameter, or both. It is recommended that you use the
 *                     <code>StreamARN</code> input parameter when you invoke this API.</p>
 *          </note>
 *          <p>If you specify a tag that does not exist, it is ignored.</p>
 *          <p>
 *             <a>RemoveTagsFromStream</a> has a limit of five transactions per second per
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, RemoveTagsFromStreamCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, RemoveTagsFromStreamCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KinesisClient(config);
 * const input = { // RemoveTagsFromStreamInput
 *   StreamName: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList // required
 *     "STRING_VALUE",
 *   ],
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new RemoveTagsFromStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveTagsFromStreamCommandInput - {@link RemoveTagsFromStreamCommandInput}
 * @returns {@link RemoveTagsFromStreamCommandOutput}
 * @see {@link RemoveTagsFromStreamCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is not available for this operation. For successful operation, the
 *             resource must be in the <code>ACTIVE</code> state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 * @public
 */
export class RemoveTagsFromStreamCommand extends $Command
  .classBuilder<
    RemoveTagsFromStreamCommandInput,
    RemoveTagsFromStreamCommandOutput,
    KinesisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    OperationType: { type: "staticContextParams", value: `control` },
    StreamARN: { type: "contextParams", name: "StreamARN" },
  })
  .m(function (this: any, Command: any, cs: any, config: KinesisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kinesis_20131202", "RemoveTagsFromStream", {})
  .n("KinesisClient", "RemoveTagsFromStreamCommand")
  .f(void 0, void 0)
  .ser(se_RemoveTagsFromStreamCommand)
  .de(de_RemoveTagsFromStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveTagsFromStreamInput;
      output: {};
    };
    sdk: {
      input: RemoveTagsFromStreamCommandInput;
      output: RemoveTagsFromStreamCommandOutput;
    };
  };
}
