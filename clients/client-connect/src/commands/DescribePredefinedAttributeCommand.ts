// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePredefinedAttributeRequest, DescribePredefinedAttributeResponse } from "../models/models_1";
import {
  de_DescribePredefinedAttributeCommand,
  se_DescribePredefinedAttributeCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePredefinedAttributeCommand}.
 */
export interface DescribePredefinedAttributeCommandInput extends DescribePredefinedAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribePredefinedAttributeCommand}.
 */
export interface DescribePredefinedAttributeCommandOutput
  extends DescribePredefinedAttributeResponse,
    __MetadataBearer {}

/**
 * <p>Describes a predefined attribute for the specified Amazon Connect instance. A <i>predefined
 *     attribute</i> is made up of a name and a value. You can use predefined attributes
 *    for:</p>
 *          <ul>
 *             <li>
 *                <p>Routing proficiency (for example, agent certification) that has predefined values (for
 *      example, a list of possible certifications). For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/predefined-attributes.html">Create
 *       predefined attributes for routing contacts to agents</a>.</p>
 *             </li>
 *             <li>
 *                <p>Contact information that varies between transfers or conferences, such as the name of the
 *      business unit handling the contact. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-contact-segment-attributes.html">Use contact segment
 *       attributes</a>.</p>
 *             </li>
 *          </ul>
 *          <p>For the predefined attributes per instance quota, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#connect-quotas">Amazon Connect quotas</a>.</p>
 *          <p>
 *             <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect endpoints and
 *    quotas</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribePredefinedAttributeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribePredefinedAttributeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribePredefinedAttributeRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribePredefinedAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribePredefinedAttributeResponse
 * //   PredefinedAttribute: { // PredefinedAttribute
 * //     Name: "STRING_VALUE",
 * //     Values: { // PredefinedAttributeValues Union: only one key present
 * //       StringList: [ // PredefinedAttributeStringValuesList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Purposes: [ // PredefinedAttributePurposeNameList
 * //       "STRING_VALUE",
 * //     ],
 * //     AttributeConfiguration: { // PredefinedAttributeConfiguration
 * //       EnableValueValidationOnAssociation: true || false,
 * //       IsReadOnly: true || false,
 * //     },
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePredefinedAttributeCommandInput - {@link DescribePredefinedAttributeCommandInput}
 * @returns {@link DescribePredefinedAttributeCommandOutput}
 * @see {@link DescribePredefinedAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribePredefinedAttributeCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DescribePredefinedAttributeCommand extends $Command
  .classBuilder<
    DescribePredefinedAttributeCommandInput,
    DescribePredefinedAttributeCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DescribePredefinedAttribute", {})
  .n("ConnectClient", "DescribePredefinedAttributeCommand")
  .f(void 0, void 0)
  .ser(se_DescribePredefinedAttributeCommand)
  .de(de_DescribePredefinedAttributeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePredefinedAttributeRequest;
      output: DescribePredefinedAttributeResponse;
    };
    sdk: {
      input: DescribePredefinedAttributeCommandInput;
      output: DescribePredefinedAttributeCommandOutput;
    };
  };
}
