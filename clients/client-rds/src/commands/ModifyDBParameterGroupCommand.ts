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

import {
  DBParameterGroupNameMessage,
  DBParameterGroupNameMessageFilterSensitiveLog,
  ModifyDBParameterGroupMessage,
  ModifyDBParameterGroupMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryModifyDBParameterGroupCommand,
  serializeAws_queryModifyDBParameterGroupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface ModifyDBParameterGroupCommandInput extends ModifyDBParameterGroupMessage {}
export interface ModifyDBParameterGroupCommandOutput extends DBParameterGroupNameMessage, __MetadataBearer {}

/**
 * <p>Modifies the parameters of a DB parameter group. To modify more than one parameter,
 *         submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and
 *         <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p>
 *          <important>
 *             <p>After you modify a DB parameter group, you should wait at least 5 minutes
 *             before creating your first DB instance that uses that DB parameter group as the default parameter
 *             group. This allows Amazon RDS to fully complete the modify action before the parameter
 *             group is used as the default for a new DB instance. This is especially important for parameters
 *             that are critical when creating the default database for a DB instance, such as the character set
 *             for the default database defined by the <code>character_set_database</code> parameter. You can use the
 *             <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *             <i>DescribeDBParameters</i> command to verify
 *             that your DB parameter group has been created or modified.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class ModifyDBParameterGroupCommand extends $Command<
  ModifyDBParameterGroupCommandInput,
  ModifyDBParameterGroupCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: ModifyDBParameterGroupCommandInput) {
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
  ): Handler<ModifyDBParameterGroupCommandInput, ModifyDBParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBParameterGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBParameterGroupNameMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBParameterGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBParameterGroupCommandOutput> {
    return deserializeAws_queryModifyDBParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
