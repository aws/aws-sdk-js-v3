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

import { DeleteTableRequest, DeleteTableRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_0DeleteTableCommand,
  serializeAws_json1_0DeleteTableCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";

export interface DeleteTableCommandInput extends DeleteTableRequest {}
export interface DeleteTableCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a given Timestream table. This is an irreversible operation.
 *        After a Timestream database table is deleted, the time series data stored in
 *        the table cannot be recovered.
 *        </p>
 *          <note>
 *             <p>Due to the nature of distributed retries,
 *          the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
 *          </note>
 *          <p>See
 *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code sample</a> for details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, DeleteTableCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, DeleteTableCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new DeleteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTableCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 */
export class DeleteTableCommand extends $Command<
  DeleteTableCommandInput,
  DeleteTableCommandOutput,
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

  constructor(readonly input: DeleteTableCommandInput) {
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
  ): Handler<DeleteTableCommandInput, DeleteTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteTableCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamWriteClient";
    const commandName = "DeleteTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTableRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTableCommandOutput> {
    return deserializeAws_json1_0DeleteTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
