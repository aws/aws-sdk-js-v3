// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFolderRequest, CreateFolderResponse } from "../models/models_0";
import { CreateFolder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateFolderCommand}.
 */
export interface CreateFolderCommandInput extends CreateFolderRequest {}
/**
 * @public
 *
 * The output of {@link CreateFolderCommand}.
 */
export interface CreateFolderCommandOutput extends CreateFolderResponse, __MetadataBearer {}

/**
 * Creates a folder with the specified name and parent folder.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateFolderCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateFolderCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // CreateFolderRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   ParentFolderId: "STRING_VALUE", // required
 * };
 * const command = new CreateFolderCommand(input);
 * const response = await client.send(command);
 * // { // CreateFolderResponse
 * //   Metadata: { // FolderMetadata
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     CreatorId: "STRING_VALUE",
 * //     ParentFolderId: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     ModifiedTimestamp: new Date("TIMESTAMP"),
 * //     ResourceState: "ACTIVE" || "RESTORING" || "RECYCLING" || "RECYCLED",
 * //     Signature: "STRING_VALUE",
 * //     Labels: [ // SharedLabels
 * //       "STRING_VALUE",
 * //     ],
 * //     Size: Number("long"),
 * //     LatestVersionSize: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateFolderCommandInput - {@link CreateFolderCommandInput}
 * @returns {@link CreateFolderCommandOutput}
 * @see {@link CreateFolderCommandInput} for command's `input` shape.
 * @see {@link CreateFolderCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * The resource hierarchy is changing.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *
 * Another operation is in progress on the resource that conflicts with the current operation.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *
 * The resource already exists.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *
 * The resource does not exist.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *
 * The Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The maximum of 100,000 files and folders under the parent folder has been exceeded.
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
export class CreateFolderCommand extends command<CreateFolderCommandInput, CreateFolderCommandOutput>(
  _ep0,
  _mw0,
  "CreateFolder",
  CreateFolder$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFolderRequest;
      output: CreateFolderResponse;
    };
    sdk: {
      input: CreateFolderCommandInput;
      output: CreateFolderCommandOutput;
    };
  };
}
