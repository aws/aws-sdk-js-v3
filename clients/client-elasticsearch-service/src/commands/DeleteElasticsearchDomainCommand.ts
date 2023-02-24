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
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  DeleteElasticsearchDomainRequest,
  DeleteElasticsearchDomainRequestFilterSensitiveLog,
  DeleteElasticsearchDomainResponse,
  DeleteElasticsearchDomainResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteElasticsearchDomainCommand,
  serializeAws_restJson1DeleteElasticsearchDomainCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteElasticsearchDomainCommandInput extends DeleteElasticsearchDomainRequest {}
export interface DeleteElasticsearchDomainCommandOutput extends DeleteElasticsearchDomainResponse, __MetadataBearer {}

/**
 * <p>Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeleteElasticsearchDomainCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeleteElasticsearchDomainCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DeleteElasticsearchDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteElasticsearchDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteElasticsearchDomainCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 */
export class DeleteElasticsearchDomainCommand extends $Command<
  DeleteElasticsearchDomainCommandInput,
  DeleteElasticsearchDomainCommandOutput,
  ElasticsearchServiceClientResolvedConfig
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

  constructor(readonly input: DeleteElasticsearchDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteElasticsearchDomainCommandInput, DeleteElasticsearchDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteElasticsearchDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DeleteElasticsearchDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteElasticsearchDomainRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteElasticsearchDomainResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteElasticsearchDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteElasticsearchDomainCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteElasticsearchDomainCommandOutput> {
    return deserializeAws_restJson1DeleteElasticsearchDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
