// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeChangeSetRequest, DescribeChangeSetResponse } from "../models/models_0";
import { DescribeChangeSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Provides information about a given change set.
 *
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
export class DescribeChangeSetCommand extends command<DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput>(
  _ep0,
  _mw0,
  "DescribeChangeSet",
  DescribeChangeSet$
) {
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
