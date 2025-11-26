// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateShareInvitationInput, UpdateShareInvitationOutput } from "../models/models_0";
import { UpdateShareInvitation } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  WellArchitectedClientResolvedConfig,
} from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Update a workload or custom lens share invitation.</p>
 *          <note>
 *             <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p>
 *          </note>
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
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class UpdateShareInvitationCommand extends $Command
  .classBuilder<
    UpdateShareInvitationCommandInput,
    UpdateShareInvitationCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "UpdateShareInvitation", {})
  .n("WellArchitectedClient", "UpdateShareInvitationCommand")
  .sc(UpdateShareInvitation)
  .build() {
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
