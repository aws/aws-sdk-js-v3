import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeConnectionLoaRequest, DescribeConnectionLoaResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConnectionLoaCommand,
  serializeAws_json1_1DescribeConnectionLoaCommand,
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

export interface DescribeConnectionLoaCommandInput extends DescribeConnectionLoaRequest {}
export interface DescribeConnectionLoaCommandOutput extends DescribeConnectionLoaResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p>
 *          <p>Gets the LOA-CFA for a connection.</p>
 *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or
 *       service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information,
 *       see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects
 *       at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeConnectionLoaCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeConnectionLoaCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeConnectionLoaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectionLoaCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionLoaCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeConnectionLoaCommand extends $Command<
  DescribeConnectionLoaCommandInput,
  DescribeConnectionLoaCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConnectionLoaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConnectionLoaCommandInput, DescribeConnectionLoaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeConnectionLoaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConnectionLoaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConnectionLoaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConnectionLoaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConnectionLoaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConnectionLoaCommandOutput> {
    return deserializeAws_json1_1DescribeConnectionLoaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
