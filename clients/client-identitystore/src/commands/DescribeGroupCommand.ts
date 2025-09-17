// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import {
  DescribeGroupRequest,
  DescribeGroupResponse,
  DescribeGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeGroupCommand, se_DescribeGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGroupCommand}.
 */
export interface DescribeGroupCommandInput extends DescribeGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGroupCommand}.
 */
export interface DescribeGroupCommandOutput extends DescribeGroupResponse, __MetadataBearer {}

/**
 * <p>Retrieves the group metadata and attributes from <code>GroupId</code> in an identity
 *          store.</p>
 *          <note>
 *             <p>If you have administrator access to a member account, you can use this API from the member account.
 *          Read about <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html">member accounts</a> in the
 *          <i>Organizations User Guide</i>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, DescribeGroupCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, DescribeGroupCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * // import type { IdentitystoreClientConfig } from "@aws-sdk/client-identitystore";
 * const config = {}; // type is IdentitystoreClientConfig
 * const client = new IdentitystoreClient(config);
 * const input = { // DescribeGroupRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new DescribeGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGroupResponse
 * //   GroupId: "STRING_VALUE", // required
 * //   DisplayName: "STRING_VALUE",
 * //   ExternalIds: [ // ExternalIds
 * //     { // ExternalId
 * //       Issuer: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Description: "STRING_VALUE",
 * //   IdentityStoreId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DescribeGroupCommandInput - {@link DescribeGroupCommandInput}
 * @returns {@link DescribeGroupCommandOutput}
 * @see {@link DescribeGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link IdentitystoreServiceException}
 * <p>Base exception class for all service exceptions from Identitystore service.</p>
 *
 *
 * @public
 */
export class DescribeGroupCommand extends $Command
  .classBuilder<
    DescribeGroupCommandInput,
    DescribeGroupCommandOutput,
    IdentitystoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IdentitystoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityStore", "DescribeGroup", {})
  .n("IdentitystoreClient", "DescribeGroupCommand")
  .f(void 0, DescribeGroupResponseFilterSensitiveLog)
  .ser(se_DescribeGroupCommand)
  .de(de_DescribeGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGroupRequest;
      output: DescribeGroupResponse;
    };
    sdk: {
      input: DescribeGroupCommandInput;
      output: DescribeGroupCommandOutput;
    };
  };
}
