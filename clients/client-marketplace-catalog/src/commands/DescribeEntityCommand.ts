// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MarketplaceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCatalogClient";
import type { DescribeEntityRequest, DescribeEntityResponse } from "../models/models_0";
import { DescribeEntity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEntityCommand}.
 */
export interface DescribeEntityCommandInput extends DescribeEntityRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEntityCommand}.
 */
export interface DescribeEntityCommandOutput extends DescribeEntityResponse, __MetadataBearer {}

/**
 * <p>Returns the metadata and content of the entity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, DescribeEntityCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, DescribeEntityCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * // import type { MarketplaceCatalogClientConfig } from "@aws-sdk/client-marketplace-catalog";
 * const config = {}; // type is MarketplaceCatalogClientConfig
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // DescribeEntityRequest
 *   Catalog: "STRING_VALUE", // required
 *   EntityId: "STRING_VALUE", // required
 * };
 * const command = new DescribeEntityCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEntityResponse
 * //   EntityType: "STRING_VALUE",
 * //   EntityIdentifier: "STRING_VALUE",
 * //   EntityArn: "STRING_VALUE",
 * //   LastModifiedDate: "STRING_VALUE",
 * //   Details: "STRING_VALUE",
 * //   DetailsDocument: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEntityCommandInput - {@link DescribeEntityCommandInput}
 * @returns {@link DescribeEntityCommandOutput}
 * @see {@link DescribeEntityCommandInput} for command's `input` shape.
 * @see {@link DescribeEntityCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for MarketplaceCatalogClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *          <p>HTTP status code: 403</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>There was an internal service exception.</p>
 *          <p>HTTP status code: 500</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *          <p>HTTP status code: 404</p>
 *
 * @throws {@link ResourceNotSupportedException} (client fault)
 *  <p>Currently, the specified resource is not supported.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests.</p>
 *          <p>HTTP status code: 429</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An error occurred during validation.</p>
 *          <p>HTTP status code: 422</p>
 *
 * @throws {@link MarketplaceCatalogServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceCatalog service.</p>
 *
 *
 * @public
 */
export class DescribeEntityCommand extends $Command
  .classBuilder<
    DescribeEntityCommandInput,
    DescribeEntityCommandOutput,
    MarketplaceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPSeymour", "DescribeEntity", {})
  .n("MarketplaceCatalogClient", "DescribeEntityCommand")
  .sc(DescribeEntity$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEntityRequest;
      output: DescribeEntityResponse;
    };
    sdk: {
      input: DescribeEntityCommandInput;
      output: DescribeEntityCommandOutput;
    };
  };
}
