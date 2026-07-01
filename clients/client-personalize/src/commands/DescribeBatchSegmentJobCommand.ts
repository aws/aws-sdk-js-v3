// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeBatchSegmentJobRequest, DescribeBatchSegmentJobResponse } from "../models/models_0";
import { DescribeBatchSegmentJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeBatchSegmentJobCommand}.
 */
export interface DescribeBatchSegmentJobCommandInput extends DescribeBatchSegmentJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBatchSegmentJobCommand}.
 */
export interface DescribeBatchSegmentJobCommandOutput extends DescribeBatchSegmentJobResponse, __MetadataBearer {}

/**
 * <p>Gets the properties of a batch segment job including name, Amazon Resource Name (ARN),
 *       status, input and output configurations, and the ARN of the solution version used to generate
 *       segments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeBatchSegmentJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeBatchSegmentJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeBatchSegmentJobRequest
 *   batchSegmentJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeBatchSegmentJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBatchSegmentJobResponse
 * //   batchSegmentJob: { // BatchSegmentJob
 * //     jobName: "STRING_VALUE",
 * //     batchSegmentJobArn: "STRING_VALUE",
 * //     filterArn: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     solutionVersionArn: "STRING_VALUE",
 * //     numResults: Number("int"),
 * //     jobInput: { // BatchSegmentJobInput
 * //       s3DataSource: { // S3DataConfig
 * //         path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     jobOutput: { // BatchSegmentJobOutput
 * //       s3DataDestination: {
 * //         path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     roleArn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBatchSegmentJobCommandInput - {@link DescribeBatchSegmentJobCommandInput}
 * @returns {@link DescribeBatchSegmentJobCommandOutput}
 * @see {@link DescribeBatchSegmentJobCommandInput} for command's `input` shape.
 * @see {@link DescribeBatchSegmentJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class DescribeBatchSegmentJobCommand extends command<DescribeBatchSegmentJobCommandInput, DescribeBatchSegmentJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBatchSegmentJob",
  DescribeBatchSegmentJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBatchSegmentJobRequest;
      output: DescribeBatchSegmentJobResponse;
    };
    sdk: {
      input: DescribeBatchSegmentJobCommandInput;
      output: DescribeBatchSegmentJobCommandOutput;
    };
  };
}
