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

import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import {
  DescribeMediaStorageConfigurationInput,
  DescribeMediaStorageConfigurationInputFilterSensitiveLog,
  DescribeMediaStorageConfigurationOutput,
  DescribeMediaStorageConfigurationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeMediaStorageConfigurationCommand,
  serializeAws_restJson1DescribeMediaStorageConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeMediaStorageConfigurationCommandInput extends DescribeMediaStorageConfigurationInput {}
export interface DescribeMediaStorageConfigurationCommandOutput
  extends DescribeMediaStorageConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Returns the most current information about the channel. Specify the <code>ChannelName</code>
 *             or <code>ChannelARN</code> in the input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeMediaStorageConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeMediaStorageConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new DescribeMediaStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMediaStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeMediaStorageConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 */
export class DescribeMediaStorageConfigurationCommand extends $Command<
  DescribeMediaStorageConfigurationCommandInput,
  DescribeMediaStorageConfigurationCommandOutput,
  KinesisVideoClientResolvedConfig
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

  constructor(readonly input: DescribeMediaStorageConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMediaStorageConfigurationCommandInput, DescribeMediaStorageConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMediaStorageConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "DescribeMediaStorageConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMediaStorageConfigurationInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeMediaStorageConfigurationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeMediaStorageConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeMediaStorageConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMediaStorageConfigurationCommandOutput> {
    return deserializeAws_restJson1DescribeMediaStorageConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
