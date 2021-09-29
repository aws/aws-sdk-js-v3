import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { CreateAssetModelRequest, CreateAssetModelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAssetModelCommand,
  serializeAws_restJson1CreateAssetModelCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateAssetModelCommandInput extends CreateAssetModelRequest {}
export interface CreateAssetModelCommandOutput extends CreateAssetModelResponse, __MetadataBearer {}

/**
 * <p>Creates an asset model from specified property and hierarchy definitions. You create
 *       assets from asset models. With asset models, you can easily create assets of the same type
 *       that have standardized definitions. Each asset created from a model inherits the asset model's
 *       property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the
 *         <i>IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateAssetModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateAssetModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new CreateAssetModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssetModelCommandInput} for command's `input` shape.
 * @see {@link CreateAssetModelCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateAssetModelCommand extends $Command<
  CreateAssetModelCommandInput,
  CreateAssetModelCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAssetModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAssetModelCommandInput, CreateAssetModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "CreateAssetModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAssetModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAssetModelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAssetModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAssetModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAssetModelCommandOutput> {
    return deserializeAws_restJson1CreateAssetModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
