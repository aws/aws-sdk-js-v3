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
  FailoverGlobalClusterMessage,
  FailoverGlobalClusterMessageFilterSensitiveLog,
  FailoverGlobalClusterResult,
  FailoverGlobalClusterResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryFailoverGlobalClusterCommand,
  serializeAws_queryFailoverGlobalClusterCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface FailoverGlobalClusterCommandInput extends FailoverGlobalClusterMessage {}
export interface FailoverGlobalClusterCommandOutput extends FailoverGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p>
 *          <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be
 *        the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words,
 *      the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected
 *      secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p>
 *          <p>For more information about failing over an Amazon Aurora global database, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global
 *         databases</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on
 *        healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to
 *         reconfigure your Aurora global database topology.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, FailoverGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, FailoverGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new FailoverGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FailoverGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link FailoverGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class FailoverGlobalClusterCommand extends $Command<
  FailoverGlobalClusterCommandInput,
  FailoverGlobalClusterCommandOutput,
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

  constructor(readonly input: FailoverGlobalClusterCommandInput) {
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
  ): Handler<FailoverGlobalClusterCommandInput, FailoverGlobalClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, FailoverGlobalClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "FailoverGlobalClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: FailoverGlobalClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: FailoverGlobalClusterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: FailoverGlobalClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryFailoverGlobalClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FailoverGlobalClusterCommandOutput> {
    return deserializeAws_queryFailoverGlobalClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
