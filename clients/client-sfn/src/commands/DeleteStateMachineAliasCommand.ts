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

import { DeleteStateMachineAliasInput, DeleteStateMachineAliasOutput } from "../models/models_0";
import { de_DeleteStateMachineAliasCommand, se_DeleteStateMachineAliasCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteStateMachineAliasCommand}.
 */
export interface DeleteStateMachineAliasCommandInput extends DeleteStateMachineAliasInput {}
/**
 * @public
 *
 * The output of {@link DeleteStateMachineAliasCommand}.
 */
export interface DeleteStateMachineAliasCommandOutput extends DeleteStateMachineAliasOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p>
 *          <p>After you delete a state machine alias, you can't use it to start executions. When you
 *       delete a state machine alias, Step Functions doesn't delete the state machine versions
 *       that alias references.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateStateMachineAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeStateMachineAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStateMachineAliases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateStateMachineAlias</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteStateMachineAliasCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DeleteStateMachineAliasCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // DeleteStateMachineAliasInput
 *   stateMachineAliasArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteStateMachineAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStateMachineAliasCommandInput - {@link DeleteStateMachineAliasCommandInput}
 * @returns {@link DeleteStateMachineAliasCommandOutput}
 * @see {@link DeleteStateMachineAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteStateMachineAliasCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state. This error occurs when there're concurrent requests for <a>DeleteStateMachineVersion</a>, <a>PublishStateMachineVersion</a>, or <a>UpdateStateMachine</a> with the <code>publish</code> parameter set to <code>true</code>.</p>
 *          <p>HTTP Status Code: 409</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Could not find the referenced resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class DeleteStateMachineAliasCommand extends $Command<
  DeleteStateMachineAliasCommandInput,
  DeleteStateMachineAliasCommandOutput,
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
  constructor(readonly input: DeleteStateMachineAliasCommandInput) {
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
  ): Handler<DeleteStateMachineAliasCommandInput, DeleteStateMachineAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteStateMachineAliasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DeleteStateMachineAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStepFunctions",
        operation: "DeleteStateMachineAlias",
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
  private serialize(input: DeleteStateMachineAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteStateMachineAliasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStateMachineAliasCommandOutput> {
    return de_DeleteStateMachineAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
