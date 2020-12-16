import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyClientPropertiesRequest, ModifyClientPropertiesResult } from "../models/models_0";
import {
  deserializeAws_json1_1ModifyClientPropertiesCommand,
  serializeAws_json1_1ModifyClientPropertiesCommand,
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

export type ModifyClientPropertiesCommandInput = ModifyClientPropertiesRequest;
export type ModifyClientPropertiesCommandOutput = ModifyClientPropertiesResult & __MetadataBearer;

/**
 * <p>Modifies the properties of the specified Amazon WorkSpaces clients.</p>
 */
export class ModifyClientPropertiesCommand extends $Command<
  ModifyClientPropertiesCommandInput,
  ModifyClientPropertiesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyClientPropertiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyClientPropertiesCommandInput, ModifyClientPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ModifyClientPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyClientPropertiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyClientPropertiesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyClientPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyClientPropertiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyClientPropertiesCommandOutput> {
    return deserializeAws_json1_1ModifyClientPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
