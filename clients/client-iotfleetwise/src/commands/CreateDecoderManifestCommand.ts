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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import {
  CreateDecoderManifestRequest,
  CreateDecoderManifestRequestFilterSensitiveLog,
  CreateDecoderManifestResponse,
  CreateDecoderManifestResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CreateDecoderManifestCommand,
  serializeAws_json1_0CreateDecoderManifestCommand,
} from "../protocols/Aws_json1_0";

export interface CreateDecoderManifestCommandInput extends CreateDecoderManifestRequest {}
export interface CreateDecoderManifestCommandOutput extends CreateDecoderManifestResponse, __MetadataBearer {}

/**
 * <p>Creates the decoder manifest associated with a model manifest. To create a decoder
 *             manifest, the following must be true:</p>
 *         <ul>
 *             <li>
 *                 <p>Every signal decoder has a unique name.</p>
 *             </li>
 *             <li>
 *                 <p>Each signal decoder is associated with a network interface.</p>
 *             </li>
 *             <li>
 *                 <p>Each network interface has a unique ID.</p>
 *             </li>
 *             <li>
 *                 <p>The signal decoders are specified in the model manifest.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, CreateDecoderManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, CreateDecoderManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new CreateDecoderManifestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDecoderManifestCommandInput} for command's `input` shape.
 * @see {@link CreateDecoderManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class CreateDecoderManifestCommand extends $Command<
  CreateDecoderManifestCommandInput,
  CreateDecoderManifestCommandOutput,
  IoTFleetWiseClientResolvedConfig
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

  constructor(readonly input: CreateDecoderManifestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDecoderManifestCommandInput, CreateDecoderManifestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDecoderManifestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "CreateDecoderManifestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDecoderManifestRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDecoderManifestResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDecoderManifestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateDecoderManifestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDecoderManifestCommandOutput> {
    return deserializeAws_json1_0CreateDecoderManifestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
