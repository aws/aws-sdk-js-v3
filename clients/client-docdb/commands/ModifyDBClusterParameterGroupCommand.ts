import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBClusterParameterGroupNameMessage, ModifyDBClusterParameterGroupMessage } from "../models/models_0";
import {
  deserializeAws_queryModifyDBClusterParameterGroupCommand,
  serializeAws_queryModifyDBClusterParameterGroupCommand,
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

export type ModifyDBClusterParameterGroupCommandInput = ModifyDBClusterParameterGroupMessage;
export type ModifyDBClusterParameterGroupCommandOutput = DBClusterParameterGroupNameMessage & __MetadataBearer;

/**
 * <p> Modifies the parameters of a cluster parameter group. To modify more than one
 *             parameter, submit a list of the following: <code>ParameterName</code>,
 *                 <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20
 *             parameters can be modified in a single request. </p>
 *         <note>
 *             <p>Changes to dynamic parameters are applied immediately. Changes to static
 *                 parameters require a reboot or maintenance window
 *
 *                 before the change can take effect.</p>
 *         </note>
 *         <important>
 *             <p>After you create a cluster parameter group, you should wait at least 5 minutes
 *                 before creating your first cluster that uses that cluster parameter group as
 *                 the default parameter group. This allows Amazon DocumentDB to fully complete the create action
 *                 before the parameter group is used as the default for a new cluster. This step is
 *                 especially important for parameters that are critical when creating the default
 *                 database for a cluster, such as the character set for the default database
 *                 defined by the <code>character_set_database</code> parameter.</p>
 *         </important>
 */
export class ModifyDBClusterParameterGroupCommand extends $Command<
  ModifyDBClusterParameterGroupCommandInput,
  ModifyDBClusterParameterGroupCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyDBClusterParameterGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBClusterParameterGroupCommandInput, ModifyDBClusterParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "ModifyDBClusterParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBClusterParameterGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBClusterParameterGroupNameMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBClusterParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBClusterParameterGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyDBClusterParameterGroupCommandOutput> {
    return deserializeAws_queryModifyDBClusterParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
