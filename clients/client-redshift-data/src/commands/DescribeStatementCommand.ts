import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";
import { DescribeStatementRequest, DescribeStatementResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeStatementCommand,
  serializeAws_json1_1DescribeStatementCommand,
} from "../protocols/Aws_json1_1";
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

export interface DescribeStatementCommandInput extends DescribeStatementRequest {}
export interface DescribeStatementCommandOutput extends DescribeStatementResponse, __MetadataBearer {}

/**
 * <p>Describes the details about a specific instance when a query was run by the Amazon Redshift Data API. The information
 *       includes when the query started, when it finished, the query status, the number of rows returned, and the SQL
 *       statement. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, DescribeStatementCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, DescribeStatementCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new DescribeStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStatementCommandInput} for command's `input` shape.
 * @see {@link DescribeStatementCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeStatementCommand extends $Command<
  DescribeStatementCommandInput,
  DescribeStatementCommandOutput,
  RedshiftDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStatementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStatementCommandInput, DescribeStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftDataClient";
    const commandName = "DescribeStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStatementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStatementResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeStatementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStatementCommandOutput> {
    return deserializeAws_json1_1DescribeStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
