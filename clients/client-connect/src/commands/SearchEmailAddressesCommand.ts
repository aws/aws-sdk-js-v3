// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchEmailAddressesResponse } from "../models/models_3";
import type { SearchEmailAddressesRequest } from "../models/models_4";
import { SearchEmailAddresses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchEmailAddressesCommand}.
 */
export interface SearchEmailAddressesCommandInput extends SearchEmailAddressesRequest {}
/**
 * @public
 *
 * The output of {@link SearchEmailAddressesCommand}.
 */
export interface SearchEmailAddressesCommandOutput extends SearchEmailAddressesResponse, __MetadataBearer {}

/**
 * Searches email address in an instance, with optional filtering.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchEmailAddressesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchEmailAddressesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchEmailAddressesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SearchCriteria: { // EmailAddressSearchCriteria
 *     OrConditions: [ // EmailAddressSearchConditionList
 *       {
 *         OrConditions: [
 *           "<EmailAddressSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<EmailAddressSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<EmailAddressSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 *   SearchFilter: { // EmailAddressSearchFilter
 *     TagFilter: { // ControlPlaneTagFilter
 *       OrConditions: [ // TagOrConditionList
 *         [ // TagAndConditionList
 *           { // TagCondition
 *             TagKey: "STRING_VALUE",
 *             TagValue: "STRING_VALUE",
 *           },
 *         ],
 *       ],
 *       AndConditions: [
 *         {
 *           TagKey: "STRING_VALUE",
 *           TagValue: "STRING_VALUE",
 *         },
 *       ],
 *       TagCondition: "<TagCondition>",
 *     },
 *   },
 * };
 * const command = new SearchEmailAddressesCommand(input);
 * const response = await client.send(command);
 * // { // SearchEmailAddressesResponse
 * //   NextToken: "STRING_VALUE",
 * //   EmailAddresses: [ // EmailAddressList
 * //     { // EmailAddressMetadata
 * //       EmailAddressId: "STRING_VALUE",
 * //       EmailAddressArn: "STRING_VALUE",
 * //       EmailAddress: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       AliasConfigurations: [ // AliasConfigurationList
 * //         { // AliasConfiguration
 * //           EmailAddressId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchEmailAddressesCommandInput - {@link SearchEmailAddressesCommandInput}
 * @returns {@link SearchEmailAddressesCommandOutput}
 * @see {@link SearchEmailAddressesCommandInput} for command's `input` shape.
 * @see {@link SearchEmailAddressesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class SearchEmailAddressesCommand extends command<SearchEmailAddressesCommandInput, SearchEmailAddressesCommandOutput>(
  _ep0,
  _mw0,
  "SearchEmailAddresses",
  SearchEmailAddresses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchEmailAddressesRequest;
      output: SearchEmailAddressesResponse;
    };
    sdk: {
      input: SearchEmailAddressesCommandInput;
      output: SearchEmailAddressesCommandOutput;
    };
  };
}
