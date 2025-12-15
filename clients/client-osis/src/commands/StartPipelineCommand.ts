// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartPipelineRequest, StartPipelineResponse } from "../models/models_0";
import type { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { StartPipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartPipelineCommand}.
 */
export interface StartPipelineCommandInput extends StartPipelineRequest {}
/**
 * @public
 *
 * The output of {@link StartPipelineCommand}.
 */
export interface StartPipelineCommandOutput extends StartPipelineResponse, __MetadataBearer {}

/**
 * <p>Starts an OpenSearch Ingestion pipeline. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/pipeline--stop-start.html#pipeline--start">Starting an OpenSearch Ingestion pipeline</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, StartPipelineCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, StartPipelineCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * // import type { OSISClientConfig } from "@aws-sdk/client-osis";
 * const config = {}; // type is OSISClientConfig
 * const client = new OSISClient(config);
 * const input = { // StartPipelineRequest
 *   PipelineName: "STRING_VALUE", // required
 * };
 * const command = new StartPipelineCommand(input);
 * const response = await client.send(command);
 * // { // StartPipelineResponse
 * //   Pipeline: { // Pipeline
 * //     PipelineName: "STRING_VALUE",
 * //     PipelineArn: "STRING_VALUE",
 * //     MinUnits: Number("int"),
 * //     MaxUnits: Number("int"),
 * //     Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "STARTING" || "START_FAILED" || "STOPPING" || "STOPPED",
 * //     StatusReason: { // PipelineStatusReason
 * //       Description: "STRING_VALUE",
 * //     },
 * //     PipelineConfigurationBody: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     IngestEndpointUrls: [ // IngestEndpointUrlsList
 * //       "STRING_VALUE",
 * //     ],
 * //     LogPublishingOptions: { // LogPublishingOptions
 * //       IsLoggingEnabled: true || false,
 * //       CloudWatchLogDestination: { // CloudWatchLogDestination
 * //         LogGroup: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     VpcEndpoints: [ // VpcEndpointsList
 * //       { // VpcEndpoint
 * //         VpcEndpointId: "STRING_VALUE",
 * //         VpcId: "STRING_VALUE",
 * //         VpcOptions: { // VpcOptions
 * //           SubnetIds: [ // SubnetIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //           SecurityGroupIds: [ // SecurityGroupIds
 * //             "STRING_VALUE",
 * //           ],
 * //           VpcAttachmentOptions: { // VpcAttachmentOptions
 * //             AttachToVpc: true || false, // required
 * //             CidrBlock: "STRING_VALUE",
 * //           },
 * //           VpcEndpointManagement: "CUSTOMER" || "SERVICE",
 * //         },
 * //       },
 * //     ],
 * //     BufferOptions: { // BufferOptions
 * //       PersistentBufferEnabled: true || false, // required
 * //     },
 * //     EncryptionAtRestOptions: { // EncryptionAtRestOptions
 * //       KmsKeyArn: "STRING_VALUE", // required
 * //     },
 * //     VpcEndpointService: "STRING_VALUE",
 * //     ServiceVpcEndpoints: [ // ServiceVpcEndpointsList
 * //       { // ServiceVpcEndpoint
 * //         ServiceName: "OPENSEARCH_SERVERLESS",
 * //         VpcEndpointId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Destinations: [ // PipelineDestinationList
 * //       { // PipelineDestination
 * //         ServiceName: "STRING_VALUE",
 * //         Endpoint: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     PipelineRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartPipelineCommandInput - {@link StartPipelineCommandInput}
 * @returns {@link StartPipelineCommandOutput}
 * @see {@link StartPipelineCommandInput} for command's `input` shape.
 * @see {@link StartPipelineCommandOutput} for command's `response` shape.
 * @see {@link OSISClientResolvedConfig | config} for OSISClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to access the resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The client attempted to remove a resource that is currently in use.</p>
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
export class StartPipelineCommand extends $Command
  .classBuilder<
    StartPipelineCommandInput,
    StartPipelineCommandOutput,
    OSISClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OSISClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchIngestionService", "StartPipeline", {})
  .n("OSISClient", "StartPipelineCommand")
  .sc(StartPipeline$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPipelineRequest;
      output: StartPipelineResponse;
    };
    sdk: {
      input: StartPipelineCommandInput;
      output: StartPipelineCommandOutput;
    };
  };
}
