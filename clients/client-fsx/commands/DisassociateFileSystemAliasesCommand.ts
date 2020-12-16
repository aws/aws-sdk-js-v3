import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DisassociateFileSystemAliasesRequest, DisassociateFileSystemAliasesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateFileSystemAliasesCommand,
  serializeAws_json1_1DisassociateFileSystemAliasesCommand,
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

export type DisassociateFileSystemAliasesCommandInput = DisassociateFileSystemAliasesRequest;
export type DisassociateFileSystemAliasesCommandOutput = DisassociateFileSystemAliasesResponse & __MetadataBearer;

/**
 * <p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases
 *             from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not
 *             associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p>
 *         <p>The system generated response showing the DNS aliases that
 *             Amazon FSx is attempting to disassociate from the file system.
 *             Use the  API
 *             operation to monitor the status of the aliases Amazon FSx is
 *             disassociating with the file system.</p>
 */
export class DisassociateFileSystemAliasesCommand extends $Command<
  DisassociateFileSystemAliasesCommandInput,
  DisassociateFileSystemAliasesCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DisassociateFileSystemAliasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateFileSystemAliasesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateFileSystemAliasesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateFileSystemAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateFileSystemAliasesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateFileSystemAliasesCommandOutput> {
    return deserializeAws_json1_1DisassociateFileSystemAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
