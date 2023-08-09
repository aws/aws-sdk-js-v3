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
import { DisassociateFileSystemAliasesRequest, DisassociateFileSystemAliasesResponse } from "../models/models_0";
import {
  de_DisassociateFileSystemAliasesCommand,
  se_DisassociateFileSystemAliasesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateFileSystemAliasesCommand}.
 */
export interface DisassociateFileSystemAliasesCommandInput extends DisassociateFileSystemAliasesRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFileSystemAliasesCommand}.
 */
export interface DisassociateFileSystemAliasesCommandOutput
  extends DisassociateFileSystemAliasesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases
 *             from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not
 *             associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p>
 *          <p>The system generated response showing the DNS aliases that
 *             Amazon FSx is attempting to disassociate from the file system.
 *             Use the  API
 *             operation to monitor the status of the aliases Amazon FSx is
 *             disassociating with the file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DisassociateFileSystemAliasesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DisassociateFileSystemAliasesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // DisassociateFileSystemAliasesRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE", // required
 *   Aliases: [ // AlternateDNSNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateFileSystemAliasesCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateFileSystemAliasesResponse
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
 * @param DisassociateFileSystemAliasesCommandInput - {@link DisassociateFileSystemAliasesCommandInput}
 * @returns {@link DisassociateFileSystemAliasesCommandOutput}
 * @see {@link DisassociateFileSystemAliasesCommandInput} for command's `input` shape.
 * @see {@link DisassociateFileSystemAliasesCommandOutput} for command's `response` shape.
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
export class DisassociateFileSystemAliasesCommand extends $Command<
  DisassociateFileSystemAliasesCommandInput,
  DisassociateFileSystemAliasesCommandOutput,
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
  constructor(readonly input: DisassociateFileSystemAliasesCommandInput) {
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
  ): Handler<DisassociateFileSystemAliasesCommandInput, DisassociateFileSystemAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateFileSystemAliasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DisassociateFileSystemAliasesCommand";
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
  private serialize(input: DisassociateFileSystemAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateFileSystemAliasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateFileSystemAliasesCommandOutput> {
    return de_DisassociateFileSystemAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
