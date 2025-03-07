// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAnycastIpListRequest } from "../models/models_1";
import { de_DeleteAnycastIpListCommand, se_DeleteAnycastIpListCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAnycastIpListCommand}.
 */
export interface DeleteAnycastIpListCommandInput extends DeleteAnycastIpListRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnycastIpListCommand}.
 */
export interface DeleteAnycastIpListCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Anycast static IP list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteAnycastIpListCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteAnycastIpListCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteAnycastIpListRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new DeleteAnycastIpListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAnycastIpListCommandInput - {@link DeleteAnycastIpListCommandInput}
 * @returns {@link DeleteAnycastIpListCommandOutput}
 * @see {@link DeleteAnycastIpListCommandInput} for command's `input` shape.
 * @see {@link DeleteAnycastIpListCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CannotDeleteEntityWhileInUse} (client fault)
 *  <p>The entity cannot be deleted while it is in use.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link IllegalDelete} (client fault)
 *  <p>Deletion is not allowed for this entity.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class DeleteAnycastIpListCommand extends $Command
  .classBuilder<
    DeleteAnycastIpListCommandInput,
    DeleteAnycastIpListCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "DeleteAnycastIpList", {})
  .n("CloudFrontClient", "DeleteAnycastIpListCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAnycastIpListCommand)
  .de(de_DeleteAnycastIpListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAnycastIpListRequest;
      output: {};
    };
    sdk: {
      input: DeleteAnycastIpListCommandInput;
      output: DeleteAnycastIpListCommandOutput;
    };
  };
}
