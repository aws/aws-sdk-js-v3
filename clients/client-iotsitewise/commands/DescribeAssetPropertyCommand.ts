import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeAssetPropertyRequest, DescribeAssetPropertyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAssetPropertyCommand,
  serializeAws_restJson1DescribeAssetPropertyCommand,
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

export type DescribeAssetPropertyCommandInput = DescribeAssetPropertyRequest;
export type DescribeAssetPropertyCommandOutput = DescribeAssetPropertyResponse & __MetadataBearer;

/**
 * <p>Retrieves information about an asset property.</p>
 *          <note>
 *             <p>When you call this operation for an attribute property, this response includes the
 *         default attribute value that you define in the asset model. If you update the default value
 *         in the model, this operation's response includes the new default value.</p>
 *          </note>
 *          <p>This operation doesn't return the value of the asset property. To get the value of an
 *       asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>
 */
export class DescribeAssetPropertyCommand extends $Command<
  DescribeAssetPropertyCommandInput,
  DescribeAssetPropertyCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAssetPropertyCommandInput) {
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
  ): Handler<DescribeAssetPropertyCommandInput, DescribeAssetPropertyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DescribeAssetPropertyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAssetPropertyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAssetPropertyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAssetPropertyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAssetPropertyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAssetPropertyCommandOutput> {
    return deserializeAws_restJson1DescribeAssetPropertyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
