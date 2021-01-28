import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeLoaRequest, Loa } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeLoaCommand,
  serializeAws_json1_1DescribeLoaCommand,
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

export type DescribeLoaCommandInput = DescribeLoaRequest;
export type DescribeLoaCommandOutput = Loa & __MetadataBearer;

/**
 * <p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p>
 *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing
 *       your cross connect to AWS at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a>
 *       in the <i>AWS Direct Connect User Guide</i>.</p>
 */
export class DescribeLoaCommand extends $Command<
  DescribeLoaCommandInput,
  DescribeLoaCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLoaCommandInput) {
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
  ): Handler<DescribeLoaCommandInput, DescribeLoaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeLoaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLoaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Loa.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLoaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeLoaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLoaCommandOutput> {
    return deserializeAws_json1_1DescribeLoaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
