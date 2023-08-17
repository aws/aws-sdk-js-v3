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

import { DeleteStateMachineVersionInput, DeleteStateMachineVersionOutput } from "../models/models_0";
import { de_DeleteStateMachineVersionCommand, se_DeleteStateMachineVersionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteStateMachineVersionCommand}.
 */
export interface DeleteStateMachineVersionCommandInput extends DeleteStateMachineVersionInput {}
/**
 * @public
 *
 * The output of {@link DeleteStateMachineVersionCommand}.
 */
export interface DeleteStateMachineVersionCommandOutput extends DeleteStateMachineVersionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>. After
 *       you delete a version, you can't call <a>StartExecution</a> using that version's ARN
 *       or use
 *       the
 *       version with a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p>
 *          <note>
 *             <p>Deleting a state machine version won't terminate its in-progress executions.</p>
 *          </note>
 *          <note>
 *             <p>You can't delete a state machine version currently referenced by one or more aliases. Before you delete a version, you must either delete the aliases or update them to point to another state machine version.</p>
 *          </note>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>PublishStateMachineVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStateMachineVersions</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteStateMachineVersionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DeleteStateMachineVersionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // DeleteStateMachineVersionInput
 *   stateMachineVersionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteStateMachineVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStateMachineVersionCommandInput - {@link DeleteStateMachineVersionCommandInput}
 * @returns {@link DeleteStateMachineVersionCommandOutput}
 * @see {@link DeleteStateMachineVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteStateMachineVersionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state. This error occurs when there're concurrent requests for <a>DeleteStateMachineVersion</a>, <a>PublishStateMachineVersion</a>, or <a>UpdateStateMachine</a> with the <code>publish</code> parameter set to <code>true</code>.</p>
 *          <p>HTTP Status Code: 409</p>
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
export class DeleteStateMachineVersionCommand extends $Command<
  DeleteStateMachineVersionCommandInput,
  DeleteStateMachineVersionCommandOutput,
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
  constructor(readonly input: DeleteStateMachineVersionCommandInput) {
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
  ): Handler<DeleteStateMachineVersionCommandInput, DeleteStateMachineVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteStateMachineVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DeleteStateMachineVersionCommand";
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
  private serialize(input: DeleteStateMachineVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteStateMachineVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteStateMachineVersionCommandOutput> {
    return de_DeleteStateMachineVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
