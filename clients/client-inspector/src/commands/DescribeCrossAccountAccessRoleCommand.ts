// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeCrossAccountAccessRoleResponse } from "../models/models_0";
import {
  de_DescribeCrossAccountAccessRoleCommand,
  se_DescribeCrossAccountAccessRoleCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCrossAccountAccessRoleCommand}.
 */
export interface DescribeCrossAccountAccessRoleCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeCrossAccountAccessRoleCommand}.
 */
export interface DescribeCrossAccountAccessRoleCommandOutput
  extends DescribeCrossAccountAccessRoleResponse,
    __MetadataBearer {}

/**
 * <p>Describes the IAM role that enables Amazon Inspector to access your AWS
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeCrossAccountAccessRoleCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeCrossAccountAccessRoleCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = {};
 * const command = new DescribeCrossAccountAccessRoleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCrossAccountAccessRoleResponse
 * //   roleArn: "STRING_VALUE", // required
 * //   valid: true || false, // required
 * //   registeredAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeCrossAccountAccessRoleCommandInput - {@link DescribeCrossAccountAccessRoleCommandInput}
 * @returns {@link DescribeCrossAccountAccessRoleCommandOutput}
 * @see {@link DescribeCrossAccountAccessRoleCommandInput} for command's `input` shape.
 * @see {@link DescribeCrossAccountAccessRoleCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 *
 * @public
 */
export class DescribeCrossAccountAccessRoleCommand extends $Command
  .classBuilder<
    DescribeCrossAccountAccessRoleCommandInput,
    DescribeCrossAccountAccessRoleCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "DescribeCrossAccountAccessRole", {})
  .n("InspectorClient", "DescribeCrossAccountAccessRoleCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCrossAccountAccessRoleCommand)
  .de(de_DescribeCrossAccountAccessRoleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeCrossAccountAccessRoleResponse;
    };
    sdk: {
      input: DescribeCrossAccountAccessRoleCommandInput;
      output: DescribeCrossAccountAccessRoleCommandOutput;
    };
  };
}
