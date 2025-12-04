// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteDefaultQBusinessApplicationRequest,
  DeleteDefaultQBusinessApplicationResponse,
} from "../models/models_3";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteDefaultQBusinessApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDefaultQBusinessApplicationCommand}.
 */
export interface DeleteDefaultQBusinessApplicationCommandInput extends DeleteDefaultQBusinessApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDefaultQBusinessApplicationCommand}.
 */
export interface DeleteDefaultQBusinessApplicationCommandOutput
  extends DeleteDefaultQBusinessApplicationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a linked Amazon Q Business application from an Quick Sight account</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteDefaultQBusinessApplicationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteDefaultQBusinessApplicationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteDefaultQBusinessApplicationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE",
 * };
 * const command = new DeleteDefaultQBusinessApplicationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDefaultQBusinessApplicationResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteDefaultQBusinessApplicationCommandInput - {@link DeleteDefaultQBusinessApplicationCommandInput}
 * @returns {@link DeleteDefaultQBusinessApplicationCommandOutput}
 * @see {@link DeleteDefaultQBusinessApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteDefaultQBusinessApplicationCommandOutput} for command's `response` shape.
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
export class DeleteDefaultQBusinessApplicationCommand extends $Command
  .classBuilder<
    DeleteDefaultQBusinessApplicationCommandInput,
    DeleteDefaultQBusinessApplicationCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DeleteDefaultQBusinessApplication", {})
  .n("QuickSightClient", "DeleteDefaultQBusinessApplicationCommand")
  .sc(DeleteDefaultQBusinessApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDefaultQBusinessApplicationRequest;
      output: DeleteDefaultQBusinessApplicationResponse;
    };
    sdk: {
      input: DeleteDefaultQBusinessApplicationCommandInput;
      output: DeleteDefaultQBusinessApplicationCommandOutput;
    };
  };
}
