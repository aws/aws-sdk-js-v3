// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorldExportJobsRequest, ListWorldExportJobsResponse } from "../models/models_0";
import { de_ListWorldExportJobsCommand, se_ListWorldExportJobsCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorldExportJobsCommand}.
 */
export interface ListWorldExportJobsCommandInput extends ListWorldExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorldExportJobsCommand}.
 */
export interface ListWorldExportJobsCommandOutput extends ListWorldExportJobsResponse, __MetadataBearer {}

/**
 * <p>Lists world export jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListWorldExportJobsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListWorldExportJobsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // ListWorldExportJobsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // Filters
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListWorldExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorldExportJobsResponse
 * //   worldExportJobSummaries: [ // WorldExportJobSummaries // required
 * //     { // WorldExportJobSummary
 * //       arn: "STRING_VALUE",
 * //       status: "Pending" || "Running" || "Completed" || "Failed" || "Canceling" || "Canceled",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       worlds: [ // Arns
 * //         "STRING_VALUE",
 * //       ],
 * //       outputLocation: { // OutputLocation
 * //         s3Bucket: "STRING_VALUE",
 * //         s3Prefix: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorldExportJobsCommandInput - {@link ListWorldExportJobsCommandInput}
 * @returns {@link ListWorldExportJobsCommandOutput}
 * @see {@link ListWorldExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListWorldExportJobsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 * @public
 */
export class ListWorldExportJobsCommand extends $Command
  .classBuilder<
    ListWorldExportJobsCommandInput,
    ListWorldExportJobsCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("robomaker", "ListWorldExportJobs", {})
  .n("RoboMakerClient", "ListWorldExportJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorldExportJobsCommand)
  .de(de_ListWorldExportJobsCommand)
  .build() {}
