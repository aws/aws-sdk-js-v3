// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDataDeletionJobRequest, DescribeDataDeletionJobResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeDataDeletionJobCommand, se_DescribeDataDeletionJobCommand } from "../protocols/Aws_json1_1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "DescribeDataDeletionJob", {})
  .n("PersonalizeClient", "DescribeDataDeletionJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDataDeletionJobCommand)
  .de(de_DescribeDataDeletionJobCommand)
  .build() {}
