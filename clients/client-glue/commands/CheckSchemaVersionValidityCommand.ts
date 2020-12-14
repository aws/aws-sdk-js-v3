import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CheckSchemaVersionValidityInput, CheckSchemaVersionValidityResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CheckSchemaVersionValidityCommand,
  serializeAws_json1_1CheckSchemaVersionValidityCommand,
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

export type CheckSchemaVersionValidityCommandInput = CheckSchemaVersionValidityInput;
export type CheckSchemaVersionValidityCommandOutput = CheckSchemaVersionValidityResponse & __MetadataBearer;

/**
 * <p>Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.</p>
 */
export class CheckSchemaVersionValidityCommand extends $Command<
  CheckSchemaVersionValidityCommandInput,
  CheckSchemaVersionValidityCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CheckSchemaVersionValidityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckSchemaVersionValidityCommandInput, CheckSchemaVersionValidityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CheckSchemaVersionValidityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckSchemaVersionValidityInput.filterSensitiveLog,
      outputFilterSensitiveLog: CheckSchemaVersionValidityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CheckSchemaVersionValidityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CheckSchemaVersionValidityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CheckSchemaVersionValidityCommandOutput> {
    return deserializeAws_json1_1CheckSchemaVersionValidityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
