// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { CreateRecordingConfigurationRequest, CreateRecordingConfigurationResponse } from "../models/models_0";
import { CreateRecordingConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRecordingConfigurationCommand}.
 */
export interface CreateRecordingConfigurationCommandInput extends CreateRecordingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecordingConfigurationCommand}.
 */
export interface CreateRecordingConfigurationCommandOutput
  extends CreateRecordingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new recording configuration, used to enable recording to Amazon S3.</p>
 *          <p>
 *             <b>Known issue:</b> In the us-east-1 region, if you use the
 *         Amazon Web Services CLI to create a recording configuration, it returns success even if the
 *       S3 bucket is in a different region. In this case, the <code>state</code> of the recording
 *       configuration is <code>CREATE_FAILED</code> (instead of <code>ACTIVE</code>). (In other
 *       regions, the CLI correctly returns failure if the bucket is in a different region.)</p>
 *          <p>
 *             <b>Workaround:</b> Ensure that your S3 bucket is in the same
 *       region as the recording configuration. If you create a recording configuration in a different
 *       region as your S3 bucket, delete that recording configuration and create a new one with an S3
 *       bucket from the correct region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, CreateRecordingConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, CreateRecordingConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // CreateRecordingConfigurationRequest
 *   name: "STRING_VALUE",
 *   destinationConfiguration: { // DestinationConfiguration
 *     s3: { // S3DestinationConfiguration
 *       bucketName: "STRING_VALUE", // required
 *     },
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   thumbnailConfiguration: { // ThumbnailConfiguration
 *     recordingMode: "STRING_VALUE",
 *     targetIntervalSeconds: Number("long"),
 *     resolution: "SD" || "HD" || "FULL_HD" || "LOWEST_RESOLUTION",
 *     storage: [ // ThumbnailConfigurationStorageList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   recordingReconnectWindowSeconds: Number("int"),
 *   renditionConfiguration: { // RenditionConfiguration
 *     renditionSelection: "STRING_VALUE",
 *     renditions: [ // RenditionConfigurationRenditionList
 *       "SD" || "HD" || "FULL_HD" || "LOWEST_RESOLUTION",
 *     ],
 *   },
 * };
 * const command = new CreateRecordingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecordingConfigurationResponse
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
 * @param CreateRecordingConfigurationCommandInput - {@link CreateRecordingConfigurationCommandInput}
 * @returns {@link CreateRecordingConfigurationCommandOutput}
 * @see {@link CreateRecordingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateRecordingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
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
export class CreateRecordingConfigurationCommand extends $Command
  .classBuilder<
    CreateRecordingConfigurationCommandInput,
    CreateRecordingConfigurationCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "CreateRecordingConfiguration", {})
  .n("IvsClient", "CreateRecordingConfigurationCommand")
  .sc(CreateRecordingConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRecordingConfigurationRequest;
      output: CreateRecordingConfigurationResponse;
    };
    sdk: {
      input: CreateRecordingConfigurationCommandInput;
      output: CreateRecordingConfigurationCommandOutput;
    };
  };
}
