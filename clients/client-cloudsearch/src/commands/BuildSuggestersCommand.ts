// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BuildSuggestersRequest, BuildSuggestersResponse } from "../models/models_0";
import { BuildSuggesters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BuildSuggestersCommand}.
 */
export interface BuildSuggestersCommandInput extends BuildSuggestersRequest {}
/**
 * @public
 *
 * The output of {@link BuildSuggestersCommand}.
 */
export interface BuildSuggestersCommandOutput extends BuildSuggestersResponse, __MetadataBearer {}

/**
 * Indexes the search suggestions. For more information, see [Configuring Suggesters](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters) in the *Amazon CloudSearch Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, BuildSuggestersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, BuildSuggestersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // BuildSuggestersRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new BuildSuggestersCommand(input);
 * const response = await client.send(command);
 * // { // BuildSuggestersResponse
 * //   FieldNames: [ // FieldNameList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BuildSuggestersCommandInput - {@link BuildSuggestersCommandInput}
 * @returns {@link BuildSuggestersCommandOutput}
 * @see {@link BuildSuggestersCommandInput} for command's `input` shape.
 * @see {@link BuildSuggestersCommandOutput} for command's `response` shape.
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
export class BuildSuggestersCommand extends command<BuildSuggestersCommandInput, BuildSuggestersCommandOutput>(
  _ep0,
  _mw0,
  "BuildSuggesters",
  BuildSuggesters$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BuildSuggestersRequest;
      output: BuildSuggestersResponse;
    };
    sdk: {
      input: BuildSuggestersCommandInput;
      output: BuildSuggestersCommandOutput;
    };
  };
}
