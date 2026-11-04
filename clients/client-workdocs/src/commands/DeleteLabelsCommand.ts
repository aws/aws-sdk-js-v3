// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLabelsRequest, DeleteLabelsResponse } from "../models/models_0";
import { DeleteLabels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLabelsCommand}.
 */
export interface DeleteLabelsCommandInput extends DeleteLabelsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLabelsCommand}.
 */
export interface DeleteLabelsCommandOutput extends DeleteLabelsResponse, __MetadataBearer {}

/**
 * Deletes the specified list of labels from a resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteLabelsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteLabelsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // DeleteLabelsRequest
 *   ResourceId: "STRING_VALUE", // required
 *   AuthenticationToken: "STRING_VALUE",
 *   Labels: [ // SharedLabels
 *     "STRING_VALUE",
 *   ],
 *   DeleteAll: true || false,
 * };
 * const command = new DeleteLabelsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLabelsCommandInput - {@link DeleteLabelsCommandInput}
 * @returns {@link DeleteLabelsCommandOutput}
 * @see {@link DeleteLabelsCommandInput} for command's `input` shape.
 * @see {@link DeleteLabelsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *
 * The resource does not exist.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *
 * The Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *
 * The specified document version is not in the INITIALIZED state.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * One or more of the dependencies is unavailable.
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *
 * The operation is not permitted.
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *
 * The caller does not have access to perform the action on the resource.
 *
 * @throws {@link WorkDocsServiceException}
 *
 * Base exception class for all service exceptions from WorkDocs service.
 *
 * @public
 */
export class DeleteLabelsCommand extends command<DeleteLabelsCommandInput, DeleteLabelsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLabels",
  DeleteLabels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLabelsRequest;
      output: {};
    };
    sdk: {
      input: DeleteLabelsCommandInput;
      output: DeleteLabelsCommandOutput;
    };
  };
}
