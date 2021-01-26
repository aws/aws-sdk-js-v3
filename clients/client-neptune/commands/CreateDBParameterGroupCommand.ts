import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { CreateDBParameterGroupMessage, CreateDBParameterGroupResult } from "../models/models_0";
import {
  deserializeAws_queryCreateDBParameterGroupCommand,
  serializeAws_queryCreateDBParameterGroupCommand,
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

export type CreateDBParameterGroupCommandInput = CreateDBParameterGroupMessage;
export type CreateDBParameterGroupCommandOutput = CreateDBParameterGroupResult & __MetadataBearer;

/**
 * <p>Creates a new DB parameter group.</p>
 *
 *          <p>A DB parameter group is initially created with the default parameters for the database
 *       engine used by the DB instance. To provide custom values for any of the parameters, you must
 *       modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once
 *       you've created a DB parameter group, you need to associate it with your DB instance using
 *       <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a
 *       running DB instance, you need to reboot the DB instance without failover for the new DB
 *       parameter group and associated settings to take effect.</p>
 *
 *          <important>
 *             <p>After you create a DB parameter group, you should wait at least 5 minutes before
 *         creating your first DB instance that uses that DB parameter group as the default parameter
 *         group. This allows Amazon Neptune to fully complete the create action before the parameter
 *         group is used as the default for a new DB instance. This is especially important for
 *         parameters that are critical when creating the default database for a DB instance, such as
 *         the character set for the default database defined by the
 *         <code>character_set_database</code> parameter. You can use the <i>Parameter
 *         Groups</i> option of the Amazon Neptune console or the
 *         <i>DescribeDBParameters</i> command to verify that your DB parameter group has
 *         been created or modified.</p>
 *          </important>
 */
export class CreateDBParameterGroupCommand extends $Command<
  CreateDBParameterGroupCommandInput,
  CreateDBParameterGroupCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDBParameterGroupCommandInput) {
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
  ): Handler<CreateDBParameterGroupCommandInput, CreateDBParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "CreateDBParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBParameterGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDBParameterGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBParameterGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBParameterGroupCommandOutput> {
    return deserializeAws_queryCreateDBParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
