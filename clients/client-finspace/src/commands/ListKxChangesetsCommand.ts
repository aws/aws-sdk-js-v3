// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { ListKxChangesetsRequest, ListKxChangesetsResponse } from "../models/models_0";
import { de_ListKxChangesetsCommand, se_ListKxChangesetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKxChangesetsCommand}.
 */
export interface ListKxChangesetsCommandInput extends ListKxChangesetsRequest {}
/**
 * @public
 *
 * The output of {@link ListKxChangesetsCommand}.
 */
export interface ListKxChangesetsCommandOutput extends ListKxChangesetsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all the changesets for a database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, ListKxChangesetsCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, ListKxChangesetsCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // ListKxChangesetsRequest
 *   environmentId: "STRING_VALUE", // required
 *   databaseName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKxChangesetsCommand(input);
 * const response = await client.send(command);
 * // { // ListKxChangesetsResponse
 * //   kxChangesets: [ // KxChangesets
 * //     { // KxChangesetListEntry
 * //       changesetId: "STRING_VALUE",
 * //       createdTimestamp: new Date("TIMESTAMP"),
 * //       activeFromTimestamp: new Date("TIMESTAMP"),
 * //       lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //       status: "PENDING" || "PROCESSING" || "FAILED" || "COMPLETED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKxChangesetsCommandInput - {@link ListKxChangesetsCommandInput}
 * @returns {@link ListKxChangesetsCommandOutput}
 * @see {@link ListKxChangesetsCommandInput} for command's `input` shape.
 * @see {@link ListKxChangesetsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class ListKxChangesetsCommand extends $Command
  .classBuilder<
    ListKxChangesetsCommandInput,
    ListKxChangesetsCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "ListKxChangesets", {})
  .n("FinspaceClient", "ListKxChangesetsCommand")
  .f(void 0, void 0)
  .ser(se_ListKxChangesetsCommand)
  .de(de_ListKxChangesetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKxChangesetsRequest;
      output: ListKxChangesetsResponse;
    };
    sdk: {
      input: ListKxChangesetsCommandInput;
      output: ListKxChangesetsCommandOutput;
    };
  };
}
