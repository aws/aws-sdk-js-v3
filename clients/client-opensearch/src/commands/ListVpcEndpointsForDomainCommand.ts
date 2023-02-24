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
  ListVpcEndpointsForDomainRequest,
  ListVpcEndpointsForDomainRequestFilterSensitiveLog,
  ListVpcEndpointsForDomainResponse,
  ListVpcEndpointsForDomainResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  deserializeAws_restJson1ListVpcEndpointsForDomainCommand,
  serializeAws_restJson1ListVpcEndpointsForDomainCommand,
} from "../protocols/Aws_restJson1";

export interface ListVpcEndpointsForDomainCommandInput extends ListVpcEndpointsForDomainRequest {}
export interface ListVpcEndpointsForDomainCommandOutput extends ListVpcEndpointsForDomainResponse, __MetadataBearer {}

/**
 * <p>Retrieves all Amazon OpenSearch Service-managed VPC endpoints associated with a particular
 *    domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListVpcEndpointsForDomainCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListVpcEndpointsForDomainCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new ListVpcEndpointsForDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVpcEndpointsForDomainCommandInput} for command's `input` shape.
 * @see {@link ListVpcEndpointsForDomainCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 */
export class ListVpcEndpointsForDomainCommand extends $Command<
  ListVpcEndpointsForDomainCommandInput,
  ListVpcEndpointsForDomainCommandOutput,
  OpenSearchClientResolvedConfig
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

  constructor(readonly input: ListVpcEndpointsForDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVpcEndpointsForDomainCommandInput, ListVpcEndpointsForDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVpcEndpointsForDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "ListVpcEndpointsForDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVpcEndpointsForDomainRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListVpcEndpointsForDomainResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVpcEndpointsForDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListVpcEndpointsForDomainCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListVpcEndpointsForDomainCommandOutput> {
    return deserializeAws_restJson1ListVpcEndpointsForDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
