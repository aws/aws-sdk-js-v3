// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccessControlApplicationRequest, DeleteAccessControlApplicationResponse } from "../models/models_3";
import { DeleteAccessControlApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccessControlApplicationCommand}.
 */
export interface DeleteAccessControlApplicationCommandInput extends DeleteAccessControlApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessControlApplicationCommand}.
 */
export interface DeleteAccessControlApplicationCommandOutput extends DeleteAccessControlApplicationResponse, __MetadataBearer {}

/**
 * <p>Deletes an access control application. You can't delete an access control application that is associated with an inbound connector whose status is <code>ENABLED</code>.</p>
 *          <p>If another update to the same application is in progress, Quick Sight returns a <code>ConflictException</code>. Retry the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAccessControlApplicationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAccessControlApplicationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteAccessControlApplicationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ApplicationId: "STRING_VALUE",
 *   IdcApplicationArn: "STRING_VALUE",
 * };
 * const command = new DeleteAccessControlApplicationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccessControlApplicationResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   ApplicationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteAccessControlApplicationCommandInput - {@link DeleteAccessControlApplicationCommandInput}
 * @returns {@link DeleteAccessControlApplicationCommandOutput}
 * @see {@link DeleteAccessControlApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessControlApplicationCommandOutput} for command's `response` shape.
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
export class DeleteAccessControlApplicationCommand extends command<DeleteAccessControlApplicationCommandInput, DeleteAccessControlApplicationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccessControlApplication",
  DeleteAccessControlApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessControlApplicationRequest;
      output: DeleteAccessControlApplicationResponse;
    };
    sdk: {
      input: DeleteAccessControlApplicationCommandInput;
      output: DeleteAccessControlApplicationCommandOutput;
    };
  };
}
