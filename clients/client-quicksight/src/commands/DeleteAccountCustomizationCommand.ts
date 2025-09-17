// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccountCustomizationRequest, DeleteAccountCustomizationResponse } from "../models/models_3";
import { de_DeleteAccountCustomizationCommand, se_DeleteAccountCustomizationCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccountCustomizationCommand}.
 */
export interface DeleteAccountCustomizationCommandInput extends DeleteAccountCustomizationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountCustomizationCommand}.
 */
export interface DeleteAccountCustomizationCommandOutput extends DeleteAccountCustomizationResponse, __MetadataBearer {}

/**
 * <p>Deletes all Amazon QuickSight customizations in this Amazon Web Services Region for the specified
 *             Amazon Web Services account and QuickSight namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAccountCustomizationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAccountCustomizationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteAccountCustomizationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE",
 * };
 * const command = new DeleteAccountCustomizationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccountCustomizationResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteAccountCustomizationCommandInput - {@link DeleteAccountCustomizationCommandInput}
 * @returns {@link DeleteAccountCustomizationCommandOutput}
 * @see {@link DeleteAccountCustomizationCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountCustomizationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
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
export class DeleteAccountCustomizationCommand extends $Command
  .classBuilder<
    DeleteAccountCustomizationCommandInput,
    DeleteAccountCustomizationCommandOutput,
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
  .s("QuickSight_20180401", "DeleteAccountCustomization", {})
  .n("QuickSightClient", "DeleteAccountCustomizationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccountCustomizationCommand)
  .de(de_DeleteAccountCustomizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountCustomizationRequest;
      output: DeleteAccountCustomizationResponse;
    };
    sdk: {
      input: DeleteAccountCustomizationCommandInput;
      output: DeleteAccountCustomizationCommandOutput;
    };
  };
}
