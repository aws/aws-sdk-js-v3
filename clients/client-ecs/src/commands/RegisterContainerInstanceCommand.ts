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
import { RegisterContainerInstanceRequest, RegisterContainerInstanceResponse } from "../models/models_0";
import { de_RegisterContainerInstanceCommand, se_RegisterContainerInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * const input = { // RegisterContainerInstanceRequest
 *   cluster: "STRING_VALUE",
 *   instanceIdentityDocument: "STRING_VALUE",
 *   instanceIdentityDocumentSignature: "STRING_VALUE",
 *   totalResources: [ // Resources
 *     { // Resource
 *       name: "STRING_VALUE",
 *       type: "STRING_VALUE",
 *       doubleValue: Number("double"),
 *       longValue: Number("long"),
 *       integerValue: Number("int"),
 *       stringSetValue: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   versionInfo: { // VersionInfo
 *     agentVersion: "STRING_VALUE",
 *     agentHash: "STRING_VALUE",
 *     dockerVersion: "STRING_VALUE",
 *   },
 *   containerInstanceArn: "STRING_VALUE",
 *   attributes: [ // Attributes
 *     { // Attribute
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *       targetType: "container-instance",
 *       targetId: "STRING_VALUE",
 *     },
 *   ],
 *   platformDevices: [ // PlatformDevices
 *     { // PlatformDevice
 *       id: "STRING_VALUE", // required
 *       type: "GPU", // required
 *     },
 *   ],
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new RegisterContainerInstanceCommand(input);
 * const response = await client.send(command);
 * // { // RegisterContainerInstanceResponse
 * //   containerInstance: { // ContainerInstance
 * //     containerInstanceArn: "STRING_VALUE",
 * //     ec2InstanceId: "STRING_VALUE",
 * //     capacityProviderName: "STRING_VALUE",
 * //     version: Number("long"),
 * //     versionInfo: { // VersionInfo
 * //       agentVersion: "STRING_VALUE",
 * //       agentHash: "STRING_VALUE",
 * //       dockerVersion: "STRING_VALUE",
 * //     },
 * //     remainingResources: [ // Resources
 * //       { // Resource
 * //         name: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //         doubleValue: Number("double"),
 * //         longValue: Number("long"),
 * //         integerValue: Number("int"),
 * //         stringSetValue: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     registeredResources: [
 * //       {
 * //         name: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //         doubleValue: Number("double"),
 * //         longValue: Number("long"),
 * //         integerValue: Number("int"),
 * //         stringSetValue: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     status: "STRING_VALUE",
 * //     statusReason: "STRING_VALUE",
 * //     agentConnected: true || false,
 * //     runningTasksCount: Number("int"),
 * //     pendingTasksCount: Number("int"),
 * //     agentUpdateStatus: "PENDING" || "STAGING" || "STAGED" || "UPDATING" || "UPDATED" || "FAILED",
 * //     attributes: [ // Attributes
 * //       { // Attribute
 * //         name: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //         targetType: "container-instance",
 * //         targetId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     registeredAt: new Date("TIMESTAMP"),
 * //     attachments: [ // Attachments
 * //       { // Attachment
 * //         id: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //         status: "STRING_VALUE",
 * //         details: [ // AttachmentDetails
 * //           { // KeyValuePair
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     tags: [ // Tags
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     healthStatus: { // ContainerInstanceHealthStatus
 * //       overallStatus: "OK" || "IMPAIRED" || "INSUFFICIENT_DATA" || "INITIALIZING",
 * //       details: [ // InstanceHealthCheckResultList
 * //         { // InstanceHealthCheckResult
 * //           type: "CONTAINER_RUNTIME",
 * //           status: "OK" || "IMPAIRED" || "INSUFFICIENT_DATA" || "INITIALIZING",
 * //           lastUpdated: new Date("TIMESTAMP"),
 * //           lastStatusChange: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
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
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
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
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "RegisterContainerInstance",
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
  private serialize(input: RegisterContainerInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterContainerInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterContainerInstanceCommandOutput> {
    return de_RegisterContainerInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
