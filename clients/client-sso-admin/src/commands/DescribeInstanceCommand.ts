// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceRequest, DescribeInstanceResponse } from "../models/models_0";
import { DescribeInstance } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceCommand}.
 */
export interface DescribeInstanceCommandInput extends DescribeInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceCommand}.
 */
export interface DescribeInstanceCommandOutput extends DescribeInstanceResponse, __MetadataBearer {}

/**
 * <p>Returns the details of an instance of IAM Identity Center. The status can be one of the following:</p> <ul> <li> <p> <code>CREATE_IN_PROGRESS</code> - The instance is in the process of being created. When the instance is ready for use, DescribeInstance returns the status of <code>ACTIVE</code>. While the instance is in the <code>CREATE_IN_PROGRESS</code> state, you can call only DescribeInstance and DeleteInstance operations.</p> </li> <li> <p> <code>DELETE_IN_PROGRESS</code> - The instance is being deleted. Returns <code>AccessDeniedException</code> after the delete operation completes. </p> </li> <li> <p> <code>ACTIVE</code> - The instance is active.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeInstanceCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeInstanceCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeInstanceRequest
 *   InstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceResponse
 * //   InstanceArn: "STRING_VALUE",
 * //   IdentityStoreId: "STRING_VALUE",
 * //   OwnerAccountId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   Status: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "ACTIVE",
 * //   StatusReason: "STRING_VALUE",
 * //   EncryptionConfigurationDetails: { // EncryptionConfigurationDetails
 * //     KeyType: "AWS_OWNED_KMS_KEY" || "CUSTOMER_MANAGED_KEY",
 * //     KmsKeyArn: "STRING_VALUE",
 * //     EncryptionStatus: "UPDATING" || "ENABLED" || "UPDATE_FAILED",
 * //     EncryptionStatusReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInstanceCommandInput - {@link DescribeInstanceCommandInput}
 * @returns {@link DescribeInstanceCommandOutput}
 * @see {@link DescribeInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class DescribeInstanceCommand extends $Command
  .classBuilder<
    DescribeInstanceCommandInput,
    DescribeInstanceCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "DescribeInstance", {})
  .n("SSOAdminClient", "DescribeInstanceCommand")
  .sc(DescribeInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceRequest;
      output: DescribeInstanceResponse;
    };
    sdk: {
      input: DescribeInstanceCommandInput;
      output: DescribeInstanceCommandOutput;
    };
  };
}
