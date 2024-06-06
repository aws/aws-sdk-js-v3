// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccessGrantRequest } from "../models/models_0";
import { de_DeleteAccessGrantCommand, se_DeleteAccessGrantCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccessGrantCommand}.
 */
export interface DeleteAccessGrantCommandInput extends DeleteAccessGrantRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessGrantCommand}.
 */
export interface DeleteAccessGrantCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the access grant from the S3 Access Grants instance. You cannot undo an access grant deletion and the grantee will no longer have access to the S3 data.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:DeleteAccessGrant</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteAccessGrantCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteAccessGrantCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // DeleteAccessGrantRequest
 *   AccountId: "STRING_VALUE",
 *   AccessGrantId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessGrantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessGrantCommandInput - {@link DeleteAccessGrantCommandInput}
 * @returns {@link DeleteAccessGrantCommandOutput}
 * @see {@link DeleteAccessGrantCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessGrantCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 * @public
 */
export class DeleteAccessGrantCommand extends $Command
  .classBuilder<
    DeleteAccessGrantCommandInput,
    DeleteAccessGrantCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "DeleteAccessGrant", {})
  .n("S3ControlClient", "DeleteAccessGrantCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccessGrantCommand)
  .de(de_DeleteAccessGrantCommand)
  .build() {}
