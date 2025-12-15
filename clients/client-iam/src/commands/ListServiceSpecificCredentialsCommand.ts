// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { ListServiceSpecificCredentialsRequest, ListServiceSpecificCredentialsResponse } from "../models/models_0";
import { ListServiceSpecificCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceSpecificCredentialsCommand}.
 */
export interface ListServiceSpecificCredentialsCommandInput extends ListServiceSpecificCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceSpecificCredentialsCommand}.
 */
export interface ListServiceSpecificCredentialsCommandOutput
  extends ListServiceSpecificCredentialsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the service-specific credentials associated with the
 *             specified IAM user. If none exists, the operation returns an empty list. The
 *             service-specific credentials returned by this operation are used only for authenticating
 *             the IAM user to a specific service. For more information about using service-specific
 *             credentials to authenticate to an Amazon Web Services service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a>
 *             in the CodeCommit User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListServiceSpecificCredentialsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListServiceSpecificCredentialsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListServiceSpecificCredentialsRequest
 *   UserName: "STRING_VALUE",
 *   ServiceName: "STRING_VALUE",
 *   AllUsers: true || false,
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListServiceSpecificCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceSpecificCredentialsResponse
 * //   ServiceSpecificCredentials: [ // ServiceSpecificCredentialsListType
 * //     { // ServiceSpecificCredentialMetadata
 * //       UserName: "STRING_VALUE", // required
 * //       Status: "Active" || "Inactive" || "Expired", // required
 * //       ServiceUserName: "STRING_VALUE",
 * //       ServiceCredentialAlias: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"), // required
 * //       ExpirationDate: new Date("TIMESTAMP"),
 * //       ServiceSpecificCredentialId: "STRING_VALUE", // required
 * //       ServiceName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * //   IsTruncated: true || false,
 * // };
 *
 * ```
 *
 * @param ListServiceSpecificCredentialsCommandInput - {@link ListServiceSpecificCredentialsCommandInput}
 * @returns {@link ListServiceSpecificCredentialsCommandOutput}
 * @see {@link ListServiceSpecificCredentialsCommandInput} for command's `input` shape.
 * @see {@link ListServiceSpecificCredentialsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceNotSupportedException} (client fault)
 *  <p>The specified service does not support service-specific credentials.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class ListServiceSpecificCredentialsCommand extends $Command
  .classBuilder<
    ListServiceSpecificCredentialsCommandInput,
    ListServiceSpecificCredentialsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "ListServiceSpecificCredentials", {})
  .n("IAMClient", "ListServiceSpecificCredentialsCommand")
  .sc(ListServiceSpecificCredentials$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceSpecificCredentialsRequest;
      output: ListServiceSpecificCredentialsResponse;
    };
    sdk: {
      input: ListServiceSpecificCredentialsCommandInput;
      output: ListServiceSpecificCredentialsCommandOutput;
    };
  };
}
