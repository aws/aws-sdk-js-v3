// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { RegisterContainerInstanceRequest, RegisterContainerInstanceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterContainerInstanceCommand,
  serializeAws_json1_1RegisterContainerInstanceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link RegisterContainerInstanceCommand}.
 */
export interface RegisterContainerInstanceCommandInput extends RegisterContainerInstanceRequest {}
/**
 * @public
 *
 * The output of {@link RegisterContainerInstanceCommand}.
 */
export interface RegisterContainerInstanceCommandOutput extends RegisterContainerInstanceResponse, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Registers an EC2 instance into the specified cluster. This instance becomes available
 * 			to place containers on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, RegisterContainerInstanceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, RegisterContainerInstanceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = {
 *   cluster: "STRING_VALUE",
 *   instanceIdentityDocument: "STRING_VALUE",
 *   instanceIdentityDocumentSignature: "STRING_VALUE",
 *   totalResources: [
 *     {
 *       name: "STRING_VALUE",
 *       type: "STRING_VALUE",
 *       doubleValue: Number("double"),
 *       longValue: Number("long"),
 *       integerValue: Number("int"),
 *       stringSetValue: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   versionInfo: {
 *     agentVersion: "STRING_VALUE",
 *     agentHash: "STRING_VALUE",
 *     dockerVersion: "STRING_VALUE",
 *   },
 *   containerInstanceArn: "STRING_VALUE",
 *   attributes: [
 *     {
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *       targetType: "container-instance",
 *       targetId: "STRING_VALUE",
 *     },
 *   ],
 *   platformDevices: [
 *     {
 *       id: "STRING_VALUE", // required
 *       type: "GPU", // required
 *     },
 *   ],
 *   tags: [
 *     {
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new RegisterContainerInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RegisterContainerInstanceCommandInput - {@link RegisterContainerInstanceCommandInput}
 * @returns {@link RegisterContainerInstanceCommandOutput}
 * @see {@link RegisterContainerInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterContainerInstanceCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
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
 *
 */
export class RegisterContainerInstanceCommand extends $Command<
  RegisterContainerInstanceCommandInput,
  RegisterContainerInstanceCommandOutput,
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
  constructor(readonly input: RegisterContainerInstanceCommandInput) {
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
  ): Handler<RegisterContainerInstanceCommandInput, RegisterContainerInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterContainerInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "RegisterContainerInstanceCommand";
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
  private serialize(input: RegisterContainerInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterContainerInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterContainerInstanceCommandOutput> {
    return deserializeAws_json1_1RegisterContainerInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
