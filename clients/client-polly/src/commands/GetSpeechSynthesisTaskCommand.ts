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

import { GetSpeechSynthesisTaskInput, GetSpeechSynthesisTaskOutput } from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import {
  deserializeAws_restJson1GetSpeechSynthesisTaskCommand,
  serializeAws_restJson1GetSpeechSynthesisTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetSpeechSynthesisTaskCommand}.
 */
export interface GetSpeechSynthesisTaskCommandInput extends GetSpeechSynthesisTaskInput {}
/**
 * @public
 *
 * The output of {@link GetSpeechSynthesisTaskCommand}.
 */
export interface GetSpeechSynthesisTaskCommandOutput extends GetSpeechSynthesisTaskOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a specific SpeechSynthesisTask object based on its TaskID.
 *       This object contains information about the given speech synthesis task,
 *       including the status of the task, and a link to the S3 bucket containing
 *       the output of the task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, GetSpeechSynthesisTaskCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, GetSpeechSynthesisTaskCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const input = {
 *   TaskId: "STRING_VALUE", // required
 * };
 * const command = new GetSpeechSynthesisTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetSpeechSynthesisTaskCommandInput - {@link GetSpeechSynthesisTaskCommandInput}
 * @returns {@link GetSpeechSynthesisTaskCommandOutput}
 * @see {@link GetSpeechSynthesisTaskCommandInput} for command's `input` shape.
 * @see {@link GetSpeechSynthesisTaskCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link InvalidTaskIdException} (client fault)
 *  <p>The provided Task ID is not valid. Please provide a valid Task ID and
 *       try again.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link SynthesisTaskNotFoundException} (client fault)
 *  <p>The Speech Synthesis task with requested Task ID cannot be
 *       found.</p>
 *
 *
 */
export class GetSpeechSynthesisTaskCommand extends $Command<
  GetSpeechSynthesisTaskCommandInput,
  GetSpeechSynthesisTaskCommandOutput,
  PollyClientResolvedConfig
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
  constructor(readonly input: GetSpeechSynthesisTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSpeechSynthesisTaskCommandInput, GetSpeechSynthesisTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSpeechSynthesisTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "GetSpeechSynthesisTaskCommand";
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
  private serialize(input: GetSpeechSynthesisTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSpeechSynthesisTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSpeechSynthesisTaskCommandOutput> {
    return deserializeAws_restJson1GetSpeechSynthesisTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
