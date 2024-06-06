// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateFolderRequest,
  CreateFolderRequestFilterSensitiveLog,
  CreateFolderResponse,
  CreateFolderResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateFolderCommand, se_CreateFolderCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a folder with the specified name and parent folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateFolderCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateFolderCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
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
 *  <p>The resource hierarchy is changing.</p>
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The maximum of 100,000 files and folders under the parent folder has been exceeded.</p>
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *  <p>The specified document version is not in the INITIALIZED state.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>The operation is not permitted.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 * @public
 */
export class CreateFolderCommand extends $Command
  .classBuilder<
    CreateFolderCommandInput,
    CreateFolderCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGorillaBoyService", "CreateFolder", {})
  .n("WorkDocsClient", "CreateFolderCommand")
  .f(CreateFolderRequestFilterSensitiveLog, CreateFolderResponseFilterSensitiveLog)
  .ser(se_CreateFolderCommand)
  .de(de_CreateFolderCommand)
  .build() {}
