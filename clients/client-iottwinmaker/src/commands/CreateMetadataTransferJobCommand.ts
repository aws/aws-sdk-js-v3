// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import type { CreateMetadataTransferJobRequest, CreateMetadataTransferJobResponse } from "../models/models_0";
import { CreateMetadataTransferJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMetadataTransferJobCommand}.
 */
export interface CreateMetadataTransferJobCommandInput extends CreateMetadataTransferJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateMetadataTransferJobCommand}.
 */
export interface CreateMetadataTransferJobCommandOutput extends CreateMetadataTransferJobResponse, __MetadataBearer {}

/**
 * <p>Creates a new metadata transfer job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, CreateMetadataTransferJobCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, CreateMetadataTransferJobCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // CreateMetadataTransferJobRequest
 *   metadataTransferJobId: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   sources: [ // SourceConfigurations // required
 *     { // SourceConfiguration
 *       type: "STRING_VALUE", // required
 *       s3Configuration: { // S3SourceConfiguration
 *         location: "STRING_VALUE", // required
 *       },
 *       iotSiteWiseConfiguration: { // IotSiteWiseSourceConfiguration
 *         filters: [ // IotSiteWiseSourceConfigurationFilters
 *           { // IotSiteWiseSourceConfigurationFilter Union: only one key present
 *             filterByAssetModel: { // FilterByAssetModel
 *               assetModelId: "STRING_VALUE",
 *               assetModelExternalId: "STRING_VALUE",
 *               includeOffspring: true || false,
 *               includeAssets: true || false,
 *             },
 *             filterByAsset: { // FilterByAsset
 *               assetId: "STRING_VALUE",
 *               assetExternalId: "STRING_VALUE",
 *               includeOffspring: true || false,
 *               includeAssetModel: true || false,
 *             },
 *           },
 *         ],
 *       },
 *       iotTwinMakerConfiguration: { // IotTwinMakerSourceConfiguration
 *         workspace: "STRING_VALUE", // required
 *         filters: [ // IotTwinMakerSourceConfigurationFilters
 *           { // IotTwinMakerSourceConfigurationFilter Union: only one key present
 *             filterByComponentType: { // FilterByComponentType
 *               componentTypeId: "STRING_VALUE", // required
 *             },
 *             filterByEntity: { // FilterByEntity
 *               entityId: "STRING_VALUE", // required
 *             },
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   destination: { // DestinationConfiguration
 *     type: "STRING_VALUE", // required
 *     s3Configuration: { // S3DestinationConfiguration
 *       location: "STRING_VALUE", // required
 *     },
 *     iotTwinMakerConfiguration: { // IotTwinMakerDestinationConfiguration
 *       workspace: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateMetadataTransferJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateMetadataTransferJobResponse
 * //   metadataTransferJobId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   status: { // MetadataTransferJobStatus
 * //     state: "STRING_VALUE",
 * //     error: { // ErrorDetails
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //     queuedPosition: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMetadataTransferJobCommandInput - {@link CreateMetadataTransferJobCommandInput}
 * @returns {@link CreateMetadataTransferJobCommandOutput}
 * @see {@link CreateMetadataTransferJobCommandInput} for command's `input` shape.
 * @see {@link CreateMetadataTransferJobCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
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
export class CreateMetadataTransferJobCommand extends $Command
  .classBuilder<
    CreateMetadataTransferJobCommandInput,
    CreateMetadataTransferJobCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "CreateMetadataTransferJob", {})
  .n("IoTTwinMakerClient", "CreateMetadataTransferJobCommand")
  .sc(CreateMetadataTransferJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMetadataTransferJobRequest;
      output: CreateMetadataTransferJobResponse;
    };
    sdk: {
      input: CreateMetadataTransferJobCommandInput;
      output: CreateMetadataTransferJobCommandOutput;
    };
  };
}
