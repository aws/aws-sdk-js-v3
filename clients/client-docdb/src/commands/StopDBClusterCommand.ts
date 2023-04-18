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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { StopDBClusterMessage, StopDBClusterResult } from "../models/models_0";
import { de_StopDBClusterCommand, se_StopDBClusterCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link StopDBClusterCommand}.
 */
export interface StopDBClusterCommandInput extends StopDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link StopDBClusterCommand}.
 */
export interface StopDBClusterCommandOutput extends StopDBClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The
 *             cluster must be in the <i>available</i> state. For more information, see
 *                 <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and
 *                 Starting an Amazon DocumentDB Cluster</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, StopDBClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, StopDBClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const input = { // StopDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StopDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StopDBClusterCommandInput - {@link StopDBClusterCommandInput}
 * @returns {@link StopDBClusterCommandOutput}
 * @see {@link StopDBClusterCommandInput} for command's `input` shape.
 * @see {@link StopDBClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing cluster. </p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The cluster isn't in a valid state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p> The specified instance isn't in the <i>available</i> state.
 *         </p>
 *
 *
 */
export class StopDBClusterCommand extends $Command<
  StopDBClusterCommandInput,
  StopDBClusterCommandOutput,
  DocDBClientResolvedConfig
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

  /**
   * @public
   */
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
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopDBClusterCommandInput, StopDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopDBClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "StopDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StopDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopDBClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopDBClusterCommandOutput> {
    return de_StopDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
