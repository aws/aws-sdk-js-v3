import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeregisterTaskDefinitionRequest, DeregisterTaskDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterTaskDefinitionCommand,
  serializeAws_json1_1DeregisterTaskDefinitionCommand,
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

export type DeregisterTaskDefinitionCommandInput = DeregisterTaskDefinitionRequest;
export type DeregisterTaskDefinitionCommandOutput = DeregisterTaskDefinitionResponse & __MetadataBearer;

/**
 * <p>Deregisters the specified task definition by family and revision. Upon deregistration,
 * 			the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that
 * 			reference an <code>INACTIVE</code> task definition continue to run without disruption.
 * 			Existing services that reference an <code>INACTIVE</code> task definition can still
 * 			scale up or down by modifying the service's desired count.</p>
 * 		       <p>You cannot use an <code>INACTIVE</code> task definition to run new tasks or create new
 * 			services, and you cannot update an existing service to reference an
 * 				<code>INACTIVE</code> task definition. However, there may be up to a 10-minute
 * 			window following deregistration where these restrictions have not yet taken
 * 			effect.</p>
 * 		       <note>
 * 			         <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your
 * 				account indefinitely. However, this behavior is subject to change in the future, so
 * 				you should not rely on <code>INACTIVE</code> task definitions persisting beyond the
 * 				lifecycle of any associated tasks and services.</p>
 * 		       </note>
 */
export class DeregisterTaskDefinitionCommand extends $Command<
  DeregisterTaskDefinitionCommandInput,
  DeregisterTaskDefinitionCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterTaskDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterTaskDefinitionCommandInput, DeregisterTaskDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DeregisterTaskDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterTaskDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterTaskDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterTaskDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterTaskDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterTaskDefinitionCommandOutput> {
    return deserializeAws_json1_1DeregisterTaskDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
