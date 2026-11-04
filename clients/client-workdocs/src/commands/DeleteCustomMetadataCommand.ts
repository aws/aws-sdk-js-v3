// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCustomMetadataRequest, DeleteCustomMetadataResponse } from "../models/models_0";
import { DeleteCustomMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCustomMetadataCommand}.
 */
export interface DeleteCustomMetadataCommandInput extends DeleteCustomMetadataRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomMetadataCommand}.
 */
export interface DeleteCustomMetadataCommandOutput extends DeleteCustomMetadataResponse, __MetadataBearer {}

/**
 * Deletes custom metadata from the specified resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteCustomMetadataCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteCustomMetadataCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // DeleteCustomMetadataRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   Keys: [ // CustomMetadataKeyList
 *     "STRING_VALUE",
 *   ],
 *   DeleteAll: true || false,
 * };
 * const command = new DeleteCustomMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomMetadataCommandInput - {@link DeleteCustomMetadataCommandInput}
 * @returns {@link DeleteCustomMetadataCommandOutput}
 * @see {@link DeleteCustomMetadataCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomMetadataCommandOutput} for command's `response` shape.
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
export class DeleteCustomMetadataCommand extends command<DeleteCustomMetadataCommandInput, DeleteCustomMetadataCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCustomMetadata",
  DeleteCustomMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomMetadataRequest;
      output: {};
    };
    sdk: {
      input: DeleteCustomMetadataCommandInput;
      output: DeleteCustomMetadataCommandOutput;
    };
  };
}
