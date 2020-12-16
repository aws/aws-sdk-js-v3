import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeCachediSCSIVolumesInput, DescribeCachediSCSIVolumesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCachediSCSIVolumesCommand,
  serializeAws_json1_1DescribeCachediSCSIVolumesCommand,
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

export type DescribeCachediSCSIVolumesCommandInput = DescribeCachediSCSIVolumesInput;
export type DescribeCachediSCSIVolumesCommandOutput = DescribeCachediSCSIVolumesOutput & __MetadataBearer;

/**
 * <p>Returns a description of the gateway volumes specified in the request. This operation is
 *          only supported in the cached volume gateway types.</p>
 *
 *          <p>The list of gateway volumes in the request must be from one gateway. In the response,
 *          AWS Storage Gateway returns volume information sorted by volume Amazon Resource Name
 *          (ARN).</p>
 */
export class DescribeCachediSCSIVolumesCommand extends $Command<
  DescribeCachediSCSIVolumesCommandInput,
  DescribeCachediSCSIVolumesCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCachediSCSIVolumesCommandInput) {
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
  ): Handler<DescribeCachediSCSIVolumesCommandInput, DescribeCachediSCSIVolumesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeCachediSCSIVolumesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCachediSCSIVolumesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCachediSCSIVolumesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCachediSCSIVolumesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCachediSCSIVolumesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCachediSCSIVolumesCommandOutput> {
    return deserializeAws_json1_1DescribeCachediSCSIVolumesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
