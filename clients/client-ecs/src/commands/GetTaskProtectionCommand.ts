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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { GetTaskProtectionRequest, GetTaskProtectionResponse } from "../models/models_0";
import { de_GetTaskProtectionCommand, se_GetTaskProtectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTaskProtectionCommand}.
 */
export interface GetTaskProtectionCommandInput extends GetTaskProtectionRequest {}
/**
 * @public
 *
 * The output of {@link GetTaskProtectionCommand}.
 */
export interface GetTaskProtectionCommandOutput extends GetTaskProtectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the protection status of tasks in an Amazon ECS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, GetTaskProtectionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, GetTaskProtectionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // GetTaskProtectionRequest
 *   cluster: "STRING_VALUE", // required
 *   tasks: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetTaskProtectionCommand(input);
 * const response = await client.send(command);
 * // { // GetTaskProtectionResponse
 * //   protectedTasks: [ // ProtectedTasks
 * //     { // ProtectedTask
 * //       taskArn: "STRING_VALUE",
 * //       protectionEnabled: true || false,
 * //       expirationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTaskProtectionCommandInput - {@link GetTaskProtectionCommandInput}
 * @returns {@link GetTaskProtectionCommandOutput}
 * @see {@link GetTaskProtectionCommandInput} for command's `input` shape.
 * @see {@link GetTaskProtectionCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @example To get the protection status of a task
 * ```javascript
 * // In this example, we get the protection status for a single task.
 * const input = {
 *   "cluster": "test-task-protection",
 *   "tasks": [
 *     "b8b1cf532d0e46ba8d44a40d1de16772"
 *   ]
 * };
 * const command = new GetTaskProtectionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "protectedTasks": [
 *     {
 *       "expirationDate": "2022-11-02T06:56:32.553Z",
 *       "protectionEnabled": true,
 *       "taskArn": "arn:aws:ecs:us-west-2:012345678910:task/default/b8b1cf532d0e46ba8d44a40d1de16772"
 *     }
 *   ]
 * }
 * *\/
 * // example id: get-the-protection-status-for-a-single-task-2022-11-02T06:56:32.553Z
 * ```
 *
 */
export class GetTaskProtectionCommand extends $Command<
  GetTaskProtectionCommandInput,
  GetTaskProtectionCommandOutput,
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
  constructor(readonly input: GetTaskProtectionCommandInput) {
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
  ): Handler<GetTaskProtectionCommandInput, GetTaskProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTaskProtectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "GetTaskProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "GetTaskProtection",
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
  private serialize(input: GetTaskProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTaskProtectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTaskProtectionCommandOutput> {
    return de_GetTaskProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
