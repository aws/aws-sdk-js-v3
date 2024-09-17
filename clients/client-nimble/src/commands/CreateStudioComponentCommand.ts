// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateStudioComponentRequest,
  CreateStudioComponentRequestFilterSensitiveLog,
  CreateStudioComponentResponse,
  CreateStudioComponentResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_CreateStudioComponentCommand, se_CreateStudioComponentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStudioComponentCommand}.
 */
export interface CreateStudioComponentCommandInput extends CreateStudioComponentRequest {}
/**
 * @public
 *
 * The output of {@link CreateStudioComponentCommand}.
 */
export interface CreateStudioComponentCommandOutput extends CreateStudioComponentResponse, __MetadataBearer {}

/**
 * <p>Creates a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // CreateStudioComponentRequest
 *   clientToken: "STRING_VALUE",
 *   configuration: { // StudioComponentConfiguration
 *     activeDirectoryConfiguration: { // ActiveDirectoryConfiguration
 *       computerAttributes: [ // ActiveDirectoryComputerAttributeList
 *         { // ActiveDirectoryComputerAttribute
 *           name: "STRING_VALUE",
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *       directoryId: "STRING_VALUE",
 *       organizationalUnitDistinguishedName: "STRING_VALUE",
 *     },
 *     computeFarmConfiguration: { // ComputeFarmConfiguration
 *       activeDirectoryUser: "STRING_VALUE",
 *       endpoint: "STRING_VALUE",
 *     },
 *     licenseServiceConfiguration: { // LicenseServiceConfiguration
 *       endpoint: "STRING_VALUE",
 *     },
 *     sharedFileSystemConfiguration: { // SharedFileSystemConfiguration
 *       endpoint: "STRING_VALUE",
 *       fileSystemId: "STRING_VALUE",
 *       linuxMountPoint: "STRING_VALUE",
 *       shareName: "STRING_VALUE",
 *       windowsMountDrive: "STRING_VALUE",
 *     },
 *   },
 *   description: "STRING_VALUE",
 *   ec2SecurityGroupIds: [ // StudioComponentSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   initializationScripts: [ // StudioComponentInitializationScriptList
 *     { // StudioComponentInitializationScript
 *       launchProfileProtocolVersion: "STRING_VALUE",
 *       platform: "LINUX" || "WINDOWS",
 *       runContext: "SYSTEM_INITIALIZATION" || "USER_INITIALIZATION",
 *       script: "STRING_VALUE",
 *     },
 *   ],
 *   name: "STRING_VALUE", // required
 *   scriptParameters: [ // StudioComponentScriptParameterKeyValueList
 *     { // ScriptParameterKeyValue
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   studioId: "STRING_VALUE", // required
 *   subtype: "AWS_MANAGED_MICROSOFT_AD" || "AMAZON_FSX_FOR_WINDOWS" || "AMAZON_FSX_FOR_LUSTRE" || "CUSTOM",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   type: "ACTIVE_DIRECTORY" || "SHARED_FILE_SYSTEM" || "COMPUTE_FARM" || "LICENSE_SERVICE" || "CUSTOM", // required
 *   secureInitializationRoleArn: "STRING_VALUE",
 *   runtimeRoleArn: "STRING_VALUE",
 * };
 * const command = new CreateStudioComponentCommand(input);
 * const response = await client.send(command);
 * // { // CreateStudioComponentResponse
 * //   studioComponent: { // StudioComponent
 * //     arn: "STRING_VALUE",
 * //     configuration: { // StudioComponentConfiguration
 * //       activeDirectoryConfiguration: { // ActiveDirectoryConfiguration
 * //         computerAttributes: [ // ActiveDirectoryComputerAttributeList
 * //           { // ActiveDirectoryComputerAttribute
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         directoryId: "STRING_VALUE",
 * //         organizationalUnitDistinguishedName: "STRING_VALUE",
 * //       },
 * //       computeFarmConfiguration: { // ComputeFarmConfiguration
 * //         activeDirectoryUser: "STRING_VALUE",
 * //         endpoint: "STRING_VALUE",
 * //       },
 * //       licenseServiceConfiguration: { // LicenseServiceConfiguration
 * //         endpoint: "STRING_VALUE",
 * //       },
 * //       sharedFileSystemConfiguration: { // SharedFileSystemConfiguration
 * //         endpoint: "STRING_VALUE",
 * //         fileSystemId: "STRING_VALUE",
 * //         linuxMountPoint: "STRING_VALUE",
 * //         shareName: "STRING_VALUE",
 * //         windowsMountDrive: "STRING_VALUE",
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     ec2SecurityGroupIds: [ // StudioComponentSecurityGroupIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     initializationScripts: [ // StudioComponentInitializationScriptList
 * //       { // StudioComponentInitializationScript
 * //         launchProfileProtocolVersion: "STRING_VALUE",
 * //         platform: "LINUX" || "WINDOWS",
 * //         runContext: "SYSTEM_INITIALIZATION" || "USER_INITIALIZATION",
 * //         script: "STRING_VALUE",
 * //       },
 * //     ],
 * //     name: "STRING_VALUE",
 * //     scriptParameters: [ // StudioComponentScriptParameterKeyValueList
 * //       { // ScriptParameterKeyValue
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     state: "CREATE_IN_PROGRESS" || "READY" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DELETE_FAILED" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //     statusCode: "ACTIVE_DIRECTORY_ALREADY_EXISTS" || "STUDIO_COMPONENT_CREATED" || "STUDIO_COMPONENT_UPDATED" || "STUDIO_COMPONENT_DELETED" || "ENCRYPTION_KEY_ACCESS_DENIED" || "ENCRYPTION_KEY_NOT_FOUND" || "STUDIO_COMPONENT_CREATE_IN_PROGRESS" || "STUDIO_COMPONENT_UPDATE_IN_PROGRESS" || "STUDIO_COMPONENT_DELETE_IN_PROGRESS" || "INTERNAL_ERROR",
 * //     statusMessage: "STRING_VALUE",
 * //     studioComponentId: "STRING_VALUE",
 * //     subtype: "AWS_MANAGED_MICROSOFT_AD" || "AMAZON_FSX_FOR_WINDOWS" || "AMAZON_FSX_FOR_LUSTRE" || "CUSTOM",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     type: "ACTIVE_DIRECTORY" || "SHARED_FILE_SYSTEM" || "COMPUTE_FARM" || "LICENSE_SERVICE" || "CUSTOM",
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     updatedBy: "STRING_VALUE",
 * //     secureInitializationRoleArn: "STRING_VALUE",
 * //     runtimeRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateStudioComponentCommandInput - {@link CreateStudioComponentCommandInput}
 * @returns {@link CreateStudioComponentCommandOutput}
 * @see {@link CreateStudioComponentCommandInput} for command's `input` shape.
 * @see {@link CreateStudioComponentCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link NimbleServiceException}
 * <p>Base exception class for all service exceptions from Nimble service.</p>
 *
 * @public
 */
export class CreateStudioComponentCommand extends $Command
  .classBuilder<
    CreateStudioComponentCommandInput,
    CreateStudioComponentCommandOutput,
    NimbleClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NimbleClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("nimble", "CreateStudioComponent", {})
  .n("NimbleClient", "CreateStudioComponentCommand")
  .f(CreateStudioComponentRequestFilterSensitiveLog, CreateStudioComponentResponseFilterSensitiveLog)
  .ser(se_CreateStudioComponentCommand)
  .de(de_CreateStudioComponentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStudioComponentRequest;
      output: CreateStudioComponentResponse;
    };
    sdk: {
      input: CreateStudioComponentCommandInput;
      output: CreateStudioComponentCommandOutput;
    };
  };
}
