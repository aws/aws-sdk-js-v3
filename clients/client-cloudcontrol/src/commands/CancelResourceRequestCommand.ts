// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelResourceRequestInput, CancelResourceRequestOutput } from "../models/models_0";
import { CancelResourceRequest } from "../schemas/schemas_1_Resource";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelResourceRequestCommand}.
 */
export interface CancelResourceRequestCommandInput extends CancelResourceRequestInput {}
/**
 * @public
 *
 * The output of {@link CancelResourceRequestCommand}.
 */
export interface CancelResourceRequestCommandOutput extends CancelResourceRequestOutput, __MetadataBearer {}

/**
 * <p>Cancels the specified resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-cancel">Canceling resource operation requests</a> in the
 *         <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
 *          <p>Only resource operations requests with a status of <code>PENDING</code> or
 *         <code>IN_PROGRESS</code> can be canceled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, CancelResourceRequestCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, CancelResourceRequestCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
 * // import type { CloudControlClientConfig } from "@aws-sdk/client-cloudcontrol";
 * const config = {}; // type is CloudControlClientConfig
 * const client = new CloudControlClient(config);
 * const input = { // CancelResourceRequestInput
 *   RequestToken: "STRING_VALUE", // required
 * };
 * const command = new CancelResourceRequestCommand(input);
 * const response = await client.send(command);
 * // { // CancelResourceRequestOutput
 * //   ProgressEvent: { // ProgressEvent
 * //     TypeName: "STRING_VALUE",
 * //     Identifier: "STRING_VALUE",
 * //     RequestToken: "STRING_VALUE",
 * //     HooksRequestToken: "STRING_VALUE",
 * //     Operation: "STRING_VALUE",
 * //     OperationStatus: "STRING_VALUE",
 * //     EventTime: new Date("TIMESTAMP"),
 * //     ResourceModel: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     ErrorCode: "STRING_VALUE",
 * //     RetryAfter: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CancelResourceRequestCommandInput - {@link CancelResourceRequestCommandInput}
 * @returns {@link CancelResourceRequestCommandOutput}
 * @see {@link CancelResourceRequestCommandInput} for command's `input` shape.
 * @see {@link CancelResourceRequestCommandOutput} for command's `response` shape.
 * @see {@link CloudControlClientResolvedConfig | config} for CloudControlClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>The resource is currently being modified by another operation.</p>
 *
 * @throws {@link RequestTokenNotFoundException} (client fault)
 *  <p>A resource operation with the specified request token can't be found.</p>
 *
 * @throws {@link CloudControlServiceException}
 * <p>Base exception class for all service exceptions from CloudControl service.</p>
 *
 *
 * @public
 */
export class CancelResourceRequestCommand extends $Command
  .classBuilder<
    CancelResourceRequestCommandInput,
    CancelResourceRequestCommandOutput,
    CloudControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudApiService", "CancelResourceRequest", {})
  .n("CloudControlClient", "CancelResourceRequestCommand")
  .sc(CancelResourceRequest)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelResourceRequestInput;
      output: CancelResourceRequestOutput;
    };
    sdk: {
      input: CancelResourceRequestCommandInput;
      output: CancelResourceRequestCommandOutput;
    };
  };
}
