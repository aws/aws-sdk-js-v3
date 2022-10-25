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
  UpdateImageGenerationConfigurationInput,
  UpdateImageGenerationConfigurationInputFilterSensitiveLog,
  UpdateImageGenerationConfigurationOutput,
  UpdateImageGenerationConfigurationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateImageGenerationConfigurationCommand,
  serializeAws_restJson1UpdateImageGenerationConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateImageGenerationConfigurationCommandInput extends UpdateImageGenerationConfigurationInput {}
export interface UpdateImageGenerationConfigurationCommandOutput
  extends UpdateImageGenerationConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Updates the <code>StreamInfo</code> and <code>ImageProcessingConfiguration</code> fields.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateImageGenerationConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateImageGenerationConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UpdateImageGenerationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateImageGenerationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateImageGenerationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 */
export class UpdateImageGenerationConfigurationCommand extends $Command<
  UpdateImageGenerationConfigurationCommandInput,
  UpdateImageGenerationConfigurationCommandOutput,
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

  constructor(readonly input: UpdateImageGenerationConfigurationCommandInput) {
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
  ): Handler<UpdateImageGenerationConfigurationCommandInput, UpdateImageGenerationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateImageGenerationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "UpdateImageGenerationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateImageGenerationConfigurationInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateImageGenerationConfigurationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateImageGenerationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateImageGenerationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateImageGenerationConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateImageGenerationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
