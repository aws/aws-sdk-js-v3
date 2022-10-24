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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import {
  GetNamespaceDeletionStatusRequest,
  GetNamespaceDeletionStatusRequestFilterSensitiveLog,
  GetNamespaceDeletionStatusResponse,
  GetNamespaceDeletionStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetNamespaceDeletionStatusCommand,
  serializeAws_json1_1GetNamespaceDeletionStatusCommand,
} from "../protocols/Aws_json1_1";

export interface GetNamespaceDeletionStatusCommandInput extends GetNamespaceDeletionStatusRequest {}
export interface GetNamespaceDeletionStatusCommandOutput extends GetNamespaceDeletionStatusResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Gets the status of a namespace deletion task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetNamespaceDeletionStatusCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetNamespaceDeletionStatusCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetNamespaceDeletionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNamespaceDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link GetNamespaceDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 */
export class GetNamespaceDeletionStatusCommand extends $Command<
  GetNamespaceDeletionStatusCommandInput,
  GetNamespaceDeletionStatusCommandOutput,
  IoTThingsGraphClientResolvedConfig
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

  constructor(readonly input: GetNamespaceDeletionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetNamespaceDeletionStatusCommandInput, GetNamespaceDeletionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetNamespaceDeletionStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "GetNamespaceDeletionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetNamespaceDeletionStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetNamespaceDeletionStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetNamespaceDeletionStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetNamespaceDeletionStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetNamespaceDeletionStatusCommandOutput> {
    return deserializeAws_json1_1GetNamespaceDeletionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
