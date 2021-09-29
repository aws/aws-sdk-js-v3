import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DescribeJobLogItemsRequest, DescribeJobLogItemsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeJobLogItemsCommand,
  serializeAws_restJson1DescribeJobLogItemsCommand,
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

export interface DescribeJobLogItemsCommandInput extends DescribeJobLogItemsRequest {}
export interface DescribeJobLogItemsCommandOutput extends DescribeJobLogItemsResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed Job log with paging.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeJobLogItemsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeJobLogItemsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DescribeJobLogItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobLogItemsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobLogItemsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeJobLogItemsCommand extends $Command<
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
  MgnClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeJobLogItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobLogItemsCommandInput, DescribeJobLogItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DescribeJobLogItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJobLogItemsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeJobLogItemsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJobLogItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeJobLogItemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobLogItemsCommandOutput> {
    return deserializeAws_restJson1DescribeJobLogItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
