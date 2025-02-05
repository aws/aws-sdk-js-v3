// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociatePermissionRequest, DisassociatePermissionResponse } from "../models/models_0";
import { de_DisassociatePermissionCommand, se_DisassociatePermissionCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociatePermissionCommand}.
 */
export interface DisassociatePermissionCommandInput extends DisassociatePermissionRequest {}
/**
 * @public
 *
 * The output of {@link DisassociatePermissionCommand}.
 */
export interface DisassociatePermissionCommandOutput extends DisassociatePermissionResponse, __MetadataBearer {}

/**
 * <p>Removes a permission policy from a Amazon Q Business application, revoking the cross-account access that was
 *         previously granted to an ISV. This operation deletes the specified policy statement from the application's permission policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, DisassociatePermissionCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, DisassociatePermissionCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QBusinessClient(config);
 * const input = { // DisassociatePermissionRequest
 *   applicationId: "STRING_VALUE", // required
 *   statementId: "STRING_VALUE", // required
 * };
 * const command = new DisassociatePermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociatePermissionCommandInput - {@link DisassociatePermissionCommandInput}
 * @returns {@link DisassociatePermissionCommandOutput}
 * @see {@link DisassociatePermissionCommandInput} for command's `input` shape.
 * @see {@link DisassociatePermissionCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have
 *             provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 * @public
 */
export class DisassociatePermissionCommand extends $Command
  .classBuilder<
    DisassociatePermissionCommandInput,
    DisassociatePermissionCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "DisassociatePermission", {})
  .n("QBusinessClient", "DisassociatePermissionCommand")
  .f(void 0, void 0)
  .ser(se_DisassociatePermissionCommand)
  .de(de_DisassociatePermissionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociatePermissionRequest;
      output: {};
    };
    sdk: {
      input: DisassociatePermissionCommandInput;
      output: DisassociatePermissionCommandOutput;
    };
  };
}
