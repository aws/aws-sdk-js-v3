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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import {
  GetQueryRuntimeStatisticsInput,
  GetQueryRuntimeStatisticsInputFilterSensitiveLog,
  GetQueryRuntimeStatisticsOutput,
  GetQueryRuntimeStatisticsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetQueryRuntimeStatisticsCommand,
  serializeAws_json1_1GetQueryRuntimeStatisticsCommand,
} from "../protocols/Aws_json1_1";

export interface GetQueryRuntimeStatisticsCommandInput extends GetQueryRuntimeStatisticsInput {}
export interface GetQueryRuntimeStatisticsCommandOutput extends GetQueryRuntimeStatisticsOutput, __MetadataBearer {}

/**
 * <p>Returns query execution runtime statistics related to a single execution of a query if
 *             you have access to the workgroup in which the query ran. Query execution runtime
 *             statistics are returned only when <a>QueryExecutionStatus$State</a> is in a
 *             SUCCEEDED or FAILED state. Stage-level input and output row count and data size
 *             statistics are not shown when a query has row-level filters defined in Lake
 *             Formation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetQueryRuntimeStatisticsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetQueryRuntimeStatisticsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetQueryRuntimeStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQueryRuntimeStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetQueryRuntimeStatisticsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class GetQueryRuntimeStatisticsCommand extends $Command<
  GetQueryRuntimeStatisticsCommandInput,
  GetQueryRuntimeStatisticsCommandOutput,
  AthenaClientResolvedConfig
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

  constructor(readonly input: GetQueryRuntimeStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueryRuntimeStatisticsCommandInput, GetQueryRuntimeStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetQueryRuntimeStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetQueryRuntimeStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetQueryRuntimeStatisticsInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetQueryRuntimeStatisticsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetQueryRuntimeStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetQueryRuntimeStatisticsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetQueryRuntimeStatisticsCommandOutput> {
    return deserializeAws_json1_1GetQueryRuntimeStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
