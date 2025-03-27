// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EnableSharingWithAwsOrganizationRequest, EnableSharingWithAwsOrganizationResponse } from "../models/models_0";
import {
  de_EnableSharingWithAwsOrganizationCommand,
  se_EnableSharingWithAwsOrganizationCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableSharingWithAwsOrganizationCommand}.
 */
export interface EnableSharingWithAwsOrganizationCommandInput extends EnableSharingWithAwsOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link EnableSharingWithAwsOrganizationCommand}.
 */
export interface EnableSharingWithAwsOrganizationCommandOutput
  extends EnableSharingWithAwsOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Enables resource sharing within your organization in Organizations. This operation creates
 *             a service-linked role called <code>AWSServiceRoleForResourceAccessManager</code> that has the IAM managed policy
 *             named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about
 *             the organization and its structure. This lets you share resources with all of the
 *             accounts in the calling account's organization by specifying the organization ID, or all
 *             of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable
 *             sharing within the organization, you can specify only individual Amazon Web Services accounts, or for
 *             supported resource types, IAM roles and users.</p>
 *          <p>You must call this operation from an IAM role or user in the organization's
 *             management account.</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, EnableSharingWithAwsOrganizationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, EnableSharingWithAwsOrganizationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = {};
 * const command = new EnableSharingWithAwsOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // EnableSharingWithAwsOrganizationResponse
 * //   returnValue: true || false,
 * // };
 *
 * ```
 *
 * @param EnableSharingWithAwsOrganizationCommandInput - {@link EnableSharingWithAwsOrganizationCommandInput}
 * @returns {@link EnableSharingWithAwsOrganizationCommandOutput}
 * @see {@link EnableSharingWithAwsOrganizationCommandInput} for command's `input` shape.
 * @see {@link EnableSharingWithAwsOrganizationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class EnableSharingWithAwsOrganizationCommand extends $Command
  .classBuilder<
    EnableSharingWithAwsOrganizationCommandInput,
    EnableSharingWithAwsOrganizationCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonResourceSharing", "EnableSharingWithAwsOrganization", {})
  .n("RAMClient", "EnableSharingWithAwsOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_EnableSharingWithAwsOrganizationCommand)
  .de(de_EnableSharingWithAwsOrganizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: EnableSharingWithAwsOrganizationResponse;
    };
    sdk: {
      input: EnableSharingWithAwsOrganizationCommandInput;
      output: EnableSharingWithAwsOrganizationCommandOutput;
    };
  };
}
