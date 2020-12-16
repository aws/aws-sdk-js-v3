import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { AddRegionRequest, AddRegionResult } from "../models/models_0";
import { deserializeAws_json1_1AddRegionCommand, serializeAws_json1_1AddRegionCommand } from "../protocols/Aws_json1_1";
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

export type AddRegionCommandInput = AddRegionRequest;
export type AddRegionCommandOutput = AddRegionResult & __MetadataBearer;

/**
 * <p>Adds two domain controllers in the specified Region for the specified directory.</p>
 */
export class AddRegionCommand extends $Command<
  AddRegionCommandInput,
  AddRegionCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddRegionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddRegionCommandInput, AddRegionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "AddRegionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddRegionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddRegionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddRegionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddRegionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddRegionCommandOutput> {
    return deserializeAws_json1_1AddRegionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
