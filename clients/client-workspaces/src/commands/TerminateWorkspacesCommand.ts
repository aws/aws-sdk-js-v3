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
  TerminateWorkspacesRequest,
  TerminateWorkspacesRequestFilterSensitiveLog,
  TerminateWorkspacesResult,
  TerminateWorkspacesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1TerminateWorkspacesCommand,
  serializeAws_json1_1TerminateWorkspacesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface TerminateWorkspacesCommandInput extends TerminateWorkspacesRequest {}
export interface TerminateWorkspacesCommandOutput extends TerminateWorkspacesResult, __MetadataBearer {}

/**
 * <p>Terminates the specified WorkSpaces.</p>
 *          <important>
 *             <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data
 *             is destroyed. If you need to archive any user data, contact Amazon Web Services Support before
 *             terminating the WorkSpace.</p>
 *          </important>
 *          <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have been completely
 *          terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned
 *          only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely
 *          returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using
 *             <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html">
 *             DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has
 *          been successfully terminated.</p>
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
 * import { WorkSpacesClient, TerminateWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, TerminateWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new TerminateWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateWorkspacesCommandInput} for command's `input` shape.
 * @see {@link TerminateWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class TerminateWorkspacesCommand extends $Command<
  TerminateWorkspacesCommandInput,
  TerminateWorkspacesCommandOutput,
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

  constructor(readonly input: TerminateWorkspacesCommandInput) {
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
  ): Handler<TerminateWorkspacesCommandInput, TerminateWorkspacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TerminateWorkspacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "TerminateWorkspacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TerminateWorkspacesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TerminateWorkspacesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TerminateWorkspacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TerminateWorkspacesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TerminateWorkspacesCommandOutput> {
    return deserializeAws_json1_1TerminateWorkspacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
