// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateOTAUpdateRequest, CreateOTAUpdateResponse } from "../models/models_0";
import { de_CreateOTAUpdateCommand, se_CreateOTAUpdateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates an IoT OTA update on a target group of things or groups.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateOTAUpdate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateOTAUpdateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateOTAUpdateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
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
 *             inlineDocument: "BLOB_VALUE",
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
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
 */
export class CreateOTAUpdateCommand extends $Command<
  CreateOTAUpdateCommandInput,
  CreateOTAUpdateCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateOTAUpdateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOTAUpdateCommandInput, CreateOTAUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOTAUpdateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateOTAUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateOTAUpdateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateOTAUpdateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOTAUpdateCommandOutput> {
    return de_CreateOTAUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
