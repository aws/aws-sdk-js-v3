import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetServersRequest, GetServersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetServersCommand,
  serializeAws_json1_1GetServersCommand,
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

export type GetServersCommandInput = GetServersRequest;
export type GetServersCommandOutput = GetServersResponse & __MetadataBearer;

/**
 * <p>Describes the servers in your server catalog.</p>
 *         <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
 */
export class GetServersCommand extends $Command<
  GetServersCommandInput,
  GetServersCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServersCommandInput, GetServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "GetServersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetServersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServersCommandOutput> {
    return deserializeAws_json1_1GetServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
