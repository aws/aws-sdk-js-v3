import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeStorediSCSIVolumesInput, DescribeStorediSCSIVolumesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeStorediSCSIVolumesCommand,
  serializeAws_json1_1DescribeStorediSCSIVolumesCommand,
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

export type DescribeStorediSCSIVolumesCommandInput = DescribeStorediSCSIVolumesInput;
export type DescribeStorediSCSIVolumesCommandOutput = DescribeStorediSCSIVolumesOutput & __MetadataBearer;

/**
 * <p>Returns the description of the gateway volumes specified in the request. The list of
 *          gateway volumes in the request must be from one gateway. In the response, AWS Storage
 *          Gateway returns volume information sorted by volume ARNs. This operation is only supported
 *          in stored volume gateway type.</p>
 */
export class DescribeStorediSCSIVolumesCommand extends $Command<
  DescribeStorediSCSIVolumesCommandInput,
  DescribeStorediSCSIVolumesCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStorediSCSIVolumesCommandInput) {
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
  ): Handler<DescribeStorediSCSIVolumesCommandInput, DescribeStorediSCSIVolumesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeStorediSCSIVolumesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStorediSCSIVolumesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStorediSCSIVolumesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStorediSCSIVolumesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeStorediSCSIVolumesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStorediSCSIVolumesCommandOutput> {
    return deserializeAws_json1_1DescribeStorediSCSIVolumesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
