// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RegisterApplicationInput, RegisterApplicationOutput } from "../models/models_0";
import { RegisterApplication } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterApplicationCommand}.
 */
export interface RegisterApplicationCommandInput extends RegisterApplicationInput {}
/**
 * @public
 *
 * The output of {@link RegisterApplicationCommand}.
 */
export interface RegisterApplicationCommandOutput extends RegisterApplicationOutput, __MetadataBearer {}

/**
 * <p>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. </p> <p>The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2.</p> <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions.</p> <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, RegisterApplicationCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, RegisterApplicationCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // RegisterApplicationInput
 *   ApplicationId: "STRING_VALUE", // required
 *   ApplicationType: "HANA" || "SAP_ABAP", // required
 *   Instances: [ // InstanceList // required
 *     "STRING_VALUE",
 *   ],
 *   SapInstanceNumber: "STRING_VALUE",
 *   Sid: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Credentials: [ // ApplicationCredentialList
 *     { // ApplicationCredential
 *       DatabaseName: "STRING_VALUE", // required
 *       CredentialType: "ADMIN", // required
 *       SecretId: "STRING_VALUE", // required
 *     },
 *   ],
 *   DatabaseArn: "STRING_VALUE",
 *   ComponentsInfo: [ // ComponentInfoList
 *     { // ComponentInfo
 *       ComponentType: "HANA" || "HANA_NODE" || "ABAP" || "ASCS" || "DIALOG" || "WEBDISP" || "WD" || "ERS", // required
 *       Sid: "STRING_VALUE", // required
 *       Ec2InstanceId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new RegisterApplicationCommand(input);
 * const response = await client.send(command);
 * // { // RegisterApplicationOutput
 * //   Application: { // Application
 * //     Id: "STRING_VALUE",
 * //     Type: "HANA" || "SAP_ABAP",
 * //     Arn: "STRING_VALUE",
 * //     AppRegistryArn: "STRING_VALUE",
 * //     Status: "ACTIVATED" || "STARTING" || "STOPPED" || "STOPPING" || "FAILED" || "REGISTERING" || "DELETING" || "UNKNOWN",
 * //     DiscoveryStatus: "SUCCESS" || "REGISTRATION_FAILED" || "REFRESH_FAILED" || "REGISTERING" || "DELETING",
 * //     Components: [ // ComponentIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     StatusMessage: "STRING_VALUE",
 * //     AssociatedApplicationArns: [ // ApplicationArnList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterApplicationCommandInput - {@link RegisterApplicationCommandInput}
 * @returns {@link RegisterApplicationCommandOutput}
 * @see {@link RegisterApplicationCommandInput} for command's `input` shape.
 * @see {@link RegisterApplicationCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict has occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class RegisterApplicationCommand extends $Command
  .classBuilder<
    RegisterApplicationCommandInput,
    RegisterApplicationCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SsmSap", "RegisterApplication", {})
  .n("SsmSapClient", "RegisterApplicationCommand")
  .sc(RegisterApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterApplicationInput;
      output: RegisterApplicationOutput;
    };
    sdk: {
      input: RegisterApplicationCommandInput;
      output: RegisterApplicationCommandOutput;
    };
  };
}
