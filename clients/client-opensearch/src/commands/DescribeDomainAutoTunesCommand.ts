import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { DescribeDomainAutoTunesRequest, DescribeDomainAutoTunesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDomainAutoTunesCommand,
  serializeAws_restJson1DescribeDomainAutoTunesCommand,
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

export interface DescribeDomainAutoTunesCommandInput extends DescribeDomainAutoTunesRequest {}
export interface DescribeDomainAutoTunesCommandOutput extends DescribeDomainAutoTunesResponse, __MetadataBearer {}

/**
 * <p>Provides scheduled Auto-Tune action details for the domain, such as Auto-Tune action type,
 *       description, severity, and scheduled date.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeDomainAutoTunesCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeDomainAutoTunesCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new DescribeDomainAutoTunesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDomainAutoTunesCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainAutoTunesCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDomainAutoTunesCommand extends $Command<
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDomainAutoTunesCommandInput) {
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
  ): Handler<DescribeDomainAutoTunesCommandInput, DescribeDomainAutoTunesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "DescribeDomainAutoTunesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDomainAutoTunesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDomainAutoTunesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDomainAutoTunesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDomainAutoTunesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDomainAutoTunesCommandOutput> {
    return deserializeAws_restJson1DescribeDomainAutoTunesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
