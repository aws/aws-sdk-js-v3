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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  AssociateFileSystemAliasesRequest,
  AssociateFileSystemAliasesRequestFilterSensitiveLog,
  AssociateFileSystemAliasesResponse,
  AssociateFileSystemAliasesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateFileSystemAliasesCommand,
  serializeAws_json1_1AssociateFileSystemAliasesCommand,
} from "../protocols/Aws_json1_1";

export interface AssociateFileSystemAliasesCommandInput extends AssociateFileSystemAliasesRequest {}
export interface AssociateFileSystemAliasesCommandOutput extends AssociateFileSystemAliasesResponse, __MetadataBearer {}

/**
 * <p>Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system.
 *         A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to
 *         associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request.
 *         For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and
 *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including
 *              additional steps you must take to be able to access your file system using a DNS alias.</p>
 *          <p>The system response shows the DNS aliases that
 *             Amazon FSx is attempting to associate with the file system.
 *             Use the  API
 *             operation to monitor the status of the aliases Amazon FSx is
 *             associating with the file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, AssociateFileSystemAliasesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, AssociateFileSystemAliasesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new AssociateFileSystemAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateFileSystemAliasesCommandInput} for command's `input` shape.
 * @see {@link AssociateFileSystemAliasesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 */
export class AssociateFileSystemAliasesCommand extends $Command<
  AssociateFileSystemAliasesCommandInput,
  AssociateFileSystemAliasesCommandOutput,
  FSxClientResolvedConfig
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

  constructor(readonly input: AssociateFileSystemAliasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateFileSystemAliasesCommandInput, AssociateFileSystemAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateFileSystemAliasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "AssociateFileSystemAliasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateFileSystemAliasesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateFileSystemAliasesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateFileSystemAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateFileSystemAliasesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateFileSystemAliasesCommandOutput> {
    return deserializeAws_json1_1AssociateFileSystemAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
