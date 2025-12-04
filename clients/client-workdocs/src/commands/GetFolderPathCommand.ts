// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFolderPathRequest, GetFolderPathResponse } from "../models/models_0";
import { GetFolderPath } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFolderPathCommand}.
 */
export interface GetFolderPathCommandInput extends GetFolderPathRequest {}
/**
 * @public
 *
 * The output of {@link GetFolderPathCommand}.
 */
export interface GetFolderPathCommandOutput extends GetFolderPathResponse, __MetadataBearer {}

/**
 * <p>Retrieves the path information (the hierarchy from the root folder) for the
 *             specified folder.</p>
 *          <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
 *             requested folder and only includes the IDs of the parent folders in the path. You can
 *             limit the maximum number of levels. You can also request the parent folder
 *             names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetFolderPathCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetFolderPathCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // GetFolderPathRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   FolderId: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   Fields: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 * };
 * const command = new GetFolderPathCommand(input);
 * const response = await client.send(command);
 * // { // GetFolderPathResponse
 * //   Path: { // ResourcePath
 * //     Components: [ // ResourcePathComponentList
 * //       { // ResourcePathComponent
 * //         Id: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFolderPathCommandInput - {@link GetFolderPathCommandInput}
 * @returns {@link GetFolderPathCommandOutput}
 * @see {@link GetFolderPathCommandInput} for command's `input` shape.
 * @see {@link GetFolderPathCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
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
 *
 * @public
 */
export class GetFolderPathCommand extends $Command
  .classBuilder<
    GetFolderPathCommandInput,
    GetFolderPathCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGorillaBoyService", "GetFolderPath", {})
  .n("WorkDocsClient", "GetFolderPathCommand")
  .sc(GetFolderPath)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFolderPathRequest;
      output: GetFolderPathResponse;
    };
    sdk: {
      input: GetFolderPathCommandInput;
      output: GetFolderPathCommandOutput;
    };
  };
}
