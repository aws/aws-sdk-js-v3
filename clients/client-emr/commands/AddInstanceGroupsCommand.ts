import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { AddInstanceGroupsInput, AddInstanceGroupsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1AddInstanceGroupsCommand,
  serializeAws_json1_1AddInstanceGroupsCommand,
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

export type AddInstanceGroupsCommandInput = AddInstanceGroupsInput;
export type AddInstanceGroupsCommandOutput = AddInstanceGroupsOutput & __MetadataBearer;

/**
 * <p>Adds one or more instance groups to a running cluster.</p>
 */
export class AddInstanceGroupsCommand extends $Command<
  AddInstanceGroupsCommandInput,
  AddInstanceGroupsCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddInstanceGroupsCommandInput) {
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
  ): Handler<AddInstanceGroupsCommandInput, AddInstanceGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "AddInstanceGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddInstanceGroupsInput.filterSensitiveLog,
      outputFilterSensitiveLog: AddInstanceGroupsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddInstanceGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddInstanceGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddInstanceGroupsCommandOutput> {
    return deserializeAws_json1_1AddInstanceGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
