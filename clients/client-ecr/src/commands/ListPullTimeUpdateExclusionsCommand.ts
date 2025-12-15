// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPullTimeUpdateExclusionsRequest, ListPullTimeUpdateExclusionsResponse } from "../models/models_0";
import { ListPullTimeUpdateExclusions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPullTimeUpdateExclusionsCommand}.
 */
export interface ListPullTimeUpdateExclusionsCommandInput extends ListPullTimeUpdateExclusionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPullTimeUpdateExclusionsCommand}.
 */
export interface ListPullTimeUpdateExclusionsCommandOutput
  extends ListPullTimeUpdateExclusionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the IAM principals that are excluded from having their image pull times recorded.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, ListPullTimeUpdateExclusionsCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, ListPullTimeUpdateExclusionsCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // ListPullTimeUpdateExclusionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPullTimeUpdateExclusionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPullTimeUpdateExclusionsResponse
 * //   pullTimeUpdateExclusions: [ // PullTimeUpdateExclusionList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPullTimeUpdateExclusionsCommandInput - {@link ListPullTimeUpdateExclusionsCommandInput}
 * @returns {@link ListPullTimeUpdateExclusionsCommandOutput}
 * @see {@link ListPullTimeUpdateExclusionsCommandInput} for command's `input` shape.
 * @see {@link ListPullTimeUpdateExclusionsCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation did not succeed because it would have exceeded a service limit for your
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR service quotas</a> in
 *             the Amazon Elastic Container Registry User Guide.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @example To list all pull time update exclusions
 * ```javascript
 * // This example lists all IAM principals that are excluded from having their image pull timestamps recorded in the registry.
 * const input = { /* empty *\/ };
 * const command = new ListPullTimeUpdateExclusionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   pullTimeUpdateExclusions: [
 *     "arn:aws:iam::012345678910:role/ECRAccess"
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To list pull time update exclusions with pagination
 * ```javascript
 * // This example lists pull time update exclusions with pagination, requesting a maximum of 2 results per page.
 * const input = {
 *   maxResults: 2
 * };
 * const command = new ListPullTimeUpdateExclusionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "eyJlbmNyeXB0ZWREYXRhIjpbXX0=",
 *   pullTimeUpdateExclusions: [
 *     "arn:aws:iam::012345678910:role/ECRAccess",
 *     "arn:aws:iam::012345678910:role/CICDPipeline"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListPullTimeUpdateExclusionsCommand extends $Command
  .classBuilder<
    ListPullTimeUpdateExclusionsCommandInput,
    ListPullTimeUpdateExclusionsCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "ListPullTimeUpdateExclusions", {})
  .n("ECRClient", "ListPullTimeUpdateExclusionsCommand")
  .sc(ListPullTimeUpdateExclusions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPullTimeUpdateExclusionsRequest;
      output: ListPullTimeUpdateExclusionsResponse;
    };
    sdk: {
      input: ListPullTimeUpdateExclusionsCommandInput;
      output: ListPullTimeUpdateExclusionsCommandOutput;
    };
  };
}
