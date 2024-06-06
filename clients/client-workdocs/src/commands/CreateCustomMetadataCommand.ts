// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateCustomMetadataRequest,
  CreateCustomMetadataRequestFilterSensitiveLog,
  CreateCustomMetadataResponse,
} from "../models/models_0";
import { de_CreateCustomMetadataCommand, se_CreateCustomMetadataCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Adds one or more custom properties to the specified resource (a folder, document,
 *             or version).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateCustomMetadataCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateCustomMetadataCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
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
 *  <p>The limit has been reached on the number of custom properties for the specified
 *             resource.</p>
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
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
export class CreateCustomMetadataCommand extends $Command
  .classBuilder<
    CreateCustomMetadataCommandInput,
    CreateCustomMetadataCommandOutput,
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
  .s("AWSGorillaBoyService", "CreateCustomMetadata", {})
  .n("WorkDocsClient", "CreateCustomMetadataCommand")
  .f(CreateCustomMetadataRequestFilterSensitiveLog, void 0)
  .ser(se_CreateCustomMetadataCommand)
  .de(de_CreateCustomMetadataCommand)
  .build() {}
