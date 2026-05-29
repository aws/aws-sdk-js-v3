// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteOAuthClientApplicationRequest, DeleteOAuthClientApplicationResponse } from "../models/models_3";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteOAuthClientApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOAuthClientApplicationCommand}.
 */
export interface DeleteOAuthClientApplicationCommandInput extends DeleteOAuthClientApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOAuthClientApplicationCommand}.
 */
export interface DeleteOAuthClientApplicationCommandOutput extends DeleteOAuthClientApplicationResponse, __MetadataBearer {}

/**
 * <p>Deletes an OAuthClientApplication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteOAuthClientApplicationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteOAuthClientApplicationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteOAuthClientApplicationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   OAuthClientApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOAuthClientApplicationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteOAuthClientApplicationResponse
 * //   Arn: "STRING_VALUE",
 * //   OAuthClientApplicationId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteOAuthClientApplicationCommandInput - {@link DeleteOAuthClientApplicationCommandInput}
 * @returns {@link DeleteOAuthClientApplicationCommandOutput}
 * @see {@link DeleteOAuthClientApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteOAuthClientApplicationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
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
export class DeleteOAuthClientApplicationCommand extends $Command
  .classBuilder<
    DeleteOAuthClientApplicationCommandInput,
    DeleteOAuthClientApplicationCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DeleteOAuthClientApplication", {})
  .n("QuickSightClient", "DeleteOAuthClientApplicationCommand")
  .sc(DeleteOAuthClientApplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOAuthClientApplicationRequest;
      output: DeleteOAuthClientApplicationResponse;
    };
    sdk: {
      input: DeleteOAuthClientApplicationCommandInput;
      output: DeleteOAuthClientApplicationCommandOutput;
    };
  };
}
