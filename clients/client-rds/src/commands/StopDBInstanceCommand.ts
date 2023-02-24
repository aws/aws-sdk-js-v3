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
  StopDBInstanceMessage,
  StopDBInstanceMessageFilterSensitiveLog,
  StopDBInstanceResult,
  StopDBInstanceResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryStopDBInstanceCommand,
  serializeAws_queryStopDBInstanceCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface StopDBInstanceCommandInput extends StopDBInstanceMessage {}
export interface StopDBInstanceCommandOutput extends StopDBInstanceResult, __MetadataBearer {}

/**
 * <p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint,
 *             DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if
 *             necessary.</p>
 *          <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html">
 *                 Stopping an Amazon RDS DB Instance Temporarily</a> in the
 *             <i>Amazon RDS User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.
 *             For Aurora clusters, use <code>StopDBCluster</code> instead.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StopDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDBInstanceCommandInput} for command's `input` shape.
 * @see {@link StopDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class StopDBInstanceCommand extends $Command<
  StopDBInstanceCommandInput,
  StopDBInstanceCommandOutput,
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

  constructor(readonly input: StopDBInstanceCommandInput) {
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
  ): Handler<StopDBInstanceCommandInput, StopDBInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopDBInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StopDBInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopDBInstanceMessageFilterSensitiveLog,
      outputFilterSensitiveLog: StopDBInstanceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopDBInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStopDBInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopDBInstanceCommandOutput> {
    return deserializeAws_queryStopDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
