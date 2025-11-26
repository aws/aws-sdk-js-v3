// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import type { DeleteStateTemplateRequest, DeleteStateTemplateResponse } from "../models/models_0";
import { DeleteStateTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStateTemplateCommand}.
 */
export interface DeleteStateTemplateCommandInput extends DeleteStateTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStateTemplateCommand}.
 */
export interface DeleteStateTemplateCommandOutput extends DeleteStateTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes a state template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DeleteStateTemplateCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DeleteStateTemplateCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // DeleteStateTemplateRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteStateTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteStateTemplateResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteStateTemplateCommandInput - {@link DeleteStateTemplateCommandInput}
 * @returns {@link DeleteStateTemplateCommandOutput}
 * @see {@link DeleteStateTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteStateTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class DeleteStateTemplateCommand extends $Command
  .classBuilder<
    DeleteStateTemplateCommandInput,
    DeleteStateTemplateCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "DeleteStateTemplate", {})
  .n("IoTFleetWiseClient", "DeleteStateTemplateCommand")
  .sc(DeleteStateTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStateTemplateRequest;
      output: DeleteStateTemplateResponse;
    };
    sdk: {
      input: DeleteStateTemplateCommandInput;
      output: DeleteStateTemplateCommandOutput;
    };
  };
}
