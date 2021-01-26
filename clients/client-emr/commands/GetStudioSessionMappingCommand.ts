import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { GetStudioSessionMappingInput, GetStudioSessionMappingOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetStudioSessionMappingCommand,
  serializeAws_json1_1GetStudioSessionMappingCommand,
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

export type GetStudioSessionMappingCommandInput = GetStudioSessionMappingInput;
export type GetStudioSessionMappingCommandOutput = GetStudioSessionMappingOutput & __MetadataBearer;

/**
 * <note>
 *             <p>The Amazon EMR Studio APIs are in preview release for Amazon EMR and are subject to
 *             change.</p>
 *          </note>
 *          <p>Fetches mapping details for the specified Amazon EMR Studio and identity (user or
 *          group).</p>
 */
export class GetStudioSessionMappingCommand extends $Command<
  GetStudioSessionMappingCommandInput,
  GetStudioSessionMappingCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetStudioSessionMappingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStudioSessionMappingCommandInput, GetStudioSessionMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "GetStudioSessionMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetStudioSessionMappingInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetStudioSessionMappingOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetStudioSessionMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetStudioSessionMappingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStudioSessionMappingCommandOutput> {
    return deserializeAws_json1_1GetStudioSessionMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
