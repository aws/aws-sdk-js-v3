// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateKeyRegistrationRequest, UpdateKeyRegistrationResponse } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateKeyRegistration } from "../schemas/schemas_57_Registration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKeyRegistrationCommand}.
 */
export interface UpdateKeyRegistrationCommandInput extends UpdateKeyRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKeyRegistrationCommand}.
 */
export interface UpdateKeyRegistrationCommandOutput extends UpdateKeyRegistrationResponse, __MetadataBearer {}

/**
 * <p>Updates a customer managed key in a QuickSight account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateKeyRegistrationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateKeyRegistrationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateKeyRegistrationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   KeyRegistration: [ // KeyRegistration // required
 *     { // RegisteredCustomerManagedKey
 *       KeyArn: "STRING_VALUE",
 *       DefaultKey: true || false,
 *     },
 *   ],
 * };
 * const command = new UpdateKeyRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKeyRegistrationResponse
 * //   FailedKeyRegistration: [ // FailedKeyRegistrationEntries
 * //     { // FailedKeyRegistrationEntry
 * //       KeyArn: "STRING_VALUE",
 * //       Message: "STRING_VALUE", // required
 * //       StatusCode: Number("int"), // required
 * //       SenderFault: true || false, // required
 * //     },
 * //   ],
 * //   SuccessfulKeyRegistration: [ // SuccessfulKeyRegistrationEntries
 * //     { // SuccessfulKeyRegistrationEntry
 * //       KeyArn: "STRING_VALUE", // required
 * //       StatusCode: Number("int"), // required
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateKeyRegistrationCommandInput - {@link UpdateKeyRegistrationCommandInput}
 * @returns {@link UpdateKeyRegistrationCommandOutput}
 * @see {@link UpdateKeyRegistrationCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyRegistrationCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateKeyRegistrationCommand extends $Command
  .classBuilder<
    UpdateKeyRegistrationCommandInput,
    UpdateKeyRegistrationCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateKeyRegistration", {})
  .n("QuickSightClient", "UpdateKeyRegistrationCommand")
  .sc(UpdateKeyRegistration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKeyRegistrationRequest;
      output: UpdateKeyRegistrationResponse;
    };
    sdk: {
      input: UpdateKeyRegistrationCommandInput;
      output: UpdateKeyRegistrationCommandOutput;
    };
  };
}
