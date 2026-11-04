// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSpaceInput } from "../models/models_0";
import { UpdateSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSpaceCommand}.
 */
export interface UpdateSpaceCommandInput extends UpdateSpaceInput {}
/**
 * @public
 *
 * The output of {@link UpdateSpaceCommand}.
 */
export interface UpdateSpaceCommandOutput extends __MetadataBearer {}

/**
 * Modifies an existing AWS re:Post Private private re:Post.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, UpdateSpaceCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, UpdateSpaceCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * // import type { RepostspaceClientConfig } from "@aws-sdk/client-repostspace";
 * const config = {}; // type is RepostspaceClientConfig
 * const client = new RepostspaceClient(config);
 * const input = { // UpdateSpaceInput
 *   spaceId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tier: "BASIC" || "STANDARD",
 *   roleArn: "STRING_VALUE",
 *   supportedEmailDomains: { // SupportedEmailDomainsParameters
 *     enabled: "ENABLED" || "DISABLED",
 *     allowedDomains: [ // AllowedDomainsList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateSpaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSpaceCommandInput - {@link UpdateSpaceCommandInput}
 * @returns {@link UpdateSpaceCommandOutput}
 * @see {@link UpdateSpaceCommandInput} for command's `input` shape.
 * @see {@link UpdateSpaceCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link RepostspaceServiceException}
 *
 * Base exception class for all service exceptions from Repostspace service.
 *
 * @public
 */
export class UpdateSpaceCommand extends command<UpdateSpaceCommandInput, UpdateSpaceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSpace",
  UpdateSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSpaceInput;
      output: {};
    };
    sdk: {
      input: UpdateSpaceCommandInput;
      output: UpdateSpaceCommandOutput;
    };
  };
}
