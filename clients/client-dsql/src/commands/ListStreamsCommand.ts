// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListStreamsInput, ListStreamsOutput } from "../models/models_0";
import { ListStreams$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStreamsCommand}.
 */
export interface ListStreamsCommandInput extends ListStreamsInput {}
/**
 * @public
 *
 * The output of {@link ListStreamsCommand}.
 */
export interface ListStreamsCommandOutput extends ListStreamsOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a list of streams for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, ListStreamsCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, ListStreamsCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // import type { DSQLClientConfig } from "@aws-sdk/client-dsql";
 * const config = {}; // type is DSQLClientConfig
 * const client = new DSQLClient(config);
 * const input = { // ListStreamsInput
 *   clusterIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListStreamsCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamsOutput
 * //   nextToken: "STRING_VALUE",
 * //   streams: [ // StreamList // required
 * //     { // StreamSummary
 * //       clusterIdentifier: "STRING_VALUE", // required
 * //       streamIdentifier: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       status: "CREATING" || "ACTIVE" || "DELETING" || "DELETED" || "FAILED" || "IMPAIRED", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListStreamsCommandInput - {@link ListStreamsCommandInput}
 * @returns {@link ListStreamsCommandOutput}
 * @see {@link ListStreamsCommandInput} for command's `input` shape.
 * @see {@link ListStreamsCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link DSQLServiceException}
 * <p>Base exception class for all service exceptions from DSQL service.</p>
 *
 *
 * @public
 */
export class ListStreamsCommand extends $Command
  .classBuilder<
    ListStreamsCommandInput,
    ListStreamsCommandOutput,
    DSQLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DSQLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DSQL", "ListStreams", {})
  .n("DSQLClient", "ListStreamsCommand")
  .sc(ListStreams$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStreamsInput;
      output: ListStreamsOutput;
    };
    sdk: {
      input: ListStreamsCommandInput;
      output: ListStreamsCommandOutput;
    };
  };
}
