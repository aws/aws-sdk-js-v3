import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateHITTypeOfHITRequest, UpdateHITTypeOfHITResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateHITTypeOfHITCommand,
  serializeAws_json1_1UpdateHITTypeOfHITCommand,
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

export type UpdateHITTypeOfHITCommandInput = UpdateHITTypeOfHITRequest;
export type UpdateHITTypeOfHITCommandOutput = UpdateHITTypeOfHITResponse & __MetadataBearer;

/**
 * <p>
 *             The
 *             <code>UpdateHITTypeOfHIT</code>
 *             operation allows you to change the HITType properties of a HIT. This
 *             operation disassociates the HIT from its old HITType properties and
 *             associates it with the new HITType properties. The HIT takes on the
 *             properties of the new HITType in place of the old ones.
 *         </p>
 */
export class UpdateHITTypeOfHITCommand extends $Command<
  UpdateHITTypeOfHITCommandInput,
  UpdateHITTypeOfHITCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateHITTypeOfHITCommandInput) {
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
  ): Handler<UpdateHITTypeOfHITCommandInput, UpdateHITTypeOfHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "UpdateHITTypeOfHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateHITTypeOfHITRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateHITTypeOfHITResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateHITTypeOfHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateHITTypeOfHITCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHITTypeOfHITCommandOutput> {
    return deserializeAws_json1_1UpdateHITTypeOfHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
