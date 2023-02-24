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
  DeleteDecoderManifestRequest,
  DeleteDecoderManifestRequestFilterSensitiveLog,
  DeleteDecoderManifestResponse,
  DeleteDecoderManifestResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DeleteDecoderManifestCommand,
  serializeAws_json1_0DeleteDecoderManifestCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteDecoderManifestCommandInput extends DeleteDecoderManifestRequest {}
export interface DeleteDecoderManifestCommandOutput extends DeleteDecoderManifestResponse, __MetadataBearer {}

/**
 * <p> Deletes a decoder manifest. You can't delete a decoder manifest if it has vehicles
 *             associated with it. </p>
 *         <note>
 *             <p>If the decoder manifest is successfully deleted, Amazon Web Services IoT FleetWise sends back an HTTP 200
 *                 response with an empty body.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DeleteDecoderManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DeleteDecoderManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new DeleteDecoderManifestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDecoderManifestCommandInput} for command's `input` shape.
 * @see {@link DeleteDecoderManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class DeleteDecoderManifestCommand extends $Command<
  DeleteDecoderManifestCommandInput,
  DeleteDecoderManifestCommandOutput,
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

  constructor(readonly input: DeleteDecoderManifestCommandInput) {
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
  ): Handler<DeleteDecoderManifestCommandInput, DeleteDecoderManifestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDecoderManifestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "DeleteDecoderManifestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDecoderManifestRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDecoderManifestResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDecoderManifestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteDecoderManifestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDecoderManifestCommandOutput> {
    return deserializeAws_json1_0DeleteDecoderManifestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
