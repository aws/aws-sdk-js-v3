import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateHITTypeRequest, CreateHITTypeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateHITTypeCommand,
  serializeAws_json1_1CreateHITTypeCommand,
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

export type CreateHITTypeCommandInput = CreateHITTypeRequest;
export type CreateHITTypeCommandOutput = CreateHITTypeResponse & __MetadataBearer;

/**
 * <p>
 *             The <code>CreateHITType</code> operation creates a new HIT type. This operation
 *             allows you to define a standard set of HIT properties to use when creating HITs.
 *             If you register a HIT type with values that match an existing HIT type, the HIT type
 *             ID of the existing type will be returned.
 *         </p>
 */
export class CreateHITTypeCommand extends $Command<
  CreateHITTypeCommandInput,
  CreateHITTypeCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHITTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHITTypeCommandInput, CreateHITTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "CreateHITTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHITTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHITTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHITTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateHITTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHITTypeCommandOutput> {
    return deserializeAws_json1_1CreateHITTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
