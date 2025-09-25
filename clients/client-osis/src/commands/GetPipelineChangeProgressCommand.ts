// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPipelineChangeProgressRequest, GetPipelineChangeProgressResponse } from "../models/models_0";
import { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { GetPipelineChangeProgress } from "../schemas/schemas_1_Pipeline";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPipelineChangeProgressCommand}.
 */
export interface GetPipelineChangeProgressCommandInput extends GetPipelineChangeProgressRequest {}
/**
 * @public
 *
 * The output of {@link GetPipelineChangeProgressCommand}.
 */
export interface GetPipelineChangeProgressCommandOutput extends GetPipelineChangeProgressResponse, __MetadataBearer {}

/**
 * <p>Returns progress information for the current change happening on an OpenSearch Ingestion
 *    pipeline. Currently, this operation only returns information when a pipeline is being
 *    created.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html#get-pipeline-progress">Tracking the status of pipeline creation</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, GetPipelineChangeProgressCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, GetPipelineChangeProgressCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * // import type { OSISClientConfig } from "@aws-sdk/client-osis";
 * const config = {}; // type is OSISClientConfig
 * const client = new OSISClient(config);
 * const input = { // GetPipelineChangeProgressRequest
 *   PipelineName: "STRING_VALUE", // required
 * };
 * const command = new GetPipelineChangeProgressCommand(input);
 * const response = await client.send(command);
 * // { // GetPipelineChangeProgressResponse
 * //   ChangeProgressStatuses: [ // ChangeProgressStatusList
 * //     { // ChangeProgressStatus
 * //       StartTime: new Date("TIMESTAMP"),
 * //       Status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //       TotalNumberOfStages: Number("int"),
 * //       ChangeProgressStages: [ // ChangeProgressStageList
 * //         { // ChangeProgressStage
 * //           Name: "STRING_VALUE",
 * //           Status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //           Description: "STRING_VALUE",
 * //           LastUpdatedAt: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPipelineChangeProgressCommandInput - {@link GetPipelineChangeProgressCommandInput}
 * @returns {@link GetPipelineChangeProgressCommandOutput}
 * @see {@link GetPipelineChangeProgressCommandInput} for command's `input` shape.
 * @see {@link GetPipelineChangeProgressCommandOutput} for command's `response` shape.
 * @see {@link OSISClientResolvedConfig | config} for OSISClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to access the resource.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>Exception is thrown when an operation has been disabled.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request failed because of an unknown error, exception, or failure (the failure is
 *    internal to the service).</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You attempted to access or delete a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing or invalid input fields.</p>
 *
 * @throws {@link OSISServiceException}
 * <p>Base exception class for all service exceptions from OSIS service.</p>
 *
 *
 * @public
 */
export class GetPipelineChangeProgressCommand extends $Command
  .classBuilder<
    GetPipelineChangeProgressCommandInput,
    GetPipelineChangeProgressCommandOutput,
    OSISClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OSISClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchIngestionService", "GetPipelineChangeProgress", {})
  .n("OSISClient", "GetPipelineChangeProgressCommand")
  .sc(GetPipelineChangeProgress)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPipelineChangeProgressRequest;
      output: GetPipelineChangeProgressResponse;
    };
    sdk: {
      input: GetPipelineChangeProgressCommandInput;
      output: GetPipelineChangeProgressCommandOutput;
    };
  };
}
