import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { RemoveTagsFromOnPremisesInstancesInput } from "../models/models_0";
import {
  deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand,
  serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand,
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

export type RemoveTagsFromOnPremisesInstancesCommandInput = RemoveTagsFromOnPremisesInstancesInput;
export type RemoveTagsFromOnPremisesInstancesCommandOutput = __MetadataBearer;

/**
 * <p>Removes one or more tags from one or more on-premises instances.</p>
 */
export class RemoveTagsFromOnPremisesInstancesCommand extends $Command<
  RemoveTagsFromOnPremisesInstancesCommandInput,
  RemoveTagsFromOnPremisesInstancesCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveTagsFromOnPremisesInstancesCommandInput) {
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
  ): Handler<RemoveTagsFromOnPremisesInstancesCommandInput, RemoveTagsFromOnPremisesInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "RemoveTagsFromOnPremisesInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveTagsFromOnPremisesInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RemoveTagsFromOnPremisesInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput> {
    return deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
