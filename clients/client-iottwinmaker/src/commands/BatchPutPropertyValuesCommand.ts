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

import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import {
  BatchPutPropertyValuesRequest,
  BatchPutPropertyValuesRequestFilterSensitiveLog,
  BatchPutPropertyValuesResponse,
  BatchPutPropertyValuesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchPutPropertyValuesCommand,
  serializeAws_restJson1BatchPutPropertyValuesCommand,
} from "../protocols/Aws_restJson1";

export interface BatchPutPropertyValuesCommandInput extends BatchPutPropertyValuesRequest {}
export interface BatchPutPropertyValuesCommandOutput extends BatchPutPropertyValuesResponse, __MetadataBearer {}

/**
 * <p>Sets values for multiple time series properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, BatchPutPropertyValuesCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, BatchPutPropertyValuesCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const command = new BatchPutPropertyValuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutPropertyValuesCommandInput} for command's `input` shape.
 * @see {@link BatchPutPropertyValuesCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 */
export class BatchPutPropertyValuesCommand extends $Command<
  BatchPutPropertyValuesCommandInput,
  BatchPutPropertyValuesCommandOutput,
  IoTTwinMakerClientResolvedConfig
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

  constructor(readonly input: BatchPutPropertyValuesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTTwinMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchPutPropertyValuesCommandInput, BatchPutPropertyValuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchPutPropertyValuesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "BatchPutPropertyValuesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchPutPropertyValuesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchPutPropertyValuesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchPutPropertyValuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchPutPropertyValuesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchPutPropertyValuesCommandOutput> {
    return deserializeAws_restJson1BatchPutPropertyValuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
