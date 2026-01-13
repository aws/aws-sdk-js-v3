// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDataDeletionJobRequest, DescribeDataDeletionJobResponse } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeDataDeletionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataDeletionJobCommand}.
 */
export interface DescribeDataDeletionJobCommandInput extends DescribeDataDeletionJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataDeletionJobCommand}.
 */
export interface DescribeDataDeletionJobCommandOutput extends DescribeDataDeletionJobResponse, __MetadataBearer {}

/**
 * <p>Describes the data deletion job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataDeletionJob.html">CreateDataDeletionJob</a>, including the job status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeDataDeletionJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeDataDeletionJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeDataDeletionJobRequest
 *   dataDeletionJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDataDeletionJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataDeletionJobResponse
 * //   dataDeletionJob: { // DataDeletionJob
 * //     jobName: "STRING_VALUE",
 * //     dataDeletionJobArn: "STRING_VALUE",
 * //     datasetGroupArn: "STRING_VALUE",
 * //     dataSource: { // DataSource
 * //       dataLocation: "STRING_VALUE",
 * //     },
 * //     roleArn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     numDeleted: Number("int"),
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     failureReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDataDeletionJobCommandInput - {@link DescribeDataDeletionJobCommandInput}
 * @returns {@link DescribeDataDeletionJobCommandOutput}
 * @see {@link DescribeDataDeletionJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDataDeletionJobCommandOutput} for command's `response` shape.
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
export class DescribeDataDeletionJobCommand extends $Command
  .classBuilder<
    DescribeDataDeletionJobCommandInput,
    DescribeDataDeletionJobCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "DescribeDataDeletionJob", {})
  .n("PersonalizeClient", "DescribeDataDeletionJobCommand")
  .sc(DescribeDataDeletionJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataDeletionJobRequest;
      output: DescribeDataDeletionJobResponse;
    };
    sdk: {
      input: DescribeDataDeletionJobCommandInput;
      output: DescribeDataDeletionJobCommandOutput;
    };
  };
}
