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

import { StopExecutionInput, StopExecutionInputFilterSensitiveLog, StopExecutionOutput } from "../models/models_0";
import { de_StopExecutionCommand, se_StopExecutionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopExecutionCommand}.
 */
export interface StopExecutionCommandInput extends StopExecutionInput {}
/**
 * @public
 *
 * The output of {@link StopExecutionCommand}.
 */
export interface StopExecutionCommandOutput extends StopExecutionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Stops an execution.</p>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StopExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StopExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // StopExecutionInput
 *   executionArn: "STRING_VALUE", // required
 *   error: "STRING_VALUE",
 *   cause: "STRING_VALUE",
 * };
 * const command = new StopExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StopExecutionOutput
 * //   stopDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StopExecutionCommandInput - {@link StopExecutionCommandInput}
 * @returns {@link StopExecutionCommandOutput}
 * @see {@link StopExecutionCommandInput} for command's `input` shape.
 * @see {@link StopExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ExecutionDoesNotExist} (client fault)
 *  <p>The specified execution does not exist.</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class StopExecutionCommand extends $Command<
  StopExecutionCommandInput,
  StopExecutionCommandOutput,
  SFNClientResolvedConfig
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
  constructor(readonly input: StopExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopExecutionCommandInput, StopExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopExecutionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "StopExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopExecutionInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStepFunctions",
        operation: "StopExecution",
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
  private serialize(input: StopExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopExecutionCommandOutput> {
    return de_StopExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
