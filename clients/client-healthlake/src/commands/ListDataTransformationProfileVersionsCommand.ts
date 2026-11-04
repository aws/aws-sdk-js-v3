// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDataTransformationProfileVersionsRequest,
  ListDataTransformationProfileVersionsResponse,
} from "../models/models_0";
import { ListDataTransformationProfileVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataTransformationProfileVersionsCommand}.
 */
export interface ListDataTransformationProfileVersionsCommandInput extends ListDataTransformationProfileVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataTransformationProfileVersionsCommand}.
 */
export interface ListDataTransformationProfileVersionsCommandOutput extends ListDataTransformationProfileVersionsResponse, __MetadataBearer {}

/**
 * Lists all versions of a specific data transformation profile (DRAFT and published), in reverse chronological order (newest first). Use `GetDataTransformationProfile` to retrieve profile content. Results are paginated. Use the `NextToken` parameter to retrieve additional results.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, ListDataTransformationProfileVersionsCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, ListDataTransformationProfileVersionsCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // ListDataTransformationProfileVersionsRequest
 *   ProfileId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDataTransformationProfileVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataTransformationProfileVersionsResponse
 * //   Items: [ // DataTransformationProfileVersionSummaryList // required
 * //     { // DataTransformationProfileVersionSummary
 * //       ProfileId: "STRING_VALUE", // required
 * //       Version: Number("int"), // required
 * //       SourceFormat: "CCDA" || "CSV", // required
 * //       TargetFormat: "FHIR_R4", // required
 * //       ProfileName: "STRING_VALUE",
 * //       ChangeDescription: "STRING_VALUE",
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataTransformationProfileVersionsCommandInput - {@link ListDataTransformationProfileVersionsCommandInput}
 * @returns {@link ListDataTransformationProfileVersionsCommandOutput}
 * @see {@link ListDataTransformationProfileVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDataTransformationProfileVersionsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested data store was not found.
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
export class ListDataTransformationProfileVersionsCommand extends command<ListDataTransformationProfileVersionsCommandInput, ListDataTransformationProfileVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListDataTransformationProfileVersions",
  ListDataTransformationProfileVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataTransformationProfileVersionsRequest;
      output: ListDataTransformationProfileVersionsResponse;
    };
    sdk: {
      input: ListDataTransformationProfileVersionsCommandInput;
      output: ListDataTransformationProfileVersionsCommandOutput;
    };
  };
}
