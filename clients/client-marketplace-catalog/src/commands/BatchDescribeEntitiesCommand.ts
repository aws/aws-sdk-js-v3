// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MarketplaceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCatalogClient";
import { BatchDescribeEntitiesRequest, BatchDescribeEntitiesResponse } from "../models/models_0";
import { de_BatchDescribeEntitiesCommand, se_BatchDescribeEntitiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDescribeEntitiesCommand}.
 */
export interface BatchDescribeEntitiesCommandInput extends BatchDescribeEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link BatchDescribeEntitiesCommand}.
 */
export interface BatchDescribeEntitiesCommandOutput extends BatchDescribeEntitiesResponse, __MetadataBearer {}

/**
 * <p>Returns metadata and content for multiple entities. This is the Batch version of the <code>DescribeEntity</code> API and uses the same IAM permission action as <code>DescribeEntity</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, BatchDescribeEntitiesCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, BatchDescribeEntitiesCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // BatchDescribeEntitiesRequest
 *   EntityRequestList: [ // EntityRequestList // required
 *     { // EntityRequest
 *       Catalog: "STRING_VALUE", // required
 *       EntityId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchDescribeEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // BatchDescribeEntitiesResponse
 * //   EntityDetails: { // EntityDetails
 * //     "<keys>": { // EntityDetail
 * //       EntityType: "STRING_VALUE",
 * //       EntityArn: "STRING_VALUE",
 * //       EntityIdentifier: "STRING_VALUE",
 * //       LastModifiedDate: "STRING_VALUE",
 * //       DetailsDocument: "DOCUMENT_VALUE",
 * //     },
 * //   },
 * //   Errors: { // Errors
 * //     "<keys>": { // BatchDescribeErrorDetail
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param BatchDescribeEntitiesCommandInput - {@link BatchDescribeEntitiesCommandInput}
 * @returns {@link BatchDescribeEntitiesCommandOutput}
 * @see {@link BatchDescribeEntitiesCommandInput} for command's `input` shape.
 * @see {@link BatchDescribeEntitiesCommandOutput} for command's `response` shape.
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
export class BatchDescribeEntitiesCommand extends $Command
  .classBuilder<
    BatchDescribeEntitiesCommandInput,
    BatchDescribeEntitiesCommandOutput,
    MarketplaceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMPSeymour", "BatchDescribeEntities", {})
  .n("MarketplaceCatalogClient", "BatchDescribeEntitiesCommand")
  .f(void 0, void 0)
  .ser(se_BatchDescribeEntitiesCommand)
  .de(de_BatchDescribeEntitiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDescribeEntitiesRequest;
      output: BatchDescribeEntitiesResponse;
    };
    sdk: {
      input: BatchDescribeEntitiesCommandInput;
      output: BatchDescribeEntitiesCommandOutput;
    };
  };
}
