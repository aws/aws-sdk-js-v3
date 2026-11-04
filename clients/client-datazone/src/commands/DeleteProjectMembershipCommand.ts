// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProjectMembershipInput, DeleteProjectMembershipOutput } from "../models/models_1";
import { DeleteProjectMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProjectMembershipCommand}.
 */
export interface DeleteProjectMembershipCommandInput extends DeleteProjectMembershipInput {}
/**
 * @public
 *
 * The output of {@link DeleteProjectMembershipCommand}.
 */
export interface DeleteProjectMembershipCommandOutput extends DeleteProjectMembershipOutput, __MetadataBearer {}

/**
 * Deletes project membership in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteProjectMembershipCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteProjectMembershipCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteProjectMembershipInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   projectIdentifier: "STRING_VALUE", // required
 *   member: { // Member Union: only one key present
 *     userIdentifier: "STRING_VALUE",
 *     groupIdentifier: "STRING_VALUE",
 *   },
 * };
 * const command = new DeleteProjectMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProjectMembershipCommandInput - {@link DeleteProjectMembershipCommandInput}
 * @returns {@link DeleteProjectMembershipCommandOutput}
 * @see {@link DeleteProjectMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectMembershipCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request has exceeded the specified service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class DeleteProjectMembershipCommand extends command<DeleteProjectMembershipCommandInput, DeleteProjectMembershipCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProjectMembership",
  DeleteProjectMembership$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProjectMembershipInput;
      output: {};
    };
    sdk: {
      input: DeleteProjectMembershipCommandInput;
      output: DeleteProjectMembershipCommandOutput;
    };
  };
}
