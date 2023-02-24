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
  StopDBClusterMessage,
  StopDBClusterMessageFilterSensitiveLog,
  StopDBClusterResult,
  StopDBClusterResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryStopDBClusterCommand,
  serializeAws_queryStopDBClusterCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface StopDBClusterCommandInput extends StopDBClusterMessage {}
export interface StopDBClusterCommandOutput extends StopDBClusterResult, __MetadataBearer {}

/**
 * <p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's
 *        metadata, including its endpoints and DB parameter groups. Aurora also
 *        retains the transaction logs so you can do a point-in-time restore if necessary.</p>
 *          <p>For more information, see
 *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html">
 *                Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StopDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDBClusterCommandInput} for command's `input` shape.
 * @see {@link StopDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class StopDBClusterCommand extends $Command<
  StopDBClusterCommandInput,
  StopDBClusterCommandOutput,
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

  constructor(readonly input: StopDBClusterCommandInput) {
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
  ): Handler<StopDBClusterCommandInput, StopDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopDBClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StopDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopDBClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: StopDBClusterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStopDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopDBClusterCommandOutput> {
    return deserializeAws_queryStopDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
