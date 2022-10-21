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
  ResetDBParameterGroupMessage,
  ResetDBParameterGroupMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryResetDBParameterGroupCommand,
  serializeAws_queryResetDBParameterGroupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface ResetDBParameterGroupCommandInput extends ResetDBParameterGroupMessage {}
export interface ResetDBParameterGroupCommandOutput extends DBParameterGroupNameMessage, __MetadataBearer {}

/**
 * <p>Modifies the parameters of a DB parameter group to the engine/system default value.
 *             To reset specific parameters, provide a list of the following:
 *                 <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB
 *             parameter group, specify the <code>DBParameterGroup</code> name and
 *                 <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic
 *             parameters are updated immediately and static parameters are set to
 *                 <code>pending-reboot</code> to take effect on the next DB instance restart or
 *                 <code>RebootDBInstance</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ResetDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ResetDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ResetDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class ResetDBParameterGroupCommand extends $Command<
  ResetDBParameterGroupCommandInput,
  ResetDBParameterGroupCommandOutput,
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

  constructor(readonly input: ResetDBParameterGroupCommandInput) {
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
  ): Handler<ResetDBParameterGroupCommandInput, ResetDBParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetDBParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ResetDBParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetDBParameterGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBParameterGroupNameMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetDBParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryResetDBParameterGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetDBParameterGroupCommandOutput> {
    return deserializeAws_queryResetDBParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
