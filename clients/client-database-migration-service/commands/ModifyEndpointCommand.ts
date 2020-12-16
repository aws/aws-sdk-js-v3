import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { ModifyEndpointMessage, ModifyEndpointResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ModifyEndpointCommand,
  serializeAws_json1_1ModifyEndpointCommand,
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

export type ModifyEndpointCommandInput = ModifyEndpointMessage;
export type ModifyEndpointCommandOutput = ModifyEndpointResponse & __MetadataBearer;

/**
 * <p>Modifies the specified endpoint.</p>
 */
export class ModifyEndpointCommand extends $Command<
  ModifyEndpointCommandInput,
  ModifyEndpointCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyEndpointCommandInput, ModifyEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ModifyEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyEndpointMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyEndpointResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyEndpointCommandOutput> {
    return deserializeAws_json1_1ModifyEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
