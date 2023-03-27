// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  StartFraudsterRegistrationJobRequest,
  StartFraudsterRegistrationJobRequestFilterSensitiveLog,
  StartFraudsterRegistrationJobResponse,
  StartFraudsterRegistrationJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0StartFraudsterRegistrationJobCommand,
  serializeAws_json1_0StartFraudsterRegistrationJobCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 *
 * The input for {@link StartFraudsterRegistrationJobCommand}.
 */
export interface StartFraudsterRegistrationJobCommandInput extends StartFraudsterRegistrationJobRequest {}
/**
 * @public
 *
 * The output of {@link StartFraudsterRegistrationJobCommand}.
 */
export interface StartFraudsterRegistrationJobCommandOutput
  extends StartFraudsterRegistrationJobResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Starts a new batch fraudster registration job using provided details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, StartFraudsterRegistrationJobCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, StartFraudsterRegistrationJobCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const input = {
 *   ClientToken: "STRING_VALUE",
 *   JobName: "STRING_VALUE",
 *   DomainId: "STRING_VALUE", // required
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   RegistrationConfig: {
 *     DuplicateRegistrationAction: "STRING_VALUE",
 *     FraudsterSimilarityThreshold: Number("int"),
 *     WatchlistIds: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   InputDataConfig: {
 *     S3Uri: "STRING_VALUE", // required
 *   },
 *   OutputDataConfig: {
 *     S3Uri: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *   },
 * };
 * const command = new StartFraudsterRegistrationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartFraudsterRegistrationJobCommandInput - {@link StartFraudsterRegistrationJobCommandInput}
 * @returns {@link StartFraudsterRegistrationJobCommandOutput}
 * @see {@link StartFraudsterRegistrationJobCommandInput} for command's `input` shape.
 * @see {@link StartFraudsterRegistrationJobCommandOutput} for command's `response` shape.
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
 *
 */
export class StartFraudsterRegistrationJobCommand extends $Command<
  StartFraudsterRegistrationJobCommandInput,
  StartFraudsterRegistrationJobCommandOutput,
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
  constructor(readonly input: StartFraudsterRegistrationJobCommandInput) {
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
  ): Handler<StartFraudsterRegistrationJobCommandInput, StartFraudsterRegistrationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartFraudsterRegistrationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VoiceIDClient";
    const commandName = "StartFraudsterRegistrationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartFraudsterRegistrationJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartFraudsterRegistrationJobResponseFilterSensitiveLog,
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
  private serialize(input: StartFraudsterRegistrationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0StartFraudsterRegistrationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartFraudsterRegistrationJobCommandOutput> {
    return deserializeAws_json1_0StartFraudsterRegistrationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
