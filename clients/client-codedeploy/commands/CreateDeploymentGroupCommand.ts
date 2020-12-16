import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { CreateDeploymentGroupInput, CreateDeploymentGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDeploymentGroupCommand,
  serializeAws_json1_1CreateDeploymentGroupCommand,
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

export type CreateDeploymentGroupCommandInput = CreateDeploymentGroupInput;
export type CreateDeploymentGroupCommandOutput = CreateDeploymentGroupOutput & __MetadataBearer;

/**
 * <p>Creates a deployment group to which application revisions are deployed.</p>
 */
export class CreateDeploymentGroupCommand extends $Command<
  CreateDeploymentGroupCommandInput,
  CreateDeploymentGroupCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDeploymentGroupCommandInput) {
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
  ): Handler<CreateDeploymentGroupCommandInput, CreateDeploymentGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "CreateDeploymentGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDeploymentGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDeploymentGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDeploymentGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDeploymentGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDeploymentGroupCommandOutput> {
    return deserializeAws_json1_1CreateDeploymentGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
