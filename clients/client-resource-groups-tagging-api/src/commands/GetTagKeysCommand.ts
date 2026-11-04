// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTagKeysInput, GetTagKeysOutput } from "../models/models_0";
import { GetTagKeys$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTagKeysCommand}.
 */
export interface GetTagKeysCommandInput extends GetTagKeysInput {}
/**
 * @public
 *
 * The output of {@link GetTagKeysCommand}.
 */
export interface GetTagKeysCommandOutput extends GetTagKeysOutput, __MetadataBearer {}

/**
 * Returns all tag keys currently in use in the specified Amazon Web Services Region for the calling account.
 *
 * This operation supports pagination, where the response can be sent in multiple pages. You should check the `PaginationToken` response parameter to determine if there are additional results available to return. Repeat the query, passing the `PaginationToken` response parameter value as an input to the next request until you recieve a `null` value. A null value for `PaginationToken` indicates that there are no more results waiting to be returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, GetTagKeysCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, GetTagKeysCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * // import type { ResourceGroupsTaggingAPIClientConfig } from "@aws-sdk/client-resource-groups-tagging-api";
 * const config = {}; // type is ResourceGroupsTaggingAPIClientConfig
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const input = { // GetTagKeysInput
 *   PaginationToken: "STRING_VALUE",
 * };
 * const command = new GetTagKeysCommand(input);
 * const response = await client.send(command);
 * // { // GetTagKeysOutput
 * //   PaginationToken: "STRING_VALUE",
 * //   TagKeys: [ // TagKeyList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTagKeysCommandInput - {@link GetTagKeysCommandInput}
 * @returns {@link GetTagKeysCommandOutput}
 * @see {@link GetTagKeysCommandInput} for command's `input` shape.
 * @see {@link GetTagKeysCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for ResourceGroupsTaggingAPIClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The request processing failed because of an unknown error, exception, or failure. You can retry the request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request failed because of one of the following reasons:
 *
 * - A required parameter is missing.
 * - A provided string parameter is malformed.
 * - An provided parameter value is out of range.
 * - The target ID is invalid, unsupported, or doesn't exist.
 * - You can't access the Amazon S3 bucket for report storage. For more information, see [Amazon S3 bucket policy for report storage](https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#bucket-policy) in the *Tagging Amazon Web Services resources and Tag Editor* user guide.
 * - The partition specified in an ARN parameter in the request doesn't match the partition where you invoked the operation. The partition is specified by the second field of the ARN.
 *
 * @throws {@link PaginationTokenExpiredException} (client fault)
 *
 * The request failed because the specified `PaginationToken` has expired. A `PaginationToken` is valid for a maximum of 15 minutes.
 *
 * @throws {@link ThrottledException} (client fault)
 *
 * The request failed because it exceeded the allowed frequency of submitted requests.
 *
 * @throws {@link ResourceGroupsTaggingAPIServiceException}
 *
 * Base exception class for all service exceptions from ResourceGroupsTaggingAPI service.
 *
 * @public
 */
export class GetTagKeysCommand extends command<GetTagKeysCommandInput, GetTagKeysCommandOutput>(
  _ep0,
  _mw0,
  "GetTagKeys",
  GetTagKeys$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTagKeysInput;
      output: GetTagKeysOutput;
    };
    sdk: {
      input: GetTagKeysCommandInput;
      output: GetTagKeysCommandOutput;
    };
  };
}
