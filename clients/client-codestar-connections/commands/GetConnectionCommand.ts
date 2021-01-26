import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { GetConnectionInput, GetConnectionOutput } from "../models/models_0";
import {
  deserializeAws_json1_0GetConnectionCommand,
  serializeAws_json1_0GetConnectionCommand,
} from "../protocols/Aws_json1_0";
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

export type GetConnectionCommandInput = GetConnectionInput;
export type GetConnectionCommandOutput = GetConnectionOutput & __MetadataBearer;

/**
 * <p>Returns the connection ARN and details such as status, owner, and provider type.</p>
 */
export class GetConnectionCommand extends $Command<
  GetConnectionCommandInput,
  GetConnectionCommandOutput,
  CodeStarConnectionsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarConnectionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConnectionCommandInput, GetConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarConnectionsClient";
    const commandName = "GetConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConnectionInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetConnectionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConnectionCommandOutput> {
    return deserializeAws_json1_0GetConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
