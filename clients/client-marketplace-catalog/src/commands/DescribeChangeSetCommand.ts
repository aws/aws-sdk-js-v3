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
import { DescribeChangeSetRequest, DescribeChangeSetResponse } from "../models/models_0";
import { de_DescribeChangeSetCommand, se_DescribeChangeSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeChangeSetCommand}.
 */
export interface DescribeChangeSetCommandInput extends DescribeChangeSetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChangeSetCommand}.
 */
export interface DescribeChangeSetCommandOutput extends DescribeChangeSetResponse, __MetadataBearer {}

/**
 * <p>Provides information about a given change set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, DescribeChangeSetCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, DescribeChangeSetCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * // import type { MarketplaceCatalogClientConfig } from "@aws-sdk/client-marketplace-catalog";
 * const config = {}; // type is MarketplaceCatalogClientConfig
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // DescribeChangeSetRequest
 *   Catalog: "STRING_VALUE", // required
 *   ChangeSetId: "STRING_VALUE", // required
 * };
 * const command = new DescribeChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChangeSetResponse
 * //   ChangeSetId: "STRING_VALUE",
 * //   ChangeSetArn: "STRING_VALUE",
 * //   ChangeSetName: "STRING_VALUE",
 * //   Intent: "VALIDATE" || "APPLY",
 * //   StartTime: "STRING_VALUE",
 * //   EndTime: "STRING_VALUE",
 * //   Status: "PREPARING" || "APPLYING" || "SUCCEEDED" || "CANCELLED" || "FAILED",
 * //   FailureCode: "CLIENT_ERROR" || "SERVER_FAULT",
 * //   FailureDescription: "STRING_VALUE",
 * //   ChangeSet: [ // ChangeSetDescription
 * //     { // ChangeSummary
 * //       ChangeType: "STRING_VALUE",
 * //       Entity: { // Entity
 * //         Type: "STRING_VALUE", // required
 * //         Identifier: "STRING_VALUE",
 * //       },
 * //       Details: "STRING_VALUE",
 * //       DetailsDocument: "DOCUMENT_VALUE",
 * //       ErrorDetailList: [ // ErrorDetailList
 * //         { // ErrorDetail
 * //           ErrorCode: "STRING_VALUE",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ChangeName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeChangeSetCommandInput - {@link DescribeChangeSetCommandInput}
 * @returns {@link DescribeChangeSetCommandOutput}
 * @see {@link DescribeChangeSetCommandInput} for command's `input` shape.
 * @see {@link DescribeChangeSetCommandOutput} for command's `response` shape.
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
export class DescribeChangeSetCommand extends $Command
  .classBuilder<
    DescribeChangeSetCommandInput,
    DescribeChangeSetCommandOutput,
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
  .s("AWSMPSeymour", "DescribeChangeSet", {})
  .n("MarketplaceCatalogClient", "DescribeChangeSetCommand")
  .f(void 0, void 0)
  .ser(se_DescribeChangeSetCommand)
  .de(de_DescribeChangeSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeChangeSetRequest;
      output: DescribeChangeSetResponse;
    };
    sdk: {
      input: DescribeChangeSetCommandInput;
      output: DescribeChangeSetCommandOutput;
    };
  };
}
