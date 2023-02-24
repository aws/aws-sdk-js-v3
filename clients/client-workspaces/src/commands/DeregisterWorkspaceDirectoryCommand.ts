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
  DeregisterWorkspaceDirectoryRequest,
  DeregisterWorkspaceDirectoryRequestFilterSensitiveLog,
  DeregisterWorkspaceDirectoryResult,
  DeregisterWorkspaceDirectoryResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand,
  serializeAws_json1_1DeregisterWorkspaceDirectoryCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface DeregisterWorkspaceDirectoryCommandInput extends DeregisterWorkspaceDirectoryRequest {}
export interface DeregisterWorkspaceDirectoryCommandOutput
  extends DeregisterWorkspaceDirectoryResult,
    __MetadataBearer {}

/**
 * <p>Deregisters the specified directory. This operation is asynchronous and returns before
 *          the WorkSpace directory is deregistered. If any WorkSpaces are registered to this
 *          directory, you must remove them before you can deregister the directory.</p>
 *          <note>
 *             <p>Simple AD and AD Connector are made available to you free of charge to use with
 *             WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector
 *             directory for 30 consecutive days, this directory will be automatically deregistered for
 *             use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing
 *                terms</a>.</p>
 *             <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the
 *                Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector
 *             directory, you can always create a new one when you want to start using WorkSpaces
 *             again.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeregisterWorkspaceDirectoryCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeregisterWorkspaceDirectoryCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DeregisterWorkspaceDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterWorkspaceDirectoryCommandInput} for command's `input` shape.
 * @see {@link DeregisterWorkspaceDirectoryCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class DeregisterWorkspaceDirectoryCommand extends $Command<
  DeregisterWorkspaceDirectoryCommandInput,
  DeregisterWorkspaceDirectoryCommandOutput,
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

  constructor(readonly input: DeregisterWorkspaceDirectoryCommandInput) {
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
  ): Handler<DeregisterWorkspaceDirectoryCommandInput, DeregisterWorkspaceDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterWorkspaceDirectoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DeregisterWorkspaceDirectoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterWorkspaceDirectoryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterWorkspaceDirectoryResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterWorkspaceDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterWorkspaceDirectoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterWorkspaceDirectoryCommandOutput> {
    return deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
