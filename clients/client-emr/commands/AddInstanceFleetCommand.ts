import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { AddInstanceFleetInput, AddInstanceFleetOutput } from "../models/models_0";
import {
  deserializeAws_json1_1AddInstanceFleetCommand,
  serializeAws_json1_1AddInstanceFleetCommand,
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

export type AddInstanceFleetCommandInput = AddInstanceFleetInput;
export type AddInstanceFleetCommandOutput = AddInstanceFleetOutput & __MetadataBearer;

/**
 * <p>Adds an instance fleet to a running cluster.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x.</p>
 *          </note>
 */
export class AddInstanceFleetCommand extends $Command<
  AddInstanceFleetCommandInput,
  AddInstanceFleetCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddInstanceFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddInstanceFleetCommandInput, AddInstanceFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "AddInstanceFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddInstanceFleetInput.filterSensitiveLog,
      outputFilterSensitiveLog: AddInstanceFleetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddInstanceFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddInstanceFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddInstanceFleetCommandOutput> {
    return deserializeAws_json1_1AddInstanceFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
