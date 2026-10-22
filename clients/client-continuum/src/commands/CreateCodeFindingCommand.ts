// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCodeFindingInput, CreateCodeFindingOutput } from "../models/models_0";
import { CreateCodeFinding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCodeFindingCommand}.
 */
export interface CreateCodeFindingCommandInput extends CreateCodeFindingInput {}
/**
 * @public
 *
 * The output of {@link CreateCodeFindingCommand}.
 */
export interface CreateCodeFindingCommandOutput extends CreateCodeFindingOutput, __MetadataBearer {}

/**
 * Ingests a customer-supplied security finding into an environment. Continuum validates the document synchronously against the required overlay fields for the declared format; invalid documents are rejected with a ValidationException. The maximum accepted document size is 256 KB. The environment must have a source configured, and the finding must identify a code location so Continuum can tie it to a repository in the environment's build. Continuum assigns a findingId and stores the verbatim document. When no successful build yet contains the finding's repository, the finding stays SUBMITTED until the next successful build; if that build does not contain it either, the finding is DISCARDED with discardReason SOURCE_REPO_NOT_FOUND.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, CreateCodeFindingCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, CreateCodeFindingCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // CreateCodeFindingInput
 *   environmentId: "STRING_VALUE", // required
 *   ocsfDocument: "DOCUMENT_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateCodeFindingCommand(input);
 * const response = await client.send(command);
 * // { // CreateCodeFindingOutput
 * //   findingId: "STRING_VALUE", // required
 * //   findingArn: "STRING_VALUE", // required
 * //   title: "STRING_VALUE", // required
 * //   status: "SUBMITTED" || "VALIDATING" || "CONFIRMED" || "DISCARDED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateCodeFindingCommandInput - {@link CreateCodeFindingCommandInput}
 * @returns {@link CreateCodeFindingCommandOutput}
 * @see {@link CreateCodeFindingCommandInput} for command's `input` shape.
 * @see {@link CreateCodeFindingCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class CreateCodeFindingCommand extends command<CreateCodeFindingCommandInput, CreateCodeFindingCommandOutput>(
  _ep0,
  _mw0,
  "CreateCodeFinding",
  CreateCodeFinding$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCodeFindingInput;
      output: CreateCodeFindingOutput;
    };
    sdk: {
      input: CreateCodeFindingCommandInput;
      output: CreateCodeFindingCommandOutput;
    };
  };
}
