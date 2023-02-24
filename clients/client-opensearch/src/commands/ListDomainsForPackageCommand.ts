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
  ListDomainsForPackageRequest,
  ListDomainsForPackageRequestFilterSensitiveLog,
  ListDomainsForPackageResponse,
  ListDomainsForPackageResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  deserializeAws_restJson1ListDomainsForPackageCommand,
  serializeAws_restJson1ListDomainsForPackageCommand,
} from "../protocols/Aws_restJson1";

export interface ListDomainsForPackageCommandInput extends ListDomainsForPackageRequest {}
export interface ListDomainsForPackageCommandOutput extends ListDomainsForPackageResponse, __MetadataBearer {}

/**
 * <p>Lists all Amazon OpenSearch Service domains associated with a given package. For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon
 *     OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListDomainsForPackageCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListDomainsForPackageCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new ListDomainsForPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainsForPackageCommandInput} for command's `input` shape.
 * @see {@link ListDomainsForPackageCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 */
export class ListDomainsForPackageCommand extends $Command<
  ListDomainsForPackageCommandInput,
  ListDomainsForPackageCommandOutput,
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

  constructor(readonly input: ListDomainsForPackageCommandInput) {
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
  ): Handler<ListDomainsForPackageCommandInput, ListDomainsForPackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDomainsForPackageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "ListDomainsForPackageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDomainsForPackageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDomainsForPackageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDomainsForPackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDomainsForPackageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDomainsForPackageCommandOutput> {
    return deserializeAws_restJson1ListDomainsForPackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
