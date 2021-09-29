import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterCapacityInfo, ModifyCurrentDBClusterCapacityMessage } from "../models/models_1";
import {
  deserializeAws_queryModifyCurrentDBClusterCapacityCommand,
  serializeAws_queryModifyCurrentDBClusterCapacityCommand,
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

export interface ModifyCurrentDBClusterCapacityCommandInput extends ModifyCurrentDBClusterCapacityMessage {}
export interface ModifyCurrentDBClusterCapacityCommandOutput extends DBClusterCapacityInfo, __MetadataBearer {}

/**
 * <p>Set the capacity of an Aurora Serverless DB cluster to a specific value.</p>
 *          <p>Aurora Serverless scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale
 *         fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code>
 *         to set the capacity explicitly.</p>
 *          <p>After this call sets the DB cluster capacity, Aurora Serverless can automatically scale
 *             the DB cluster based on the cooldown period for scaling up and the cooldown period
 *             for scaling down.</p>
 *          <p>For more information about Aurora Serverless, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the
 *           <i>Amazon Aurora User Guide</i>.</p>
 *          <important>
 *             <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that
 *               prevent Aurora Serverless from finding a scaling point might be dropped. For more information about scaling points,
 *               see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling">
 *                   Autoscaling for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          </important>
 *          <note>
 *             <p>This action only applies to Aurora Serverless DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyCurrentDBClusterCapacityCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyCurrentDBClusterCapacityCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyCurrentDBClusterCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCurrentDBClusterCapacityCommandInput} for command's `input` shape.
 * @see {@link ModifyCurrentDBClusterCapacityCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyCurrentDBClusterCapacityCommand extends $Command<
  ModifyCurrentDBClusterCapacityCommandInput,
  ModifyCurrentDBClusterCapacityCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyCurrentDBClusterCapacityCommandInput) {
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
  ): Handler<ModifyCurrentDBClusterCapacityCommandInput, ModifyCurrentDBClusterCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyCurrentDBClusterCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyCurrentDBClusterCapacityMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBClusterCapacityInfo.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyCurrentDBClusterCapacityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryModifyCurrentDBClusterCapacityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyCurrentDBClusterCapacityCommandOutput> {
    return deserializeAws_queryModifyCurrentDBClusterCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
