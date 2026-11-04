// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTagOptionInput, UpdateTagOptionOutput } from "../models/models_0";
import { UpdateTagOption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTagOptionCommand}.
 */
export interface UpdateTagOptionCommandInput extends UpdateTagOptionInput {}
/**
 * @public
 *
 * The output of {@link UpdateTagOptionCommand}.
 */
export interface UpdateTagOptionCommandOutput extends UpdateTagOptionOutput, __MetadataBearer {}

/**
 * Updates the specified TagOption.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateTagOptionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateTagOptionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // UpdateTagOptionInput
 *   Id: "STRING_VALUE", // required
 *   Value: "STRING_VALUE",
 *   Active: true || false,
 * };
 * const command = new UpdateTagOptionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTagOptionOutput
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
 * @param UpdateTagOptionCommandInput - {@link UpdateTagOptionCommandInput}
 * @returns {@link UpdateTagOptionCommandOutput}
 * @see {@link UpdateTagOptionCommandInput} for command's `input` shape.
 * @see {@link UpdateTagOptionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * The specified resource is a duplicate.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the operation are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link TagOptionNotMigratedException} (client fault)
 *
 * An operation requiring TagOptions failed because the TagOptions migration process has not been performed for this account. Use the Amazon Web Services Management Console to perform the migration process before retrying the operation.
 *
 * @throws {@link ServiceCatalogServiceException}
 *
 * Base exception class for all service exceptions from ServiceCatalog service.
 *
 * @public
 */
export class UpdateTagOptionCommand extends command<UpdateTagOptionCommandInput, UpdateTagOptionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTagOption",
  UpdateTagOption$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTagOptionInput;
      output: UpdateTagOptionOutput;
    };
    sdk: {
      input: UpdateTagOptionCommandInput;
      output: UpdateTagOptionCommandOutput;
    };
  };
}
