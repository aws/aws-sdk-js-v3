// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProjectsRequest, DescribeProjectsResponse } from "../models/models_0";
import { de_DescribeProjectsCommand, se_DescribeProjectsCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProjectsCommand}.
 */
export interface DescribeProjectsCommandInput extends DescribeProjectsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProjectsCommand}.
 */
export interface DescribeProjectsCommandOutput extends DescribeProjectsResponse, __MetadataBearer {}

/**
 * <p>Gets information about your Rekognition projects.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:DescribeProjects</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DescribeProjectsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DescribeProjectsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RekognitionClient(config);
 * const input = { // DescribeProjectsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ProjectNames: [ // ProjectNames
 *     "STRING_VALUE",
 *   ],
 *   Features: [ // CustomizationFeatures
 *     "CONTENT_MODERATION" || "CUSTOM_LABELS",
 *   ],
 * };
 * const command = new DescribeProjectsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProjectsResponse
 * //   ProjectDescriptions: [ // ProjectDescriptions
 * //     { // ProjectDescription
 * //       ProjectArn: "STRING_VALUE",
 * //       CreationTimestamp: new Date("TIMESTAMP"),
 * //       Status: "CREATING" || "CREATED" || "DELETING",
 * //       Datasets: [ // DatasetMetadataList
 * //         { // DatasetMetadata
 * //           CreationTimestamp: new Date("TIMESTAMP"),
 * //           DatasetType: "TRAIN" || "TEST",
 * //           DatasetArn: "STRING_VALUE",
 * //           Status: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED" || "DELETE_IN_PROGRESS",
 * //           StatusMessage: "STRING_VALUE",
 * //           StatusMessageCode: "SUCCESS" || "SERVICE_ERROR" || "CLIENT_ERROR",
 * //         },
 * //       ],
 * //       Feature: "CONTENT_MODERATION" || "CUSTOM_LABELS",
 * //       AutoUpdate: "ENABLED" || "DISABLED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeProjectsCommandInput - {@link DescribeProjectsCommandInput}
 * @returns {@link DescribeProjectsCommandOutput}
 * @see {@link DescribeProjectsCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Pagination token in the request is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @public
 * @example To describe an Amazon Rekognition Custom Labels project.
 * ```javascript
 * // Describes an Amazon Rekognition Custom Labels projects.
 * const input = {
 *   "ProjectNames": [
 *     "my-project"
 *   ]
 * };
 * const command = new DescribeProjectsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ProjectDescriptions": [
 *     {
 *       "CreationTimestamp": "2022-06-13T15:16:00.634000-07:00",
 *       "Datasets": [
 *         {
 *           "CreationTimestamp": "2022-06-13T15:17:34.620000-07:00",
 *           "DatasetArn": "arn:aws:rekognition:us-east-1:111122223333:project/my-project/dataset/test/1655158654491",
 *           "DatasetType": "TEST",
 *           "Status": "CREATE_COMPLETE",
 *           "StatusMessage": "The dataset was successfully created from the manifest file.",
 *           "StatusMessageCode": "SUCCESS"
 *         },
 *         {
 *           "CreationTimestamp": "2022-06-13T15:17:50.118000-07:00",
 *           "DatasetArn": "arn:aws:rekognition:us-east-1:111122223333:project/my-project/dataset/train/1655158669954",
 *           "DatasetType": "TRAIN",
 *           "Status": "CREATE_COMPLETE",
 *           "StatusMessage": "The dataset was successfully created from the manifest file.",
 *           "StatusMessageCode": "SUCCESS"
 *         }
 *       ],
 *       "ProjectArn": "arn:aws:rekognition:us-east-1:111122223333:project/my-project/1655158560634",
 *       "Status": "CREATED"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-an-amazon-rekognition-custom-labels-project-1690400952376
 * ```
 *
 */
export class DescribeProjectsCommand extends $Command
  .classBuilder<
    DescribeProjectsCommandInput,
    DescribeProjectsCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "DescribeProjects", {})
  .n("RekognitionClient", "DescribeProjectsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeProjectsCommand)
  .de(de_DescribeProjectsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProjectsRequest;
      output: DescribeProjectsResponse;
    };
    sdk: {
      input: DescribeProjectsCommandInput;
      output: DescribeProjectsCommandOutput;
    };
  };
}
