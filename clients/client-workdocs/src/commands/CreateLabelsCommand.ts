// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLabelsRequest, CreateLabelsRequestFilterSensitiveLog, CreateLabelsResponse } from "../models/models_0";
import { de_CreateLabelsCommand, se_CreateLabelsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLabelsCommand}.
 */
export interface CreateLabelsCommandInput extends CreateLabelsRequest {}
/**
 * @public
 *
 * The output of {@link CreateLabelsCommand}.
 */
export interface CreateLabelsCommandOutput extends CreateLabelsResponse, __MetadataBearer {}

/**
 * <p>Adds the specified list of labels to the given resource (a document or
 *             folder)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateLabelsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateLabelsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkDocsClient(config);
 * const input = { // CreateLabelsRequest
 *   ResourceId: "STRING_VALUE", // required
 *   Labels: [ // SharedLabels // required
 *     "STRING_VALUE",
 *   ],
 *   AuthenticationToken: "STRING_VALUE",
 * };
 * const command = new CreateLabelsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLabelsCommandInput - {@link CreateLabelsCommandInput}
 * @returns {@link CreateLabelsCommandOutput}
 * @see {@link CreateLabelsCommandInput} for command's `input` shape.
 * @see {@link CreateLabelsCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyLabelsException} (client fault)
 *  <p>The limit has been reached on the number of labels for the specified
 *             resource.</p>
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
export class CreateLabelsCommand extends $Command
  .classBuilder<
    CreateLabelsCommandInput,
    CreateLabelsCommandOutput,
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
  .s("AWSGorillaBoyService", "CreateLabels", {})
  .n("WorkDocsClient", "CreateLabelsCommand")
  .f(CreateLabelsRequestFilterSensitiveLog, void 0)
  .ser(se_CreateLabelsCommand)
  .de(de_CreateLabelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLabelsRequest;
      output: {};
    };
    sdk: {
      input: CreateLabelsCommandInput;
      output: CreateLabelsCommandOutput;
    };
  };
}
