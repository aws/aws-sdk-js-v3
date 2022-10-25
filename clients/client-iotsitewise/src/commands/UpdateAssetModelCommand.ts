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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  UpdateAssetModelRequest,
  UpdateAssetModelRequestFilterSensitiveLog,
  UpdateAssetModelResponse,
  UpdateAssetModelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAssetModelCommand,
  serializeAws_restJson1UpdateAssetModelCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateAssetModelCommandInput extends UpdateAssetModelRequest {}
export interface UpdateAssetModelCommandOutput extends UpdateAssetModelResponse, __MetadataBearer {}

/**
 * <p>Updates an asset model and all of the assets that were created from the model. Each asset
 *       created from the model inherits the updated asset model's property and hierarchy definitions.
 *       For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the
 *         <i>IoT SiteWise User Guide</i>.</p>
 *          <important>
 *             <p>This operation overwrites the existing model with the provided model. To avoid deleting
 *         your asset model's properties or hierarchies, you must include their IDs and definitions in
 *         the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p>
 *             <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that
 *         property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every
 *         asset associated with that hierarchy. You can't change the type or data type of an existing
 *         property.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateAssetModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateAssetModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new UpdateAssetModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssetModelCommandInput} for command's `input` shape.
 * @see {@link UpdateAssetModelCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 */
export class UpdateAssetModelCommand extends $Command<
  UpdateAssetModelCommandInput,
  UpdateAssetModelCommandOutput,
  IoTSiteWiseClientResolvedConfig
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

  constructor(readonly input: UpdateAssetModelCommandInput) {
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
  ): Handler<UpdateAssetModelCommandInput, UpdateAssetModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAssetModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "UpdateAssetModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssetModelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssetModelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAssetModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAssetModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAssetModelCommandOutput> {
    return deserializeAws_restJson1UpdateAssetModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
