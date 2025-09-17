// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateDefaultQBusinessApplicationRequest,
  UpdateDefaultQBusinessApplicationResponse,
} from "../models/models_5";
import {
  de_UpdateDefaultQBusinessApplicationCommand,
  se_UpdateDefaultQBusinessApplicationCommand,
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
 * The input for {@link UpdateDefaultQBusinessApplicationCommand}.
 */
export interface UpdateDefaultQBusinessApplicationCommandInput extends UpdateDefaultQBusinessApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDefaultQBusinessApplicationCommand}.
 */
export interface UpdateDefaultQBusinessApplicationCommandOutput
  extends UpdateDefaultQBusinessApplicationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a Amazon Q Business application that is linked to a QuickSight account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDefaultQBusinessApplicationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDefaultQBusinessApplicationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateDefaultQBusinessApplicationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE",
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new UpdateDefaultQBusinessApplicationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDefaultQBusinessApplicationResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateDefaultQBusinessApplicationCommandInput - {@link UpdateDefaultQBusinessApplicationCommandInput}
 * @returns {@link UpdateDefaultQBusinessApplicationCommandOutput}
 * @see {@link UpdateDefaultQBusinessApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateDefaultQBusinessApplicationCommandOutput} for command's `response` shape.
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
export class UpdateDefaultQBusinessApplicationCommand extends $Command
  .classBuilder<
    UpdateDefaultQBusinessApplicationCommandInput,
    UpdateDefaultQBusinessApplicationCommandOutput,
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
  .s("QuickSight_20180401", "UpdateDefaultQBusinessApplication", {})
  .n("QuickSightClient", "UpdateDefaultQBusinessApplicationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDefaultQBusinessApplicationCommand)
  .de(de_UpdateDefaultQBusinessApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDefaultQBusinessApplicationRequest;
      output: UpdateDefaultQBusinessApplicationResponse;
    };
    sdk: {
      input: UpdateDefaultQBusinessApplicationCommandInput;
      output: UpdateDefaultQBusinessApplicationCommandOutput;
    };
  };
}
