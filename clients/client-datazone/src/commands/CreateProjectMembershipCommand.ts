// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProjectMembershipInput, CreateProjectMembershipOutput } from "../models/models_0";
import { CreateProjectMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateProjectMembershipCommand}.
 */
export interface CreateProjectMembershipCommandInput extends CreateProjectMembershipInput {}
/**
 * @public
 *
 * The output of {@link CreateProjectMembershipCommand}.
 */
export interface CreateProjectMembershipCommandOutput extends CreateProjectMembershipOutput, __MetadataBearer {}

/**
 * Creates a project membership in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateProjectMembershipCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateProjectMembershipCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateProjectMembershipInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   projectIdentifier: "STRING_VALUE", // required
 *   member: { // Member Union: only one key present
 *     userIdentifier: "STRING_VALUE",
 *     groupIdentifier: "STRING_VALUE",
 *   },
 *   designation: "PROJECT_OWNER" || "PROJECT_CONTRIBUTOR" || "PROJECT_CATALOG_VIEWER" || "PROJECT_CATALOG_CONSUMER" || "PROJECT_CATALOG_STEWARD" || "USER_CREATED_DESIGNATION", // required
 *   userCreatedDesignationId: "STRING_VALUE",
 * };
 * const command = new CreateProjectMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateProjectMembershipCommandInput - {@link CreateProjectMembershipCommandInput}
 * @returns {@link CreateProjectMembershipCommandOutput}
 * @see {@link CreateProjectMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateProjectMembershipCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
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
export class CreateProjectMembershipCommand extends command<CreateProjectMembershipCommandInput, CreateProjectMembershipCommandOutput>(
  _ep0,
  _mw0,
  "CreateProjectMembership",
  CreateProjectMembership$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProjectMembershipInput;
      output: {};
    };
    sdk: {
      input: CreateProjectMembershipCommandInput;
      output: CreateProjectMembershipCommandOutput;
    };
  };
}
