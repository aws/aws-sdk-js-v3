// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLanguageModelRequest, DescribeLanguageModelResponse } from "../models/models_0";
import { DescribeLanguageModel } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLanguageModelCommand}.
 */
export interface DescribeLanguageModelCommandInput extends DescribeLanguageModelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLanguageModelCommand}.
 */
export interface DescribeLanguageModelCommandOutput extends DescribeLanguageModelResponse, __MetadataBearer {}

/**
 * <p>Provides information about the specified custom language model.</p>
 *          <p>This operation also shows if the base language model that you used to create your
 *             custom language model has been updated. If Amazon Transcribe has updated the base
 *             model, you can create a new custom language model using the updated base model.</p>
 *          <p>If you tried to create a new custom language model and the request wasn't successful,
 *             you can use <code>DescribeLanguageModel</code> to help identify the reason for this
 *             failure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DescribeLanguageModelCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DescribeLanguageModelCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // DescribeLanguageModelRequest
 *   ModelName: "STRING_VALUE", // required
 * };
 * const command = new DescribeLanguageModelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLanguageModelResponse
 * //   LanguageModel: { // LanguageModel
 * //     ModelName: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LanguageCode: "en-US" || "hi-IN" || "es-US" || "en-GB" || "en-AU" || "de-DE" || "ja-JP",
 * //     BaseModelName: "NarrowBand" || "WideBand",
 * //     ModelStatus: "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //     UpgradeAvailability: true || false,
 * //     FailureReason: "STRING_VALUE",
 * //     InputDataConfig: { // InputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       TuningDataS3Uri: "STRING_VALUE",
 * //       DataAccessRoleArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeLanguageModelCommandInput - {@link DescribeLanguageModelCommandInput}
 * @returns {@link DescribeLanguageModelCommandOutput}
 * @see {@link DescribeLanguageModelCommandInput} for command's `input` shape.
 * @see {@link DescribeLanguageModelCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can't find the requested resource. Check that the specified name is correct and try
 *             your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 *
 * @public
 */
export class DescribeLanguageModelCommand extends $Command
  .classBuilder<
    DescribeLanguageModelCommandInput,
    DescribeLanguageModelCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Transcribe", "DescribeLanguageModel", {})
  .n("TranscribeClient", "DescribeLanguageModelCommand")
  .sc(DescribeLanguageModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLanguageModelRequest;
      output: DescribeLanguageModelResponse;
    };
    sdk: {
      input: DescribeLanguageModelCommandInput;
      output: DescribeLanguageModelCommandOutput;
    };
  };
}
