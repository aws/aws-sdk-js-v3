// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { IndexDocumentsRequest, IndexDocumentsResponse } from "../models/models_0";
import { IndexDocuments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link IndexDocumentsCommand}.
 */
export interface IndexDocumentsCommandInput extends IndexDocumentsRequest {}
/**
 * @public
 *
 * The output of {@link IndexDocumentsCommand}.
 */
export interface IndexDocumentsCommandOutput extends IndexDocumentsResponse, __MetadataBearer {}

/**
 * Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose OptionStatus is `RequiresIndexDocuments`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, IndexDocumentsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, IndexDocumentsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // IndexDocumentsRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new IndexDocumentsCommand(input);
 * const response = await client.send(command);
 * // { // IndexDocumentsResponse
 * //   FieldNames: [ // FieldNameList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param IndexDocumentsCommandInput - {@link IndexDocumentsCommandInput}
 * @returns {@link IndexDocumentsCommandOutput}
 * @see {@link IndexDocumentsCommandInput} for command's `input` shape.
 * @see {@link IndexDocumentsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * An internal error occurred while processing the request. If this problem persists, report an issue from the [Service Health Dashboard](http://status.aws.amazon.com/).
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because it attempted to reference a resource that does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was rejected because it has invalid parameters.
 *
 * @throws {@link CloudSearchServiceException}
 *
 * Base exception class for all service exceptions from CloudSearch service.
 *
 * @public
 */
export class IndexDocumentsCommand extends command<IndexDocumentsCommandInput, IndexDocumentsCommandOutput>(
  _ep0,
  _mw0,
  "IndexDocuments",
  IndexDocuments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: IndexDocumentsRequest;
      output: IndexDocumentsResponse;
    };
    sdk: {
      input: IndexDocumentsCommandInput;
      output: IndexDocumentsCommandOutput;
    };
  };
}
