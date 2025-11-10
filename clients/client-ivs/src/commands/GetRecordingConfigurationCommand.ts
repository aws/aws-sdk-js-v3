// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { GetRecordingConfigurationRequest, GetRecordingConfigurationResponse } from "../models/models_0";
import { GetRecordingConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecordingConfigurationCommand}.
 */
export interface GetRecordingConfigurationCommandInput extends GetRecordingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetRecordingConfigurationCommand}.
 */
export interface GetRecordingConfigurationCommandOutput extends GetRecordingConfigurationResponse, __MetadataBearer {}

/**
 * <p>Gets the recording configuration for the specified ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetRecordingConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetRecordingConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // GetRecordingConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetRecordingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetRecordingConfigurationResponse
 * //   recordingConfiguration: { // RecordingConfiguration
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     destinationConfiguration: { // DestinationConfiguration
 * //       s3: { // S3DestinationConfiguration
 * //         bucketName: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     state: "STRING_VALUE", // required
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     thumbnailConfiguration: { // ThumbnailConfiguration
 * //       recordingMode: "STRING_VALUE",
 * //       targetIntervalSeconds: Number("long"),
 * //       resolution: "SD" || "HD" || "FULL_HD" || "LOWEST_RESOLUTION",
 * //       storage: [ // ThumbnailConfigurationStorageList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     recordingReconnectWindowSeconds: Number("int"),
 * //     renditionConfiguration: { // RenditionConfiguration
 * //       renditionSelection: "STRING_VALUE",
 * //       renditions: [ // RenditionConfigurationRenditionList
 * //         "SD" || "HD" || "FULL_HD" || "LOWEST_RESOLUTION",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRecordingConfigurationCommandInput - {@link GetRecordingConfigurationCommandInput}
 * @returns {@link GetRecordingConfigurationCommandOutput}
 * @see {@link GetRecordingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetRecordingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class GetRecordingConfigurationCommand extends $Command
  .classBuilder<
    GetRecordingConfigurationCommandInput,
    GetRecordingConfigurationCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "GetRecordingConfiguration", {})
  .n("IvsClient", "GetRecordingConfigurationCommand")
  .sc(GetRecordingConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecordingConfigurationRequest;
      output: GetRecordingConfigurationResponse;
    };
    sdk: {
      input: GetRecordingConfigurationCommandInput;
      output: GetRecordingConfigurationCommandOutput;
    };
  };
}
