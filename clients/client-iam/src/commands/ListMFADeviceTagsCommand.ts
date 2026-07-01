// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMFADeviceTagsRequest, ListMFADeviceTagsResponse } from "../models/models_0";
import { ListMFADeviceTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMFADeviceTagsCommand}.
 */
export interface ListMFADeviceTagsCommandInput extends ListMFADeviceTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListMFADeviceTagsCommand}.
 */
export interface ListMFADeviceTagsCommandOutput extends ListMFADeviceTagsResponse, __MetadataBearer {}

/**
 * <p>Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is
 *       sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListMFADeviceTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListMFADeviceTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListMFADeviceTagsRequest
 *   SerialNumber: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListMFADeviceTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListMFADeviceTagsResponse
 * //   Tags: [ // tagListType // required
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMFADeviceTagsCommandInput - {@link ListMFADeviceTagsCommandInput}
 * @returns {@link ListMFADeviceTagsCommandOutput}
 * @see {@link ListMFADeviceTagsCommandInput} for command's `input` shape.
 * @see {@link ListMFADeviceTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class ListMFADeviceTagsCommand extends command<ListMFADeviceTagsCommandInput, ListMFADeviceTagsCommandOutput>(
  _ep0,
  _mw0,
  "ListMFADeviceTags",
  ListMFADeviceTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMFADeviceTagsRequest;
      output: ListMFADeviceTagsResponse;
    };
    sdk: {
      input: ListMFADeviceTagsCommandInput;
      output: ListMFADeviceTagsCommandOutput;
    };
  };
}
