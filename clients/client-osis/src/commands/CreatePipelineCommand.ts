// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePipelineRequest, CreatePipelineResponse } from "../models/models_0";
import { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { de_CreatePipelineCommand, se_CreatePipelineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePipelineCommand}.
 */
export interface CreatePipelineCommandInput extends CreatePipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreatePipelineCommand}.
 */
export interface CreatePipelineCommandOutput extends CreatePipelineResponse, __MetadataBearer {}

/**
 * <p>Creates an OpenSearch Ingestion pipeline. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html">Creating Amazon OpenSearch Ingestion pipelines</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, CreatePipelineCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, CreatePipelineCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * const client = new OSISClient(config);
 * const input = { // CreatePipelineRequest
 *   PipelineName: "STRING_VALUE", // required
 *   MinUnits: Number("int"), // required
 *   MaxUnits: Number("int"), // required
 *   PipelineConfigurationBody: "STRING_VALUE", // required
 *   LogPublishingOptions: { // LogPublishingOptions
 *     IsLoggingEnabled: true || false,
 *     CloudWatchLogDestination: { // CloudWatchLogDestination
 *       LogGroup: "STRING_VALUE", // required
 *     },
 *   },
 *   VpcOptions: { // VpcOptions
 *     SubnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *     VpcAttachmentOptions: { // VpcAttachmentOptions
 *       AttachToVpc: true || false, // required
 *       CidrBlock: "STRING_VALUE",
 *     },
 *   },
 *   BufferOptions: { // BufferOptions
 *     PersistentBufferEnabled: true || false, // required
 *   },
 *   EncryptionAtRestOptions: { // EncryptionAtRestOptions
 *     KmsKeyArn: "STRING_VALUE", // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreatePipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreatePipelineResponse
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
 * //         },
 * //       },
 * //     ],
 * //     BufferOptions: { // BufferOptions
 * //       PersistentBufferEnabled: true || false, // required
 * //     },
 * //     EncryptionAtRestOptions: { // EncryptionAtRestOptions
 * //       KmsKeyArn: "STRING_VALUE", // required
 * //     },
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
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePipelineCommandInput - {@link CreatePipelineCommandInput}
 * @returns {@link CreatePipelineCommandOutput}
 * @see {@link CreatePipelineCommandInput} for command's `input` shape.
 * @see {@link CreatePipelineCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You attempted to create more than the allowed number of tags.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>You attempted to create a resource that already exists.</p>
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
 * @public
 */
export class CreatePipelineCommand extends $Command
  .classBuilder<
    CreatePipelineCommandInput,
    CreatePipelineCommandOutput,
    OSISClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OSISClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchIngestionService", "CreatePipeline", {})
  .n("OSISClient", "CreatePipelineCommand")
  .f(void 0, void 0)
  .ser(se_CreatePipelineCommand)
  .de(de_CreatePipelineCommand)
  .build() {}
