// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPipelinesRequest, ListPipelinesResponse } from "../models/models_0";
import { ListPipelines } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPipelinesCommand}.
 */
export interface ListPipelinesCommandInput extends ListPipelinesRequest {}
/**
 * @public
 *
 * The output of {@link ListPipelinesCommand}.
 */
export interface ListPipelinesCommandOutput extends ListPipelinesResponse, __MetadataBearer {}

/**
 * <p>The ListPipelines operation gets a list of the pipelines associated with the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ListPipelinesCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ListPipelinesCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * // import type { ElasticTranscoderClientConfig } from "@aws-sdk/client-elastic-transcoder";
 * const config = {}; // type is ElasticTranscoderClientConfig
 * const client = new ElasticTranscoderClient(config);
 * const input = { // ListPipelinesRequest
 *   Ascending: "STRING_VALUE",
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListPipelinesCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelinesResponse
 * //   Pipelines: [ // Pipelines
 * //     { // Pipeline
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       InputBucket: "STRING_VALUE",
 * //       OutputBucket: "STRING_VALUE",
 * //       Role: "STRING_VALUE",
 * //       AwsKmsKeyArn: "STRING_VALUE",
 * //       Notifications: { // Notifications
 * //         Progressing: "STRING_VALUE",
 * //         Completed: "STRING_VALUE",
 * //         Warning: "STRING_VALUE",
 * //         Error: "STRING_VALUE",
 * //       },
 * //       ContentConfig: { // PipelineOutputConfig
 * //         Bucket: "STRING_VALUE",
 * //         StorageClass: "STRING_VALUE",
 * //         Permissions: [ // Permissions
 * //           { // Permission
 * //             GranteeType: "STRING_VALUE",
 * //             Grantee: "STRING_VALUE",
 * //             Access: [ // AccessControls
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       ThumbnailConfig: {
 * //         Bucket: "STRING_VALUE",
 * //         StorageClass: "STRING_VALUE",
 * //         Permissions: [
 * //           {
 * //             GranteeType: "STRING_VALUE",
 * //             Grantee: "STRING_VALUE",
 * //             Access: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPipelinesCommandInput - {@link ListPipelinesCommandInput}
 * @returns {@link ListPipelinesCommandOutput}
 * @see {@link ListPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListPipelinesCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request was not signed correctly.</p>
 *
 * @throws {@link IncompatibleVersionException} (client fault)
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 * @throws {@link ElasticTranscoderServiceException}
 * <p>Base exception class for all service exceptions from ElasticTranscoder service.</p>
 *
 *
 * @public
 */
export class ListPipelinesCommand extends $Command
  .classBuilder<
    ListPipelinesCommandInput,
    ListPipelinesCommandOutput,
    ElasticTranscoderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticTranscoderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EtsCustomerService", "ListPipelines", {})
  .n("ElasticTranscoderClient", "ListPipelinesCommand")
  .sc(ListPipelines)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPipelinesRequest;
      output: ListPipelinesResponse;
    };
    sdk: {
      input: ListPipelinesCommandInput;
      output: ListPipelinesCommandOutput;
    };
  };
}
