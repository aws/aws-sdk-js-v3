// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  ListNetworkMigrationCodeGenerationsRequest,
  ListNetworkMigrationCodeGenerationsResponse,
} from "../models/models_0";
import { ListNetworkMigrationCodeGenerations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkMigrationCodeGenerationsCommand}.
 */
export interface ListNetworkMigrationCodeGenerationsCommandInput extends ListNetworkMigrationCodeGenerationsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkMigrationCodeGenerationsCommand}.
 */
export interface ListNetworkMigrationCodeGenerationsCommandOutput extends ListNetworkMigrationCodeGenerationsResponse, __MetadataBearer {}

/**
 * <p>Lists network migration code generation jobs, which convert network mappings into infrastructure-as-code templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListNetworkMigrationCodeGenerationsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListNetworkMigrationCodeGenerationsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListNetworkMigrationCodeGenerationsRequest
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   filters: { // ListNetworkMigrationCodeGenerationsFilters
 *     jobIDs: [ // ListNetworkMigrationCodeGenerationsIDsFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworkMigrationCodeGenerationsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkMigrationCodeGenerationsResponse
 * //   items: [ // NetworkMigrationCodeGenerationsList
 * //     { // NetworkMigrationCodeGenerationJobDetails
 * //       jobID: "STRING_VALUE",
 * //       networkMigrationExecutionID: "STRING_VALUE",
 * //       networkMigrationDefinitionID: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE",
 * //       statusDetails: "STRING_VALUE",
 * //       codeGenerationOutputFormatStatusDetailsMap: { // CodeGenerationOutputFormatStatusDetailsMap
 * //         "<keys>": { // CodeGenerationOutputFormatStatusDetails
 * //           status: "STRING_VALUE",
 * //           statusDetailList: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkMigrationCodeGenerationsCommandInput - {@link ListNetworkMigrationCodeGenerationsCommandInput}
 * @returns {@link ListNetworkMigrationCodeGenerationsCommandOutput}
 * @see {@link ListNetworkMigrationCodeGenerationsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkMigrationCodeGenerationsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Reached throttling quota exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample ListNetworkMigrationCodeGenerations call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab"
 * };
 * const command = new ListNetworkMigrationCodeGenerationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       createdAt: 1735334198,
 *       endedAt: 1735334258,
 *       jobID: "01234567-abcd-abcd-efab-0123456789ab",
 *       networkMigrationDefinitionID: "nmd-01234567891234567",
 *       networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab",
 *       status: "SUCCEEDED",
 *       statusDetails: "Job status details"
 *     }
 *   ],
 *   nextToken: "NextTokenId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNetworkMigrationCodeGenerationsCommand extends $Command
  .classBuilder<
    ListNetworkMigrationCodeGenerationsCommandInput,
    ListNetworkMigrationCodeGenerationsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ListNetworkMigrationCodeGenerations", {})
  .n("MgnClient", "ListNetworkMigrationCodeGenerationsCommand")
  .sc(ListNetworkMigrationCodeGenerations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkMigrationCodeGenerationsRequest;
      output: ListNetworkMigrationCodeGenerationsResponse;
    };
    sdk: {
      input: ListNetworkMigrationCodeGenerationsCommandInput;
      output: ListNetworkMigrationCodeGenerationsCommandOutput;
    };
  };
}
