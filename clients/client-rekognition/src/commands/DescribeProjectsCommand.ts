// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProjectsRequest, DescribeProjectsResponse } from "../models/models_0";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DescribeProjects } from "../schemas/schemas_1_Get";

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
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
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
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "DescribeProjects", {})
  .n("RekognitionClient", "DescribeProjectsCommand")
  .sc(DescribeProjects)
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
