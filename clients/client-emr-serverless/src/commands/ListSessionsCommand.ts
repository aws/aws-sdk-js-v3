// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSessionsRequest, ListSessionsResponse } from "../models/models_0";
import { ListSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandInput extends ListSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandOutput extends ListSessionsResponse, __MetadataBearer {}

/**
 * <p>Lists sessions for the specified application. You can filter sessions by state and creation time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, ListSessionsCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, ListSessionsCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // ListSessionsRequest
 *   applicationId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   states: [ // SessionStateSet
 *     "STRING_VALUE",
 *   ],
 *   createdAtAfter: new Date("TIMESTAMP"),
 *   createdAtBefore: new Date("TIMESTAMP"),
 * };
 * const command = new ListSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionsResponse
 * //   sessions: [ // Sessions // required
 * //     { // SessionSummary
 * //       applicationId: "STRING_VALUE", // required
 * //       sessionId: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       state: "STRING_VALUE", // required
 * //       stateDetails: "STRING_VALUE", // required
 * //       releaseLabel: "STRING_VALUE", // required
 * //       executionRoleArn: "STRING_VALUE", // required
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSessionsCommandInput - {@link ListSessionsCommandInput}
 * @returns {@link ListSessionsCommandOutput}
 * @see {@link ListSessionsCommandInput} for command's `input` shape.
 * @see {@link ListSessionsCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link EMRServerlessServiceException}
 * <p>Base exception class for all service exceptions from EMRServerless service.</p>
 *
 *
 * @public
 */
export class ListSessionsCommand extends $Command
  .classBuilder<
    ListSessionsCommandInput,
    ListSessionsCommandOutput,
    EMRServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsToledoWebService", "ListSessions", {})
  .n("EMRServerlessClient", "ListSessionsCommand")
  .sc(ListSessions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSessionsRequest;
      output: ListSessionsResponse;
    };
    sdk: {
      input: ListSessionsCommandInput;
      output: ListSessionsCommandOutput;
    };
  };
}
