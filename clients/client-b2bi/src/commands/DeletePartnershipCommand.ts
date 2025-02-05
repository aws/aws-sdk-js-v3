// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePartnershipRequest } from "../models/models_0";
import { de_DeletePartnershipCommand, se_DeletePartnershipCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePartnershipCommand}.
 */
export interface DeletePartnershipCommandInput extends DeletePartnershipRequest {}
/**
 * @public
 *
 * The output of {@link DeletePartnershipCommand}.
 */
export interface DeletePartnershipCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified partnership. A partnership represents the connection between you and your trading partner. It ties
 *    together a profile and one or more trading capabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, DeletePartnershipCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, DeletePartnershipCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new B2biClient(config);
 * const input = { // DeletePartnershipRequest
 *   partnershipId: "STRING_VALUE", // required
 * };
 * const command = new DeletePartnershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePartnershipCommandInput - {@link DeletePartnershipCommandInput}
 * @returns {@link DeletePartnershipCommandOutput}
 * @see {@link DeletePartnershipCommandInput} for command's `input` shape.
 * @see {@link DeletePartnershipCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception is thrown when you attempt to delete a resource (such as a profile or a capability) that is being used by other resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @public
 * @example Sample DeletePartnership call
 * ```javascript
 * //
 * const input = {
 *   "partnershipId": "ps-219fa02f5b4242af8"
 * };
 * const command = new DeletePartnershipCommand(input);
 * await client.send(command);
 * // example id: example-1
 * ```
 *
 */
export class DeletePartnershipCommand extends $Command
  .classBuilder<
    DeletePartnershipCommandInput,
    DeletePartnershipCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: B2biClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("B2BI", "DeletePartnership", {})
  .n("B2biClient", "DeletePartnershipCommand")
  .f(void 0, void 0)
  .ser(se_DeletePartnershipCommand)
  .de(de_DeletePartnershipCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePartnershipRequest;
      output: {};
    };
    sdk: {
      input: DeletePartnershipCommandInput;
      output: DeletePartnershipCommandOutput;
    };
  };
}
