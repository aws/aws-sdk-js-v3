// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DecreaseStreamRetentionPeriodInput } from "../models/models_0";
import { DecreaseStreamRetentionPeriod } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DecreaseStreamRetentionPeriodCommand}.
 */
export interface DecreaseStreamRetentionPeriodCommandInput extends DecreaseStreamRetentionPeriodInput {}
/**
 * @public
 *
 * The output of {@link DecreaseStreamRetentionPeriodCommand}.
 */
export interface DecreaseStreamRetentionPeriodCommandOutput extends __MetadataBearer {}

/**
 * <p>Decreases the Kinesis data stream's retention period, which is the length of time data
 *             records are accessible after they are added to the stream. The minimum value of a
 *             stream's retention period is 24 hours.</p>
 *          <note>
 *             <p>When invoking this API, you must use either the <code>StreamARN</code> or the
 *                     <code>StreamName</code> parameter, or both. It is recommended that you use the
 *                     <code>StreamARN</code> input parameter when you invoke this API.</p>
 *          </note>
 *          <p>This operation may result in lost data. For example, if the stream's retention period
 *             is 48 hours and is decreased to 24 hours, any data already in the stream that is older
 *             than 24 hours is inaccessible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DecreaseStreamRetentionPeriodCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DecreaseStreamRetentionPeriodCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // DecreaseStreamRetentionPeriodInput
 *   StreamName: "STRING_VALUE",
 *   RetentionPeriodHours: Number("int"), // required
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DecreaseStreamRetentionPeriodCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DecreaseStreamRetentionPeriodCommandInput - {@link DecreaseStreamRetentionPeriodCommandInput}
 * @returns {@link DecreaseStreamRetentionPeriodCommandOutput}
 * @see {@link DecreaseStreamRetentionPeriodCommandInput} for command's `input` shape.
 * @see {@link DecreaseStreamRetentionPeriodCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DecreaseStreamRetentionPeriodCommand extends $Command
  .classBuilder<
    DecreaseStreamRetentionPeriodCommandInput,
    DecreaseStreamRetentionPeriodCommandOutput,
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kinesis_20131202", "DecreaseStreamRetentionPeriod", {})
  .n("KinesisClient", "DecreaseStreamRetentionPeriodCommand")
  .sc(DecreaseStreamRetentionPeriod)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DecreaseStreamRetentionPeriodInput;
      output: {};
    };
    sdk: {
      input: DecreaseStreamRetentionPeriodCommandInput;
      output: DecreaseStreamRetentionPeriodCommandOutput;
    };
  };
}
