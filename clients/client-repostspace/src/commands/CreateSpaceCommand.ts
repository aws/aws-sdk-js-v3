// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSpaceInput, CreateSpaceOutput } from "../models/models_0";
import { CreateSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSpaceCommand}.
 */
export interface CreateSpaceCommandInput extends CreateSpaceInput {}
/**
 * @public
 *
 * The output of {@link CreateSpaceCommand}.
 */
export interface CreateSpaceCommandOutput extends CreateSpaceOutput, __MetadataBearer {}

/**
 * Creates an AWS re:Post Private private re:Post.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, CreateSpaceCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, CreateSpaceCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * // import type { RepostspaceClientConfig } from "@aws-sdk/client-repostspace";
 * const config = {}; // type is RepostspaceClientConfig
 * const client = new RepostspaceClient(config);
 * const input = { // CreateSpaceInput
 *   name: "STRING_VALUE", // required
 *   subdomain: "STRING_VALUE", // required
 *   tier: "BASIC" || "STANDARD", // required
 *   description: "STRING_VALUE",
 *   userKMSKey: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   roleArn: "STRING_VALUE",
 *   supportedEmailDomains: { // SupportedEmailDomainsParameters
 *     enabled: "ENABLED" || "DISABLED",
 *     allowedDomains: [ // AllowedDomainsList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreateSpaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateSpaceOutput
 * //   spaceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateSpaceCommandInput - {@link CreateSpaceCommandInput}
 * @returns {@link CreateSpaceCommandOutput}
 * @see {@link CreateSpaceCommandInput} for command's `input` shape.
 * @see {@link CreateSpaceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
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
export class CreateSpaceCommand extends command<CreateSpaceCommandInput, CreateSpaceCommandOutput>(
  _ep0,
  _mw0,
  "CreateSpace",
  CreateSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSpaceInput;
      output: CreateSpaceOutput;
    };
    sdk: {
      input: CreateSpaceCommandInput;
      output: CreateSpaceCommandOutput;
    };
  };
}
