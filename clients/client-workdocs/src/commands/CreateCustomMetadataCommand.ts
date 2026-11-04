// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCustomMetadataRequest, CreateCustomMetadataResponse } from "../models/models_0";
import { CreateCustomMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCustomMetadataCommand}.
 */
export interface CreateCustomMetadataCommandInput extends CreateCustomMetadataRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomMetadataCommand}.
 */
export interface CreateCustomMetadataCommandOutput extends CreateCustomMetadataResponse, __MetadataBearer {}

/**
 * Adds one or more custom properties to the specified resource (a folder, document, or version).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateCustomMetadataCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateCustomMetadataCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // CreateCustomMetadataRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   CustomMetadata: { // CustomMetadataMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCustomMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateCustomMetadataCommandInput - {@link CreateCustomMetadataCommandInput}
 * @returns {@link CreateCustomMetadataCommandOutput}
 * @see {@link CreateCustomMetadataCommandInput} for command's `input` shape.
 * @see {@link CreateCustomMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link CustomMetadataLimitExceededException} (client fault)
 *
 * The limit has been reached on the number of custom properties for the specified resource.
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
export class CreateCustomMetadataCommand extends command<CreateCustomMetadataCommandInput, CreateCustomMetadataCommandOutput>(
  _ep0,
  _mw0,
  "CreateCustomMetadata",
  CreateCustomMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomMetadataRequest;
      output: {};
    };
    sdk: {
      input: CreateCustomMetadataCommandInput;
      output: CreateCustomMetadataCommandOutput;
    };
  };
}
