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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeContinuousBackupsInput, DescribeContinuousBackupsOutput } from "../models/models_0";
import { de_DescribeContinuousBackupsCommand, se_DescribeContinuousBackupsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeContinuousBackupsCommand}.
 */
export interface DescribeContinuousBackupsCommandInput extends DescribeContinuousBackupsInput {}
/**
 * @public
 *
 * The output of {@link DescribeContinuousBackupsCommand}.
 */
export interface DescribeContinuousBackupsCommandOutput extends DescribeContinuousBackupsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Checks the status of continuous backups and point in time recovery on the specified
 *             table. Continuous backups are <code>ENABLED</code> on all tables at table creation. If
 *             point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to
 *             ENABLED.</p>
 *          <p> After continuous backups and point in time recovery are enabled, you can restore to
 *             any point in time within <code>EarliestRestorableDateTime</code> and
 *                 <code>LatestRestorableDateTime</code>. </p>
 *          <p>
 *             <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time.
 *             You can restore your table to any point in time during the last 35 days. </p>
 *          <p>You can call <code>DescribeContinuousBackups</code> at a maximum rate of 10 times per
 *             second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeContinuousBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeContinuousBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // DescribeContinuousBackupsInput
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new DescribeContinuousBackupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContinuousBackupsOutput
 * //   ContinuousBackupsDescription: { // ContinuousBackupsDescription
 * //     ContinuousBackupsStatus: "ENABLED" || "DISABLED", // required
 * //     PointInTimeRecoveryDescription: { // PointInTimeRecoveryDescription
 * //       PointInTimeRecoveryStatus: "ENABLED" || "DISABLED",
 * //       EarliestRestorableDateTime: new Date("TIMESTAMP"),
 * //       LatestRestorableDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeContinuousBackupsCommandInput - {@link DescribeContinuousBackupsCommandInput}
 * @returns {@link DescribeContinuousBackupsCommandOutput}
 * @see {@link DescribeContinuousBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeContinuousBackupsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link TableNotFoundException} (client fault)
 *  <p>A source table with the name <code>TableName</code> does not currently exist within
 *             the subscriber's account or the subscriber is operating in the wrong Amazon Web Services Region.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 */
export class DescribeContinuousBackupsCommand extends $Command<
  DescribeContinuousBackupsCommandInput,
  DescribeContinuousBackupsCommandOutput,
  DynamoDBClientResolvedConfig
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
  constructor(readonly input: DescribeContinuousBackupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeContinuousBackupsCommandInput, DescribeContinuousBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeContinuousBackupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeContinuousBackupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DynamoDB_20120810",
        operation: "DescribeContinuousBackups",
      },
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
  private serialize(input: DescribeContinuousBackupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeContinuousBackupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeContinuousBackupsCommandOutput> {
    return de_DescribeContinuousBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
