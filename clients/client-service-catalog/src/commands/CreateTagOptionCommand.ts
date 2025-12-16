// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateTagOptionInput, CreateTagOptionOutput } from "../models/models_0";
import { CreateTagOption$ } from "../schemas/schemas_0";
import type {
  ServiceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTagOptionCommand}.
 */
export interface CreateTagOptionCommandInput extends CreateTagOptionInput {}
/**
 * @public
 *
 * The output of {@link CreateTagOptionCommand}.
 */
export interface CreateTagOptionCommandOutput extends CreateTagOptionOutput, __MetadataBearer {}

/**
 * <p>Creates a TagOption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateTagOptionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateTagOptionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // CreateTagOptionInput
 *   Key: "STRING_VALUE", // required
 *   Value: "STRING_VALUE", // required
 * };
 * const command = new CreateTagOptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateTagOptionOutput
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
 * @param CreateTagOptionCommandInput - {@link CreateTagOptionCommandInput}
 * @returns {@link CreateTagOptionCommandOutput}
 * @see {@link CreateTagOptionCommandInput} for command's `input` shape.
 * @see {@link CreateTagOptionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>The specified resource is a duplicate.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
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
export class CreateTagOptionCommand extends $Command
  .classBuilder<
    CreateTagOptionCommandInput,
    CreateTagOptionCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "CreateTagOption", {})
  .n("ServiceCatalogClient", "CreateTagOptionCommand")
  .sc(CreateTagOption$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTagOptionInput;
      output: CreateTagOptionOutput;
    };
    sdk: {
      input: CreateTagOptionCommandInput;
      output: CreateTagOptionCommandOutput;
    };
  };
}
