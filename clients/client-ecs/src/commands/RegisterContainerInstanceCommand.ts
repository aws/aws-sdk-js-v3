// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterContainerInstanceRequest, RegisterContainerInstanceResponse } from "../models/models_0";
import { de_RegisterContainerInstanceCommand, se_RegisterContainerInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @public
 */
export class RegisterContainerInstanceCommand extends $Command
  .classBuilder<
    RegisterContainerInstanceCommandInput,
    RegisterContainerInstanceCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "RegisterContainerInstance", {})
  .n("ECSClient", "RegisterContainerInstanceCommand")
  .f(void 0, void 0)
  .ser(se_RegisterContainerInstanceCommand)
  .de(de_RegisterContainerInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterContainerInstanceRequest;
      output: RegisterContainerInstanceResponse;
    };
    sdk: {
      input: RegisterContainerInstanceCommandInput;
      output: RegisterContainerInstanceCommandOutput;
    };
  };
}
