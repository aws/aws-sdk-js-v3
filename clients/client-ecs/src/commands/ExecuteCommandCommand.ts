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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  ExecuteCommandRequest,
  ExecuteCommandResponse,
  ExecuteCommandResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ExecuteCommandCommand, se_ExecuteCommandCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExecuteCommandCommand}.
 */
export interface ExecuteCommandCommandInput extends ExecuteCommandRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteCommandCommand}.
 */
export interface ExecuteCommandCommandOutput extends ExecuteCommandResponse, __MetadataBearer {}

/**
 * @public
 * <p>Runs a command remotely on a container within a task.</p>
 *          <p>If you use a condition key in your IAM policy to refine the conditions for the policy
 * 			statement, for example limit the actions to a specific cluster, you receive an
 * 				<code>AccessDeniedException</code> when there is a mismatch between the condition
 * 			key value and the corresponding parameter value.</p>
 *          <p>For information about required permissions and considerations, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Using Amazon ECS Exec for
 * 			debugging</a> in the <i>Amazon ECS Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ExecuteCommandCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ExecuteCommandCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // ExecuteCommandRequest
 *   cluster: "STRING_VALUE",
 *   container: "STRING_VALUE",
 *   command: "STRING_VALUE", // required
 *   interactive: true || false, // required
 *   task: "STRING_VALUE", // required
 * };
 * const command = new ExecuteCommandCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteCommandResponse
 * //   clusterArn: "STRING_VALUE",
 * //   containerArn: "STRING_VALUE",
 * //   containerName: "STRING_VALUE",
 * //   interactive: true || false,
 * //   session: { // Session
 * //     sessionId: "STRING_VALUE",
 * //     streamUrl: "STRING_VALUE",
 * //     tokenValue: "STRING_VALUE",
 * //   },
 * //   taskArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExecuteCommandCommandInput - {@link ExecuteCommandCommandInput}
 * @returns {@link ExecuteCommandCommandOutput}
 * @see {@link ExecuteCommandCommandInput} for command's `input` shape.
 * @see {@link ExecuteCommandCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link TargetNotConnectedException} (client fault)
 *  <p>The execute command cannot run. This error can be caused by any of the following
 * 			configuration issues:</p>
 *          <ul>
 *             <li>
 *                <p>Incorrect IAM permissions</p>
 *             </li>
 *             <li>
 *                <p>The SSM agent is not installed or is not running</p>
 *             </li>
 *             <li>
 *                <p> There is an interface Amazon VPC endpoint for Amazon ECS, but there is not one for Systems
 * 					Manager Session Manager</p>
 *             </li>
 *          </ul>
 *          <p>For information about how to troubleshoot the issues, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Troubleshooting issues with ECS
 * 				Exec</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 */
export class ExecuteCommandCommand extends $Command<
  ExecuteCommandCommandInput,
  ExecuteCommandCommandOutput,
  ECSClientResolvedConfig
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
  constructor(readonly input: ExecuteCommandCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteCommandCommandInput, ExecuteCommandCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteCommandCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ExecuteCommandCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ExecuteCommandResponseFilterSensitiveLog,
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
  private serialize(input: ExecuteCommandCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExecuteCommandCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteCommandCommandOutput> {
    return de_ExecuteCommandCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
