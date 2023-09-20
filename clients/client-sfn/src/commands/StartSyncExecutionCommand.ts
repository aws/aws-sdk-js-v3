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

import {
  StartSyncExecutionInput,
  StartSyncExecutionInputFilterSensitiveLog,
  StartSyncExecutionOutput,
  StartSyncExecutionOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_StartSyncExecutionCommand, se_StartSyncExecutionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSyncExecutionCommand}.
 */
export interface StartSyncExecutionCommandInput extends StartSyncExecutionInput {}
/**
 * @public
 *
 * The output of {@link StartSyncExecutionCommand}.
 */
export interface StartSyncExecutionCommandOutput extends StartSyncExecutionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Starts a Synchronous Express state machine execution. <code>StartSyncExecution</code>
 * 			  is not available for <code>STANDARD</code> workflows.</p>
 *          <note>
 *             <p>
 *                <code>StartSyncExecution</code> will return a <code>200 OK</code> response, even if your
 *         execution fails, because the status code in the API response doesn't reflect function
 *         errors. Error codes are reserved for errors that prevent your execution from running, such
 *         as permissions errors, limit errors, or issues with your state machine code and
 *         configuration. </p>
 *          </note>
 *          <note>
 *             <p>This API action isn't logged in CloudTrail.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StartSyncExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StartSyncExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // StartSyncExecutionInput
 *   stateMachineArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   input: "STRING_VALUE",
 *   traceHeader: "STRING_VALUE",
 * };
 * const command = new StartSyncExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartSyncExecutionOutput
 * //   executionArn: "STRING_VALUE", // required
 * //   stateMachineArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   startDate: new Date("TIMESTAMP"), // required
 * //   stopDate: new Date("TIMESTAMP"), // required
 * //   status: "SUCCEEDED" || "FAILED" || "TIMED_OUT", // required
 * //   error: "STRING_VALUE",
 * //   cause: "STRING_VALUE",
 * //   input: "STRING_VALUE",
 * //   inputDetails: { // CloudWatchEventsExecutionDataDetails
 * //     included: true || false,
 * //   },
 * //   output: "STRING_VALUE",
 * //   outputDetails: {
 * //     included: true || false,
 * //   },
 * //   traceHeader: "STRING_VALUE",
 * //   billingDetails: { // BillingDetails
 * //     billedMemoryUsedInMB: Number("long"),
 * //     billedDurationInMilliseconds: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param StartSyncExecutionCommandInput - {@link StartSyncExecutionCommandInput}
 * @returns {@link StartSyncExecutionCommandOutput}
 * @see {@link StartSyncExecutionCommandInput} for command's `input` shape.
 * @see {@link StartSyncExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link InvalidExecutionInput} (client fault)
 *  <p>The provided JSON input data is not valid.</p>
 *
 * @throws {@link InvalidName} (client fault)
 *  <p>The provided name is not valid.</p>
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *  <p>The specified state machine is being deleted.</p>
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *  <p>The specified state machine does not exist.</p>
 *
 * @throws {@link StateMachineTypeNotSupported} (client fault)
 *  <p></p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class StartSyncExecutionCommand extends $Command<
  StartSyncExecutionCommandInput,
  StartSyncExecutionCommandOutput,
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
  constructor(readonly input: StartSyncExecutionCommandInput) {
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
  ): Handler<StartSyncExecutionCommandInput, StartSyncExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSyncExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "StartSyncExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSyncExecutionInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartSyncExecutionOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStepFunctions",
        operation: "StartSyncExecution",
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
  private serialize(input: StartSyncExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartSyncExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSyncExecutionCommandOutput> {
    return de_StartSyncExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
