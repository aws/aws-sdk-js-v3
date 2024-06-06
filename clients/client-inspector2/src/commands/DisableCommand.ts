// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { DisableRequest, DisableResponse } from "../models/models_0";
import { de_DisableCommand, se_DisableCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableCommand}.
 */
export interface DisableCommandInput extends DisableRequest {}
/**
 * @public
 *
 * The output of {@link DisableCommand}.
 */
export interface DisableCommandOutput extends DisableResponse, __MetadataBearer {}

/**
 * <p>Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account
 *          disables the Amazon Inspector service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, DisableCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, DisableCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // DisableRequest
 *   accountIds: [ // AccountIdSet
 *     "STRING_VALUE",
 *   ],
 *   resourceTypes: [ // DisableResourceTypeList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisableCommand(input);
 * const response = await client.send(command);
 * // { // DisableResponse
 * //   accounts: [ // AccountList // required
 * //     { // Account
 * //       accountId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       resourceStatus: { // ResourceStatus
 * //         ec2: "STRING_VALUE", // required
 * //         ecr: "STRING_VALUE", // required
 * //         lambda: "STRING_VALUE",
 * //         lambdaCode: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   failedAccounts: [ // FailedAccountList
 * //     { // FailedAccount
 * //       accountId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE",
 * //       resourceStatus: {
 * //         ec2: "STRING_VALUE", // required
 * //         ecr: "STRING_VALUE", // required
 * //         lambda: "STRING_VALUE",
 * //         lambdaCode: "STRING_VALUE",
 * //       },
 * //       errorCode: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisableCommandInput - {@link DisableCommandInput}
 * @returns {@link DisableCommandOutput}
 * @see {@link DisableCommandInput} for command's `input` shape.
 * @see {@link DisableCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class DisableCommand extends $Command
  .classBuilder<
    DisableCommandInput,
    DisableCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "Disable", {})
  .n("Inspector2Client", "DisableCommand")
  .f(void 0, void 0)
  .ser(se_DisableCommand)
  .de(de_DisableCommand)
  .build() {}
