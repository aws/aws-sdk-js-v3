// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvsClient";
import { ListEnvironmentsRequest, ListEnvironmentsResponse } from "../models/models_0";
import { ListEnvironments } from "../schemas/schemas_1_Environment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandInput extends ListEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandOutput extends ListEnvironmentsResponse, __MetadataBearer {}

/**
 * <p>Lists the Amazon EVS environments in your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, ListEnvironmentsCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, ListEnvironmentsCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // ListEnvironmentsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   state: [ // EnvironmentStateList
 *     "CREATING" || "CREATED" || "DELETING" || "DELETED" || "CREATE_FAILED",
 *   ],
 * };
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentsResponse
 * //   nextToken: "STRING_VALUE",
 * //   environmentSummaries: [ // EnvironmentSummaryList
 * //     { // EnvironmentSummary
 * //       environmentId: "STRING_VALUE",
 * //       environmentName: "STRING_VALUE",
 * //       vcfVersion: "VCF-5.2.1",
 * //       environmentStatus: "PASSED" || "FAILED" || "UNKNOWN",
 * //       environmentState: "CREATING" || "CREATED" || "DELETING" || "DELETED" || "CREATE_FAILED",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //       environmentArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEnvironmentsCommandInput - {@link ListEnvironmentsCommandInput}
 * @returns {@link ListEnvironmentsCommandOutput}
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints. You will see this exception if invalid inputs are provided for any of the Amazon EVS environment operations, or if a list operation is performed on an environment resource that is still initializing.</p>
 *
 * @throws {@link EvsServiceException}
 * <p>Base exception class for all service exceptions from Evs service.</p>
 *
 *
 * @public
 */
export class ListEnvironmentsCommand extends $Command
  .classBuilder<
    ListEnvironmentsCommandInput,
    ListEnvironmentsCommandOutput,
    EvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticVMwareService", "ListEnvironments", {})
  .n("EvsClient", "ListEnvironmentsCommand")
  .sc(ListEnvironments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentsRequest;
      output: ListEnvironmentsResponse;
    };
    sdk: {
      input: ListEnvironmentsCommandInput;
      output: ListEnvironmentsCommandOutput;
    };
  };
}
