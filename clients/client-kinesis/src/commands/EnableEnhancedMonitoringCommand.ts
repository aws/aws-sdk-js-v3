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

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import {
  EnableEnhancedMonitoringInput,
  EnableEnhancedMonitoringInputFilterSensitiveLog,
  EnhancedMonitoringOutput,
  EnhancedMonitoringOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1EnableEnhancedMonitoringCommand,
  serializeAws_json1_1EnableEnhancedMonitoringCommand,
} from "../protocols/Aws_json1_1";

export interface EnableEnhancedMonitoringCommandInput extends EnableEnhancedMonitoringInput {}
export interface EnableEnhancedMonitoringCommandOutput extends EnhancedMonitoringOutput, __MetadataBearer {}

/**
 * <p>Enables enhanced Kinesis data stream monitoring for shard-level metrics.</p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, EnableEnhancedMonitoringCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, EnableEnhancedMonitoringCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new EnableEnhancedMonitoringCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableEnhancedMonitoringCommandInput} for command's `input` shape.
 * @see {@link EnableEnhancedMonitoringCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 */
export class EnableEnhancedMonitoringCommand extends $Command<
  EnableEnhancedMonitoringCommandInput,
  EnableEnhancedMonitoringCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      OperationType: { type: "staticContextParams", value: `control` },
      StreamARN: { type: "contextParams", name: "StreamARN" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: EnableEnhancedMonitoringCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableEnhancedMonitoringCommandInput, EnableEnhancedMonitoringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableEnhancedMonitoringCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "EnableEnhancedMonitoringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableEnhancedMonitoringInputFilterSensitiveLog,
      outputFilterSensitiveLog: EnhancedMonitoringOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableEnhancedMonitoringCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableEnhancedMonitoringCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableEnhancedMonitoringCommandOutput> {
    return deserializeAws_json1_1EnableEnhancedMonitoringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
