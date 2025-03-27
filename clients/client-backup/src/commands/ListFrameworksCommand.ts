// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFrameworksInput, ListFrameworksOutput } from "../models/models_0";
import { de_ListFrameworksCommand, se_ListFrameworksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFrameworksCommand}.
 */
export interface ListFrameworksCommandInput extends ListFrameworksInput {}
/**
 * @public
 *
 * The output of {@link ListFrameworksCommand}.
 */
export interface ListFrameworksCommandOutput extends ListFrameworksOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all frameworks for an Amazon Web Services account and Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListFrameworksCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListFrameworksCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListFrameworksInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFrameworksCommand(input);
 * const response = await client.send(command);
 * // { // ListFrameworksOutput
 * //   Frameworks: [ // FrameworkList
 * //     { // Framework
 * //       FrameworkName: "STRING_VALUE",
 * //       FrameworkArn: "STRING_VALUE",
 * //       FrameworkDescription: "STRING_VALUE",
 * //       NumberOfControls: Number("int"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       DeploymentStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFrameworksCommandInput - {@link ListFrameworksCommandInput}
 * @returns {@link ListFrameworksCommandOutput}
 * @see {@link ListFrameworksCommandInput} for command's `input` shape.
 * @see {@link ListFrameworksCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class ListFrameworksCommand extends $Command
  .classBuilder<
    ListFrameworksCommandInput,
    ListFrameworksCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "ListFrameworks", {})
  .n("BackupClient", "ListFrameworksCommand")
  .f(void 0, void 0)
  .ser(se_ListFrameworksCommand)
  .de(de_ListFrameworksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFrameworksInput;
      output: ListFrameworksOutput;
    };
    sdk: {
      input: ListFrameworksCommandInput;
      output: ListFrameworksCommandOutput;
    };
  };
}
