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
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import {
  ListPipelinesRequest,
  ListPipelinesRequestFilterSensitiveLog,
  ListPipelinesResponse,
  ListPipelinesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListPipelinesCommand,
  serializeAws_restJson1ListPipelinesCommand,
} from "../protocols/Aws_restJson1";

export interface ListPipelinesCommandInput extends ListPipelinesRequest {}
export interface ListPipelinesCommandOutput extends ListPipelinesResponse, __MetadataBearer {}

/**
 * <p>The ListPipelines operation gets a list of the pipelines associated with the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ListPipelinesCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ListPipelinesCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new ListPipelinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListPipelinesCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 */
export class ListPipelinesCommand extends $Command<
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
  ElasticTranscoderClientResolvedConfig
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

  constructor(readonly input: ListPipelinesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPipelinesCommandInput, ListPipelinesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListPipelinesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "ListPipelinesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPipelinesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPipelinesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPipelinesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPipelinesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPipelinesCommandOutput> {
    return deserializeAws_restJson1ListPipelinesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
