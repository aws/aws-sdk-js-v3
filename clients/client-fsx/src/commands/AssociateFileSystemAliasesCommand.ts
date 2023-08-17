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
} from "@smithy/types";

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { AssociateFileSystemAliasesRequest, AssociateFileSystemAliasesResponse } from "../models/models_0";
import { de_AssociateFileSystemAliasesCommand, se_AssociateFileSystemAliasesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateFileSystemAliasesCommand}.
 */
export interface AssociateFileSystemAliasesCommandInput extends AssociateFileSystemAliasesRequest {}
/**
 * @public
 *
 * The output of {@link AssociateFileSystemAliasesCommand}.
 */
export interface AssociateFileSystemAliasesCommandOutput extends AssociateFileSystemAliasesResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // AssociateFileSystemAliasesRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE", // required
 *   Aliases: [ // AlternateDNSNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateFileSystemAliasesCommand(input);
 * const response = await client.send(command);
 * // { // AssociateFileSystemAliasesResponse
 * //   Aliases: [ // Aliases
 * //     { // Alias
 * //       Name: "STRING_VALUE",
 * //       Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateFileSystemAliasesCommandInput - {@link AssociateFileSystemAliasesCommandInput}
 * @returns {@link AssociateFileSystemAliasesCommandOutput}
 * @see {@link AssociateFileSystemAliasesCommandInput} for command's `input` shape.
 * @see {@link AssociateFileSystemAliasesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: AssociateFileSystemAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateFileSystemAliasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateFileSystemAliasesCommandOutput> {
    return de_AssociateFileSystemAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
