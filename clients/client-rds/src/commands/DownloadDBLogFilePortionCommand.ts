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

import {
  DownloadDBLogFilePortionDetails,
  DownloadDBLogFilePortionDetailsFilterSensitiveLog,
  DownloadDBLogFilePortionMessage,
  DownloadDBLogFilePortionMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryDownloadDBLogFilePortionCommand,
  serializeAws_queryDownloadDBLogFilePortionCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface DownloadDBLogFilePortionCommandInput extends DownloadDBLogFilePortionMessage {}
export interface DownloadDBLogFilePortionCommandOutput extends DownloadDBLogFilePortionDetails, __MetadataBearer {}

/**
 * <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DownloadDBLogFilePortionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DownloadDBLogFilePortionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DownloadDBLogFilePortionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DownloadDBLogFilePortionCommandInput} for command's `input` shape.
 * @see {@link DownloadDBLogFilePortionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class DownloadDBLogFilePortionCommand extends $Command<
  DownloadDBLogFilePortionCommandInput,
  DownloadDBLogFilePortionCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: DownloadDBLogFilePortionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DownloadDBLogFilePortionCommandInput, DownloadDBLogFilePortionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DownloadDBLogFilePortionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DownloadDBLogFilePortionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DownloadDBLogFilePortionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DownloadDBLogFilePortionDetailsFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DownloadDBLogFilePortionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDownloadDBLogFilePortionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DownloadDBLogFilePortionCommandOutput> {
    return deserializeAws_queryDownloadDBLogFilePortionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
