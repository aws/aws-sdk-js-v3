// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAvailableZonesRequest, ListAvailableZonesResponse } from "../models/models_0";
import { ListAvailableZones } from "../schemas/schemas_5_";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAvailableZonesCommand}.
 */
export interface ListAvailableZonesCommandInput extends ListAvailableZonesRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailableZonesCommand}.
 */
export interface ListAvailableZonesCommandOutput extends ListAvailableZonesResponse, __MetadataBearer {}

/**
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Lists the Availability Zones that have available AWS CloudHSM capacity.</p>
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, ListAvailableZonesCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, ListAvailableZonesCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = {};
 * const command = new ListAvailableZonesCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableZonesResponse
 * //   AZList: [ // AZList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAvailableZonesCommandInput - {@link ListAvailableZonesCommandInput}
 * @returns {@link ListAvailableZonesCommandOutput}
 * @see {@link ListAvailableZonesCommandInput} for command's `input` shape.
 * @see {@link ListAvailableZonesCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for CloudHSMClient's `config` shape.
 *
 * @throws {@link CloudHsmInternalException} (server fault)
 *  <p>Indicates that an internal error occurred.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that one or more of the request parameters are not valid.</p>
 *
 * @throws {@link CloudHSMServiceException}
 * <p>Base exception class for all service exceptions from CloudHSM service.</p>
 *
 *
 * @public
 */
export class ListAvailableZonesCommand extends $Command
  .classBuilder<
    ListAvailableZonesCommandInput,
    ListAvailableZonesCommandOutput,
    CloudHSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudHsmFrontendService", "ListAvailableZones", {})
  .n("CloudHSMClient", "ListAvailableZonesCommand")
  .sc(ListAvailableZones)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListAvailableZonesResponse;
    };
    sdk: {
      input: ListAvailableZonesCommandInput;
      output: ListAvailableZonesCommandOutput;
    };
  };
}
