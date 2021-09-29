import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { DescribeInstanceTypeLimitsRequest, DescribeInstanceTypeLimitsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeInstanceTypeLimitsCommand,
  serializeAws_restJson1DescribeInstanceTypeLimitsCommand,
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

export interface DescribeInstanceTypeLimitsCommandInput extends DescribeInstanceTypeLimitsRequest {}
export interface DescribeInstanceTypeLimitsCommandOutput extends DescribeInstanceTypeLimitsResponse, __MetadataBearer {}

/**
 * <p>
 *       Describe the limits for a given instance type and OpenSearch or Elasticsearch version.
 *       When modifying an existing domain, specify the
 *       <code>
 *         <a>DomainName</a>
 *       </code>
 *       to see which limits you can modify.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeInstanceTypeLimitsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeInstanceTypeLimitsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new DescribeInstanceTypeLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceTypeLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceTypeLimitsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeInstanceTypeLimitsCommand extends $Command<
  DescribeInstanceTypeLimitsCommandInput,
  DescribeInstanceTypeLimitsCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceTypeLimitsCommandInput) {
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
  ): Handler<DescribeInstanceTypeLimitsCommandInput, DescribeInstanceTypeLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "DescribeInstanceTypeLimitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceTypeLimitsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceTypeLimitsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceTypeLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeInstanceTypeLimitsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceTypeLimitsCommandOutput> {
    return deserializeAws_restJson1DescribeInstanceTypeLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
