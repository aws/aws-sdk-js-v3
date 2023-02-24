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

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import {
  ListAnalyzedResourcesRequest,
  ListAnalyzedResourcesRequestFilterSensitiveLog,
  ListAnalyzedResourcesResponse,
  ListAnalyzedResourcesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAnalyzedResourcesCommand,
  serializeAws_restJson1ListAnalyzedResourcesCommand,
} from "../protocols/Aws_restJson1";

export interface ListAnalyzedResourcesCommandInput extends ListAnalyzedResourcesRequest {}
export interface ListAnalyzedResourcesCommandOutput extends ListAnalyzedResourcesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of resources of the specified type that have been analyzed by the
 *          specified analyzer..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListAnalyzedResourcesCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListAnalyzedResourcesCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new ListAnalyzedResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnalyzedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListAnalyzedResourcesCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 */
export class ListAnalyzedResourcesCommand extends $Command<
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput,
  AccessAnalyzerClientResolvedConfig
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

  constructor(readonly input: ListAnalyzedResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAnalyzedResourcesCommandInput, ListAnalyzedResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAnalyzedResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "ListAnalyzedResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAnalyzedResourcesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAnalyzedResourcesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAnalyzedResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAnalyzedResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAnalyzedResourcesCommandOutput> {
    return deserializeAws_restJson1ListAnalyzedResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
