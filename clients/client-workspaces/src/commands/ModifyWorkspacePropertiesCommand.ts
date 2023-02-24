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
  ModifyWorkspacePropertiesRequest,
  ModifyWorkspacePropertiesRequestFilterSensitiveLog,
  ModifyWorkspacePropertiesResult,
  ModifyWorkspacePropertiesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ModifyWorkspacePropertiesCommand,
  serializeAws_json1_1ModifyWorkspacePropertiesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface ModifyWorkspacePropertiesCommandInput extends ModifyWorkspacePropertiesRequest {}
export interface ModifyWorkspacePropertiesCommandOutput extends ModifyWorkspacePropertiesResult, __MetadataBearer {}

/**
 * <p>Modifies the specified WorkSpace properties. For important information about how to
 *          modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html"> Modify a WorkSpace</a>.
 *       </p>
 *          <note>
 *             <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces
 *             Core. Contact your account team to be allow-listed to use this value. For more
 *             information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces
 *                Core</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspacePropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspacePropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifyWorkspacePropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyWorkspacePropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspacePropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class ModifyWorkspacePropertiesCommand extends $Command<
  ModifyWorkspacePropertiesCommandInput,
  ModifyWorkspacePropertiesCommandOutput,
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

  constructor(readonly input: ModifyWorkspacePropertiesCommandInput) {
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
  ): Handler<ModifyWorkspacePropertiesCommandInput, ModifyWorkspacePropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyWorkspacePropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ModifyWorkspacePropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyWorkspacePropertiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyWorkspacePropertiesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyWorkspacePropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyWorkspacePropertiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyWorkspacePropertiesCommandOutput> {
    return deserializeAws_json1_1ModifyWorkspacePropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
