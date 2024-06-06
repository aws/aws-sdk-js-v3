// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDataCatalogInput, DeleteDataCatalogOutput } from "../models/models_0";
import { de_DeleteDataCatalogCommand, se_DeleteDataCatalogCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataCatalogCommand}.
 */
export interface DeleteDataCatalogCommandInput extends DeleteDataCatalogInput {}
/**
 * @public
 *
 * The output of {@link DeleteDataCatalogCommand}.
 */
export interface DeleteDataCatalogCommandOutput extends DeleteDataCatalogOutput, __MetadataBearer {}

/**
 * <p>Deletes a data catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeleteDataCatalogCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeleteDataCatalogCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // DeleteDataCatalogInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataCatalogCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataCatalogCommandInput - {@link DeleteDataCatalogCommandInput}
 * @returns {@link DeleteDataCatalogCommandOutput}
 * @see {@link DeleteDataCatalogCommandInput} for command's `input` shape.
 * @see {@link DeleteDataCatalogCommandOutput} for command's `response` shape.
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
export class DeleteDataCatalogCommand extends $Command
  .classBuilder<
    DeleteDataCatalogCommandInput,
    DeleteDataCatalogCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "DeleteDataCatalog", {})
  .n("AthenaClient", "DeleteDataCatalogCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDataCatalogCommand)
  .de(de_DeleteDataCatalogCommand)
  .build() {}
