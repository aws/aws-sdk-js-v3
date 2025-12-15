// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { ListPolicyVersionsRequest, ListPolicyVersionsResponse } from "../models/models_0";
import { ListPolicyVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPolicyVersionsCommand}.
 */
export interface ListPolicyVersionsCommandInput extends ListPolicyVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicyVersionsCommand}.
 */
export interface ListPolicyVersionsCommandOutput extends ListPolicyVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists information about the versions of the specified managed policy, including the
 *             version that is currently set as the policy's default version.</p>
 *          <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListPolicyVersionsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListPolicyVersionsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListPolicyVersionsRequest
 *   PolicyArn: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListPolicyVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyVersionsResponse
 * //   Versions: [ // policyDocumentVersionListType
 * //     { // PolicyVersion
 * //       Document: "STRING_VALUE",
 * //       VersionId: "STRING_VALUE",
 * //       IsDefaultVersion: true || false,
 * //       CreateDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPolicyVersionsCommandInput - {@link ListPolicyVersionsCommandInput}
 * @returns {@link ListPolicyVersionsCommandOutput}
 * @see {@link ListPolicyVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyVersionsCommandOutput} for command's `response` shape.
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
export class ListPolicyVersionsCommand extends $Command
  .classBuilder<
    ListPolicyVersionsCommandInput,
    ListPolicyVersionsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "ListPolicyVersions", {})
  .n("IAMClient", "ListPolicyVersionsCommand")
  .sc(ListPolicyVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyVersionsRequest;
      output: ListPolicyVersionsResponse;
    };
    sdk: {
      input: ListPolicyVersionsCommandInput;
      output: ListPolicyVersionsCommandOutput;
    };
  };
}
