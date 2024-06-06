// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAppsRequest, ListAppsResponse } from "../models/models_0";
import { de_ListAppsCommand, se_ListAppsCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppsCommand}.
 */
export interface ListAppsCommandInput extends ListAppsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppsCommand}.
 */
export interface ListAppsCommandOutput extends ListAppsResponse, __MetadataBearer {}

/**
 * <p>Lists your Resilience Hub applications.</p>
 *          <note>
 *             <p>You can filter applications using only one filter at a time or without using any filter.
 *         If you try to filter applications using multiple filters, you will get the following
 *         error:</p>
 *             <p>
 *                <code>An error occurred (ValidationException) when calling the ListApps operation: Only
 *           one filter is supported for this operation.</code>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   name: "STRING_VALUE",
 *   appArn: "STRING_VALUE",
 *   fromLastAssessmentTime: new Date("TIMESTAMP"),
 *   toLastAssessmentTime: new Date("TIMESTAMP"),
 *   reverseOrder: true || false,
 * };
 * const command = new ListAppsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppsResponse
 * //   appSummaries: [ // AppSummaryList // required
 * //     { // AppSummary
 * //       appArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       complianceStatus: "STRING_VALUE",
 * //       resiliencyScore: Number("double"),
 * //       assessmentSchedule: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       driftStatus: "STRING_VALUE",
 * //       lastAppComplianceEvaluationTime: new Date("TIMESTAMP"),
 * //       rtoInSecs: Number("int"),
 * //       rpoInSecs: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppsCommandInput - {@link ListAppsCommandInput}
 * @returns {@link ListAppsCommandOutput}
 * @see {@link ListAppsCommandInput} for command's `input` shape.
 * @see {@link ListAppsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 * @public
 */
export class ListAppsCommand extends $Command
  .classBuilder<
    ListAppsCommandInput,
    ListAppsCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "ListApps", {})
  .n("ResiliencehubClient", "ListAppsCommand")
  .f(void 0, void 0)
  .ser(se_ListAppsCommand)
  .de(de_ListAppsCommand)
  .build() {}
