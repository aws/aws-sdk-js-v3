// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWorkspaceImageRequest, CreateWorkspaceImageResult } from "../models/models_0";
import { de_CreateWorkspaceImageCommand, se_CreateWorkspaceImageCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new WorkSpace image from an existing WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
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
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class CreateWorkspaceImageCommand extends $Command
  .classBuilder<
    CreateWorkspaceImageCommandInput,
    CreateWorkspaceImageCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "CreateWorkspaceImage", {})
  .n("WorkSpacesClient", "CreateWorkspaceImageCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorkspaceImageCommand)
  .de(de_CreateWorkspaceImageCommand)
  .build() {
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
