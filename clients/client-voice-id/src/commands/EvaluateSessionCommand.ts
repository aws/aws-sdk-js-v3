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
  EvaluateSessionRequest,
  EvaluateSessionResponse,
  EvaluateSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_EvaluateSessionCommand, se_EvaluateSessionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EvaluateSessionCommand}.
 */
export interface EvaluateSessionCommandInput extends EvaluateSessionRequest {}
/**
 * @public
 *
 * The output of {@link EvaluateSessionCommand}.
 */
export interface EvaluateSessionCommandOutput extends EvaluateSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Evaluates a specified session based on audio data accumulated during a streaming
 *             Amazon Connect Voice ID call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, EvaluateSessionCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, EvaluateSessionCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const input = { // EvaluateSessionRequest
 *   DomainId: "STRING_VALUE", // required
 *   SessionNameOrId: "STRING_VALUE", // required
 * };
 * const command = new EvaluateSessionCommand(input);
 * const response = await client.send(command);
 * // { // EvaluateSessionResponse
 * //   DomainId: "STRING_VALUE",
 * //   SessionId: "STRING_VALUE",
 * //   SessionName: "STRING_VALUE",
 * //   StreamingStatus: "STRING_VALUE",
 * //   AuthenticationResult: { // AuthenticationResult
 * //     AuthenticationResultId: "STRING_VALUE",
 * //     AudioAggregationStartedAt: new Date("TIMESTAMP"),
 * //     AudioAggregationEndedAt: new Date("TIMESTAMP"),
 * //     CustomerSpeakerId: "STRING_VALUE",
 * //     GeneratedSpeakerId: "STRING_VALUE",
 * //     Decision: "STRING_VALUE",
 * //     Score: Number("int"),
 * //     Configuration: { // AuthenticationConfiguration
 * //       AcceptanceThreshold: Number("int"), // required
 * //     },
 * //   },
 * //   FraudDetectionResult: { // FraudDetectionResult
 * //     FraudDetectionResultId: "STRING_VALUE",
 * //     AudioAggregationStartedAt: new Date("TIMESTAMP"),
 * //     AudioAggregationEndedAt: new Date("TIMESTAMP"),
 * //     Configuration: { // FraudDetectionConfiguration
 * //       RiskThreshold: Number("int"),
 * //       WatchlistId: "STRING_VALUE",
 * //     },
 * //     Decision: "STRING_VALUE",
 * //     Reasons: [ // FraudDetectionReasons
 * //       "STRING_VALUE",
 * //     ],
 * //     RiskDetails: { // FraudRiskDetails
 * //       KnownFraudsterRisk: { // KnownFraudsterRisk
 * //         RiskScore: Number("int"), // required
 * //         GeneratedFraudsterId: "STRING_VALUE",
 * //       },
 * //       VoiceSpoofingRisk: { // VoiceSpoofingRisk
 * //         RiskScore: Number("int"), // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param EvaluateSessionCommandInput - {@link EvaluateSessionCommandInput}
 * @returns {@link EvaluateSessionCommandOutput}
 * @see {@link EvaluateSessionCommandInput} for command's `input` shape.
 * @see {@link EvaluateSessionCommandOutput} for command's `response` shape.
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
export class EvaluateSessionCommand extends $Command<
  EvaluateSessionCommandInput,
  EvaluateSessionCommandOutput,
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
  constructor(readonly input: EvaluateSessionCommandInput) {
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
  ): Handler<EvaluateSessionCommandInput, EvaluateSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EvaluateSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VoiceIDClient";
    const commandName = "EvaluateSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: EvaluateSessionResponseFilterSensitiveLog,
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
  private serialize(input: EvaluateSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EvaluateSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EvaluateSessionCommandOutput> {
    return de_EvaluateSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
