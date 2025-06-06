// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAppValidationConfigurationRequest, GetAppValidationConfigurationResponse } from "../models/models_0";
import {
  de_GetAppValidationConfigurationCommand,
  se_GetAppValidationConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAppValidationConfigurationCommand}.
 */
export interface GetAppValidationConfigurationCommandInput extends GetAppValidationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetAppValidationConfigurationCommand}.
 */
export interface GetAppValidationConfigurationCommandOutput
  extends GetAppValidationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about a configuration for validating an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppValidationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppValidationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // GetAppValidationConfigurationRequest
 *   appId: "STRING_VALUE", // required
 * };
 * const command = new GetAppValidationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAppValidationConfigurationResponse
 * //   appValidationConfigurations: [ // AppValidationConfigurations
 * //     { // AppValidationConfiguration
 * //       validationId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       appValidationStrategy: "SSM",
 * //       ssmValidationParameters: { // SSMValidationParameters
 * //         source: { // Source
 * //           s3Location: { // S3Location
 * //             bucket: "STRING_VALUE",
 * //             key: "STRING_VALUE",
 * //           },
 * //         },
 * //         instanceId: "STRING_VALUE",
 * //         scriptType: "SHELL_SCRIPT" || "POWERSHELL_SCRIPT",
 * //         command: "STRING_VALUE",
 * //         executionTimeoutSeconds: Number("int"),
 * //         outputS3BucketName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   serverGroupValidationConfigurations: [ // ServerGroupValidationConfigurations
 * //     { // ServerGroupValidationConfiguration
 * //       serverGroupId: "STRING_VALUE",
 * //       serverValidationConfigurations: [ // ServerValidationConfigurations
 * //         { // ServerValidationConfiguration
 * //           server: { // Server
 * //             serverId: "STRING_VALUE",
 * //             serverType: "VIRTUAL_MACHINE",
 * //             vmServer: { // VmServer
 * //               vmServerAddress: { // VmServerAddress
 * //                 vmManagerId: "STRING_VALUE",
 * //                 vmId: "STRING_VALUE",
 * //               },
 * //               vmName: "STRING_VALUE",
 * //               vmManagerName: "STRING_VALUE",
 * //               vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 * //               vmPath: "STRING_VALUE",
 * //             },
 * //             replicationJobId: "STRING_VALUE",
 * //             replicationJobTerminated: true || false,
 * //           },
 * //           validationId: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //           serverValidationStrategy: "USERDATA",
 * //           userDataValidationParameters: { // UserDataValidationParameters
 * //             source: {
 * //               s3Location: {
 * //                 bucket: "STRING_VALUE",
 * //                 key: "STRING_VALUE",
 * //               },
 * //             },
 * //             scriptType: "SHELL_SCRIPT" || "POWERSHELL_SCRIPT",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAppValidationConfigurationCommandInput - {@link GetAppValidationConfigurationCommandInput}
 * @returns {@link GetAppValidationConfigurationCommandOutput}
 * @see {@link GetAppValidationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAppValidationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 *
 * @public
 */
export class GetAppValidationConfigurationCommand extends $Command
  .classBuilder<
    GetAppValidationConfigurationCommandInput,
    GetAppValidationConfigurationCommandOutput,
    SMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSServerMigrationService_V2016_10_24", "GetAppValidationConfiguration", {})
  .n("SMSClient", "GetAppValidationConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetAppValidationConfigurationCommand)
  .de(de_GetAppValidationConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAppValidationConfigurationRequest;
      output: GetAppValidationConfigurationResponse;
    };
    sdk: {
      input: GetAppValidationConfigurationCommandInput;
      output: GetAppValidationConfigurationCommandOutput;
    };
  };
}
