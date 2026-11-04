// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopPipelineRequest, StopPipelineResponse } from "../models/models_0";
import { StopPipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopPipelineCommand}.
 */
export interface StopPipelineCommandInput extends StopPipelineRequest {}
/**
 * @public
 *
 * The output of {@link StopPipelineCommand}.
 */
export interface StopPipelineCommandOutput extends StopPipelineResponse, __MetadataBearer {}

/**
 * Stops an OpenSearch Ingestion pipeline. For more information, see [Stopping an OpenSearch Ingestion pipeline](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/pipeline--stop-start.html#pipeline--stop).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, StopPipelineCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, StopPipelineCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * // import type { OSISClientConfig } from "@aws-sdk/client-osis";
 * const config = {}; // type is OSISClientConfig
 * const client = new OSISClient(config);
 * const input = { // StopPipelineRequest
 *   PipelineName: "STRING_VALUE", // required
 * };
 * const command = new StopPipelineCommand(input);
 * const response = await client.send(command);
 * // { // StopPipelineResponse
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
 * @param StopPipelineCommandInput - {@link StopPipelineCommandInput}
 * @returns {@link StopPipelineCommandOutput}
 * @see {@link StopPipelineCommandInput} for command's `input` shape.
 * @see {@link StopPipelineCommandOutput} for command's `response` shape.
 * @see {@link OSISClientResolvedConfig | config} for OSISClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to access the resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The client attempted to remove a resource that is currently in use.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * Exception is thrown when an operation has been disabled.
 *
 * @throws {@link InternalException} (server fault)
 *
 * The request failed because of an unknown error, exception, or failure (the failure is internal to the service).
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You attempted to access or delete a resource that does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for missing or invalid input fields.
 *
 * @throws {@link OSISServiceException}
 *
 * Base exception class for all service exceptions from OSIS service.
 *
 * @public
 */
export class StopPipelineCommand extends command<StopPipelineCommandInput, StopPipelineCommandOutput>(
  _ep0,
  _mw0,
  "StopPipeline",
  StopPipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopPipelineRequest;
      output: StopPipelineResponse;
    };
    sdk: {
      input: StopPipelineCommandInput;
      output: StopPipelineCommandOutput;
    };
  };
}
