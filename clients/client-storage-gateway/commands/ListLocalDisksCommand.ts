import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListLocalDisksInput, ListLocalDisksOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListLocalDisksCommand,
  serializeAws_json1_1ListLocalDisksCommand,
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

export type ListLocalDisksCommandInput = ListLocalDisksInput;
export type ListLocalDisksCommandOutput = ListLocalDisksOutput & __MetadataBearer;

/**
 * <p>Returns a list of the gateway's local disks. To specify which gateway to describe,
 *          you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p>
 *
 *          <p>The request returns a list of all disks, specifying which are configured as working
 *          storage, cache storage, or stored volume or not configured at all. The response includes a
 *             <code>DiskStatus</code> field. This field can have a value of present (the disk is
 *          available to use), missing (the disk is no longer connected to the gateway), or mismatch
 *          (the disk node is occupied by a disk that has incorrect metadata or the disk content is
 *          corrupted).</p>
 */
export class ListLocalDisksCommand extends $Command<
  ListLocalDisksCommandInput,
  ListLocalDisksCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLocalDisksCommandInput) {
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
  ): Handler<ListLocalDisksCommandInput, ListLocalDisksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListLocalDisksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLocalDisksInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListLocalDisksOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLocalDisksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListLocalDisksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLocalDisksCommandOutput> {
    return deserializeAws_json1_1ListLocalDisksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
