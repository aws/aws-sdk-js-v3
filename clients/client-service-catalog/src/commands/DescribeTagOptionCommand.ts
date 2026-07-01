// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTagOptionInput, DescribeTagOptionOutput } from "../models/models_0";
import { DescribeTagOption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTagOptionCommand}.
 */
export interface DescribeTagOptionCommandInput extends DescribeTagOptionInput {}
/**
 * @public
 *
 * The output of {@link DescribeTagOptionCommand}.
 */
export interface DescribeTagOptionCommandOutput extends DescribeTagOptionOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified TagOption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeTagOptionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeTagOptionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeTagOptionInput
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribeTagOptionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTagOptionOutput
 * //   TagOptionDetail: { // TagOptionDetail
 * //     Key: "STRING_VALUE",
 * //     Value: "STRING_VALUE",
 * //     Active: true || false,
 * //     Id: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTagOptionCommandInput - {@link DescribeTagOptionCommandInput}
 * @returns {@link DescribeTagOptionCommandOutput}
 * @see {@link DescribeTagOptionCommandInput} for command's `input` shape.
 * @see {@link DescribeTagOptionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link TagOptionNotMigratedException} (client fault)
 *  <p>An operation requiring TagOptions failed because the TagOptions migration process has
 *          not been performed for this account. Use the Amazon Web Services Management Console to perform the migration
 *          process before retrying the operation.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class DescribeTagOptionCommand extends command<DescribeTagOptionCommandInput, DescribeTagOptionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTagOption",
  DescribeTagOption$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTagOptionInput;
      output: DescribeTagOptionOutput;
    };
    sdk: {
      input: DescribeTagOptionCommandInput;
      output: DescribeTagOptionCommandOutput;
    };
  };
}
