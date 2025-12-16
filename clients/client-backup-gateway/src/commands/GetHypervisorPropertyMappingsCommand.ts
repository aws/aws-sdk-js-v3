// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetHypervisorPropertyMappingsInput, GetHypervisorPropertyMappingsOutput } from "../models/models_0";
import { GetHypervisorPropertyMappings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHypervisorPropertyMappingsCommand}.
 */
export interface GetHypervisorPropertyMappingsCommandInput extends GetHypervisorPropertyMappingsInput {}
/**
 * @public
 *
 * The output of {@link GetHypervisorPropertyMappingsCommand}.
 */
export interface GetHypervisorPropertyMappingsCommandOutput
  extends GetHypervisorPropertyMappingsOutput,
    __MetadataBearer {}

/**
 * <p>This action retrieves the property mappings for the specified hypervisor.
 *       A hypervisor property mapping displays the relationship of entity properties
 *       available from the on-premises hypervisor to the properties available in Amazon Web Services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, GetHypervisorPropertyMappingsCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, GetHypervisorPropertyMappingsCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // GetHypervisorPropertyMappingsInput
 *   HypervisorArn: "STRING_VALUE", // required
 * };
 * const command = new GetHypervisorPropertyMappingsCommand(input);
 * const response = await client.send(command);
 * // { // GetHypervisorPropertyMappingsOutput
 * //   HypervisorArn: "STRING_VALUE",
 * //   VmwareToAwsTagMappings: [ // VmwareToAwsTagMappings
 * //     { // VmwareToAwsTagMapping
 * //       VmwareCategory: "STRING_VALUE", // required
 * //       VmwareTagName: "STRING_VALUE", // required
 * //       AwsTagKey: "STRING_VALUE", // required
 * //       AwsTagValue: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   IamRoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetHypervisorPropertyMappingsCommandInput - {@link GetHypervisorPropertyMappingsCommandInput}
 * @returns {@link GetHypervisorPropertyMappingsCommandOutput}
 * @see {@link GetHypervisorPropertyMappingsCommandInput} for command's `input` shape.
 * @see {@link GetHypervisorPropertyMappingsCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action wasn't found.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation did not succeed because a validation error occurred.</p>
 *
 * @throws {@link BackupGatewayServiceException}
 * <p>Base exception class for all service exceptions from BackupGateway service.</p>
 *
 *
 * @public
 */
export class GetHypervisorPropertyMappingsCommand extends $Command
  .classBuilder<
    GetHypervisorPropertyMappingsCommandInput,
    GetHypervisorPropertyMappingsCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackupOnPremises_v20210101", "GetHypervisorPropertyMappings", {})
  .n("BackupGatewayClient", "GetHypervisorPropertyMappingsCommand")
  .sc(GetHypervisorPropertyMappings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHypervisorPropertyMappingsInput;
      output: GetHypervisorPropertyMappingsOutput;
    };
    sdk: {
      input: GetHypervisorPropertyMappingsCommandInput;
      output: GetHypervisorPropertyMappingsCommandOutput;
    };
  };
}
