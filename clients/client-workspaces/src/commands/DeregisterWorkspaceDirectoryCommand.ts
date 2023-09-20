// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DeregisterWorkspaceDirectoryRequest, DeregisterWorkspaceDirectoryResult } from "../models/models_0";
import {
  de_DeregisterWorkspaceDirectoryCommand,
  se_DeregisterWorkspaceDirectoryCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeregisterWorkspaceDirectoryCommand}.
 */
export interface DeregisterWorkspaceDirectoryCommandInput extends DeregisterWorkspaceDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterWorkspaceDirectoryCommand}.
 */
export interface DeregisterWorkspaceDirectoryCommandOutput
  extends DeregisterWorkspaceDirectoryResult,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // DeregisterWorkspaceDirectoryRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterWorkspaceDirectoryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterWorkspaceDirectoryCommandInput - {@link DeregisterWorkspaceDirectoryCommandInput}
 * @returns {@link DeregisterWorkspaceDirectoryCommandOutput}
 * @see {@link DeregisterWorkspaceDirectoryCommandInput} for command's `input` shape.
 * @see {@link DeregisterWorkspaceDirectoryCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "DeregisterWorkspaceDirectory",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeregisterWorkspaceDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeregisterWorkspaceDirectoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterWorkspaceDirectoryCommandOutput> {
    return de_DeregisterWorkspaceDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
