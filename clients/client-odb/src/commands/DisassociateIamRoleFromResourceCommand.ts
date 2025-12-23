// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateIamRoleFromResourceInput, DisassociateIamRoleFromResourceOutput } from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { DisassociateIamRoleFromResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateIamRoleFromResourceCommand}.
 */
export interface DisassociateIamRoleFromResourceCommandInput extends DisassociateIamRoleFromResourceInput {}
/**
 * @public
 *
 * The output of {@link DisassociateIamRoleFromResourceCommand}.
 */
export interface DisassociateIamRoleFromResourceCommandOutput extends DisassociateIamRoleFromResourceOutput, __MetadataBearer {}

/**
 * <p>Disassociates an Amazon Web Services Identity and Access Management (IAM) service role from a specified resource to disable Amazon Web Services service integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, DisassociateIamRoleFromResourceCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, DisassociateIamRoleFromResourceCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // DisassociateIamRoleFromResourceInput
 *   iamRoleArn: "STRING_VALUE", // required
 *   awsIntegration: "KmsTde", // required
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateIamRoleFromResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateIamRoleFromResourceCommandInput - {@link DisassociateIamRoleFromResourceCommandInput}
 * @returns {@link DisassociateIamRoleFromResourceCommandOutput}
 * @see {@link DisassociateIamRoleFromResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateIamRoleFromResourceCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class DisassociateIamRoleFromResourceCommand extends $Command
  .classBuilder<
    DisassociateIamRoleFromResourceCommandInput,
    DisassociateIamRoleFromResourceCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "DisassociateIamRoleFromResource", {})
  .n("OdbClient", "DisassociateIamRoleFromResourceCommand")
  .sc(DisassociateIamRoleFromResource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateIamRoleFromResourceInput;
      output: {};
    };
    sdk: {
      input: DisassociateIamRoleFromResourceCommandInput;
      output: DisassociateIamRoleFromResourceCommandOutput;
    };
  };
}
