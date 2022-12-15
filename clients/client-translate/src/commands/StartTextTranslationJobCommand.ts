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
  StartTextTranslationJobRequest,
  StartTextTranslationJobRequestFilterSensitiveLog,
  StartTextTranslationJobResponse,
  StartTextTranslationJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartTextTranslationJobCommand,
  serializeAws_json1_1StartTextTranslationJobCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

export interface StartTextTranslationJobCommandInput extends StartTextTranslationJobRequest {}
export interface StartTextTranslationJobCommandOutput extends StartTextTranslationJobResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous batch translation job. Use batch translation jobs to
 *       translate large volumes of text across multiple documents at once.
 *       For batch translation, you can input documents with different source languages (specify <code>auto</code>
 *       as the source language). You can specify one
 *       or more target languages. Batch translation translates each input document into each of the target languages.
 *       For more information, see
 *       <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p>
 *
 *          <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, StartTextTranslationJobCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, StartTextTranslationJobCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new StartTextTranslationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTextTranslationJobCommandInput} for command's `input` shape.
 * @see {@link StartTextTranslationJobCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 */
export class StartTextTranslationJobCommand extends $Command<
  StartTextTranslationJobCommandInput,
  StartTextTranslationJobCommandOutput,
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

  constructor(readonly input: StartTextTranslationJobCommandInput) {
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
  ): Handler<StartTextTranslationJobCommandInput, StartTextTranslationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartTextTranslationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "StartTextTranslationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartTextTranslationJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartTextTranslationJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartTextTranslationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartTextTranslationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTextTranslationJobCommandOutput> {
    return deserializeAws_json1_1StartTextTranslationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
