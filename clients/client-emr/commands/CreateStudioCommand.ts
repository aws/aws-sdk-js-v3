import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { CreateStudioInput, CreateStudioOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateStudioCommand,
  serializeAws_json1_1CreateStudioCommand,
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

export type CreateStudioCommandInput = CreateStudioInput;
export type CreateStudioCommandOutput = CreateStudioOutput & __MetadataBearer;

/**
 * <note>
 *             <p>The Amazon EMR Studio APIs are in preview release for Amazon EMR and are subject to
 *             change.</p>
 *          </note>
 *          <p>Creates a new Amazon EMR Studio.</p>
 */
export class CreateStudioCommand extends $Command<
  CreateStudioCommandInput,
  CreateStudioCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStudioCommandInput) {
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
  ): Handler<CreateStudioCommandInput, CreateStudioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "CreateStudioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStudioInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStudioOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStudioCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateStudioCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStudioCommandOutput> {
    return deserializeAws_json1_1CreateStudioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
