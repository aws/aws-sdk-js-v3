// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPipelineRequest, GetPipelineResponse } from "../models/models_0";
import { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { de_GetPipelineCommand, se_GetPipelineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPipelineCommand}.
 */
export interface GetPipelineCommandInput extends GetPipelineRequest {}
/**
 * @public
 *
 * The output of {@link GetPipelineCommand}.
 */
export interface GetPipelineCommandOutput extends GetPipelineResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an OpenSearch Ingestion pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, GetPipelineCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, GetPipelineCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OSISClient(config);
 * const input = { // GetPipelineRequest
 *   PipelineName: "STRING_VALUE", // required
 * };
 * const command = new GetPipelineCommand(input);
 * const response = await client.send(command);
 * // { // GetPipelineResponse
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
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPipelineCommandInput - {@link GetPipelineCommandInput}
 * @returns {@link GetPipelineCommandOutput}
 * @see {@link GetPipelineCommandInput} for command's `input` shape.
 * @see {@link GetPipelineCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetPipelineCommand extends $Command
  .classBuilder<
    GetPipelineCommandInput,
    GetPipelineCommandOutput,
    OSISClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OSISClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchIngestionService", "GetPipeline", {})
  .n("OSISClient", "GetPipelineCommand")
  .f(void 0, void 0)
  .ser(se_GetPipelineCommand)
  .de(de_GetPipelineCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPipelineRequest;
      output: GetPipelineResponse;
    };
    sdk: {
      input: GetPipelineCommandInput;
      output: GetPipelineCommandOutput;
    };
  };
}
