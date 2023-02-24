// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DeleteWorkspaceBundleRequest,
  DeleteWorkspaceBundleRequestFilterSensitiveLog,
  DeleteWorkspaceBundleResult,
  DeleteWorkspaceBundleResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteWorkspaceBundleCommand,
  serializeAws_json1_1DeleteWorkspaceBundleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface DeleteWorkspaceBundleCommandInput extends DeleteWorkspaceBundleRequest {}
export interface DeleteWorkspaceBundleCommandOutput extends DeleteWorkspaceBundleResult, __MetadataBearer {}

/**
 * <p>Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html">
 *             Delete a Custom WorkSpaces Bundle or Image</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteWorkspaceBundleCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteWorkspaceBundleCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DeleteWorkspaceBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkspaceBundleCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceBundleCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class DeleteWorkspaceBundleCommand extends $Command<
  DeleteWorkspaceBundleCommandInput,
  DeleteWorkspaceBundleCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DeleteWorkspaceBundleCommandInput) {
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
  ): Handler<DeleteWorkspaceBundleCommandInput, DeleteWorkspaceBundleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteWorkspaceBundleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DeleteWorkspaceBundleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWorkspaceBundleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteWorkspaceBundleResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWorkspaceBundleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteWorkspaceBundleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWorkspaceBundleCommandOutput> {
    return deserializeAws_json1_1DeleteWorkspaceBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
