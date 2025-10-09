// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIdentityPropagationConfigRequest, DeleteIdentityPropagationConfigResponse } from "../models/models_4";
import {
  de_DeleteIdentityPropagationConfigCommand,
  se_DeleteIdentityPropagationConfigCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdentityPropagationConfigCommand}.
 */
export interface DeleteIdentityPropagationConfigCommandInput extends DeleteIdentityPropagationConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIdentityPropagationConfigCommand}.
 */
export interface DeleteIdentityPropagationConfigCommandOutput
  extends DeleteIdentityPropagationConfigResponse,
    __MetadataBearer {}

/**
 * <p>Deletes all access scopes and authorized targets that are associated with a service from the Quick Sight IAM Identity Center application.</p>
 *          <p>This operation is only supported for Quick Sight accounts that use IAM Identity Center.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteIdentityPropagationConfigCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteIdentityPropagationConfigCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteIdentityPropagationConfigRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Service: "REDSHIFT" || "QBUSINESS" || "ATHENA", // required
 * };
 * const command = new DeleteIdentityPropagationConfigCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIdentityPropagationConfigResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteIdentityPropagationConfigCommandInput - {@link DeleteIdentityPropagationConfigCommandInput}
 * @returns {@link DeleteIdentityPropagationConfigCommandOutput}
 * @see {@link DeleteIdentityPropagationConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityPropagationConfigCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DeleteIdentityPropagationConfigCommand extends $Command
  .classBuilder<
    DeleteIdentityPropagationConfigCommandInput,
    DeleteIdentityPropagationConfigCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DeleteIdentityPropagationConfig", {})
  .n("QuickSightClient", "DeleteIdentityPropagationConfigCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIdentityPropagationConfigCommand)
  .de(de_DeleteIdentityPropagationConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdentityPropagationConfigRequest;
      output: DeleteIdentityPropagationConfigResponse;
    };
    sdk: {
      input: DeleteIdentityPropagationConfigCommandInput;
      output: DeleteIdentityPropagationConfigCommandOutput;
    };
  };
}
