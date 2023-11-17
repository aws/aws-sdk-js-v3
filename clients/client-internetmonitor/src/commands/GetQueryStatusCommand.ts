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

import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import { GetQueryStatusInput, GetQueryStatusOutput } from "../models/models_0";
import { de_GetQueryStatusCommand, se_GetQueryStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetQueryStatusCommand}.
 */
export interface GetQueryStatusCommandInput extends GetQueryStatusInput {}
/**
 * @public
 *
 * The output of {@link GetQueryStatusCommand}.
 */
export interface GetQueryStatusCommandOutput extends GetQueryStatusOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the current status of a query for the Amazon CloudWatch Internet Monitor query interface, for a specified query ID and monitor.
 * 			When you run a query, check the status to make sure that the query has <code>SUCCEEDED</code> before you review the results.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>QUEUED</code>: The query is scheduled to run.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RUNNING</code>: The query is in progress but not complete.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SUCCEEDED</code>: The query completed sucessfully.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FAILED</code>: The query failed due to an error.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CANCELED</code>: The query was canceled.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, GetQueryStatusCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, GetQueryStatusCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * const client = new InternetMonitorClient(config);
 * const input = { // GetQueryStatusInput
 *   MonitorName: "STRING_VALUE", // required
 *   QueryId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryStatusOutput
 * //   Status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetQueryStatusCommandInput - {@link GetQueryStatusCommandInput}
 * @returns {@link GetQueryStatusCommandOutput}
 * @see {@link GetQueryStatusCommandInput} for command's `input` shape.
 * @see {@link GetQueryStatusCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link InternetMonitorServiceException}
 * <p>Base exception class for all service exceptions from InternetMonitor service.</p>
 *
 */
export class GetQueryStatusCommand extends $Command<
  GetQueryStatusCommandInput,
  GetQueryStatusCommandOutput,
  InternetMonitorClientResolvedConfig
> {
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
  constructor(readonly input: GetQueryStatusCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InternetMonitorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueryStatusCommandInput, GetQueryStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetQueryStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InternetMonitorClient";
    const commandName = "GetQueryStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InternetMonitor20210603",
        operation: "GetQueryStatus",
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
  private serialize(input: GetQueryStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetQueryStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQueryStatusCommandOutput> {
    return de_GetQueryStatusCommand(output, context);
  }
}
