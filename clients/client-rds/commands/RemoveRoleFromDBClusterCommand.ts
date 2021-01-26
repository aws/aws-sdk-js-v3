import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RemoveRoleFromDBClusterMessage } from "../models/models_1";
import {
  deserializeAws_queryRemoveRoleFromDBClusterCommand,
  serializeAws_queryRemoveRoleFromDBClusterCommand,
} from "../protocols/Aws_query";
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

export type RemoveRoleFromDBClusterCommandInput = RemoveRoleFromDBClusterMessage;
export type RemoveRoleFromDBClusterCommandOutput = __MetadataBearer;

/**
 * <p>Disassociates an AWS Identity and Access Management (IAM) role from an Amazon Aurora DB cluster.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html">Authorizing Amazon Aurora MySQL
 *                 to Access Other AWS Services on Your Behalf </a> in the <i>Amazon Aurora User Guide</i>.</p>
 *         <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *         </note>
 */
export class RemoveRoleFromDBClusterCommand extends $Command<
  RemoveRoleFromDBClusterCommandInput,
  RemoveRoleFromDBClusterCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveRoleFromDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveRoleFromDBClusterCommandInput, RemoveRoleFromDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RemoveRoleFromDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveRoleFromDBClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveRoleFromDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRemoveRoleFromDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveRoleFromDBClusterCommandOutput> {
    return deserializeAws_queryRemoveRoleFromDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
