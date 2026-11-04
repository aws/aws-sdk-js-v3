// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeEntityRequest, DescribeEntityResponse } from "../models/models_0";
import { DescribeEntity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the metadata and content of the entity.
 *
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
 *
 * Access is denied.
 *
 * HTTP status code: 403
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * There was an internal service exception.
 *
 * HTTP status code: 500
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource wasn't found.
 *
 * HTTP status code: 404
 *
 * @throws {@link ResourceNotSupportedException} (client fault)
 *
 * Currently, the specified resource is not supported.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Too many requests.
 *
 * HTTP status code: 429
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An error occurred during validation.
 *
 * HTTP status code: 422
 *
 * @throws {@link MarketplaceCatalogServiceException}
 *
 * Base exception class for all service exceptions from MarketplaceCatalog service.
 *
 * @public
 */
export class DescribeEntityCommand extends command<DescribeEntityCommandInput, DescribeEntityCommandOutput>(
  _ep0,
  _mw0,
  "DescribeEntity",
  DescribeEntity$
) {
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
