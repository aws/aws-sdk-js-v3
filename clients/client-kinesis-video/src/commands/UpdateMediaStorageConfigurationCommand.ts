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
  UpdateMediaStorageConfigurationInput,
  UpdateMediaStorageConfigurationInputFilterSensitiveLog,
  UpdateMediaStorageConfigurationOutput,
  UpdateMediaStorageConfigurationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateMediaStorageConfigurationCommand,
  serializeAws_restJson1UpdateMediaStorageConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateMediaStorageConfigurationCommandInput extends UpdateMediaStorageConfigurationInput {}
export interface UpdateMediaStorageConfigurationCommandOutput
  extends UpdateMediaStorageConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Associates a <code>SignalingChannel</code> to a stream to store the media. There are two signaling modes that
 *             can specified :</p>
 *          <ul>
 *             <li>
 *                <p>If the <code>StorageStatus</code> is disabled, no data will be stored,
 *                 and the <code>StreamARN</code> parameter will not be needed. </p>
 *             </li>
 *             <li>
 *                <p>If the <code>StorageStatus</code> is enabled, the data will be stored in the
 *                 <code>StreamARN</code> provided. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateMediaStorageConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateMediaStorageConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UpdateMediaStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMediaStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateMediaStorageConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 */
export class UpdateMediaStorageConfigurationCommand extends $Command<
  UpdateMediaStorageConfigurationCommandInput,
  UpdateMediaStorageConfigurationCommandOutput,
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

  constructor(readonly input: UpdateMediaStorageConfigurationCommandInput) {
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
  ): Handler<UpdateMediaStorageConfigurationCommandInput, UpdateMediaStorageConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMediaStorageConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "UpdateMediaStorageConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMediaStorageConfigurationInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateMediaStorageConfigurationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateMediaStorageConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateMediaStorageConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateMediaStorageConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateMediaStorageConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
