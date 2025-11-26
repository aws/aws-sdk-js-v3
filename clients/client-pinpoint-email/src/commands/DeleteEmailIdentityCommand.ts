// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteEmailIdentityRequest, DeleteEmailIdentityResponse } from "../models/models_0";
import type { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { DeleteEmailIdentity } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEmailIdentityCommand}.
 */
export interface DeleteEmailIdentityCommandInput extends DeleteEmailIdentityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEmailIdentityCommand}.
 */
export interface DeleteEmailIdentityCommandOutput extends DeleteEmailIdentityResponse, __MetadataBearer {}

/**
 * <p>Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity
 *             can be either an email address or a domain name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, DeleteEmailIdentityCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, DeleteEmailIdentityCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // DeleteEmailIdentityRequest
 *   EmailIdentity: "STRING_VALUE", // required
 * };
 * const command = new DeleteEmailIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEmailIdentityCommandInput - {@link DeleteEmailIdentityCommandInput}
 * @returns {@link DeleteEmailIdentityCommandOutput}
 * @see {@link DeleteEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link DeleteEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>The resource is being modified by another operation or thread.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 *
 * @public
 */
export class DeleteEmailIdentityCommand extends $Command
  .classBuilder<
    DeleteEmailIdentityCommandInput,
    DeleteEmailIdentityCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPinpointEmailService", "DeleteEmailIdentity", {})
  .n("PinpointEmailClient", "DeleteEmailIdentityCommand")
  .sc(DeleteEmailIdentity)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEmailIdentityRequest;
      output: {};
    };
    sdk: {
      input: DeleteEmailIdentityCommandInput;
      output: DeleteEmailIdentityCommandOutput;
    };
  };
}
