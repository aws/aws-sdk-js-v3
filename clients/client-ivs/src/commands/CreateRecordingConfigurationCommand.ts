// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRecordingConfigurationRequest, CreateRecordingConfigurationResponse } from "../models/models_0";
import { CreateRecordingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateRecordingConfigurationCommandOutput extends CreateRecordingConfigurationResponse, __MetadataBearer {}

/**
 * Creates a new recording configuration, used to enable recording to Amazon S3.
 *
 * **Known issue:** In the us-east-1 region, if you use the Amazon Web Services CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the `state` of the recording configuration is `CREATE_FAILED` (instead of `ACTIVE`). (In other regions, the CLI correctly returns failure if the bucket is in a different region.)
 *
 * **Workaround:** Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region.
 *
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
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * Your account is pending verification.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IvsServiceException}
 *
 * Base exception class for all service exceptions from Ivs service.
 *
 * @public
 */
export class CreateRecordingConfigurationCommand extends command<CreateRecordingConfigurationCommandInput, CreateRecordingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateRecordingConfiguration",
  CreateRecordingConfiguration$
) {
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
