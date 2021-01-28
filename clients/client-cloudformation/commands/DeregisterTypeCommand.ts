import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DeregisterTypeInput, DeregisterTypeOutput } from "../models/models_0";
import {
  deserializeAws_queryDeregisterTypeCommand,
  serializeAws_queryDeregisterTypeCommand,
} from "../protocols/Aws_query";
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

export type DeregisterTypeCommandInput = DeregisterTypeInput;
export type DeregisterTypeCommandOutput = DeregisterTypeOutput & __MetadataBearer;

/**
 * <p>Removes a type or type version from active use in the CloudFormation registry. If a type or type version is deregistered, it cannot be used in CloudFormation operations.</p>
 *          <p>To deregister a type, you must individually deregister all registered versions of that type. If a type has only a single registered version, deregistering that version results in the type itself being deregistered. </p>
 *          <p>You cannot deregister the default version of a type, unless it is the only registered version of that type, in which case the type itself is deregistered as well. </p>
 */
export class DeregisterTypeCommand extends $Command<
  DeregisterTypeCommandInput,
  DeregisterTypeCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterTypeCommandInput, DeregisterTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DeregisterTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterTypeInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterTypeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeregisterTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterTypeCommandOutput> {
    return deserializeAws_queryDeregisterTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
