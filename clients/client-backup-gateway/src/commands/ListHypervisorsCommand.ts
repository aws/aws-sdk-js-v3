// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListHypervisorsInput, ListHypervisorsOutput } from "../models/models_0";
import { ListHypervisors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
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
export class ListHypervisorsCommand extends command<ListHypervisorsCommandInput, ListHypervisorsCommandOutput>(
  _ep0,
  _mw0,
  "ListHypervisors",
  ListHypervisors$
) {
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
