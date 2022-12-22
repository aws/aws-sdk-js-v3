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
  RebootDBClusterMessage,
  RebootDBClusterMessageFilterSensitiveLog,
  RebootDBClusterResult,
  RebootDBClusterResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryRebootDBClusterCommand,
  serializeAws_queryRebootDBClusterCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface RebootDBClusterCommandInput extends RebootDBClusterMessage {}
export interface RebootDBClusterCommandOutput extends RebootDBClusterResult, __MetadataBearer {}

/**
 * <p>You might need to reboot your DB cluster, usually for maintenance reasons.
 *           For example, if you make certain modifications,
 *           or if you change the DB cluster parameter group associated with the DB cluster,
 *           reboot the DB cluster for the changes to take effect.</p>
 *          <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB
 *           cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p>
 *          <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p>
 *          <p>For more information on Multi-AZ DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
 *               Multi-AZ deployments with two readable standby DB instances</a> in the
 *           <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RebootDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RebootDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RebootDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootDBClusterCommandInput} for command's `input` shape.
 * @see {@link RebootDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class RebootDBClusterCommand extends $Command<
  RebootDBClusterCommandInput,
  RebootDBClusterCommandOutput,
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

  constructor(readonly input: RebootDBClusterCommandInput) {
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
  ): Handler<RebootDBClusterCommandInput, RebootDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RebootDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RebootDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RebootDBClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: RebootDBClusterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RebootDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRebootDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RebootDBClusterCommandOutput> {
    return deserializeAws_queryRebootDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
