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
  ListEntityRecognizerSummariesRequest,
  ListEntityRecognizerSummariesRequestFilterSensitiveLog,
  ListEntityRecognizerSummariesResponse,
  ListEntityRecognizerSummariesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListEntityRecognizerSummariesCommand,
  serializeAws_json1_1ListEntityRecognizerSummariesCommand,
} from "../protocols/Aws_json1_1";

export interface ListEntityRecognizerSummariesCommandInput extends ListEntityRecognizerSummariesRequest {}
export interface ListEntityRecognizerSummariesCommandOutput
  extends ListEntityRecognizerSummariesResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of summaries for the entity recognizers that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListEntityRecognizerSummariesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListEntityRecognizerSummariesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListEntityRecognizerSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEntityRecognizerSummariesCommandInput} for command's `input` shape.
 * @see {@link ListEntityRecognizerSummariesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class ListEntityRecognizerSummariesCommand extends $Command<
  ListEntityRecognizerSummariesCommandInput,
  ListEntityRecognizerSummariesCommandOutput,
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

  constructor(readonly input: ListEntityRecognizerSummariesCommandInput) {
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
  ): Handler<ListEntityRecognizerSummariesCommandInput, ListEntityRecognizerSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEntityRecognizerSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ListEntityRecognizerSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEntityRecognizerSummariesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListEntityRecognizerSummariesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEntityRecognizerSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEntityRecognizerSummariesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEntityRecognizerSummariesCommandOutput> {
    return deserializeAws_json1_1ListEntityRecognizerSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
