import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { DescribeJobDefinitionsRequest, DescribeJobDefinitionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeJobDefinitionsCommand,
  serializeAws_restJson1DescribeJobDefinitionsCommand,
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

export interface DescribeJobDefinitionsCommandInput extends DescribeJobDefinitionsRequest {}
export interface DescribeJobDefinitionsCommandOutput extends DescribeJobDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only
 *    return job definitions that match that status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeJobDefinitionsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeJobDefinitionsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DescribeJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeJobDefinitionsCommand extends $Command<
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput,
  BatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeJobDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobDefinitionsCommandInput, DescribeJobDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "DescribeJobDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJobDefinitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeJobDefinitionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJobDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeJobDefinitionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobDefinitionsCommandOutput> {
    return deserializeAws_restJson1DescribeJobDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
