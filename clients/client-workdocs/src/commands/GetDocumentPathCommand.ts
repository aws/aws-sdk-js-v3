// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetDocumentPathRequest,
  GetDocumentPathRequestFilterSensitiveLog,
  GetDocumentPathResponse,
  GetDocumentPathResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetDocumentPathCommand, se_GetDocumentPathCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDocumentPathCommand}.
 */
export interface GetDocumentPathCommandInput extends GetDocumentPathRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentPathCommand}.
 */
export interface GetDocumentPathCommandOutput extends GetDocumentPathResponse, __MetadataBearer {}

/**
 * <p>Retrieves the path information (the hierarchy from the root folder) for the
 *             requested document.</p>
 *          <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
 *             requested document and only includes the IDs of the parent folders in the path. You can
 *             limit the maximum number of levels. You can also request the names of the parent
 *             folders.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetDocumentPathCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetDocumentPathCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // GetDocumentPathRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   Fields: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 * };
 * const command = new GetDocumentPathCommand(input);
 * const response = await client.send(command);
 * // { // GetDocumentPathResponse
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
 * @param GetDocumentPathCommandInput - {@link GetDocumentPathCommandInput}
 * @returns {@link GetDocumentPathCommandOutput}
 * @see {@link GetDocumentPathCommandInput} for command's `input` shape.
 * @see {@link GetDocumentPathCommandOutput} for command's `response` shape.
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
export class GetDocumentPathCommand extends $Command
  .classBuilder<
    GetDocumentPathCommandInput,
    GetDocumentPathCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGorillaBoyService", "GetDocumentPath", {})
  .n("WorkDocsClient", "GetDocumentPathCommand")
  .f(GetDocumentPathRequestFilterSensitiveLog, GetDocumentPathResponseFilterSensitiveLog)
  .ser(se_GetDocumentPathCommand)
  .de(de_GetDocumentPathCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDocumentPathRequest;
      output: GetDocumentPathResponse;
    };
    sdk: {
      input: GetDocumentPathCommandInput;
      output: GetDocumentPathCommandOutput;
    };
  };
}
