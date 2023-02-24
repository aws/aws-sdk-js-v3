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
  StartActivityStreamRequest,
  StartActivityStreamRequestFilterSensitiveLog,
  StartActivityStreamResponse,
  StartActivityStreamResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryStartActivityStreamCommand,
  serializeAws_queryStartActivityStreamCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface StartActivityStreamCommandInput extends StartActivityStreamRequest {}
export interface StartActivityStreamCommandOutput extends StartActivityStreamResponse, __MetadataBearer {}

/**
 * <p>Starts a database activity stream to monitor activity on the database.
 *             For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">
 *                 Monitoring Amazon Aurora with Database Activity Streams</a>
 *             in the <i>Amazon Aurora User Guide</i> or
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html">
 *                 Monitoring Amazon RDS with Database Activity Streams</a>
 *             in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartActivityStreamCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartActivityStreamCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StartActivityStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartActivityStreamCommandInput} for command's `input` shape.
 * @see {@link StartActivityStreamCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class StartActivityStreamCommand extends $Command<
  StartActivityStreamCommandInput,
  StartActivityStreamCommandOutput,
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

  constructor(readonly input: StartActivityStreamCommandInput) {
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
  ): Handler<StartActivityStreamCommandInput, StartActivityStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartActivityStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StartActivityStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartActivityStreamRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartActivityStreamResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartActivityStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStartActivityStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartActivityStreamCommandOutput> {
    return deserializeAws_queryStartActivityStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
