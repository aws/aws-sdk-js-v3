// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListHypervisorsInput, ListHypervisorsOutput } from "../models/models_0";
import { de_ListHypervisorsCommand, se_ListHypervisorsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHypervisorsCommand}.
 */
export interface ListHypervisorsCommandInput extends ListHypervisorsInput {}
/**
 * @public
 *
 * The output of {@link ListHypervisorsCommand}.
 */
export interface ListHypervisorsCommandOutput extends ListHypervisorsOutput, __MetadataBearer {}

/**
 * <p>Lists your hypervisors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, ListHypervisorsCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, ListHypervisorsCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // ListHypervisorsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHypervisorsCommand(input);
 * const response = await client.send(command);
 * // { // ListHypervisorsOutput
 * //   Hypervisors: [ // Hypervisors
 * //     { // Hypervisor
 * //       Host: "STRING_VALUE",
 * //       HypervisorArn: "STRING_VALUE",
 * //       KmsKeyArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHypervisorsCommandInput - {@link ListHypervisorsCommandInput}
 * @returns {@link ListHypervisorsCommandOutput}
 * @see {@link ListHypervisorsCommandInput} for command's `input` shape.
 * @see {@link ListHypervisorsCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
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
export class ListHypervisorsCommand extends $Command
  .classBuilder<
    ListHypervisorsCommandInput,
    ListHypervisorsCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackupOnPremises_v20210101", "ListHypervisors", {})
  .n("BackupGatewayClient", "ListHypervisorsCommand")
  .f(void 0, void 0)
  .ser(se_ListHypervisorsCommand)
  .de(de_ListHypervisorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHypervisorsInput;
      output: ListHypervisorsOutput;
    };
    sdk: {
      input: ListHypervisorsCommandInput;
      output: ListHypervisorsCommandOutput;
    };
  };
}
