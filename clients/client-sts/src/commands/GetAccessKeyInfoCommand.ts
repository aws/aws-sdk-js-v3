// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccessKeyInfoRequest, GetAccessKeyInfoResponse } from "../models/models_0";
import { GetAccessKeyInfo$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccessKeyInfoCommand}.
 */
export interface GetAccessKeyInfoCommandInput extends GetAccessKeyInfoRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessKeyInfoCommand}.
 */
export interface GetAccessKeyInfoCommandOutput extends GetAccessKeyInfoResponse, __MetadataBearer {}

/**
 * Returns the account identifier for the specified access key ID.
 *
 * Access keys consist of two parts: an access key ID (for example, `AKIAIOSFODNN7EXAMPLE`) and a secret access key (for example, `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`). For more information about access keys, see [Managing Access Keys for IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) in the *IAM User Guide*.
 *
 * When you pass an access key ID to this operation, it returns the ID of the Amazon Web Services account to which the keys belong. Access key IDs beginning with `AKIA` are long-term credentials for an IAM user or the Amazon Web Services account root user. Access key IDs beginning with `ASIA` are temporary credentials that are created using STS operations. If the account in the response belongs to you, you can sign in as the root user and review your root user access keys. Then, you can pull a [credentials report](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html) to learn which IAM user owns the keys. To learn who requested the temporary credentials for an `ASIA` access key, view the STS events in your [CloudTrail logs](https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html) in the *IAM User Guide*.
 *
 * This operation does not indicate the state of the access key. The key might be active, inactive, or deleted. Active keys might not have permissions to perform an operation. Providing a deleted access key might return an error that the key doesn't exist.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, GetAccessKeyInfoCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, GetAccessKeyInfoCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * // import type { STSClientConfig } from "@aws-sdk/client-sts";
 * const config = {}; // type is STSClientConfig
 * const client = new STSClient(config);
 * const input = { // GetAccessKeyInfoRequest
 *   AccessKeyId: "STRING_VALUE", // required
 * };
 * const command = new GetAccessKeyInfoCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessKeyInfoResponse
 * //   Account: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccessKeyInfoCommandInput - {@link GetAccessKeyInfoCommandInput}
 * @returns {@link GetAccessKeyInfoCommandOutput}
 * @see {@link GetAccessKeyInfoCommandInput} for command's `input` shape.
 * @see {@link GetAccessKeyInfoCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link STSServiceException}
 *
 * Base exception class for all service exceptions from STS service.
 *
 * @public
 */
export class GetAccessKeyInfoCommand extends command<GetAccessKeyInfoCommandInput, GetAccessKeyInfoCommandOutput>(
  _ep0,
  _mw0,
  "GetAccessKeyInfo",
  GetAccessKeyInfo$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessKeyInfoRequest;
      output: GetAccessKeyInfoResponse;
    };
    sdk: {
      input: GetAccessKeyInfoCommandInput;
      output: GetAccessKeyInfoCommandOutput;
    };
  };
}
