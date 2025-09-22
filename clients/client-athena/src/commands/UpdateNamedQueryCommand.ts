// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateNamedQueryInput, UpdateNamedQueryOutput } from "../models/models_0";
import { UpdateNamedQuery } from "../schemas/schemas_4_Query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNamedQueryCommand}.
 */
export interface UpdateNamedQueryCommandInput extends UpdateNamedQueryInput {}
/**
 * @public
 *
 * The output of {@link UpdateNamedQueryCommand}.
 */
export interface UpdateNamedQueryCommandOutput extends UpdateNamedQueryOutput, __MetadataBearer {}

/**
 * <p>Updates a <a>NamedQuery</a> object. The database or workgroup cannot be
 *             updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // UpdateNamedQueryInput
 *   NamedQueryId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   QueryString: "STRING_VALUE", // required
 * };
 * const command = new UpdateNamedQueryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNamedQueryCommandInput - {@link UpdateNamedQueryCommandInput}
 * @returns {@link UpdateNamedQueryCommandOutput}
 * @see {@link UpdateNamedQueryCommandInput} for command's `input` shape.
 * @see {@link UpdateNamedQueryCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class UpdateNamedQueryCommand extends $Command
  .classBuilder<
    UpdateNamedQueryCommandInput,
    UpdateNamedQueryCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "UpdateNamedQuery", {})
  .n("AthenaClient", "UpdateNamedQueryCommand")
  .sc(UpdateNamedQuery)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNamedQueryInput;
      output: {};
    };
    sdk: {
      input: UpdateNamedQueryCommandInput;
      output: UpdateNamedQueryCommandOutput;
    };
  };
}
