// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartAssociationsOnceRequest, StartAssociationsOnceResult } from "../models/models_1";
import { de_StartAssociationsOnceCommand, se_StartAssociationsOnceCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAssociationsOnceCommand}.
 */
export interface StartAssociationsOnceCommandInput extends StartAssociationsOnceRequest {}
/**
 * @public
 *
 * The output of {@link StartAssociationsOnceCommand}.
 */
export interface StartAssociationsOnceCommandOutput extends StartAssociationsOnceResult, __MetadataBearer {}

/**
 * <p>Runs an association immediately and only one time. This operation can be helpful when
 *    troubleshooting associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartAssociationsOnceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartAssociationsOnceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // StartAssociationsOnceRequest
 *   AssociationIds: [ // AssociationIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartAssociationsOnceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartAssociationsOnceCommandInput - {@link StartAssociationsOnceCommandInput}
 * @returns {@link StartAssociationsOnceCommandOutput}
 * @see {@link StartAssociationsOnceCommandInput} for command's `input` shape.
 * @see {@link StartAssociationsOnceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationDoesNotExist} (client fault)
 *  <p>The specified association doesn't exist.</p>
 *
 * @throws {@link InvalidAssociation} (client fault)
 *  <p>The association isn't valid or doesn't exist. </p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class StartAssociationsOnceCommand extends $Command
  .classBuilder<
    StartAssociationsOnceCommandInput,
    StartAssociationsOnceCommandOutput,
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
  .s("AmazonSSM", "StartAssociationsOnce", {})
  .n("SSMClient", "StartAssociationsOnceCommand")
  .f(void 0, void 0)
  .ser(se_StartAssociationsOnceCommand)
  .de(de_StartAssociationsOnceCommand)
  .build() {}
