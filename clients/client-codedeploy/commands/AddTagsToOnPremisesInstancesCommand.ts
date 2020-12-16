import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { AddTagsToOnPremisesInstancesInput } from "../models/models_0";
import {
  deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand,
  serializeAws_json1_1AddTagsToOnPremisesInstancesCommand,
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

export type AddTagsToOnPremisesInstancesCommandInput = AddTagsToOnPremisesInstancesInput;
export type AddTagsToOnPremisesInstancesCommandOutput = __MetadataBearer;

/**
 * <p>Adds tags to on-premises instances.</p>
 */
export class AddTagsToOnPremisesInstancesCommand extends $Command<
  AddTagsToOnPremisesInstancesCommandInput,
  AddTagsToOnPremisesInstancesCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddTagsToOnPremisesInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddTagsToOnPremisesInstancesCommandInput, AddTagsToOnPremisesInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "AddTagsToOnPremisesInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddTagsToOnPremisesInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddTagsToOnPremisesInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddTagsToOnPremisesInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddTagsToOnPremisesInstancesCommandOutput> {
    return deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
