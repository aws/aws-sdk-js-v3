// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWorkspaceImageRequest, CreateWorkspaceImageResult } from "../models/models_0";
import { CreateWorkspaceImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWorkspaceImageCommand}.
 */
export interface CreateWorkspaceImageCommandInput extends CreateWorkspaceImageRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkspaceImageCommand}.
 */
export interface CreateWorkspaceImageCommandOutput extends CreateWorkspaceImageResult, __MetadataBearer {}

/**
 * Creates a new WorkSpace image from an existing WorkSpace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // CreateWorkspaceImageRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkspaceImageResult
 * //   ImageId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   OperatingSystem: { // OperatingSystem
 * //     Type: "WINDOWS" || "LINUX",
 * //   },
 * //   State: "AVAILABLE" || "PENDING" || "ERROR",
 * //   RequiredTenancy: "DEFAULT" || "DEDICATED",
 * //   Created: new Date("TIMESTAMP"),
 * //   OwnerAccountId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWorkspaceImageCommandInput - {@link CreateWorkspaceImageCommandInput}
 * @returns {@link CreateWorkspaceImageCommandOutput}
 * @see {@link CreateWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceImageCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * The state of the resource is not valid for this operation.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Your resource limits have been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class CreateWorkspaceImageCommand extends command<CreateWorkspaceImageCommandInput, CreateWorkspaceImageCommandOutput>(
  _ep0,
  _mw0,
  "CreateWorkspaceImage",
  CreateWorkspaceImage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkspaceImageRequest;
      output: CreateWorkspaceImageResult;
    };
    sdk: {
      input: CreateWorkspaceImageCommandInput;
      output: CreateWorkspaceImageCommandOutput;
    };
  };
}
