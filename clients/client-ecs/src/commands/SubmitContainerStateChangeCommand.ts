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
import { SubmitContainerStateChangeRequest, SubmitContainerStateChangeResponse } from "../models/models_0";
import { de_SubmitContainerStateChangeCommand, se_SubmitContainerStateChangeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SubmitContainerStateChangeCommand}.
 */
export interface SubmitContainerStateChangeCommandInput extends SubmitContainerStateChangeRequest {}
/**
 * @public
 *
 * The output of {@link SubmitContainerStateChangeCommand}.
 */
export interface SubmitContainerStateChangeCommandOutput extends SubmitContainerStateChangeResponse, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to acknowledge that a container changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitContainerStateChangeCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitContainerStateChangeCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // SubmitContainerStateChangeRequest
 *   cluster: "STRING_VALUE",
 *   task: "STRING_VALUE",
 *   containerName: "STRING_VALUE",
 *   runtimeId: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   exitCode: Number("int"),
 *   reason: "STRING_VALUE",
 *   networkBindings: [ // NetworkBindings
 *     { // NetworkBinding
 *       bindIP: "STRING_VALUE",
 *       containerPort: Number("int"),
 *       hostPort: Number("int"),
 *       protocol: "tcp" || "udp",
 *       containerPortRange: "STRING_VALUE",
 *       hostPortRange: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new SubmitContainerStateChangeCommand(input);
 * const response = await client.send(command);
 * // { // SubmitContainerStateChangeResponse
 * //   acknowledgment: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SubmitContainerStateChangeCommandInput - {@link SubmitContainerStateChangeCommandInput}
 * @returns {@link SubmitContainerStateChangeCommandOutput}
 * @see {@link SubmitContainerStateChangeCommandInput} for command's `input` shape.
 * @see {@link SubmitContainerStateChangeCommandOutput} for command's `response` shape.
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
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 */
export class SubmitContainerStateChangeCommand extends $Command<
  SubmitContainerStateChangeCommandInput,
  SubmitContainerStateChangeCommandOutput,
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
  constructor(readonly input: SubmitContainerStateChangeCommandInput) {
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
  ): Handler<SubmitContainerStateChangeCommandInput, SubmitContainerStateChangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SubmitContainerStateChangeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "SubmitContainerStateChangeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "SubmitContainerStateChange",
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
  private serialize(input: SubmitContainerStateChangeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SubmitContainerStateChangeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SubmitContainerStateChangeCommandOutput> {
    return de_SubmitContainerStateChangeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
