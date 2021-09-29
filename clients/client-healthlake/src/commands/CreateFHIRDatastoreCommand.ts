import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { CreateFHIRDatastoreRequest, CreateFHIRDatastoreResponse } from "../models/models_0";
import {
  deserializeAws_json1_0CreateFHIRDatastoreCommand,
  serializeAws_json1_0CreateFHIRDatastoreCommand,
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

export interface CreateFHIRDatastoreCommandInput extends CreateFHIRDatastoreRequest {}
export interface CreateFHIRDatastoreCommandOutput extends CreateFHIRDatastoreResponse, __MetadataBearer {}

/**
 * <p>Creates a Data Store that can ingest and export FHIR formatted data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, CreateFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, CreateFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new CreateFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link CreateFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateFHIRDatastoreCommand extends $Command<
  CreateFHIRDatastoreCommandInput,
  CreateFHIRDatastoreCommandOutput,
  HealthLakeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFHIRDatastoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFHIRDatastoreCommandInput, CreateFHIRDatastoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "CreateFHIRDatastoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFHIRDatastoreRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFHIRDatastoreResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFHIRDatastoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateFHIRDatastoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFHIRDatastoreCommandOutput> {
    return deserializeAws_json1_0CreateFHIRDatastoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
