// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListProtectedQueriesInput, ListProtectedQueriesOutput } from "../models/models_1";
import { ListProtectedQueries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProtectedQueriesCommand}.
 */
export interface ListProtectedQueriesCommandInput extends ListProtectedQueriesInput {}
/**
 * @public
 *
 * The output of {@link ListProtectedQueriesCommand}.
 */
export interface ListProtectedQueriesCommandOutput extends ListProtectedQueriesOutput, __MetadataBearer {}

/**
 * <p>Lists protected queries, sorted by the most recent query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListProtectedQueriesCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListProtectedQueriesCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListProtectedQueriesInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   status: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListProtectedQueriesCommand(input);
 * const response = await client.send(command);
 * // { // ListProtectedQueriesOutput
 * //   nextToken: "STRING_VALUE",
 * //   protectedQueries: [ // ProtectedQuerySummaryList // required
 * //     { // ProtectedQuerySummary
 * //       id: "STRING_VALUE", // required
 * //       membershipId: "STRING_VALUE", // required
 * //       membershipArn: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       status: "STRING_VALUE", // required
 * //       receiverConfigurations: [ // ReceiverConfigurationsList // required
 * //         { // ReceiverConfiguration
 * //           analysisType: "DIRECT_ANALYSIS" || "ADDITIONAL_ANALYSIS", // required
 * //           configurationDetails: { // ConfigurationDetails Union: only one key present
 * //             directAnalysisConfigurationDetails: { // DirectAnalysisConfigurationDetails
 * //               receiverAccountIds: [ // ReceiverAccountIds
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListProtectedQueriesCommandInput - {@link ListProtectedQueriesCommandInput}
 * @returns {@link ListProtectedQueriesCommandOutput}
 * @see {@link ListProtectedQueriesCommandInput} for command's `input` shape.
 * @see {@link ListProtectedQueriesCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class ListProtectedQueriesCommand extends $Command
  .classBuilder<
    ListProtectedQueriesCommandInput,
    ListProtectedQueriesCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListProtectedQueries", {})
  .n("CleanRoomsClient", "ListProtectedQueriesCommand")
  .sc(ListProtectedQueries$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProtectedQueriesInput;
      output: ListProtectedQueriesOutput;
    };
    sdk: {
      input: ListProtectedQueriesCommandInput;
      output: ListProtectedQueriesCommandOutput;
    };
  };
}
