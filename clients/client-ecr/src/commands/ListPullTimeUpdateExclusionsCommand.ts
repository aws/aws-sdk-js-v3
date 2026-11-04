// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPullTimeUpdateExclusionsRequest, ListPullTimeUpdateExclusionsResponse } from "../models/models_0";
import { ListPullTimeUpdateExclusions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListPullTimeUpdateExclusionsCommandOutput extends ListPullTimeUpdateExclusionsResponse, __MetadataBearer {}

/**
 * Lists the IAM principals that are excluded from having their image pull times recorded.
 *
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
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The operation did not succeed because it would have exceeded a service limit for your account. For more information, see [Amazon ECR service quotas](https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html) in the Amazon Elastic Container Registry User Guide.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There was an exception validating this request.
 *
 * @throws {@link ECRServiceException}
 *
 * Base exception class for all service exceptions from ECR service.
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
export class ListPullTimeUpdateExclusionsCommand extends command<ListPullTimeUpdateExclusionsCommandInput, ListPullTimeUpdateExclusionsCommandOutput>(
  _ep0,
  _mw0,
  "ListPullTimeUpdateExclusions",
  ListPullTimeUpdateExclusions$
) {
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
