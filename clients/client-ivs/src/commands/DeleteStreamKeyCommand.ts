// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { DeleteStreamKeyRequest } from "../models/models_0";
import { de_DeleteStreamKeyCommand, se_DeleteStreamKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStreamKeyCommand}.
 */
export interface DeleteStreamKeyCommandInput extends DeleteStreamKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStreamKeyCommand}.
 */
export interface DeleteStreamKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the stream key for the specified ARN, so it can no longer be used to
 *       stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, DeleteStreamKeyCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, DeleteStreamKeyCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IvsClient(config);
 * const input = { // DeleteStreamKeyRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteStreamKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStreamKeyCommandInput - {@link DeleteStreamKeyCommandInput}
 * @returns {@link DeleteStreamKeyCommandOutput}
 * @see {@link DeleteStreamKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamKeyCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 * @public
 */
export class DeleteStreamKeyCommand extends $Command
  .classBuilder<
    DeleteStreamKeyCommandInput,
    DeleteStreamKeyCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoService", "DeleteStreamKey", {})
  .n("IvsClient", "DeleteStreamKeyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteStreamKeyCommand)
  .de(de_DeleteStreamKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStreamKeyRequest;
      output: {};
    };
    sdk: {
      input: DeleteStreamKeyCommandInput;
      output: DeleteStreamKeyCommandOutput;
    };
  };
}
