// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListActsRequest, ListActsResponse } from "../models/models_0";
import type { NovaActClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NovaActClient";
import { ListActs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListActsCommand}.
 */
export interface ListActsCommandInput extends ListActsRequest {}
/**
 * @public
 *
 * The output of {@link ListActsCommand}.
 */
export interface ListActsCommandOutput extends ListActsResponse, __MetadataBearer {}

/**
 * <p>Lists all acts within a specific session with their current status and execution details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NovaActClient, ListActsCommand } from "@aws-sdk/client-nova-act"; // ES Modules import
 * // const { NovaActClient, ListActsCommand } = require("@aws-sdk/client-nova-act"); // CommonJS import
 * // import type { NovaActClientConfig } from "@aws-sdk/client-nova-act";
 * const config = {}; // type is NovaActClientConfig
 * const client = new NovaActClient(config);
 * const input = { // ListActsRequest
 *   workflowDefinitionName: "STRING_VALUE", // required
 *   workflowRunId: "STRING_VALUE",
 *   sessionId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListActsCommand(input);
 * const response = await client.send(command);
 * // { // ListActsResponse
 * //   actSummaries: [ // ActSummaries // required
 * //     { // ActSummary
 * //       workflowRunId: "STRING_VALUE", // required
 * //       sessionId: "STRING_VALUE", // required
 * //       actId: "STRING_VALUE", // required
 * //       status: "RUNNING" || "PENDING_CLIENT_ACTION" || "PENDING_HUMAN_ACTION" || "SUCCEEDED" || "FAILED" || "TIMED_OUT", // required
 * //       startedAt: new Date("TIMESTAMP"), // required
 * //       endedAt: new Date("TIMESTAMP"),
 * //       traceLocation: { // TraceLocation
 * //         locationType: "S3", // required
 * //         location: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListActsCommandInput - {@link ListActsCommandInput}
 * @returns {@link ListActsCommandOutput}
 * @see {@link ListActsCommandInput} for command's `input` shape.
 * @see {@link ListActsCommandOutput} for command's `response` shape.
 * @see {@link NovaActClientResolvedConfig | config} for NovaActClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Please try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for the request are invalid.</p>
 *
 * @throws {@link NovaActServiceException}
 * <p>Base exception class for all service exceptions from NovaAct service.</p>
 *
 *
 * @public
 */
export class ListActsCommand extends $Command
  .classBuilder<
    ListActsCommandInput,
    ListActsCommandOutput,
    NovaActClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NovaActClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNovaAgentsDataPlane", "ListActs", {})
  .n("NovaActClient", "ListActsCommand")
  .sc(ListActs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListActsRequest;
      output: ListActsResponse;
    };
    sdk: {
      input: ListActsCommandInput;
      output: ListActsCommandOutput;
    };
  };
}
