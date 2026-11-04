// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDataTransformationProfilesRequest, ListDataTransformationProfilesResponse } from "../models/models_0";
import { ListDataTransformationProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataTransformationProfilesCommand}.
 */
export interface ListDataTransformationProfilesCommandInput extends ListDataTransformationProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListDataTransformationProfilesCommand}.
 */
export interface ListDataTransformationProfilesCommandOutput extends ListDataTransformationProfilesResponse, __MetadataBearer {}

/**
 * Lists all data transformation profiles in your account, returning the latest version summary for each. Use `GetDataTransformationProfile` to retrieve profile content. Results are paginated. Use the `NextToken` parameter to retrieve additional results.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, ListDataTransformationProfilesCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, ListDataTransformationProfilesCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // ListDataTransformationProfilesRequest
 *   SourceFormat: "CCDA" || "CSV", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDataTransformationProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataTransformationProfilesResponse
 * //   Items: [ // DataTransformationProfileSummaryList // required
 * //     { // DataTransformationProfileSummary
 * //       ProfileId: "STRING_VALUE", // required
 * //       Version: Number("int"), // required
 * //       SourceFormat: "CCDA" || "CSV", // required
 * //       TargetFormat: "FHIR_R4", // required
 * //       ProfileName: "STRING_VALUE",
 * //       ProfileDescription: "STRING_VALUE",
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataTransformationProfilesCommandInput - {@link ListDataTransformationProfilesCommandInput}
 * @returns {@link ListDataTransformationProfilesCommandOutput}
 * @see {@link ListDataTransformationProfilesCommandInput} for command's `input` shape.
 * @see {@link ListDataTransformationProfilesCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied. Your account is not authorized to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unknown internal error occurred in the service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The user has exceeded their maximum number of allowed calls to the given API.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input parameter was invalid.
 *
 * @throws {@link HealthLakeServiceException}
 *
 * Base exception class for all service exceptions from HealthLake service.
 *
 * @public
 */
export class ListDataTransformationProfilesCommand extends command<ListDataTransformationProfilesCommandInput, ListDataTransformationProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListDataTransformationProfiles",
  ListDataTransformationProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataTransformationProfilesRequest;
      output: ListDataTransformationProfilesResponse;
    };
    sdk: {
      input: ListDataTransformationProfilesCommandInput;
      output: ListDataTransformationProfilesCommandOutput;
    };
  };
}
