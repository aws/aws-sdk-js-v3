// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSuggestersRequest, DescribeSuggestersResponse } from "../models/models_0";
import { DescribeSuggesters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSuggestersCommand}.
 */
export interface DescribeSuggestersCommandInput extends DescribeSuggestersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSuggestersCommand}.
 */
export interface DescribeSuggestersCommandOutput extends DescribeSuggestersResponse, __MetadataBearer {}

/**
 * Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information, see [Getting Search Suggestions](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html) in the *Amazon CloudSearch Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeSuggestersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeSuggestersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeSuggestersRequest
 *   DomainName: "STRING_VALUE", // required
 *   SuggesterNames: [ // StandardNameList
 *     "STRING_VALUE",
 *   ],
 *   Deployed: true || false,
 * };
 * const command = new DescribeSuggestersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSuggestersResponse
 * //   Suggesters: [ // SuggesterStatusList // required
 * //     { // SuggesterStatus
 * //       Options: { // Suggester
 * //         SuggesterName: "STRING_VALUE", // required
 * //         DocumentSuggesterOptions: { // DocumentSuggesterOptions
 * //           SourceField: "STRING_VALUE", // required
 * //           FuzzyMatching: "none" || "low" || "high",
 * //           SortExpression: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: { // OptionStatus
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSuggestersCommandInput - {@link DescribeSuggestersCommandInput}
 * @returns {@link DescribeSuggestersCommandOutput}
 * @see {@link DescribeSuggestersCommandInput} for command's `input` shape.
 * @see {@link DescribeSuggestersCommandOutput} for command's `response` shape.
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
 * @throws {@link CloudSearchServiceException}
 *
 * Base exception class for all service exceptions from CloudSearch service.
 *
 * @public
 */
export class DescribeSuggestersCommand extends command<DescribeSuggestersCommandInput, DescribeSuggestersCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSuggesters",
  DescribeSuggesters$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSuggestersRequest;
      output: DescribeSuggestersResponse;
    };
    sdk: {
      input: DescribeSuggestersCommandInput;
      output: DescribeSuggestersCommandOutput;
    };
  };
}
