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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  BatchDetectDominantLanguageRequest,
  BatchDetectDominantLanguageRequestFilterSensitiveLog,
  BatchDetectDominantLanguageResponse,
  BatchDetectDominantLanguageResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchDetectDominantLanguageCommand,
  serializeAws_json1_1BatchDetectDominantLanguageCommand,
} from "../protocols/Aws_json1_1";

export interface BatchDetectDominantLanguageCommandInput extends BatchDetectDominantLanguageRequest {}
export interface BatchDetectDominantLanguageCommandOutput
  extends BatchDetectDominantLanguageResponse,
    __MetadataBearer {}

/**
 * <p>Determines the dominant language of the input text for a batch of documents. For a list
 *       of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectDominantLanguageCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectDominantLanguageCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new BatchDetectDominantLanguageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDetectDominantLanguageCommandInput} for command's `input` shape.
 * @see {@link BatchDetectDominantLanguageCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class BatchDetectDominantLanguageCommand extends $Command<
  BatchDetectDominantLanguageCommandInput,
  BatchDetectDominantLanguageCommandOutput,
  ComprehendClientResolvedConfig
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

  constructor(readonly input: BatchDetectDominantLanguageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDetectDominantLanguageCommandInput, BatchDetectDominantLanguageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDetectDominantLanguageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "BatchDetectDominantLanguageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDetectDominantLanguageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDetectDominantLanguageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDetectDominantLanguageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDetectDominantLanguageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDetectDominantLanguageCommandOutput> {
    return deserializeAws_json1_1BatchDetectDominantLanguageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
