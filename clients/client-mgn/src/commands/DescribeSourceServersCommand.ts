import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DescribeSourceServersRequest, DescribeSourceServersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeSourceServersCommand,
  serializeAws_restJson1DescribeSourceServersCommand,
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

export interface DescribeSourceServersCommandInput extends DescribeSourceServersRequest {}
export interface DescribeSourceServersCommandOutput extends DescribeSourceServersResponse, __MetadataBearer {}

/**
 * <p>Retrieves all SourceServers or multiple SourceServers by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeSourceServersCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeSourceServersCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DescribeSourceServersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSourceServersCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceServersCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeSourceServersCommand extends $Command<
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
  MgnClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSourceServersCommandInput) {
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
  ): Handler<DescribeSourceServersCommandInput, DescribeSourceServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DescribeSourceServersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSourceServersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSourceServersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSourceServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSourceServersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSourceServersCommandOutput> {
    return deserializeAws_restJson1DescribeSourceServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
