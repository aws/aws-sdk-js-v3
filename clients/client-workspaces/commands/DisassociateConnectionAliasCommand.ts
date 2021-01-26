import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DisassociateConnectionAliasRequest, DisassociateConnectionAliasResult } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateConnectionAliasCommand,
  serializeAws_json1_1DisassociateConnectionAliasCommand,
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

export type DisassociateConnectionAliasCommandInput = DisassociateConnectionAliasRequest;
export type DisassociateConnectionAliasCommandOutput = DisassociateConnectionAliasResult & __MetadataBearer;

/**
 * <p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region
 *          redirection between two directories in different AWS Regions. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 *
 *          <note>
 *             <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html">
 *             DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p>
 *          </note>
 */
export class DisassociateConnectionAliasCommand extends $Command<
  DisassociateConnectionAliasCommandInput,
  DisassociateConnectionAliasCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateConnectionAliasCommandInput) {
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
  ): Handler<DisassociateConnectionAliasCommandInput, DisassociateConnectionAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DisassociateConnectionAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateConnectionAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateConnectionAliasResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateConnectionAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateConnectionAliasCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateConnectionAliasCommandOutput> {
    return deserializeAws_json1_1DisassociateConnectionAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
