// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteJobTemplateRequest, DeleteJobTemplateResponse } from "../models/models_0";
import { de_DeleteJobTemplateCommand, se_DeleteJobTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteJobTemplateCommand}.
 */
export interface DeleteJobTemplateCommandInput extends DeleteJobTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteJobTemplateCommand}.
 */
export interface DeleteJobTemplateCommandOutput extends DeleteJobTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes a job template. Job template stores values of StartJobRun API request in a
 *          template and can be used to start a job run. Job template allows two use cases: avoid
 *          repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun
 *          API request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DeleteJobTemplateCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DeleteJobTemplateCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // DeleteJobTemplateRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteJobTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteJobTemplateResponse
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteJobTemplateCommandInput - {@link DeleteJobTemplateCommandInput}
 * @returns {@link DeleteJobTemplateCommandOutput}
 * @see {@link DeleteJobTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 *
 * @public
 */
export class DeleteJobTemplateCommand extends $Command
  .classBuilder<
    DeleteJobTemplateCommandInput,
    DeleteJobTemplateCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsChicagoWebService", "DeleteJobTemplate", {})
  .n("EMRContainersClient", "DeleteJobTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteJobTemplateCommand)
  .de(de_DeleteJobTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteJobTemplateRequest;
      output: DeleteJobTemplateResponse;
    };
    sdk: {
      input: DeleteJobTemplateCommandInput;
      output: DeleteJobTemplateCommandOutput;
    };
  };
}
