// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTracksRequest, ListTracksResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { ListTracks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTracksCommand}.
 */
export interface ListTracksCommandInput extends ListTracksRequest {}
/**
 * @public
 *
 * The output of {@link ListTracksCommand}.
 */
export interface ListTracksCommandOutput extends ListTracksResponse, __MetadataBearer {}

/**
 * <p>List the Amazon Redshift Serverless versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListTracksCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListTracksCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListTracksRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTracksCommand(input);
 * const response = await client.send(command);
 * // { // ListTracksResponse
 * //   tracks: [ // TrackList
 * //     { // ServerlessTrack
 * //       trackName: "STRING_VALUE",
 * //       workgroupVersion: "STRING_VALUE",
 * //       updateTargets: [ // UpdateTargetsList
 * //         { // UpdateTarget
 * //           trackName: "STRING_VALUE",
 * //           workgroupVersion: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTracksCommandInput - {@link ListTracksCommandInput}
 * @returns {@link ListTracksCommandOutput}
 * @see {@link ListTracksCommandInput} for command's `input` shape.
 * @see {@link ListTracksCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link InvalidPaginationException} (client fault)
 *  <p>The provided pagination token is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class ListTracksCommand extends $Command
  .classBuilder<
    ListTracksCommandInput,
    ListTracksCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "ListTracks", {})
  .n("RedshiftServerlessClient", "ListTracksCommand")
  .sc(ListTracks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTracksRequest;
      output: ListTracksResponse;
    };
    sdk: {
      input: ListTracksCommandInput;
      output: ListTracksCommandOutput;
    };
  };
}
