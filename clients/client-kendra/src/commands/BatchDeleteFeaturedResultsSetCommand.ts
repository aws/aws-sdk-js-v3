// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDeleteFeaturedResultsSetRequest, BatchDeleteFeaturedResultsSetResponse } from "../models/models_0";
import { BatchDeleteFeaturedResultsSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDeleteFeaturedResultsSetCommand}.
 */
export interface BatchDeleteFeaturedResultsSetCommandInput extends BatchDeleteFeaturedResultsSetRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteFeaturedResultsSetCommand}.
 */
export interface BatchDeleteFeaturedResultsSetCommandOutput extends BatchDeleteFeaturedResultsSetResponse, __MetadataBearer {}

/**
 * Removes one or more sets of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, BatchDeleteFeaturedResultsSetCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, BatchDeleteFeaturedResultsSetCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * // import type { KendraClientConfig } from "@aws-sdk/client-kendra";
 * const config = {}; // type is KendraClientConfig
 * const client = new KendraClient(config);
 * const input = { // BatchDeleteFeaturedResultsSetRequest
 *   IndexId: "STRING_VALUE", // required
 *   FeaturedResultsSetIds: [ // FeaturedResultsSetIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteFeaturedResultsSetCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteFeaturedResultsSetResponse
 * //   Errors: [ // BatchDeleteFeaturedResultsSetErrors // required
 * //     { // BatchDeleteFeaturedResultsSetError
 * //       Id: "STRING_VALUE", // required
 * //       ErrorCode: "InternalError" || "InvalidRequest", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteFeaturedResultsSetCommandInput - {@link BatchDeleteFeaturedResultsSetCommandInput}
 * @returns {@link BatchDeleteFeaturedResultsSetCommandOutput}
 * @see {@link BatchDeleteFeaturedResultsSetCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteFeaturedResultsSetCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Please ensure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Kendra service. Please wait a few minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource you want to use doesn’t exist. Please check you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Please reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints set by the Amazon Kendra service. Please provide the correct input and try again.
 *
 * @throws {@link KendraServiceException}
 *
 * Base exception class for all service exceptions from Kendra service.
 *
 * @public
 */
export class BatchDeleteFeaturedResultsSetCommand extends command<BatchDeleteFeaturedResultsSetCommandInput, BatchDeleteFeaturedResultsSetCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteFeaturedResultsSet",
  BatchDeleteFeaturedResultsSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteFeaturedResultsSetRequest;
      output: BatchDeleteFeaturedResultsSetResponse;
    };
    sdk: {
      input: BatchDeleteFeaturedResultsSetCommandInput;
      output: BatchDeleteFeaturedResultsSetCommandOutput;
    };
  };
}
