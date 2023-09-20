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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { DescribeQueryRequest, DescribeQueryResponse } from "../models/models_0";
import { de_DescribeQueryCommand, se_DescribeQueryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeQueryCommand}.
 */
export interface DescribeQueryCommandInput extends DescribeQueryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeQueryCommand}.
 */
export interface DescribeQueryCommandOutput extends DescribeQueryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns metadata about a query, including query run time in milliseconds, number of
 *          events scanned and matched, and query status. If the query results were delivered to an S3 bucket,
 *          the response also provides the S3 URI and the delivery status.</p>
 *          <p>You must specify either a <code>QueryID</code> or a <code>QueryAlias</code>. Specifying
 *          the <code>QueryAlias</code> parameter returns information about the last query run for the
 *          alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DescribeQueryCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DescribeQueryCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // DescribeQueryRequest
 *   EventDataStore: "STRING_VALUE",
 *   QueryId: "STRING_VALUE",
 *   QueryAlias: "STRING_VALUE",
 * };
 * const command = new DescribeQueryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQueryResponse
 * //   QueryId: "STRING_VALUE",
 * //   QueryString: "STRING_VALUE",
 * //   QueryStatus: "QUEUED" || "RUNNING" || "FINISHED" || "FAILED" || "CANCELLED" || "TIMED_OUT",
 * //   QueryStatistics: { // QueryStatisticsForDescribeQuery
 * //     EventsMatched: Number("long"),
 * //     EventsScanned: Number("long"),
 * //     BytesScanned: Number("long"),
 * //     ExecutionTimeInMillis: Number("int"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //   },
 * //   ErrorMessage: "STRING_VALUE",
 * //   DeliveryS3Uri: "STRING_VALUE",
 * //   DeliveryStatus: "SUCCESS" || "FAILED" || "FAILED_SIGNING_FILE" || "PENDING" || "RESOURCE_NOT_FOUND" || "ACCESS_DENIED" || "ACCESS_DENIED_SIGNING_FILE" || "CANCELLED" || "UNKNOWN",
 * // };
 *
 * ```
 *
 * @param DescribeQueryCommandInput - {@link DescribeQueryCommandInput}
 * @returns {@link DescribeQueryCommandOutput}
 * @see {@link DescribeQueryCommandInput} for command's `input` shape.
 * @see {@link DescribeQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *  <p>The event data store is inactive.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link QueryIdNotFoundException} (client fault)
 *  <p>The query ID does not exist or does not map to a query.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 */
export class DescribeQueryCommand extends $Command<
  DescribeQueryCommandInput,
  DescribeQueryCommandOutput,
  CloudTrailClientResolvedConfig
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
  constructor(readonly input: DescribeQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeQueryCommandInput, DescribeQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeQueryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "DescribeQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudTrail_20131101",
        operation: "DescribeQuery",
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
  private serialize(input: DescribeQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeQueryCommandOutput> {
    return de_DescribeQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
