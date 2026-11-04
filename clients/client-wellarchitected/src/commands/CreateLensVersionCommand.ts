// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLensVersionInput, CreateLensVersionOutput } from "../models/models_0";
import { CreateLensVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateLensVersionCommand}.
 */
export interface CreateLensVersionCommandInput extends CreateLensVersionInput {}
/**
 * @public
 *
 * The output of {@link CreateLensVersionCommand}.
 */
export interface CreateLensVersionCommandOutput extends CreateLensVersionOutput, __MetadataBearer {}

/**
 * Create a new lens version.
 *
 * A lens can have up to 100 versions.
 *
 * Use this operation to publish a new lens version after you have imported a lens. The `LensAlias` is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateLensVersionCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateLensVersionCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateLensVersionInput
 *   LensAlias: "STRING_VALUE", // required
 *   LensVersion: "STRING_VALUE", // required
 *   IsMajorVersion: true || false,
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateLensVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateLensVersionOutput
 * //   LensArn: "STRING_VALUE",
 * //   LensVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLensVersionCommandInput - {@link CreateLensVersionCommandInput}
 * @returns {@link CreateLensVersionCommandOutput}
 * @see {@link CreateLensVersionCommandInput} for command's `input` shape.
 * @see {@link CreateLensVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The user has reached their resource quota.
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
export class CreateLensVersionCommand extends command<CreateLensVersionCommandInput, CreateLensVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateLensVersion",
  CreateLensVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLensVersionInput;
      output: CreateLensVersionOutput;
    };
    sdk: {
      input: CreateLensVersionCommandInput;
      output: CreateLensVersionCommandOutput;
    };
  };
}
