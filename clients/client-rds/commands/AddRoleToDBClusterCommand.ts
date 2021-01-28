import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { AddRoleToDBClusterMessage } from "../models/models_0";
import {
  deserializeAws_queryAddRoleToDBClusterCommand,
  serializeAws_queryAddRoleToDBClusterCommand,
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

export type AddRoleToDBClusterCommandInput = AddRoleToDBClusterMessage;
export type AddRoleToDBClusterCommandOutput = __MetadataBearer;

/**
 * <p>Associates an Identity and Access Management (IAM) role from an Amazon Aurora DB cluster.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html">Authorizing Amazon Aurora MySQL
 *                   to Access Other AWS Services on Your Behalf</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *         <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *         </note>
 */
export class AddRoleToDBClusterCommand extends $Command<
  AddRoleToDBClusterCommandInput,
  AddRoleToDBClusterCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddRoleToDBClusterCommandInput) {
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
  ): Handler<AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "AddRoleToDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddRoleToDBClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddRoleToDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAddRoleToDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddRoleToDBClusterCommandOutput> {
    return deserializeAws_queryAddRoleToDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
