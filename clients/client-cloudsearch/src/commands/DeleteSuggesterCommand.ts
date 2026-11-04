// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSuggesterRequest, DeleteSuggesterResponse } from "../models/models_0";
import { DeleteSuggester$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSuggesterCommand}.
 */
export interface DeleteSuggesterCommandInput extends DeleteSuggesterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSuggesterCommand}.
 */
export interface DeleteSuggesterCommandOutput extends DeleteSuggesterResponse, __MetadataBearer {}

/**
 * Deletes a suggester. For more information, see [Getting Search Suggestions](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html) in the *Amazon CloudSearch Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteSuggesterCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteSuggesterCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // DeleteSuggesterRequest
 *   DomainName: "STRING_VALUE", // required
 *   SuggesterName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSuggesterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSuggesterResponse
 * //   Suggester: { // SuggesterStatus
 * //     Options: { // Suggester
 * //       SuggesterName: "STRING_VALUE", // required
 * //       DocumentSuggesterOptions: { // DocumentSuggesterOptions
 * //         SourceField: "STRING_VALUE", // required
 * //         FuzzyMatching: "none" || "low" || "high",
 * //         SortExpression: "STRING_VALUE",
 * //       },
 * //     },
 * //     Status: { // OptionStatus
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       UpdateDate: new Date("TIMESTAMP"), // required
 * //       UpdateVersion: Number("int"),
 * //       State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //       PendingDeletion: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteSuggesterCommandInput - {@link DeleteSuggesterCommandInput}
 * @returns {@link DeleteSuggesterCommandOutput}
 * @see {@link DeleteSuggesterCommandInput} for command's `input` shape.
 * @see {@link DeleteSuggesterCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTypeException} (client fault)
 *
 * The request was rejected because it specified an invalid type definition.
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
export class DeleteSuggesterCommand extends command<DeleteSuggesterCommandInput, DeleteSuggesterCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSuggester",
  DeleteSuggester$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSuggesterRequest;
      output: DeleteSuggesterResponse;
    };
    sdk: {
      input: DeleteSuggesterCommandInput;
      output: DeleteSuggesterCommandOutput;
    };
  };
}
