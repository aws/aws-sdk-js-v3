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
import { SubmitTaskStateChangeRequest, SubmitTaskStateChangeResponse } from "../models/models_0";
import { de_SubmitTaskStateChangeCommand, se_SubmitTaskStateChangeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SubmitTaskStateChangeCommand}.
 */
export interface SubmitTaskStateChangeCommandInput extends SubmitTaskStateChangeRequest {}
/**
 * @public
 *
 * The output of {@link SubmitTaskStateChangeCommand}.
 */
export interface SubmitTaskStateChangeCommandOutput extends SubmitTaskStateChangeResponse, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to acknowledge that a task changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitTaskStateChangeCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitTaskStateChangeCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // SubmitTaskStateChangeRequest
 *   cluster: "STRING_VALUE",
 *   task: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   reason: "STRING_VALUE",
 *   containers: [ // ContainerStateChanges
 *     { // ContainerStateChange
 *       containerName: "STRING_VALUE",
 *       imageDigest: "STRING_VALUE",
 *       runtimeId: "STRING_VALUE",
 *       exitCode: Number("int"),
 *       networkBindings: [ // NetworkBindings
 *         { // NetworkBinding
 *           bindIP: "STRING_VALUE",
 *           containerPort: Number("int"),
 *           hostPort: Number("int"),
 *           protocol: "tcp" || "udp",
 *           containerPortRange: "STRING_VALUE",
 *           hostPortRange: "STRING_VALUE",
 *         },
 *       ],
 *       reason: "STRING_VALUE",
 *       status: "STRING_VALUE",
 *     },
 *   ],
 *   attachments: [ // AttachmentStateChanges
 *     { // AttachmentStateChange
 *       attachmentArn: "STRING_VALUE", // required
 *       status: "STRING_VALUE", // required
 *     },
 *   ],
 *   managedAgents: [ // ManagedAgentStateChanges
 *     { // ManagedAgentStateChange
 *       containerName: "STRING_VALUE", // required
 *       managedAgentName: "ExecuteCommandAgent", // required
 *       status: "STRING_VALUE", // required
 *       reason: "STRING_VALUE",
 *     },
 *   ],
 *   pullStartedAt: new Date("TIMESTAMP"),
 *   pullStoppedAt: new Date("TIMESTAMP"),
 *   executionStoppedAt: new Date("TIMESTAMP"),
 * };
 * const command = new SubmitTaskStateChangeCommand(input);
 * const response = await client.send(command);
 * // { // SubmitTaskStateChangeResponse
 * //   acknowledgment: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SubmitTaskStateChangeCommandInput - {@link SubmitTaskStateChangeCommandInput}
 * @returns {@link SubmitTaskStateChangeCommandOutput}
 * @see {@link SubmitTaskStateChangeCommandInput} for command's `input` shape.
 * @see {@link SubmitTaskStateChangeCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 */
export class SubmitTaskStateChangeCommand extends $Command<
  SubmitTaskStateChangeCommandInput,
  SubmitTaskStateChangeCommandOutput,
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
  constructor(readonly input: SubmitTaskStateChangeCommandInput) {
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
  ): Handler<SubmitTaskStateChangeCommandInput, SubmitTaskStateChangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SubmitTaskStateChangeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "SubmitTaskStateChangeCommand";
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
  private serialize(input: SubmitTaskStateChangeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SubmitTaskStateChangeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubmitTaskStateChangeCommandOutput> {
    return de_SubmitTaskStateChangeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
