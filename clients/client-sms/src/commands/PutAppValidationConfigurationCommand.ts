// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutAppValidationConfigurationRequest, PutAppValidationConfigurationResponse } from "../models/models_0";
import {
  de_PutAppValidationConfigurationCommand,
  se_PutAppValidationConfigurationCommand,
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
 * The input for {@link PutAppValidationConfigurationCommand}.
 */
export interface PutAppValidationConfigurationCommandInput extends PutAppValidationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutAppValidationConfigurationCommand}.
 */
export interface PutAppValidationConfigurationCommandOutput
  extends PutAppValidationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates or updates a validation configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, PutAppValidationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, PutAppValidationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SMSClient(config);
 * const input = { // PutAppValidationConfigurationRequest
 *   appId: "STRING_VALUE", // required
 *   appValidationConfigurations: [ // AppValidationConfigurations
 *     { // AppValidationConfiguration
 *       validationId: "STRING_VALUE",
 *       name: "STRING_VALUE",
 *       appValidationStrategy: "SSM",
 *       ssmValidationParameters: { // SSMValidationParameters
 *         source: { // Source
 *           s3Location: { // S3Location
 *             bucket: "STRING_VALUE",
 *             key: "STRING_VALUE",
 *           },
 *         },
 *         instanceId: "STRING_VALUE",
 *         scriptType: "SHELL_SCRIPT" || "POWERSHELL_SCRIPT",
 *         command: "STRING_VALUE",
 *         executionTimeoutSeconds: Number("int"),
 *         outputS3BucketName: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   serverGroupValidationConfigurations: [ // ServerGroupValidationConfigurations
 *     { // ServerGroupValidationConfiguration
 *       serverGroupId: "STRING_VALUE",
 *       serverValidationConfigurations: [ // ServerValidationConfigurations
 *         { // ServerValidationConfiguration
 *           server: { // Server
 *             serverId: "STRING_VALUE",
 *             serverType: "VIRTUAL_MACHINE",
 *             vmServer: { // VmServer
 *               vmServerAddress: { // VmServerAddress
 *                 vmManagerId: "STRING_VALUE",
 *                 vmId: "STRING_VALUE",
 *               },
 *               vmName: "STRING_VALUE",
 *               vmManagerName: "STRING_VALUE",
 *               vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 *               vmPath: "STRING_VALUE",
 *             },
 *             replicationJobId: "STRING_VALUE",
 *             replicationJobTerminated: true || false,
 *           },
 *           validationId: "STRING_VALUE",
 *           name: "STRING_VALUE",
 *           serverValidationStrategy: "USERDATA",
 *           userDataValidationParameters: { // UserDataValidationParameters
 *             source: {
 *               s3Location: {
 *                 bucket: "STRING_VALUE",
 *                 key: "STRING_VALUE",
 *               },
 *             },
 *             scriptType: "SHELL_SCRIPT" || "POWERSHELL_SCRIPT",
 *           },
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutAppValidationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAppValidationConfigurationCommandInput - {@link PutAppValidationConfigurationCommandInput}
 * @returns {@link PutAppValidationConfigurationCommandOutput}
 * @see {@link PutAppValidationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAppValidationConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class PutAppValidationConfigurationCommand extends $Command
  .classBuilder<
    PutAppValidationConfigurationCommandInput,
    PutAppValidationConfigurationCommandOutput,
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
  .s("AWSServerMigrationService_V2016_10_24", "PutAppValidationConfiguration", {})
  .n("SMSClient", "PutAppValidationConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutAppValidationConfigurationCommand)
  .de(de_PutAppValidationConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAppValidationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutAppValidationConfigurationCommandInput;
      output: PutAppValidationConfigurationCommandOutput;
    };
  };
}
