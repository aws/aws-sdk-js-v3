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
  BacktrackDBClusterMessage,
  BacktrackDBClusterMessageFilterSensitiveLog,
  DBClusterBacktrack,
  DBClusterBacktrackFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryBacktrackDBClusterCommand,
  serializeAws_queryBacktrackDBClusterCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * The input for {@link BacktrackDBClusterCommand}.
 */
export interface BacktrackDBClusterCommandInput extends BacktrackDBClusterMessage {}
/**
 * The output of {@link BacktrackDBClusterCommand}.
 */
export interface BacktrackDBClusterCommandOutput extends DBClusterBacktrack, __MetadataBearer {}

/**
 * <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p>
 *          <p>For more information on backtracking, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html">
 *                 Backtracking an Aurora DB Cluster</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This action applies only to Aurora MySQL DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, BacktrackDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, BacktrackDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new BacktrackDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BacktrackDBClusterCommandInput} for command's `input` shape.
 * @see {@link BacktrackDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class BacktrackDBClusterCommand extends $Command<
  BacktrackDBClusterCommandInput,
  BacktrackDBClusterCommandOutput,
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

  constructor(readonly input: BacktrackDBClusterCommandInput) {
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
  ): Handler<BacktrackDBClusterCommandInput, BacktrackDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BacktrackDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "BacktrackDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BacktrackDBClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBClusterBacktrackFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BacktrackDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBacktrackDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BacktrackDBClusterCommandOutput> {
    return deserializeAws_queryBacktrackDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
