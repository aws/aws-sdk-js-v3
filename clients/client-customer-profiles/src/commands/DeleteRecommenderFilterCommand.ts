// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRecommenderFilterRequest, DeleteRecommenderFilterResponse } from "../models/models_0";
import { DeleteRecommenderFilter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRecommenderFilterCommand}.
 */
export interface DeleteRecommenderFilterCommandInput extends DeleteRecommenderFilterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRecommenderFilterCommand}.
 */
export interface DeleteRecommenderFilterCommandOutput extends DeleteRecommenderFilterResponse, __MetadataBearer {}

/**
 * Deletes a recommender filter from a domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteRecommenderFilterCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteRecommenderFilterCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DeleteRecommenderFilterRequest
 *   DomainName: "STRING_VALUE", // required
 *   RecommenderFilterName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRecommenderFilterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRecommenderFilterResponse
 * //   Message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteRecommenderFilterCommandInput - {@link DeleteRecommenderFilterCommandInput}
 * @returns {@link DeleteRecommenderFilterCommandOutput}
 * @see {@link DeleteRecommenderFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteRecommenderFilterCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class DeleteRecommenderFilterCommand extends command<DeleteRecommenderFilterCommandInput, DeleteRecommenderFilterCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRecommenderFilter",
  DeleteRecommenderFilter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRecommenderFilterRequest;
      output: DeleteRecommenderFilterResponse;
    };
    sdk: {
      input: DeleteRecommenderFilterCommandInput;
      output: DeleteRecommenderFilterCommandOutput;
    };
  };
}
