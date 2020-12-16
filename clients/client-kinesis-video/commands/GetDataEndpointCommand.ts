import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { GetDataEndpointInput, GetDataEndpointOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetDataEndpointCommand,
  serializeAws_restJson1GetDataEndpointCommand,
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

export type GetDataEndpointCommandInput = GetDataEndpointInput;
export type GetDataEndpointCommandOutput = GetDataEndpointOutput & __MetadataBearer;

/**
 * <p>Gets an endpoint for a specified stream for either reading or writing. Use this
 *             endpoint in your application to read from the specified stream (using the
 *                 <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write
 *             to it (using the <code>PutMedia</code> operation).
 *             </p>
 *         <note>
 *             <p>The returned endpoint does not have the API name appended. The client needs to
 *                 add the API name to the returned endpoint.</p>
 *         </note>
 *
 *         <p>In the request, specify the stream either by <code>StreamName</code> or
 *                 <code>StreamARN</code>.</p>
 */
export class GetDataEndpointCommand extends $Command<
  GetDataEndpointCommandInput,
  GetDataEndpointCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDataEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataEndpointCommandInput, GetDataEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "GetDataEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDataEndpointInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetDataEndpointOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDataEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDataEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataEndpointCommandOutput> {
    return deserializeAws_restJson1GetDataEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
