import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { UpdateAssetPropertyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAssetPropertyCommand,
  serializeAws_restJson1UpdateAssetPropertyCommand,
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

export type UpdateAssetPropertyCommandInput = UpdateAssetPropertyRequest;
export type UpdateAssetPropertyCommandOutput = __MetadataBearer;

/**
 * <p>Updates an asset property's alias and notification state.</p>
 *          <important>
 *             <p>This operation overwrites the property's existing alias and notification state. To keep
 *         your existing property's alias or notification state, you must include the existing values
 *         in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p>
 *          </important>
 */
export class UpdateAssetPropertyCommand extends $Command<
  UpdateAssetPropertyCommandInput,
  UpdateAssetPropertyCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAssetPropertyCommandInput) {
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
  ): Handler<UpdateAssetPropertyCommandInput, UpdateAssetPropertyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "UpdateAssetPropertyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssetPropertyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAssetPropertyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAssetPropertyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAssetPropertyCommandOutput> {
    return deserializeAws_restJson1UpdateAssetPropertyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
