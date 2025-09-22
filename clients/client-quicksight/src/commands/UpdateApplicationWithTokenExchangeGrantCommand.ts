// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateApplicationWithTokenExchangeGrantRequest,
  UpdateApplicationWithTokenExchangeGrantResponse,
} from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateApplicationWithTokenExchangeGrant } from "../schemas/schemas_73_UpdateApplicationWithTokenExchangeGrant";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationWithTokenExchangeGrantCommand}.
 */
export interface UpdateApplicationWithTokenExchangeGrantCommandInput
  extends UpdateApplicationWithTokenExchangeGrantRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationWithTokenExchangeGrantCommand}.
 */
export interface UpdateApplicationWithTokenExchangeGrantCommandOutput
  extends UpdateApplicationWithTokenExchangeGrantResponse,
    __MetadataBearer {}

/**
 * <p>Updates an QuickSight application with a token exchange grant. This operation only supports QuickSight applications that are registered with IAM Identity Center.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateApplicationWithTokenExchangeGrantCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateApplicationWithTokenExchangeGrantCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateApplicationWithTokenExchangeGrantRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new UpdateApplicationWithTokenExchangeGrantCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApplicationWithTokenExchangeGrantResponse
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateApplicationWithTokenExchangeGrantCommandInput - {@link UpdateApplicationWithTokenExchangeGrantCommandInput}
 * @returns {@link UpdateApplicationWithTokenExchangeGrantCommandOutput}
 * @see {@link UpdateApplicationWithTokenExchangeGrantCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationWithTokenExchangeGrantCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
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
export class UpdateApplicationWithTokenExchangeGrantCommand extends $Command
  .classBuilder<
    UpdateApplicationWithTokenExchangeGrantCommandInput,
    UpdateApplicationWithTokenExchangeGrantCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateApplicationWithTokenExchangeGrant", {})
  .n("QuickSightClient", "UpdateApplicationWithTokenExchangeGrantCommand")
  .sc(UpdateApplicationWithTokenExchangeGrant)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationWithTokenExchangeGrantRequest;
      output: UpdateApplicationWithTokenExchangeGrantResponse;
    };
    sdk: {
      input: UpdateApplicationWithTokenExchangeGrantCommandInput;
      output: UpdateApplicationWithTokenExchangeGrantCommandOutput;
    };
  };
}
