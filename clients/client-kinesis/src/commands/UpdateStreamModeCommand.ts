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
import { UpdateStreamModeInput, UpdateStreamModeInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateStreamModeCommand,
  serializeAws_json1_1UpdateStreamModeCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateStreamModeCommandInput extends UpdateStreamModeInput {}
export interface UpdateStreamModeCommandOutput extends __MetadataBearer {}

/**
 * <p> Updates the capacity mode of the data stream. Currently, in Kinesis Data Streams, you
 *             can choose between an <b>on-demand</b> capacity mode and a
 *                 <b>provisioned</b> capacity mode for your data stream.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, UpdateStreamModeCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, UpdateStreamModeCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new UpdateStreamModeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStreamModeCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamModeCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 */
export class UpdateStreamModeCommand extends $Command<
  UpdateStreamModeCommandInput,
  UpdateStreamModeCommandOutput,
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

  constructor(readonly input: UpdateStreamModeCommandInput) {
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
  ): Handler<UpdateStreamModeCommandInput, UpdateStreamModeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateStreamModeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "UpdateStreamModeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateStreamModeInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateStreamModeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateStreamModeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStreamModeCommandOutput> {
    return deserializeAws_json1_1UpdateStreamModeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
