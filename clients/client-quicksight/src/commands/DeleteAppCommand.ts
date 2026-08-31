// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAppRequest, DeleteAppResponse } from "../models/models_3";
import { DeleteApp$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAppCommand}.
 */
export interface DeleteAppCommandInput extends DeleteAppRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppCommand}.
 */
export interface DeleteAppCommandOutput extends DeleteAppResponse, __MetadataBearer {}

/**
 * <p>Deletes an app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAppCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAppCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteAppRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AppId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAppResponse
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteAppCommandInput - {@link DeleteAppCommandInput}
 * @returns {@link DeleteAppCommandOutput}
 * @see {@link DeleteAppCommandInput} for command's `input` shape.
 * @see {@link DeleteAppCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameter has a value that isn't valid.</p>
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
export class DeleteAppCommand extends command<DeleteAppCommandInput, DeleteAppCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApp",
  DeleteApp$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppRequest;
      output: DeleteAppResponse;
    };
    sdk: {
      input: DeleteAppCommandInput;
      output: DeleteAppCommandOutput;
    };
  };
}
