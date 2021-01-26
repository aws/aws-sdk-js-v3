import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateTestGridUrlRequest, CreateTestGridUrlResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateTestGridUrlCommand,
  serializeAws_json1_1CreateTestGridUrlCommand,
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

export type CreateTestGridUrlCommandInput = CreateTestGridUrlRequest;
export type CreateTestGridUrlCommandOutput = CreateTestGridUrlResult & __MetadataBearer;

/**
 * <p>Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code>
 *          constructor.</p>
 */
export class CreateTestGridUrlCommand extends $Command<
  CreateTestGridUrlCommandInput,
  CreateTestGridUrlCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTestGridUrlCommandInput) {
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
  ): Handler<CreateTestGridUrlCommandInput, CreateTestGridUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "CreateTestGridUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTestGridUrlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTestGridUrlResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTestGridUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTestGridUrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTestGridUrlCommandOutput> {
    return deserializeAws_json1_1CreateTestGridUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
