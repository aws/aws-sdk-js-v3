// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOTAUpdateRequest, CreateOTAUpdateResponse } from "../models/models_0";
import { CreateOTAUpdate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateOTAUpdateCommand}.
 */
export interface CreateOTAUpdateCommandInput extends CreateOTAUpdateRequest {}
/**
 * @public
 *
 * The output of {@link CreateOTAUpdateCommand}.
 */
export interface CreateOTAUpdateCommandOutput extends CreateOTAUpdateResponse, __MetadataBearer {}

/**
 * Creates an IoT OTA update on a target group of things or groups.
 *
 * Requires permission to access the [CreateOTAUpdate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateOTAUpdateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateOTAUpdateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateOTAUpdateRequest
 *   otaUpdateId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   targets: [ // Targets // required
 *     "STRING_VALUE",
 *   ],
 *   protocols: [ // Protocols
 *     "MQTT" || "HTTP",
 *   ],
 *   targetSelection: "CONTINUOUS" || "SNAPSHOT",
 *   awsJobExecutionsRolloutConfig: { // AwsJobExecutionsRolloutConfig
 *     maximumPerMinute: Number("int"),
 *     exponentialRate: { // AwsJobExponentialRolloutRate
 *       baseRatePerMinute: Number("int"), // required
 *       incrementFactor: Number("double"), // required
 *       rateIncreaseCriteria: { // AwsJobRateIncreaseCriteria
 *         numberOfNotifiedThings: Number("int"),
 *         numberOfSucceededThings: Number("int"),
 *       },
 *     },
 *   },
 *   awsJobPresignedUrlConfig: { // AwsJobPresignedUrlConfig
 *     expiresInSec: Number("long"),
 *   },
 *   awsJobAbortConfig: { // AwsJobAbortConfig
 *     abortCriteriaList: [ // AwsJobAbortCriteriaList // required
 *       { // AwsJobAbortCriteria
 *         failureType: "FAILED" || "REJECTED" || "TIMED_OUT" || "ALL", // required
 *         action: "CANCEL", // required
 *         thresholdPercentage: Number("double"), // required
 *         minNumberOfExecutedThings: Number("int"), // required
 *       },
 *     ],
 *   },
 *   awsJobTimeoutConfig: { // AwsJobTimeoutConfig
 *     inProgressTimeoutInMinutes: Number("long"),
 *   },
 *   files: [ // OTAUpdateFiles // required
 *     { // OTAUpdateFile
 *       fileName: "STRING_VALUE",
 *       fileType: Number("int"),
 *       fileVersion: "STRING_VALUE",
 *       fileLocation: { // FileLocation
 *         stream: { // Stream
 *           streamId: "STRING_VALUE",
 *           fileId: Number("int"),
 *         },
 *         s3Location: { // S3Location
 *           bucket: "STRING_VALUE",
 *           key: "STRING_VALUE",
 *           version: "STRING_VALUE",
 *         },
 *       },
 *       codeSigning: { // CodeSigning
 *         awsSignerJobId: "STRING_VALUE",
 *         startSigningJobParameter: { // StartSigningJobParameter
 *           signingProfileParameter: { // SigningProfileParameter
 *             certificateArn: "STRING_VALUE",
 *             platform: "STRING_VALUE",
 *             certificatePathOnDevice: "STRING_VALUE",
 *           },
 *           signingProfileName: "STRING_VALUE",
 *           destination: { // Destination
 *             s3Destination: { // S3Destination
 *               bucket: "STRING_VALUE",
 *               prefix: "STRING_VALUE",
 *             },
 *           },
 *         },
 *         customCodeSigning: { // CustomCodeSigning
 *           signature: { // CodeSigningSignature
 *             inlineDocument: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           },
 *           certificateChain: { // CodeSigningCertificateChain
 *             certificateName: "STRING_VALUE",
 *             inlineDocument: "STRING_VALUE",
 *           },
 *           hashAlgorithm: "STRING_VALUE",
 *           signatureAlgorithm: "STRING_VALUE",
 *         },
 *       },
 *       attributes: { // AttributesMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   roleArn: "STRING_VALUE", // required
 *   additionalParameters: { // AdditionalParameterMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateOTAUpdateCommand(input);
 * const response = await client.send(command);
 * // { // CreateOTAUpdateResponse
 * //   otaUpdateId: "STRING_VALUE",
 * //   awsIotJobId: "STRING_VALUE",
 * //   otaUpdateArn: "STRING_VALUE",
 * //   awsIotJobArn: "STRING_VALUE",
 * //   otaUpdateStatus: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
 * // };
 *
 * ```
 *
 * @param CreateOTAUpdateCommandInput - {@link CreateOTAUpdateCommandInput}
 * @returns {@link CreateOTAUpdateCommandOutput}
 * @see {@link CreateOTAUpdateCommandInput} for command's `input` shape.
 * @see {@link CreateOTAUpdateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class CreateOTAUpdateCommand extends command<CreateOTAUpdateCommandInput, CreateOTAUpdateCommandOutput>(
  _ep0,
  _mw0,
  "CreateOTAUpdate",
  CreateOTAUpdate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOTAUpdateRequest;
      output: CreateOTAUpdateResponse;
    };
    sdk: {
      input: CreateOTAUpdateCommandInput;
      output: CreateOTAUpdateCommandOutput;
    };
  };
}
