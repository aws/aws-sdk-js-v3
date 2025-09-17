// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccessPointScopeRequest } from "../models/models_0";
import { de_DeleteAccessPointScopeCommand, se_DeleteAccessPointScopeCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccessPointScopeCommand}.
 */
export interface DeleteAccessPointScopeCommandInput extends DeleteAccessPointScopeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessPointScopeCommand}.
 */
export interface DeleteAccessPointScopeCommandOutput extends __MetadataBearer {}

/**
 * <p> Deletes an existing access point scope for a directory bucket.</p>
 *          <note>
 *             <p>When you delete the scope of an access point, all prefixes and permissions are
 *             deleted.</p>
 *          </note>
 *          <p>To use this operation, you must have the permission to perform the
 *             <code>s3express:DeleteAccessPointScope</code>
 *          action.</p>
 *          <p>For information about REST API errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">REST error responses</a>.</p>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteAccessPointScopeCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteAccessPointScopeCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DeleteAccessPointScopeRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessPointScopeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessPointScopeCommandInput - {@link DeleteAccessPointScopeCommandInput}
 * @returns {@link DeleteAccessPointScopeCommandOutput}
 * @see {@link DeleteAccessPointScopeCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessPointScopeCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class DeleteAccessPointScopeCommand extends $Command
  .classBuilder<
    DeleteAccessPointScopeCommandInput,
    DeleteAccessPointScopeCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    AccessPointName: { type: "contextParams", name: "Name" },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "DeleteAccessPointScope", {})
  .n("S3ControlClient", "DeleteAccessPointScopeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccessPointScopeCommand)
  .de(de_DeleteAccessPointScopeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessPointScopeRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessPointScopeCommandInput;
      output: DeleteAccessPointScopeCommandOutput;
    };
  };
}
