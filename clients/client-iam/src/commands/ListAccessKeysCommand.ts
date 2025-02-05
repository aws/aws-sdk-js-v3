// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAccessKeysRequest, ListAccessKeysResponse } from "../models/models_0";
import { de_ListAccessKeysCommand, se_ListAccessKeysCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessKeysCommand}.
 */
export interface ListAccessKeysCommandInput extends ListAccessKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessKeysCommand}.
 */
export interface ListAccessKeysCommandOutput extends ListAccessKeysResponse, __MetadataBearer {}

/**
 * <p>Returns information about the access key IDs associated with the specified IAM user.
 *             If there is none, the operation returns an empty list.</p>
 *          <p>Although each user is limited to a small number of keys, you can still paginate the
 *             results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 *          <p>If the <code>UserName</code> is not specified, the user name is determined implicitly
 *             based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is
 *             used, then <code>UserName</code> is required. If a long-term key is assigned to the
 *             user, then <code>UserName</code> is not required.</p>
 *          <p>This operation works for access keys under the Amazon Web Services account. If the Amazon Web Services account has
 *             no associated users, the root user returns it's own access key IDs by running this
 *             command.</p>
 *          <note>
 *             <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible
 *                 only during key and user creation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAccessKeysCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAccessKeysCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IAMClient(config);
 * const input = { // ListAccessKeysRequest
 *   UserName: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListAccessKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessKeysResponse
 * //   AccessKeyMetadata: [ // accessKeyMetadataListType // required
 * //     { // AccessKeyMetadata
 * //       UserName: "STRING_VALUE",
 * //       AccessKeyId: "STRING_VALUE",
 * //       Status: "Active" || "Inactive",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessKeysCommandInput - {@link ListAccessKeysCommandInput}
 * @returns {@link ListAccessKeysCommandOutput}
 * @see {@link ListAccessKeysCommandInput} for command's `input` shape.
 * @see {@link ListAccessKeysCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
 * @public
 * @example To list the access key IDs for an IAM user
 * ```javascript
 * // The following command lists the access keys IDs for the IAM user named Alice.
 * const input = {
 *   "UserName": "Alice"
 * };
 * const command = new ListAccessKeysCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AccessKeyMetadata": [
 *     {
 *       "AccessKeyId": "AKIA111111111EXAMPLE",
 *       "CreateDate": "2016-12-01T22:19:58Z",
 *       "Status": "Active",
 *       "UserName": "Alice"
 *     },
 *     {
 *       "AccessKeyId": "AKIA222222222EXAMPLE",
 *       "CreateDate": "2016-12-01T22:20:01Z",
 *       "Status": "Active",
 *       "UserName": "Alice"
 *     }
 *   ]
 * }
 * *\/
 * // example id: 15571463-ebea-411a-a021-1c76bd2a3625
 * ```
 *
 */
export class ListAccessKeysCommand extends $Command
  .classBuilder<
    ListAccessKeysCommandInput,
    ListAccessKeysCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "ListAccessKeys", {})
  .n("IAMClient", "ListAccessKeysCommand")
  .f(void 0, void 0)
  .ser(se_ListAccessKeysCommand)
  .de(de_ListAccessKeysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessKeysRequest;
      output: ListAccessKeysResponse;
    };
    sdk: {
      input: ListAccessKeysCommandInput;
      output: ListAccessKeysCommandOutput;
    };
  };
}
