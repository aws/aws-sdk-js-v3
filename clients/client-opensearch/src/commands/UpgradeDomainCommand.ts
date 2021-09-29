import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { UpgradeDomainRequest, UpgradeDomainResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpgradeDomainCommand,
  serializeAws_restJson1UpgradeDomainCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpgradeDomainCommandInput extends UpgradeDomainRequest {}
export interface UpgradeDomainCommandOutput extends UpgradeDomainResponse, __MetadataBearer {}

/**
 * <p>Allows you to either upgrade your domain or perform an upgrade eligibility check to a compatible version of OpenSearch or Elasticsearch.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, UpgradeDomainCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, UpgradeDomainCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new UpgradeDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpgradeDomainCommandInput} for command's `input` shape.
 * @see {@link UpgradeDomainCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpgradeDomainCommand extends $Command<
  UpgradeDomainCommandInput,
  UpgradeDomainCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpgradeDomainCommandInput) {
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
  ): Handler<UpgradeDomainCommandInput, UpgradeDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "UpgradeDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpgradeDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpgradeDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpgradeDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpgradeDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpgradeDomainCommandOutput> {
    return deserializeAws_restJson1UpgradeDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
