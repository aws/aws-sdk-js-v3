// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLicenseEndpointRequest, DeleteLicenseEndpointResponse } from "../models/models_1";
import { de_DeleteLicenseEndpointCommand, se_DeleteLicenseEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLicenseEndpointCommand}.
 */
export interface DeleteLicenseEndpointCommandInput extends DeleteLicenseEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLicenseEndpointCommand}.
 */
export interface DeleteLicenseEndpointCommandOutput extends DeleteLicenseEndpointResponse, __MetadataBearer {}

/**
 * <p>Deletes a license endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteLicenseEndpointCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteLicenseEndpointCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DeadlineClient(config);
 * const input = { // DeleteLicenseEndpointRequest
 *   licenseEndpointId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLicenseEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLicenseEndpointCommandInput - {@link DeleteLicenseEndpointCommandInput}
 * @returns {@link DeleteLicenseEndpointCommandOutput}
 * @see {@link DeleteLicenseEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseEndpointCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *          than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 * @public
 */
export class DeleteLicenseEndpointCommand extends $Command
  .classBuilder<
    DeleteLicenseEndpointCommandInput,
    DeleteLicenseEndpointCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "DeleteLicenseEndpoint", {})
  .n("DeadlineClient", "DeleteLicenseEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLicenseEndpointCommand)
  .de(de_DeleteLicenseEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLicenseEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeleteLicenseEndpointCommandInput;
      output: DeleteLicenseEndpointCommandOutput;
    };
  };
}
