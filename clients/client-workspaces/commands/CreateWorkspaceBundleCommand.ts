import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { CreateWorkspaceBundleRequest, CreateWorkspaceBundleResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateWorkspaceBundleCommand,
  serializeAws_json1_1CreateWorkspaceBundleCommand,
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

export type CreateWorkspaceBundleCommandInput = CreateWorkspaceBundleRequest;
export type CreateWorkspaceBundleCommandOutput = CreateWorkspaceBundleResult & __MetadataBearer;

/**
 * <p>Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html">
 *             Create a Custom WorkSpaces Image and Bundle</a>.</p>
 */
export class CreateWorkspaceBundleCommand extends $Command<
  CreateWorkspaceBundleCommandInput,
  CreateWorkspaceBundleCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWorkspaceBundleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorkspaceBundleCommandInput, CreateWorkspaceBundleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "CreateWorkspaceBundleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkspaceBundleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkspaceBundleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWorkspaceBundleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWorkspaceBundleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkspaceBundleCommandOutput> {
    return deserializeAws_json1_1CreateWorkspaceBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
