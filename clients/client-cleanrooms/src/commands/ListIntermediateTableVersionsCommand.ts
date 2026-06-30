// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListIntermediateTableVersionsInput, ListIntermediateTableVersionsOutput } from "../models/models_0";
import { ListIntermediateTableVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIntermediateTableVersionsCommand}.
 */
export interface ListIntermediateTableVersionsCommandInput extends ListIntermediateTableVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListIntermediateTableVersionsCommand}.
 */
export interface ListIntermediateTableVersionsCommandOutput extends ListIntermediateTableVersionsOutput, __MetadataBearer {}

/**
 * <p>Lists the version history of an intermediate table. Each call to <code>PopulateIntermediateTable</code> creates a new version. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListIntermediateTableVersionsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListIntermediateTableVersionsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListIntermediateTableVersionsInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   intermediateTableIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIntermediateTableVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListIntermediateTableVersionsOutput
 * //   intermediateTableVersionSummaries: [ // IntermediateTableVersionSummaryList // required
 * //     { // IntermediateTableVersionSummary
 * //       versionId: "STRING_VALUE", // required
 * //       tableId: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       analysisId: "STRING_VALUE", // required
 * //       status: "POPULATE_STARTED" || "POPULATE_SUCCESS" || "POPULATE_FAILED" || "RETENTION_PERIOD_EXPIRED", // required
 * //       analysisType: "QUERY", // required
 * //       kmsKeyArn: "STRING_VALUE",
 * //       expirationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIntermediateTableVersionsCommandInput - {@link ListIntermediateTableVersionsCommandInput}
 * @returns {@link ListIntermediateTableVersionsCommandOutput}
 * @see {@link ListIntermediateTableVersionsCommandInput} for command's `input` shape.
 * @see {@link ListIntermediateTableVersionsCommandOutput} for command's `response` shape.
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
export class ListIntermediateTableVersionsCommand extends $Command
  .classBuilder<
    ListIntermediateTableVersionsCommandInput,
    ListIntermediateTableVersionsCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListIntermediateTableVersions", {})
  .n("CleanRoomsClient", "ListIntermediateTableVersionsCommand")
  .sc(ListIntermediateTableVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIntermediateTableVersionsInput;
      output: ListIntermediateTableVersionsOutput;
    };
    sdk: {
      input: ListIntermediateTableVersionsCommandInput;
      output: ListIntermediateTableVersionsCommandOutput;
    };
  };
}
