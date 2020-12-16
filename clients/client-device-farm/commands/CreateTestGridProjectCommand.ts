import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateTestGridProjectRequest, CreateTestGridProjectResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateTestGridProjectCommand,
  serializeAws_json1_1CreateTestGridProjectCommand,
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

export type CreateTestGridProjectCommandInput = CreateTestGridProjectRequest;
export type CreateTestGridProjectCommandOutput = CreateTestGridProjectResult & __MetadataBearer;

/**
 * <p>Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a>
 *          instances.</p>
 */
export class CreateTestGridProjectCommand extends $Command<
  CreateTestGridProjectCommandInput,
  CreateTestGridProjectCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTestGridProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTestGridProjectCommandInput, CreateTestGridProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "CreateTestGridProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTestGridProjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTestGridProjectResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTestGridProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTestGridProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTestGridProjectCommandOutput> {
    return deserializeAws_json1_1CreateTestGridProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
