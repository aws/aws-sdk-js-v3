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
  StopTextTranslationJobRequest,
  StopTextTranslationJobRequestFilterSensitiveLog,
  StopTextTranslationJobResponse,
  StopTextTranslationJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StopTextTranslationJobCommand,
  serializeAws_json1_1StopTextTranslationJobCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

export interface StopTextTranslationJobCommandInput extends StopTextTranslationJobRequest {}
export interface StopTextTranslationJobCommandOutput extends StopTextTranslationJobResponse, __MetadataBearer {}

/**
 * <p>Stops an asynchronous batch translation job that is in progress.</p>
 *          <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and
 *       put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped,
 *       it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the
 *         <code>STOPPED</code> state.</p>
 *          <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a>
 *       operations to get a batch translation job's <code>JobId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, StopTextTranslationJobCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, StopTextTranslationJobCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new StopTextTranslationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopTextTranslationJobCommandInput} for command's `input` shape.
 * @see {@link StopTextTranslationJobCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 */
export class StopTextTranslationJobCommand extends $Command<
  StopTextTranslationJobCommandInput,
  StopTextTranslationJobCommandOutput,
  TranslateClientResolvedConfig
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

  constructor(readonly input: StopTextTranslationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopTextTranslationJobCommandInput, StopTextTranslationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopTextTranslationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "StopTextTranslationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopTextTranslationJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopTextTranslationJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopTextTranslationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopTextTranslationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopTextTranslationJobCommandOutput> {
    return deserializeAws_json1_1StopTextTranslationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
