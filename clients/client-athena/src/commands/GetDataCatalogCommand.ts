// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataCatalogInput, GetDataCatalogOutput } from "../models/models_0";
import { de_GetDataCatalogCommand, se_GetDataCatalogCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataCatalogCommand}.
 */
export interface GetDataCatalogCommandInput extends GetDataCatalogInput {}
/**
 * @public
 *
 * The output of {@link GetDataCatalogCommand}.
 */
export interface GetDataCatalogCommandOutput extends GetDataCatalogOutput, __MetadataBearer {}

/**
 * <p>Returns the specified data catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetDataCatalogCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetDataCatalogCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // GetDataCatalogInput
 *   Name: "STRING_VALUE", // required
 *   WorkGroup: "STRING_VALUE",
 * };
 * const command = new GetDataCatalogCommand(input);
 * const response = await client.send(command);
 * // { // GetDataCatalogOutput
 * //   DataCatalog: { // DataCatalog
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Type: "LAMBDA" || "GLUE" || "HIVE", // required
 * //     Parameters: { // ParametersMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataCatalogCommandInput - {@link GetDataCatalogCommandInput}
 * @returns {@link GetDataCatalogCommandOutput}
 * @see {@link GetDataCatalogCommandInput} for command's `input` shape.
 * @see {@link GetDataCatalogCommandOutput} for command's `response` shape.
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
export class GetDataCatalogCommand extends $Command
  .classBuilder<
    GetDataCatalogCommandInput,
    GetDataCatalogCommandOutput,
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
  .s("AmazonAthena", "GetDataCatalog", {})
  .n("AthenaClient", "GetDataCatalogCommand")
  .f(void 0, void 0)
  .ser(se_GetDataCatalogCommand)
  .de(de_GetDataCatalogCommand)
  .build() {}
