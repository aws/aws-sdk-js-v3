// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBatchSegmentJobRequest, CreateBatchSegmentJobResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_CreateBatchSegmentJobCommand, se_CreateBatchSegmentJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBatchSegmentJobCommand}.
 */
export interface CreateBatchSegmentJobCommandInput extends CreateBatchSegmentJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateBatchSegmentJobCommand}.
 */
export interface CreateBatchSegmentJobCommandOutput extends CreateBatchSegmentJobResponse, __MetadataBearer {}

/**
 * <p>Creates a batch segment job. The operation can handle up to 50 million records and the
 *       input file must be in JSON format. For more information, see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/recommendations-batch.html">Getting batch recommendations and user segments</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateBatchSegmentJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateBatchSegmentJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // CreateBatchSegmentJobRequest
 *   jobName: "STRING_VALUE", // required
 *   solutionVersionArn: "STRING_VALUE", // required
 *   filterArn: "STRING_VALUE",
 *   numResults: Number("int"),
 *   jobInput: { // BatchSegmentJobInput
 *     s3DataSource: { // S3DataConfig
 *       path: "STRING_VALUE", // required
 *       kmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   jobOutput: { // BatchSegmentJobOutput
 *     s3DataDestination: {
 *       path: "STRING_VALUE", // required
 *       kmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   tags: [ // Tags
 *     { // Tag
 *       tagKey: "STRING_VALUE", // required
 *       tagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateBatchSegmentJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateBatchSegmentJobResponse
 * //   batchSegmentJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBatchSegmentJobCommandInput - {@link CreateBatchSegmentJobCommandInput}
 * @returns {@link CreateBatchSegmentJobCommandOutput}
 * @see {@link CreateBatchSegmentJobCommandInput} for command's `input` shape.
 * @see {@link CreateBatchSegmentJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have exceeded the maximum number of tags you can apply to this resource. </p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class CreateBatchSegmentJobCommand extends $Command
  .classBuilder<
    CreateBatchSegmentJobCommandInput,
    CreateBatchSegmentJobCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "CreateBatchSegmentJob", {})
  .n("PersonalizeClient", "CreateBatchSegmentJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateBatchSegmentJobCommand)
  .de(de_CreateBatchSegmentJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBatchSegmentJobRequest;
      output: CreateBatchSegmentJobResponse;
    };
    sdk: {
      input: CreateBatchSegmentJobCommandInput;
      output: CreateBatchSegmentJobCommandOutput;
    };
  };
}
