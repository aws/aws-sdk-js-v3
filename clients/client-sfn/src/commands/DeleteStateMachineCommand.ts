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

import { DeleteStateMachineInput, DeleteStateMachineOutput } from "../models/models_0";
import { de_DeleteStateMachineCommand, se_DeleteStateMachineCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteStateMachineCommand}.
 */
export interface DeleteStateMachineCommandInput extends DeleteStateMachineInput {}
/**
 * @public
 *
 * The output of {@link DeleteStateMachineCommand}.
 */
export interface DeleteStateMachineCommandOutput extends DeleteStateMachineOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's
 *       status to <code>DELETING</code> and begins the deletion process. </p>
 *          <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p>
 *          <p>The following are some examples of qualified and unqualified state machine ARNs:</p>
 *          <ul>
 *             <li>
 *                <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p>
 *                <p>
 *                   <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code>
 *                </p>
 *                <note>
 *                   <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p>
 *                <p>
 *                   <code>arn:partition:states:region:account-id:stateMachine:myStateMachine</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>This API action also deletes all <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">versions</a> and <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">aliases</a> associated with a state machine.</p>
 *          <note>
 *             <p>For <code>EXPRESS</code> state machines, the deletion happens eventually (usually in
 *         less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code>
 *         API is called.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DeleteStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // DeleteStateMachineInput
 *   stateMachineArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteStateMachineCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStateMachineCommandInput - {@link DeleteStateMachineCommandInput}
 * @returns {@link DeleteStateMachineCommandOutput}
 * @see {@link DeleteStateMachineCommandInput} for command's `input` shape.
 * @see {@link DeleteStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
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
export class DeleteStateMachineCommand extends $Command<
  DeleteStateMachineCommandInput,
  DeleteStateMachineCommandOutput,
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
  constructor(readonly input: DeleteStateMachineCommandInput) {
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
  ): Handler<DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteStateMachineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DeleteStateMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DeleteStateMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteStateMachineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStateMachineCommandOutput> {
    return de_DeleteStateMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
