import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DescribeCommentsRequest, DescribeCommentsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeCommentsCommand,
  serializeAws_restJson1DescribeCommentsCommand,
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

export interface DescribeCommentsCommandInput extends DescribeCommentsRequest {}
export interface DescribeCommentsCommandOutput extends DescribeCommentsResponse, __MetadataBearer {}

/**
 * <p>List all the comments for the specified document version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeCommentsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeCommentsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeCommentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCommentsCommandInput} for command's `input` shape.
 * @see {@link DescribeCommentsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeCommentsCommand extends $Command<
  DescribeCommentsCommandInput,
  DescribeCommentsCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCommentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCommentsCommandInput, DescribeCommentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "DescribeCommentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCommentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCommentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCommentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeCommentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCommentsCommandOutput> {
    return deserializeAws_restJson1DescribeCommentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
