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
  ListDocumentClassifierSummariesRequest,
  ListDocumentClassifierSummariesRequestFilterSensitiveLog,
  ListDocumentClassifierSummariesResponse,
  ListDocumentClassifierSummariesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListDocumentClassifierSummariesCommand,
  serializeAws_json1_1ListDocumentClassifierSummariesCommand,
} from "../protocols/Aws_json1_1";

export interface ListDocumentClassifierSummariesCommandInput extends ListDocumentClassifierSummariesRequest {}
export interface ListDocumentClassifierSummariesCommandOutput
  extends ListDocumentClassifierSummariesResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of summaries of the document classifiers that you have created</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListDocumentClassifierSummariesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListDocumentClassifierSummariesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListDocumentClassifierSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDocumentClassifierSummariesCommandInput} for command's `input` shape.
 * @see {@link ListDocumentClassifierSummariesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class ListDocumentClassifierSummariesCommand extends $Command<
  ListDocumentClassifierSummariesCommandInput,
  ListDocumentClassifierSummariesCommandOutput,
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

  constructor(readonly input: ListDocumentClassifierSummariesCommandInput) {
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
  ): Handler<ListDocumentClassifierSummariesCommandInput, ListDocumentClassifierSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDocumentClassifierSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ListDocumentClassifierSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDocumentClassifierSummariesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDocumentClassifierSummariesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDocumentClassifierSummariesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDocumentClassifierSummariesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDocumentClassifierSummariesCommandOutput> {
    return deserializeAws_json1_1ListDocumentClassifierSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
