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
  CreateWorkspaceBundleRequest,
  CreateWorkspaceBundleRequestFilterSensitiveLog,
  CreateWorkspaceBundleResult,
  CreateWorkspaceBundleResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateWorkspaceBundleCommand,
  serializeAws_json1_1CreateWorkspaceBundleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface CreateWorkspaceBundleCommandInput extends CreateWorkspaceBundleRequest {}
export interface CreateWorkspaceBundleCommandOutput extends CreateWorkspaceBundleResult, __MetadataBearer {}

/**
 * <p>Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html">
 *             Create a Custom WorkSpaces Image and Bundle</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateWorkspaceBundleCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateWorkspaceBundleCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CreateWorkspaceBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkspaceBundleCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceBundleCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class CreateWorkspaceBundleCommand extends $Command<
  CreateWorkspaceBundleCommandInput,
  CreateWorkspaceBundleCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorkspaceBundleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "CreateWorkspaceBundleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkspaceBundleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkspaceBundleResultFilterSensitiveLog,
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
