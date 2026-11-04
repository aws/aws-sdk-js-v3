// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateDefaultQBusinessApplicationRequest,
  UpdateDefaultQBusinessApplicationResponse,
} from "../models/models_5";
import { UpdateDefaultQBusinessApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateDefaultQBusinessApplicationCommandOutput extends UpdateDefaultQBusinessApplicationResponse, __MetadataBearer {}

/**
 * Updates a Amazon Q Business application that is linked to a Quick Sight account.
 *
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
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class UpdateDefaultQBusinessApplicationCommand extends command<UpdateDefaultQBusinessApplicationCommandInput, UpdateDefaultQBusinessApplicationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDefaultQBusinessApplication",
  UpdateDefaultQBusinessApplication$
) {
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
