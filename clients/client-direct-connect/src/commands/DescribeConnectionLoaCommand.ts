// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  DescribeConnectionLoaRequest,
  DescribeConnectionLoaRequestFilterSensitiveLog,
  DescribeConnectionLoaResponse,
  DescribeConnectionLoaResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConnectionLoaCommand,
  serializeAws_json1_1DescribeConnectionLoaCommand,
} from "../protocols/Aws_json1_1";

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
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class DescribeConnectionLoaCommand extends $Command<
  DescribeConnectionLoaCommandInput,
  DescribeConnectionLoaCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConnectionLoaCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeConnectionLoaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConnectionLoaRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeConnectionLoaResponseFilterSensitiveLog,
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
