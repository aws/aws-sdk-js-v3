// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GrantAccessRequest, GrantAccessResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_GrantAccessCommand, se_GrantAccessCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GrantAccessCommand}.
 */
export interface GrantAccessCommandInput extends GrantAccessRequest {}
/**
 * @public
 *
 * The output of {@link GrantAccessCommand}.
 */
export interface GrantAccessCommandOutput extends GrantAccessResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This action can be used only with Windows stacks.</p>
 *          </note>
 *          <p>Grants RDP access to a Windows instance for a specified time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, GrantAccessCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, GrantAccessCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // GrantAccessRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ValidForInMinutes: Number("int"),
 * };
 * const command = new GrantAccessCommand(input);
 * const response = await client.send(command);
 * // { // GrantAccessResult
 * //   TemporaryCredential: { // TemporaryCredential
 * //     Username: "STRING_VALUE",
 * //     Password: "STRING_VALUE",
 * //     ValidForInMinutes: Number("int"),
 * //     InstanceId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GrantAccessCommandInput - {@link GrantAccessCommandInput}
 * @returns {@link GrantAccessCommandOutput}
 * @see {@link GrantAccessCommandInput} for command's `input` shape.
 * @see {@link GrantAccessCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 *
 * @public
 */
export class GrantAccessCommand extends $Command
  .classBuilder<
    GrantAccessCommandInput,
    GrantAccessCommandOutput,
    OpsWorksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorks_20130218", "GrantAccess", {})
  .n("OpsWorksClient", "GrantAccessCommand")
  .f(void 0, void 0)
  .ser(se_GrantAccessCommand)
  .de(de_GrantAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GrantAccessRequest;
      output: GrantAccessResult;
    };
    sdk: {
      input: GrantAccessCommandInput;
      output: GrantAccessCommandOutput;
    };
  };
}
