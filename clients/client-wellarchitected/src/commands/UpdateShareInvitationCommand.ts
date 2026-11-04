// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateShareInvitationInput, UpdateShareInvitationOutput } from "../models/models_0";
import { UpdateShareInvitation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateShareInvitationCommand}.
 */
export interface UpdateShareInvitationCommandInput extends UpdateShareInvitationInput {}
/**
 * @public
 *
 * The output of {@link UpdateShareInvitationCommand}.
 */
export interface UpdateShareInvitationCommandOutput extends UpdateShareInvitationOutput, __MetadataBearer {}

/**
 * Update a workload or custom lens share invitation.
 *
 * > **Note:** This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateShareInvitationCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateShareInvitationCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateShareInvitationInput
 *   ShareInvitationId: "STRING_VALUE", // required
 *   ShareInvitationAction: "ACCEPT" || "REJECT", // required
 * };
 * const command = new UpdateShareInvitationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateShareInvitationOutput
 * //   ShareInvitation: { // ShareInvitation
 * //     ShareInvitationId: "STRING_VALUE",
 * //     ShareResourceType: "WORKLOAD" || "LENS" || "PROFILE" || "TEMPLATE",
 * //     WorkloadId: "STRING_VALUE",
 * //     LensAlias: "STRING_VALUE",
 * //     LensArn: "STRING_VALUE",
 * //     ProfileArn: "STRING_VALUE",
 * //     TemplateArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateShareInvitationCommandInput - {@link UpdateShareInvitationCommandInput}
 * @returns {@link UpdateShareInvitationCommandOutput}
 * @see {@link UpdateShareInvitationCommandInput} for command's `input` shape.
 * @see {@link UpdateShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class UpdateShareInvitationCommand extends command<UpdateShareInvitationCommandInput, UpdateShareInvitationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateShareInvitation",
  UpdateShareInvitation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateShareInvitationInput;
      output: UpdateShareInvitationOutput;
    };
    sdk: {
      input: UpdateShareInvitationCommandInput;
      output: UpdateShareInvitationCommandOutput;
    };
  };
}
