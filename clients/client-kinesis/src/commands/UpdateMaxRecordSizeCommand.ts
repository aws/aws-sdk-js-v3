// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { UpdateMaxRecordSizeInput } from "../models/models_0";
import { de_UpdateMaxRecordSizeCommand, se_UpdateMaxRecordSizeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMaxRecordSizeCommand}.
 */
export interface UpdateMaxRecordSizeCommandInput extends UpdateMaxRecordSizeInput {}
/**
 * @public
 *
 * The output of {@link UpdateMaxRecordSizeCommand}.
 */
export interface UpdateMaxRecordSizeCommandOutput extends __MetadataBearer {}

/**
 * <p>This allows you to update the <code>MaxRecordSize</code> of a single record that you can write to, and read from a stream. You can ingest and digest single records up to 10240 KiB.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, UpdateMaxRecordSizeCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, UpdateMaxRecordSizeCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // UpdateMaxRecordSizeInput
 *   StreamARN: "STRING_VALUE",
 *   MaxRecordSizeInKiB: Number("int"), // required
 * };
 * const command = new UpdateMaxRecordSizeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMaxRecordSizeCommandInput - {@link UpdateMaxRecordSizeCommandInput}
 * @returns {@link UpdateMaxRecordSizeCommandOutput}
 * @see {@link UpdateMaxRecordSizeCommandInput} for command's `input` shape.
 * @see {@link UpdateMaxRecordSizeCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>Specifies that you tried to invoke this API for a data stream with the on-demand
 *             capacity mode. This API is only supported for data streams with the provisioned capacity
 *             mode. </p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class UpdateMaxRecordSizeCommand extends $Command
  .classBuilder<
    UpdateMaxRecordSizeCommandInput,
    UpdateMaxRecordSizeCommandOutput,
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
  .s("Kinesis_20131202", "UpdateMaxRecordSize", {})
  .n("KinesisClient", "UpdateMaxRecordSizeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMaxRecordSizeCommand)
  .de(de_UpdateMaxRecordSizeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMaxRecordSizeInput;
      output: {};
    };
    sdk: {
      input: UpdateMaxRecordSizeCommandInput;
      output: UpdateMaxRecordSizeCommandOutput;
    };
  };
}
