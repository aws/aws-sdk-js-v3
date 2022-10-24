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
  BatchDetectKeyPhrasesRequest,
  BatchDetectKeyPhrasesRequestFilterSensitiveLog,
  BatchDetectKeyPhrasesResponse,
  BatchDetectKeyPhrasesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchDetectKeyPhrasesCommand,
  serializeAws_json1_1BatchDetectKeyPhrasesCommand,
} from "../protocols/Aws_json1_1";

export interface BatchDetectKeyPhrasesCommandInput extends BatchDetectKeyPhrasesRequest {}
export interface BatchDetectKeyPhrasesCommandOutput extends BatchDetectKeyPhrasesResponse, __MetadataBearer {}

/**
 * <p>Detects the key noun phrases found in a batch of documents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectKeyPhrasesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectKeyPhrasesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new BatchDetectKeyPhrasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDetectKeyPhrasesCommandInput} for command's `input` shape.
 * @see {@link BatchDetectKeyPhrasesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class BatchDetectKeyPhrasesCommand extends $Command<
  BatchDetectKeyPhrasesCommandInput,
  BatchDetectKeyPhrasesCommandOutput,
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

  constructor(readonly input: BatchDetectKeyPhrasesCommandInput) {
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
  ): Handler<BatchDetectKeyPhrasesCommandInput, BatchDetectKeyPhrasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDetectKeyPhrasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "BatchDetectKeyPhrasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDetectKeyPhrasesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDetectKeyPhrasesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDetectKeyPhrasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDetectKeyPhrasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDetectKeyPhrasesCommandOutput> {
    return deserializeAws_json1_1BatchDetectKeyPhrasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
