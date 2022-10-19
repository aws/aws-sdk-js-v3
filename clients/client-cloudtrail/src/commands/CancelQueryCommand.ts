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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import {
  CancelQueryRequest,
  CancelQueryRequestFilterSensitiveLog,
  CancelQueryResponse,
  CancelQueryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CancelQueryCommand,
  serializeAws_json1_1CancelQueryCommand,
} from "../protocols/Aws_json1_1";

export interface CancelQueryCommandInput extends CancelQueryRequest {}
export interface CancelQueryCommandOutput extends CancelQueryResponse, __MetadataBearer {}

/**
 * <p>Cancels a query if the query is not in a terminated state, such as <code>CANCELLED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>FINISHED</code>. You must specify an ARN value for <code>EventDataStore</code>.
 *          The ID of the query that you want to cancel is also required. When you run <code>CancelQuery</code>, the query status might
 *          show as <code>CANCELLED</code> even if the operation is not yet finished.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, CancelQueryCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, CancelQueryCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new CancelQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelQueryCommandInput} for command's `input` shape.
 * @see {@link CancelQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class CancelQueryCommand extends $Command<
  CancelQueryCommandInput,
  CancelQueryCommandOutput,
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

  constructor(readonly input: CancelQueryCommandInput) {
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
  ): Handler<CancelQueryCommandInput, CancelQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CancelQueryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "CancelQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelQueryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelQueryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelQueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelQueryCommandOutput> {
    return deserializeAws_json1_1CancelQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
