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
  GetPropertyValueRequest,
  GetPropertyValueRequestFilterSensitiveLog,
  GetPropertyValueResponse,
  GetPropertyValueResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetPropertyValueCommand,
  serializeAws_restJson1GetPropertyValueCommand,
} from "../protocols/Aws_restJson1";

export interface GetPropertyValueCommandInput extends GetPropertyValueRequest {}
export interface GetPropertyValueCommandOutput extends GetPropertyValueResponse, __MetadataBearer {}

/**
 * <p>Gets the property values for a component, component type, entity, or workspace.</p>
 *          <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetPropertyValueCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetPropertyValueCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const command = new GetPropertyValueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPropertyValueCommandInput} for command's `input` shape.
 * @see {@link GetPropertyValueCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 */
export class GetPropertyValueCommand extends $Command<
  GetPropertyValueCommandInput,
  GetPropertyValueCommandOutput,
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

  constructor(readonly input: GetPropertyValueCommandInput) {
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
  ): Handler<GetPropertyValueCommandInput, GetPropertyValueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPropertyValueCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "GetPropertyValueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPropertyValueRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPropertyValueResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPropertyValueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPropertyValueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPropertyValueCommandOutput> {
    return deserializeAws_restJson1GetPropertyValueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
