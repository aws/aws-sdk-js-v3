import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListVolumeInitiatorsInput, ListVolumeInitiatorsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListVolumeInitiatorsCommand,
  serializeAws_json1_1ListVolumeInitiatorsCommand,
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

export type ListVolumeInitiatorsCommandInput = ListVolumeInitiatorsInput;
export type ListVolumeInitiatorsCommandOutput = ListVolumeInitiatorsOutput & __MetadataBearer;

/**
 * <p>Lists iSCSI initiators that are connected to a volume. You can use this operation to
 *          determine whether a volume is being used or not. This operation is only supported in the
 *          cached volume and stored volume gateway types.</p>
 */
export class ListVolumeInitiatorsCommand extends $Command<
  ListVolumeInitiatorsCommandInput,
  ListVolumeInitiatorsCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVolumeInitiatorsCommandInput) {
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
  ): Handler<ListVolumeInitiatorsCommandInput, ListVolumeInitiatorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListVolumeInitiatorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVolumeInitiatorsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListVolumeInitiatorsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVolumeInitiatorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListVolumeInitiatorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVolumeInitiatorsCommandOutput> {
    return deserializeAws_json1_1ListVolumeInitiatorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
