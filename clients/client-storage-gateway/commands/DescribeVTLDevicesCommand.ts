import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeVTLDevicesInput, DescribeVTLDevicesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeVTLDevicesCommand,
  serializeAws_json1_1DescribeVTLDevicesCommand,
} from "../protocols/Aws_json1_1";
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

export type DescribeVTLDevicesCommandInput = DescribeVTLDevicesInput;
export type DescribeVTLDevicesCommandOutput = DescribeVTLDevicesOutput & __MetadataBearer;

/**
 * <p>Returns a description of virtual tape library (VTL) devices for the specified tape
 *          gateway. In the response, AWS Storage Gateway returns VTL device information.</p>
 *
 *          <p>This operation is only supported in the tape gateway type.</p>
 */
export class DescribeVTLDevicesCommand extends $Command<
  DescribeVTLDevicesCommandInput,
  DescribeVTLDevicesCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVTLDevicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVTLDevicesCommandInput, DescribeVTLDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeVTLDevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVTLDevicesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVTLDevicesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVTLDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeVTLDevicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVTLDevicesCommandOutput> {
    return deserializeAws_json1_1DescribeVTLDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
