// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateKnowledgeBasePermissionsRequest, UpdateKnowledgeBasePermissionsResponse } from "../models/models_5";
import { UpdateKnowledgeBasePermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateKnowledgeBasePermissionsCommand}.
 */
export interface UpdateKnowledgeBasePermissionsCommandInput extends UpdateKnowledgeBasePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKnowledgeBasePermissionsCommand}.
 */
export interface UpdateKnowledgeBasePermissionsCommandOutput extends UpdateKnowledgeBasePermissionsResponse, __MetadataBearer {}

/**
 * <p>Updates the resource permissions for a knowledge base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateKnowledgeBasePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateKnowledgeBasePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateKnowledgeBasePermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   KnowledgeBaseId: "STRING_VALUE", // required
 *   GrantPermissions: [ // ResourcePermissionList
 *     { // ResourcePermission
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // ActionList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   RevokePermissions: [
 *     {
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateKnowledgeBasePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKnowledgeBasePermissionsResponse
 * //   KnowledgeBaseArn: "STRING_VALUE", // required
 * //   KnowledgeBaseId: "STRING_VALUE", // required
 * //   Permissions: [ // ResourcePermissionList
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateKnowledgeBasePermissionsCommandInput - {@link UpdateKnowledgeBasePermissionsCommandInput}
 * @returns {@link UpdateKnowledgeBasePermissionsCommandOutput}
 * @see {@link UpdateKnowledgeBasePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateKnowledgeBasePermissionsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateKnowledgeBasePermissionsCommand extends command<UpdateKnowledgeBasePermissionsCommandInput, UpdateKnowledgeBasePermissionsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateKnowledgeBasePermissions",
  UpdateKnowledgeBasePermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKnowledgeBasePermissionsRequest;
      output: UpdateKnowledgeBasePermissionsResponse;
    };
    sdk: {
      input: UpdateKnowledgeBasePermissionsCommandInput;
      output: UpdateKnowledgeBasePermissionsCommandOutput;
    };
  };
}
