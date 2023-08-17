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

import {
  DescribeSpeakerEnrollmentJobRequest,
  DescribeSpeakerEnrollmentJobResponse,
  DescribeSpeakerEnrollmentJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeSpeakerEnrollmentJobCommand,
  se_DescribeSpeakerEnrollmentJobCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSpeakerEnrollmentJobCommand}.
 */
export interface DescribeSpeakerEnrollmentJobCommandInput extends DescribeSpeakerEnrollmentJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSpeakerEnrollmentJobCommand}.
 */
export interface DescribeSpeakerEnrollmentJobCommandOutput
  extends DescribeSpeakerEnrollmentJobResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified speaker enrollment job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, DescribeSpeakerEnrollmentJobCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, DescribeSpeakerEnrollmentJobCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const input = { // DescribeSpeakerEnrollmentJobRequest
 *   DomainId: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSpeakerEnrollmentJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSpeakerEnrollmentJobResponse
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
 * @param DescribeSpeakerEnrollmentJobCommandInput - {@link DescribeSpeakerEnrollmentJobCommandInput}
 * @returns {@link DescribeSpeakerEnrollmentJobCommandOutput}
 * @see {@link DescribeSpeakerEnrollmentJobCommandInput} for command's `input` shape.
 * @see {@link DescribeSpeakerEnrollmentJobCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Check the error message
 *             and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unknown error on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the <code>ResourceType</code> and error
 *             message for more details.</p>
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
export class DescribeSpeakerEnrollmentJobCommand extends $Command<
  DescribeSpeakerEnrollmentJobCommandInput,
  DescribeSpeakerEnrollmentJobCommandOutput,
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
  constructor(readonly input: DescribeSpeakerEnrollmentJobCommandInput) {
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
  ): Handler<DescribeSpeakerEnrollmentJobCommandInput, DescribeSpeakerEnrollmentJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSpeakerEnrollmentJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VoiceIDClient";
    const commandName = "DescribeSpeakerEnrollmentJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeSpeakerEnrollmentJobResponseFilterSensitiveLog,
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
  private serialize(input: DescribeSpeakerEnrollmentJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSpeakerEnrollmentJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSpeakerEnrollmentJobCommandOutput> {
    return de_DescribeSpeakerEnrollmentJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
