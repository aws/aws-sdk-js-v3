// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServiceSpecificCredentialsRequest, ListServiceSpecificCredentialsResponse } from "../models/models_0";
import { ListServiceSpecificCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListServiceSpecificCredentialsCommandOutput extends ListServiceSpecificCredentialsResponse, __MetadataBearer {}

/**
 * Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an Amazon Web Services service, refer to the following docs:
 *
 * - For service-specific credentials with CodeCommit, refer to [IAM credentials for CodeCommit: Git credentials, SSH keys, and Amazon Web Services access keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html) in the *IAM User Guide*.
 * - For service-specific credentials with Amazon Keyspaces (for Apache Cassandra), refer to [Use IAM with Amazon Keyspaces (for Apache Cassandra)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_keyspaces.html) in the *IAM User Guide*.
 * - For services that support long-term API keys, refer to [API keys for Amazon Web Services services](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_api_keys_for_aws_services.html) in the *IAM User Guide*.
 *
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
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceNotSupportedException} (client fault)
 *
 * The specified service does not support service-specific credentials.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class ListServiceSpecificCredentialsCommand extends command<ListServiceSpecificCredentialsCommandInput, ListServiceSpecificCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceSpecificCredentials",
  ListServiceSpecificCredentials$
) {
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
