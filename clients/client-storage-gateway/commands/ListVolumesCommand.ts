import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListVolumesInput, ListVolumesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListVolumesCommand,
  serializeAws_json1_1ListVolumesCommand,
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

export type ListVolumesCommandInput = ListVolumesInput;
export type ListVolumesCommandOutput = ListVolumesOutput & __MetadataBearer;

/**
 * <p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The
 *          response includes only the volume ARNs. If you want additional volume information, use the
 *             <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p>
 *
 *          <p>The operation supports pagination. By default, the operation returns a maximum of up to
 *          100 volumes. You can optionally specify the <code>Limit</code> field in the body to limit
 *          the number of volumes in the response. If the number of volumes returned in the response is
 *          truncated, the response includes a Marker field. You can use this Marker value in your
 *          subsequent request to retrieve the next set of volumes. This operation is only supported in
 *          the cached volume and stored volume gateway types.</p>
 */
export class ListVolumesCommand extends $Command<
  ListVolumesCommandInput,
  ListVolumesCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVolumesCommandInput) {
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
  ): Handler<ListVolumesCommandInput, ListVolumesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListVolumesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVolumesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListVolumesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVolumesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListVolumesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVolumesCommandOutput> {
    return deserializeAws_json1_1ListVolumesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
