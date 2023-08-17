// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { StopActivityStreamRequest, StopActivityStreamResponse } from "../models/models_1";
import { de_StopActivityStreamCommand, se_StopActivityStreamCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopActivityStreamCommand}.
 */
export interface StopActivityStreamCommandInput extends StopActivityStreamRequest {}
/**
 * @public
 *
 * The output of {@link StopActivityStreamCommand}.
 */
export interface StopActivityStreamCommandOutput extends StopActivityStreamResponse, __MetadataBearer {}

/**
 * @public
 * <p>Stops a database activity stream that was started using the Amazon Web Services console,
 *             the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p>
 *          <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">
 *                 Monitoring Amazon Aurora with Database Activity Streams</a>
 *             in the <i>Amazon Aurora User Guide</i>
 *             or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html">
 *                 Monitoring Amazon RDS with Database Activity Streams</a>
 *             in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopActivityStreamCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopActivityStreamCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // StopActivityStreamRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   ApplyImmediately: true || false,
 * };
 * const command = new StopActivityStreamCommand(input);
 * const response = await client.send(command);
 * // { // StopActivityStreamResponse
 * //   KmsKeyId: "STRING_VALUE",
 * //   KinesisStreamName: "STRING_VALUE",
 * //   Status: "stopped" || "starting" || "started" || "stopping",
 * // };
 *
 * ```
 *
 * @param StopActivityStreamCommandInput - {@link StopActivityStreamCommandInput}
 * @returns {@link StopActivityStreamCommandOutput}
 * @see {@link StopActivityStreamCommandInput} for command's `input` shape.
 * @see {@link StopActivityStreamCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The specified resource ID was not found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To stop a database activity stream
 * ```javascript
 * // The following example stops an activity stream in an Aurora cluster named my-pg-cluster.
 * const input = {
 *   "ApplyImmediately": true,
 *   "ResourceArn": "arn:aws:rds:us-east-1:1234567890123:cluster:my-pg-cluster"
 * };
 * const command = new StopActivityStreamCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KinesisStreamName": "aws-rds-das-cluster-0ABCDEFGHI1JKLM2NOPQ3R4S",
 *   "KmsKeyId": "arn:aws:kms:us-east-1:1234567890123:key/a12c345d-6ef7-890g-h123-456i789jk0l1",
 *   "Status": "stopping"
 * }
 * *\/
 * // example id: to-stop-a-database-activity-stream-1679945843823
 * ```
 *
 */
export class StopActivityStreamCommand extends $Command<
  StopActivityStreamCommandInput,
  StopActivityStreamCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: StopActivityStreamCommandInput) {
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
  ): Handler<StopActivityStreamCommandInput, StopActivityStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopActivityStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StopActivityStreamCommand";
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
  private serialize(input: StopActivityStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopActivityStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopActivityStreamCommandOutput> {
    return de_StopActivityStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
