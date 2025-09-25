// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { GetMetadataTransferJobRequest, GetMetadataTransferJobResponse } from "../models/models_0";
import { GetMetadataTransferJob } from "../schemas/schemas_14_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMetadataTransferJobCommand}.
 */
export interface GetMetadataTransferJobCommandInput extends GetMetadataTransferJobRequest {}
/**
 * @public
 *
 * The output of {@link GetMetadataTransferJobCommand}.
 */
export interface GetMetadataTransferJobCommandOutput extends GetMetadataTransferJobResponse, __MetadataBearer {}

/**
 * <p>Gets a nmetadata transfer job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetMetadataTransferJobCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetMetadataTransferJobCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetMetadataTransferJobRequest
 *   metadataTransferJobId: "STRING_VALUE", // required
 * };
 * const command = new GetMetadataTransferJobCommand(input);
 * const response = await client.send(command);
 * // { // GetMetadataTransferJobResponse
 * //   metadataTransferJobId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   sources: [ // SourceConfigurations // required
 * //     { // SourceConfiguration
 * //       type: "STRING_VALUE", // required
 * //       s3Configuration: { // S3SourceConfiguration
 * //         location: "STRING_VALUE", // required
 * //       },
 * //       iotSiteWiseConfiguration: { // IotSiteWiseSourceConfiguration
 * //         filters: [ // IotSiteWiseSourceConfigurationFilters
 * //           { // IotSiteWiseSourceConfigurationFilter Union: only one key present
 * //             filterByAssetModel: { // FilterByAssetModel
 * //               assetModelId: "STRING_VALUE",
 * //               assetModelExternalId: "STRING_VALUE",
 * //               includeOffspring: true || false,
 * //               includeAssets: true || false,
 * //             },
 * //             filterByAsset: { // FilterByAsset
 * //               assetId: "STRING_VALUE",
 * //               assetExternalId: "STRING_VALUE",
 * //               includeOffspring: true || false,
 * //               includeAssetModel: true || false,
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       iotTwinMakerConfiguration: { // IotTwinMakerSourceConfiguration
 * //         workspace: "STRING_VALUE", // required
 * //         filters: [ // IotTwinMakerSourceConfigurationFilters
 * //           { // IotTwinMakerSourceConfigurationFilter Union: only one key present
 * //             filterByComponentType: { // FilterByComponentType
 * //               componentTypeId: "STRING_VALUE", // required
 * //             },
 * //             filterByEntity: { // FilterByEntity
 * //               entityId: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   destination: { // DestinationConfiguration
 * //     type: "STRING_VALUE", // required
 * //     s3Configuration: { // S3DestinationConfiguration
 * //       location: "STRING_VALUE", // required
 * //     },
 * //     iotTwinMakerConfiguration: { // IotTwinMakerDestinationConfiguration
 * //       workspace: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   metadataTransferJobRole: "STRING_VALUE", // required
 * //   reportUrl: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * //   status: { // MetadataTransferJobStatus
 * //     state: "STRING_VALUE",
 * //     error: { // ErrorDetails
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //     queuedPosition: Number("int"),
 * //   },
 * //   progress: { // MetadataTransferJobProgress
 * //     totalCount: Number("int"),
 * //     succeededCount: Number("int"),
 * //     skippedCount: Number("int"),
 * //     failedCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMetadataTransferJobCommandInput - {@link GetMetadataTransferJobCommandInput}
 * @returns {@link GetMetadataTransferJobCommandOutput}
 * @see {@link GetMetadataTransferJobCommandInput} for command's `input` shape.
 * @see {@link GetMetadataTransferJobCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 *
 * @public
 */
export class GetMetadataTransferJobCommand extends $Command
  .classBuilder<
    GetMetadataTransferJobCommandInput,
    GetMetadataTransferJobCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "GetMetadataTransferJob", {})
  .n("IoTTwinMakerClient", "GetMetadataTransferJobCommand")
  .sc(GetMetadataTransferJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMetadataTransferJobRequest;
      output: GetMetadataTransferJobResponse;
    };
    sdk: {
      input: GetMetadataTransferJobCommandInput;
      output: GetMetadataTransferJobCommandOutput;
    };
  };
}
