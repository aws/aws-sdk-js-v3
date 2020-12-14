import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListTapesInput, ListTapesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListTapesCommand, serializeAws_json1_1ListTapesCommand } from "../protocols/Aws_json1_1";
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

export type ListTapesCommandInput = ListTapesInput;
export type ListTapesCommandOutput = ListTapesOutput & __MetadataBearer;

/**
 * <p>Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf
 *          (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names
 *          (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both
 *          your VTL and VTS.</p>
 *
 *          <p>This operation supports pagination. By default, the operation returns a maximum of up to
 *          100 tapes. You can optionally specify the <code>Limit</code> parameter in the body to limit
 *          the number of tapes in the response. If the number of tapes returned in the response is
 *          truncated, the response includes a <code>Marker</code> element that you can use in your
 *          subsequent request to retrieve the next set of tapes. This operation is only supported in
 *          the tape gateway type.</p>
 */
export class ListTapesCommand extends $Command<
  ListTapesCommandInput,
  ListTapesCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTapesCommandInput) {
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
  ): Handler<ListTapesCommandInput, ListTapesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListTapesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTapesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTapesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTapesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTapesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTapesCommandOutput> {
    return deserializeAws_json1_1ListTapesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
