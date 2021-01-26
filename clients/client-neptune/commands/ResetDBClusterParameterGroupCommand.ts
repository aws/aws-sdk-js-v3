import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBClusterParameterGroupNameMessage, ResetDBClusterParameterGroupMessage } from "../models/models_0";
import {
  deserializeAws_queryResetDBClusterParameterGroupCommand,
  serializeAws_queryResetDBClusterParameterGroupCommand,
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

export type ResetDBClusterParameterGroupCommandInput = ResetDBClusterParameterGroupMessage;
export type ResetDBClusterParameterGroupCommandOutput = DBClusterParameterGroupNameMessage & __MetadataBearer;

/**
 * <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset
 *       specific parameters submit a list of the following: <code>ParameterName</code> and
 *       <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the
 *       <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p>
 *          <p> When resetting the entire group, dynamic parameters are updated immediately and static
 *       parameters are set to <code>pending-reboot</code> to take effect on the next DB instance
 *       restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster
 *       that you want the updated static parameter to apply to.</p>
 */
export class ResetDBClusterParameterGroupCommand extends $Command<
  ResetDBClusterParameterGroupCommandInput,
  ResetDBClusterParameterGroupCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetDBClusterParameterGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "ResetDBClusterParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetDBClusterParameterGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBClusterParameterGroupNameMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetDBClusterParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryResetDBClusterParameterGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResetDBClusterParameterGroupCommandOutput> {
    return deserializeAws_queryResetDBClusterParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
