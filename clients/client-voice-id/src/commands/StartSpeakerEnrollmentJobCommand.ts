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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  StartSpeakerEnrollmentJobRequest,
  StartSpeakerEnrollmentJobRequestFilterSensitiveLog,
  StartSpeakerEnrollmentJobResponse,
  StartSpeakerEnrollmentJobResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartSpeakerEnrollmentJobCommand, se_StartSpeakerEnrollmentJobCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSpeakerEnrollmentJobCommand}.
 */
export interface StartSpeakerEnrollmentJobCommandInput extends StartSpeakerEnrollmentJobRequest {}
/**
 * @public
 *
 * The output of {@link StartSpeakerEnrollmentJobCommand}.
 */
export interface StartSpeakerEnrollmentJobCommandOutput extends StartSpeakerEnrollmentJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a new batch speaker enrollment job using specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, StartSpeakerEnrollmentJobCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, StartSpeakerEnrollmentJobCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const input = { // StartSpeakerEnrollmentJobRequest
 *   ClientToken: "STRING_VALUE",
 *   JobName: "STRING_VALUE",
 *   DomainId: "STRING_VALUE", // required
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   EnrollmentConfig: { // EnrollmentConfig
 *     ExistingEnrollmentAction: "STRING_VALUE",
 *     FraudDetectionConfig: { // EnrollmentJobFraudDetectionConfig
 *       FraudDetectionAction: "STRING_VALUE",
 *       RiskThreshold: Number("int"),
 *       WatchlistIds: [ // EnrollmentJobFraudDetectionConfigWatchlistIds
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   InputDataConfig: { // InputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *   },
 *   OutputDataConfig: { // OutputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *   },
 * };
 * const command = new StartSpeakerEnrollmentJobCommand(input);
 * const response = await client.send(command);
 * // { // StartSpeakerEnrollmentJobResponse
 * //   Job: { // SpeakerEnrollmentJob
 * //     JobName: "STRING_VALUE",
 * //     JobId: "STRING_VALUE",
 * //     JobStatus: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     EnrollmentConfig: { // EnrollmentConfig
 * //       ExistingEnrollmentAction: "STRING_VALUE",
 * //       FraudDetectionConfig: { // EnrollmentJobFraudDetectionConfig
 * //         FraudDetectionAction: "STRING_VALUE",
 * //         RiskThreshold: Number("int"),
 * //         WatchlistIds: [ // EnrollmentJobFraudDetectionConfigWatchlistIds
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     InputDataConfig: { // InputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //     },
 * //     OutputDataConfig: { // OutputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     EndedAt: new Date("TIMESTAMP"),
 * //     FailureDetails: { // FailureDetails
 * //       StatusCode: Number("int"),
 * //       Message: "STRING_VALUE",
 * //     },
 * //     JobProgress: { // JobProgress
 * //       PercentComplete: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartSpeakerEnrollmentJobCommandInput - {@link StartSpeakerEnrollmentJobCommandInput}
 * @returns {@link StartSpeakerEnrollmentJobCommandOutput}
 * @see {@link StartSpeakerEnrollmentJobCommandInput} for command's `input` shape.
 * @see {@link StartSpeakerEnrollmentJobCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Check the error message
 *             and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed due to a conflict. Check the <code>ConflictType</code> and error
 *             message for more details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unknown error on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the <code>ResourceType</code> and error
 *             message for more details.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded the service quota. Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#voiceid-quotas">Voice ID Service Quotas</a> and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please slow down your request rate.
 *             Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html##voiceid-api-quotas">
 *                 Amazon Connect Voice ID Service API throttling quotas </a> and try your
 *             request again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed one or more validations; check the error message for more
 *             details.</p>
 *
 * @throws {@link VoiceIDServiceException}
 * <p>Base exception class for all service exceptions from VoiceID service.</p>
 *
 */
export class StartSpeakerEnrollmentJobCommand extends $Command<
  StartSpeakerEnrollmentJobCommandInput,
  StartSpeakerEnrollmentJobCommandOutput,
  VoiceIDClientResolvedConfig
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
  constructor(readonly input: StartSpeakerEnrollmentJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: VoiceIDClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSpeakerEnrollmentJobCommandInput, StartSpeakerEnrollmentJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSpeakerEnrollmentJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VoiceIDClient";
    const commandName = "StartSpeakerEnrollmentJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSpeakerEnrollmentJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartSpeakerEnrollmentJobResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "VoiceID",
        operation: "StartSpeakerEnrollmentJob",
      },
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
  private serialize(input: StartSpeakerEnrollmentJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartSpeakerEnrollmentJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartSpeakerEnrollmentJobCommandOutput> {
    return de_StartSpeakerEnrollmentJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
