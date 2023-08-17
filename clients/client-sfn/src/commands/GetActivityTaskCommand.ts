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
} from "@smithy/types";

import {
  GetActivityTaskInput,
  GetActivityTaskOutput,
  GetActivityTaskOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetActivityTaskCommand, se_GetActivityTaskCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetActivityTaskCommand}.
 */
export interface GetActivityTaskCommandInput extends GetActivityTaskInput {}
/**
 * @public
 *
 * The output of {@link GetActivityTaskCommand}.
 */
export interface GetActivityTaskCommandOutput extends GetActivityTaskOutput, __MetadataBearer {}

/**
 * @public
 * <p>Used by workers to retrieve a task (with the specified activity ARN) which has been
 *       scheduled for execution by a running state machine. This initiates a long poll, where the
 *       service holds the HTTP connection open and responds as soon as a task becomes available (i.e.
 *       an execution of a task of this type is needed.) The maximum time the service holds on to the
 *       request before responding is 60 seconds. If no task is available within 60 seconds, the poll
 *       returns a <code>taskToken</code> with a null string.</p>
 *          <note>
 *             <p>This API action isn't logged in CloudTrail.</p>
 *          </note>
 *          <important>
 *             <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds
 *         higher than the maximum time the service may hold the poll request).</p>
 *             <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See
 *           <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid
 *           Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, GetActivityTaskCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, GetActivityTaskCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // GetActivityTaskInput
 *   activityArn: "STRING_VALUE", // required
 *   workerName: "STRING_VALUE",
 * };
 * const command = new GetActivityTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetActivityTaskOutput
 * //   taskToken: "STRING_VALUE",
 * //   input: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetActivityTaskCommandInput - {@link GetActivityTaskCommandInput}
 * @returns {@link GetActivityTaskCommandOutput}
 * @see {@link GetActivityTaskCommandInput} for command's `input` shape.
 * @see {@link GetActivityTaskCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ActivityDoesNotExist} (client fault)
 *  <p>The specified activity does not exist.</p>
 *
 * @throws {@link ActivityWorkerLimitExceeded} (client fault)
 *  <p>The maximum number of workers concurrently polling for activity tasks has been
 *       reached.</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class GetActivityTaskCommand extends $Command<
  GetActivityTaskCommandInput,
  GetActivityTaskCommandOutput,
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
  constructor(readonly input: GetActivityTaskCommandInput) {
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
  ): Handler<GetActivityTaskCommandInput, GetActivityTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetActivityTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "GetActivityTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetActivityTaskOutputFilterSensitiveLog,
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
  private serialize(input: GetActivityTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetActivityTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetActivityTaskCommandOutput> {
    return de_GetActivityTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
