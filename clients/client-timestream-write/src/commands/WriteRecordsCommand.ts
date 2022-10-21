// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
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
  WriteRecordsRequest,
  WriteRecordsRequestFilterSensitiveLog,
  WriteRecordsResponse,
  WriteRecordsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0WriteRecordsCommand,
  serializeAws_json1_0WriteRecordsCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";

export interface WriteRecordsCommandInput extends WriteRecordsRequest {}
export interface WriteRecordsCommandOutput extends WriteRecordsResponse, __MetadataBearer {}

/**
 * <p>The WriteRecords operation enables you to write your time series
 *       data into Timestream. You can specify a single data point or a batch
 *       of data points to be inserted into the system. Timestream offers you
 *       with a flexible schema that auto detects the column names and data types
 *       for your Timestream tables based on the dimension names and data types of
 *       the data points you specify when invoking writes into the database.
 *       Timestream support eventual consistency read semantics. This means that
 *       when you query data immediately after writing a batch of data into Timestream,
 *       the query results might not reflect the results of a recently completed write
 *       operation. The results may also include some stale data. If you repeat the
 *       query request after a short time, the results should return the latest data.
 *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>.
 *         </p>
 *
 *          <p>See
 *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for details.</p>
 *
 *          <p>
 *             <b>Upserts</b>
 *          </p>
 *
 *          <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to update data points.
 *          Timestream tracks a version number with each record. <code>Version</code> defaults to <code>1</code> when not specified for the record in the request.
 *          Timestream will update an existing record’s measure value along with its <code>Version</code> upon receiving a write request with a higher
 *          <code>Version</code> number for that record.
 *          Upon receiving an update request where the measure value is the same as that of the existing record,
 *          Timestream still updates <code>Version</code>, if it is greater than the existing value of <code>Version</code>.
 *          You can update a data point as many times as desired, as long as the value of <code>Version</code> continuously increases.
 *       </p>
 *          <p>
 *          For example, suppose you write a new record without indicating <code>Version</code> in the request.
 *          Timestream will store this record, and set <code>Version</code> to <code>1</code>.
 *          Now, suppose you try to update this record with a <code>WriteRecords</code> request of the same record with a different measure value but,
 *          like before, do not provide <code>Version</code>.
 *          In this case, Timestream will reject this update with a <code>RejectedRecordsException</code> since the updated record’s version is not greater than the existing value of Version.
 *          However, if you were to resend the update request with <code>Version</code> set to <code>2</code>,
 *          Timestream would then succeed in updating the record’s value,
 *          and the <code>Version</code> would be set to <code>2</code>.
 *          Next, suppose you sent a <code>WriteRecords</code> request with this same record and an identical measure value,
 *          but with <code>Version</code> set to <code>3</code>.
 *          In this case, Timestream would only update <code>Version</code> to <code>3</code>.
 *          Any further updates would need to send a version number greater than <code>3</code>,
 *          or the update requests would receive a <code>RejectedRecordsException</code>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, WriteRecordsCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, WriteRecordsCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new WriteRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link WriteRecordsCommandInput} for command's `input` shape.
 * @see {@link WriteRecordsCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 */
export class WriteRecordsCommand extends $Command<
  WriteRecordsCommandInput,
  WriteRecordsCommandOutput,
  TimestreamWriteClientResolvedConfig
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

  constructor(readonly input: WriteRecordsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamWriteClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<WriteRecordsCommandInput, WriteRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, WriteRecordsCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamWriteClient";
    const commandName = "WriteRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: WriteRecordsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: WriteRecordsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: WriteRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0WriteRecordsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<WriteRecordsCommandOutput> {
    return deserializeAws_json1_0WriteRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
