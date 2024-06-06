// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteParametersRequest, DeleteParametersResult } from "../models/models_0";
import { de_DeleteParametersCommand, se_DeleteParametersCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteParametersCommand}.
 */
export interface DeleteParametersCommandInput extends DeleteParametersRequest {}
/**
 * @public
 *
 * The output of {@link DeleteParametersCommand}.
 */
export interface DeleteParametersCommandOutput extends DeleteParametersResult, __MetadataBearer {}

/**
 * <p>Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to
 *    create a parameter with the same name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteParametersCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteParametersCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DeleteParametersRequest
 *   Names: [ // ParameterNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteParametersCommand(input);
 * const response = await client.send(command);
 * // { // DeleteParametersResult
 * //   DeletedParameters: [ // ParameterNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   InvalidParameters: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteParametersCommandInput - {@link DeleteParametersCommandInput}
 * @returns {@link DeleteParametersCommandOutput}
 * @see {@link DeleteParametersCommandInput} for command's `input` shape.
 * @see {@link DeleteParametersCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class DeleteParametersCommand extends $Command
  .classBuilder<
    DeleteParametersCommandInput,
    DeleteParametersCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DeleteParameters", {})
  .n("SSMClient", "DeleteParametersCommand")
  .f(void 0, void 0)
  .ser(se_DeleteParametersCommand)
  .de(de_DeleteParametersCommand)
  .build() {}
