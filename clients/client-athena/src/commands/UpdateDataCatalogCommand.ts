// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDataCatalogInput, UpdateDataCatalogOutput } from "../models/models_0";
import { de_UpdateDataCatalogCommand, se_UpdateDataCatalogCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataCatalogCommand}.
 */
export interface UpdateDataCatalogCommandInput extends UpdateDataCatalogInput {}
/**
 * @public
 *
 * The output of {@link UpdateDataCatalogCommand}.
 */
export interface UpdateDataCatalogCommandOutput extends UpdateDataCatalogOutput, __MetadataBearer {}

/**
 * <p>Updates the data catalog that has the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateDataCatalogCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateDataCatalogCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // UpdateDataCatalogInput
 *   Name: "STRING_VALUE", // required
 *   Type: "LAMBDA" || "GLUE" || "HIVE" || "FEDERATED", // required
 *   Description: "STRING_VALUE",
 *   Parameters: { // ParametersMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateDataCatalogCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDataCatalogCommandInput - {@link UpdateDataCatalogCommandInput}
 * @returns {@link UpdateDataCatalogCommandOutput}
 * @see {@link UpdateDataCatalogCommandInput} for command's `input` shape.
 * @see {@link UpdateDataCatalogCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateDataCatalogCommand extends $Command
  .classBuilder<
    UpdateDataCatalogCommandInput,
    UpdateDataCatalogCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "UpdateDataCatalog", {})
  .n("AthenaClient", "UpdateDataCatalogCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDataCatalogCommand)
  .de(de_UpdateDataCatalogCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataCatalogInput;
      output: {};
    };
    sdk: {
      input: UpdateDataCatalogCommandInput;
      output: UpdateDataCatalogCommandOutput;
    };
  };
}
