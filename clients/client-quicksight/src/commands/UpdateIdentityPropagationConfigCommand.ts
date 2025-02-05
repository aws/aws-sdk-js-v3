// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateIdentityPropagationConfigRequest, UpdateIdentityPropagationConfigResponse } from "../models/models_5";
import {
  de_UpdateIdentityPropagationConfigCommand,
  se_UpdateIdentityPropagationConfigCommand,
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
 * The input for {@link UpdateIdentityPropagationConfigCommand}.
 */
export interface UpdateIdentityPropagationConfigCommandInput extends UpdateIdentityPropagationConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIdentityPropagationConfigCommand}.
 */
export interface UpdateIdentityPropagationConfigCommandOutput
  extends UpdateIdentityPropagationConfigResponse,
    __MetadataBearer {}

/**
 * <p>Adds or updates services and authorized targets to configure what the Amazon QuickSight IAM Identity Center application can access.</p>
 *          <p>This operation is only supported for Amazon QuickSight accounts using IAM Identity Center</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateIdentityPropagationConfigCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateIdentityPropagationConfigCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QuickSightClient(config);
 * const input = { // UpdateIdentityPropagationConfigRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Service: "REDSHIFT" || "QBUSINESS", // required
 *   AuthorizedTargets: [ // AuthorizedTargetsList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateIdentityPropagationConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIdentityPropagationConfigResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateIdentityPropagationConfigCommandInput - {@link UpdateIdentityPropagationConfigCommandInput}
 * @returns {@link UpdateIdentityPropagationConfigCommandOutput}
 * @see {@link UpdateIdentityPropagationConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityPropagationConfigCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
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
 * @public
 */
export class UpdateIdentityPropagationConfigCommand extends $Command
  .classBuilder<
    UpdateIdentityPropagationConfigCommandInput,
    UpdateIdentityPropagationConfigCommandOutput,
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
  .s("QuickSight_20180401", "UpdateIdentityPropagationConfig", {})
  .n("QuickSightClient", "UpdateIdentityPropagationConfigCommand")
  .f(void 0, void 0)
  .ser(se_UpdateIdentityPropagationConfigCommand)
  .de(de_UpdateIdentityPropagationConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIdentityPropagationConfigRequest;
      output: UpdateIdentityPropagationConfigResponse;
    };
    sdk: {
      input: UpdateIdentityPropagationConfigCommandInput;
      output: UpdateIdentityPropagationConfigCommandOutput;
    };
  };
}
