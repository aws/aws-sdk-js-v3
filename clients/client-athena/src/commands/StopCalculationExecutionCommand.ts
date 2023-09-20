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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { StopCalculationExecutionRequest, StopCalculationExecutionResponse } from "../models/models_0";
import { de_StopCalculationExecutionCommand, se_StopCalculationExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopCalculationExecutionCommand}.
 */
export interface StopCalculationExecutionCommandInput extends StopCalculationExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StopCalculationExecutionCommand}.
 */
export interface StopCalculationExecutionCommandOutput extends StopCalculationExecutionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code>
 *             call on a calculation that is already in a terminal state (for example,
 *                 <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but
 *             has no effect.</p>
 *          <note>
 *             <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot
 *                 be cancelled, you can be charged for its completion. If you are concerned about
 *                 being charged for a calculation that cannot be cancelled, consider terminating the
 *                 session in which the calculation is running.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StopCalculationExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StopCalculationExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // StopCalculationExecutionRequest
 *   CalculationExecutionId: "STRING_VALUE", // required
 * };
 * const command = new StopCalculationExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StopCalculationExecutionResponse
 * //   State: "CREATING" || "CREATED" || "QUEUED" || "RUNNING" || "CANCELING" || "CANCELED" || "COMPLETED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param StopCalculationExecutionCommandInput - {@link StopCalculationExecutionCommandInput}
 * @returns {@link StopCalculationExecutionCommandOutput}
 * @see {@link StopCalculationExecutionCommandInput} for command's `input` shape.
 * @see {@link StopCalculationExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class StopCalculationExecutionCommand extends $Command<
  StopCalculationExecutionCommandInput,
  StopCalculationExecutionCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: StopCalculationExecutionCommandInput) {
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
  ): Handler<StopCalculationExecutionCommandInput, StopCalculationExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopCalculationExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "StopCalculationExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAthena",
        operation: "StopCalculationExecution",
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
  private serialize(input: StopCalculationExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopCalculationExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopCalculationExecutionCommandOutput> {
    return de_StopCalculationExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
