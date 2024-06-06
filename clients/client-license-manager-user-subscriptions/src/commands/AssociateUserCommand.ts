// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LicenseManagerUserSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerUserSubscriptionsClient";
import { AssociateUserRequest, AssociateUserResponse } from "../models/models_0";
import { de_AssociateUserCommand, se_AssociateUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateUserCommand}.
 */
export interface AssociateUserCommandInput extends AssociateUserRequest {}
/**
 * @public
 *
 * The output of {@link AssociateUserCommand}.
 */
export interface AssociateUserCommandOutput extends AssociateUserResponse, __MetadataBearer {}

/**
 * <p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p>
 *          <note>
 *             <p>Your estimated bill for charges on the number of users and related costs will take 48
 *         hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your
 *           monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, AssociateUserCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, AssociateUserCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // AssociateUserRequest
 *   Username: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   IdentityProvider: { // IdentityProvider Union: only one key present
 *     ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 *       DirectoryId: "STRING_VALUE",
 *     },
 *   },
 *   Domain: "STRING_VALUE",
 * };
 * const command = new AssociateUserCommand(input);
 * const response = await client.send(command);
 * // { // AssociateUserResponse
 * //   InstanceUserSummary: { // InstanceUserSummary
 * //     Username: "STRING_VALUE", // required
 * //     InstanceId: "STRING_VALUE", // required
 * //     IdentityProvider: { // IdentityProvider Union: only one key present
 * //       ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 * //         DirectoryId: "STRING_VALUE",
 * //       },
 * //     },
 * //     Status: "STRING_VALUE", // required
 * //     StatusMessage: "STRING_VALUE",
 * //     Domain: "STRING_VALUE",
 * //     AssociationDate: "STRING_VALUE",
 * //     DisassociationDate: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateUserCommandInput - {@link AssociateUserCommandInput}
 * @returns {@link AssociateUserCommandOutput}
 * @see {@link AssociateUserCommandInput} for command's `input` shape.
 * @see {@link AssociateUserCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (server fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the
 *       resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because a service quota is exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link LicenseManagerUserSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerUserSubscriptions service.</p>
 *
 * @public
 */
export class AssociateUserCommand extends $Command
  .classBuilder<
    AssociateUserCommandInput,
    AssociateUserCommandOutput,
    LicenseManagerUserSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerUserSubscriptionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LicenseManagerUserSubscriptions", "AssociateUser", {})
  .n("LicenseManagerUserSubscriptionsClient", "AssociateUserCommand")
  .f(void 0, void 0)
  .ser(se_AssociateUserCommand)
  .de(de_AssociateUserCommand)
  .build() {}
