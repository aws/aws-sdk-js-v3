import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { UpdateWorkspaceBundleRequest, UpdateWorkspaceBundleResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateWorkspaceBundleCommand,
  serializeAws_json1_1UpdateWorkspaceBundleCommand,
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

export type UpdateWorkspaceBundleCommandInput = UpdateWorkspaceBundleRequest;
export type UpdateWorkspaceBundleCommandOutput = UpdateWorkspaceBundleResult & __MetadataBearer;

/**
 * <p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html">
 *             Update a Custom WorkSpaces Bundle</a>.</p>
 *
 *          <important>
 *             <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're
 *             based on. To update existing WorkSpaces that are based on a bundle that you've updated, you
 *             must either rebuild the WorkSpaces or delete and recreate them.</p>
 *          </important>
 */
export class UpdateWorkspaceBundleCommand extends $Command<
  UpdateWorkspaceBundleCommandInput,
  UpdateWorkspaceBundleCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateWorkspaceBundleCommandInput) {
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
  ): Handler<UpdateWorkspaceBundleCommandInput, UpdateWorkspaceBundleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "UpdateWorkspaceBundleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWorkspaceBundleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateWorkspaceBundleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateWorkspaceBundleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateWorkspaceBundleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkspaceBundleCommandOutput> {
    return deserializeAws_json1_1UpdateWorkspaceBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
