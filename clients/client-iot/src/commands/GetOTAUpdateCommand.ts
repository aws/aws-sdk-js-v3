// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetOTAUpdateRequest, GetOTAUpdateResponse } from "../models/models_1";
import { GetOTAUpdate } from "../schemas/schemas_25_Version";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOTAUpdateCommand}.
 */
export interface GetOTAUpdateCommandInput extends GetOTAUpdateRequest {}
/**
 * @public
 *
 * The output of {@link GetOTAUpdateCommand}.
 */
export interface GetOTAUpdateCommandOutput extends GetOTAUpdateResponse, __MetadataBearer {}

/**
 * <p>Gets an OTA update.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetOTAUpdate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetOTAUpdateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetOTAUpdateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // GetOTAUpdateRequest
 *   otaUpdateId: "STRING_VALUE", // required
 * };
 * const command = new GetOTAUpdateCommand(input);
 * const response = await client.send(command);
 * // { // GetOTAUpdateResponse
 * //   otaUpdateInfo: { // OTAUpdateInfo
 * //     otaUpdateId: "STRING_VALUE",
 * //     otaUpdateArn: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //     description: "STRING_VALUE",
 * //     targets: [ // Targets
 * //       "STRING_VALUE",
 * //     ],
 * //     protocols: [ // Protocols
 * //       "MQTT" || "HTTP",
 * //     ],
 * //     awsJobExecutionsRolloutConfig: { // AwsJobExecutionsRolloutConfig
 * //       maximumPerMinute: Number("int"),
 * //       exponentialRate: { // AwsJobExponentialRolloutRate
 * //         baseRatePerMinute: Number("int"), // required
 * //         incrementFactor: Number("double"), // required
 * //         rateIncreaseCriteria: { // AwsJobRateIncreaseCriteria
 * //           numberOfNotifiedThings: Number("int"),
 * //           numberOfSucceededThings: Number("int"),
 * //         },
 * //       },
 * //     },
 * //     awsJobPresignedUrlConfig: { // AwsJobPresignedUrlConfig
 * //       expiresInSec: Number("long"),
 * //     },
 * //     targetSelection: "CONTINUOUS" || "SNAPSHOT",
 * //     otaUpdateFiles: [ // OTAUpdateFiles
 * //       { // OTAUpdateFile
 * //         fileName: "STRING_VALUE",
 * //         fileType: Number("int"),
 * //         fileVersion: "STRING_VALUE",
 * //         fileLocation: { // FileLocation
 * //           stream: { // Stream
 * //             streamId: "STRING_VALUE",
 * //             fileId: Number("int"),
 * //           },
 * //           s3Location: { // S3Location
 * //             bucket: "STRING_VALUE",
 * //             key: "STRING_VALUE",
 * //             version: "STRING_VALUE",
 * //           },
 * //         },
 * //         codeSigning: { // CodeSigning
 * //           awsSignerJobId: "STRING_VALUE",
 * //           startSigningJobParameter: { // StartSigningJobParameter
 * //             signingProfileParameter: { // SigningProfileParameter
 * //               certificateArn: "STRING_VALUE",
 * //               platform: "STRING_VALUE",
 * //               certificatePathOnDevice: "STRING_VALUE",
 * //             },
 * //             signingProfileName: "STRING_VALUE",
 * //             destination: { // Destination
 * //               s3Destination: { // S3Destination
 * //                 bucket: "STRING_VALUE",
 * //                 prefix: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //           customCodeSigning: { // CustomCodeSigning
 * //             signature: { // CodeSigningSignature
 * //               inlineDocument: new Uint8Array(),
 * //             },
 * //             certificateChain: { // CodeSigningCertificateChain
 * //               certificateName: "STRING_VALUE",
 * //               inlineDocument: "STRING_VALUE",
 * //             },
 * //             hashAlgorithm: "STRING_VALUE",
 * //             signatureAlgorithm: "STRING_VALUE",
 * //           },
 * //         },
 * //         attributes: { // AttributesMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     otaUpdateStatus: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
 * //     awsIotJobId: "STRING_VALUE",
 * //     awsIotJobArn: "STRING_VALUE",
 * //     errorInfo: { // ErrorInfo
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //     additionalParameters: { // AdditionalParameterMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOTAUpdateCommandInput - {@link GetOTAUpdateCommandInput}
 * @returns {@link GetOTAUpdateCommandOutput}
 * @see {@link GetOTAUpdateCommandInput} for command's `input` shape.
 * @see {@link GetOTAUpdateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class GetOTAUpdateCommand extends $Command
  .classBuilder<
    GetOTAUpdateCommandInput,
    GetOTAUpdateCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "GetOTAUpdate", {})
  .n("IoTClient", "GetOTAUpdateCommand")
  .sc(GetOTAUpdate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOTAUpdateRequest;
      output: GetOTAUpdateResponse;
    };
    sdk: {
      input: GetOTAUpdateCommandInput;
      output: GetOTAUpdateCommandOutput;
    };
  };
}
