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
 * <p>Lists all versions of a specific data transformation profile (DRAFT and published), in reverse chronological order (newest first). Use <code>GetDataTransformationProfile</code> to retrieve profile content. Results are paginated. Use the <code>NextToken</code> parameter to retrieve additional results.</p>
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
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested data store was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
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
