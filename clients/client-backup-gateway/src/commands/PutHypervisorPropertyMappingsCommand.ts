// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutHypervisorPropertyMappingsInput, PutHypervisorPropertyMappingsOutput } from "../models/models_0";
import {
  de_PutHypervisorPropertyMappingsCommand,
  se_PutHypervisorPropertyMappingsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutHypervisorPropertyMappingsCommand}.
 */
export interface PutHypervisorPropertyMappingsCommandInput extends PutHypervisorPropertyMappingsInput {}
/**
 * @public
 *
 * The output of {@link PutHypervisorPropertyMappingsCommand}.
 */
export interface PutHypervisorPropertyMappingsCommandOutput
  extends PutHypervisorPropertyMappingsOutput,
    __MetadataBearer {}

/**
 * <p>This action sets the property mappings for the specified hypervisor.
 *       A hypervisor property mapping displays the relationship of entity properties
 *       available from the on-premises hypervisor to the properties available in Amazon Web Services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, PutHypervisorPropertyMappingsCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, PutHypervisorPropertyMappingsCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // PutHypervisorPropertyMappingsInput
 *   HypervisorArn: "STRING_VALUE", // required
 *   VmwareToAwsTagMappings: [ // VmwareToAwsTagMappings // required
 *     { // VmwareToAwsTagMapping
 *       VmwareCategory: "STRING_VALUE", // required
 *       VmwareTagName: "STRING_VALUE", // required
 *       AwsTagKey: "STRING_VALUE", // required
 *       AwsTagValue: "STRING_VALUE", // required
 *     },
 *   ],
 *   IamRoleArn: "STRING_VALUE", // required
 * };
 * const command = new PutHypervisorPropertyMappingsCommand(input);
 * const response = await client.send(command);
 * // { // PutHypervisorPropertyMappingsOutput
 * //   HypervisorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutHypervisorPropertyMappingsCommandInput - {@link PutHypervisorPropertyMappingsCommandInput}
 * @returns {@link PutHypervisorPropertyMappingsCommandOutput}
 * @see {@link PutHypervisorPropertyMappingsCommandInput} for command's `input` shape.
 * @see {@link PutHypervisorPropertyMappingsCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation cannot proceed because you have insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The operation cannot proceed because it is not supported.</p>
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
 * @public
 */
export class PutHypervisorPropertyMappingsCommand extends $Command
  .classBuilder<
    PutHypervisorPropertyMappingsCommandInput,
    PutHypervisorPropertyMappingsCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackupOnPremises_v20210101", "PutHypervisorPropertyMappings", {})
  .n("BackupGatewayClient", "PutHypervisorPropertyMappingsCommand")
  .f(void 0, void 0)
  .ser(se_PutHypervisorPropertyMappingsCommand)
  .de(de_PutHypervisorPropertyMappingsCommand)
  .build() {}
