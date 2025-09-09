// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPredefinedAttributesRequest, ListPredefinedAttributesResponse } from "../models/models_2";
import { de_ListPredefinedAttributesCommand, se_ListPredefinedAttributesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPredefinedAttributesCommand}.
 */
export interface ListPredefinedAttributesCommandInput extends ListPredefinedAttributesRequest {}
/**
 * @public
 *
 * The output of {@link ListPredefinedAttributesCommand}.
 */
export interface ListPredefinedAttributesCommandOutput extends ListPredefinedAttributesResponse, __MetadataBearer {}

/**
 * <p>Lists predefined attributes for the specified Amazon Connect instance.  A <i>predefined
 *    attribute</i> is made up of a name and a value. You can use predefined attributes for:</p>
 *          <ul>
 *             <li>
 *                <p>Routing proficiency (for example, agent certification) that has
 *      predefined values (for example, a list of possible certifications). For more information, see
 *      <a href="https://docs.aws.amazon.com/connect/latest/adminguide/predefined-attributes.html">Create
 *       predefined attributes for routing contacts to agents</a>.</p>
 *             </li>
 *             <li>
 *                <p>Contact information that varies between transfers or conferences, such as the name of the business unit handling the contact. For more information, see
 *      <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-contact-segment-attributes.html">Use contact segment attributes</a>.</p>
 *             </li>
 *          </ul>
 *          <p>For the predefined attributes per instance quota, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#connect-quotas">Amazon Connect quotas</a>.</p>
 *          <p>
 *             <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect endpoints and
 *     quotas</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListPredefinedAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListPredefinedAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListPredefinedAttributesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPredefinedAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ListPredefinedAttributesResponse
 * //   NextToken: "STRING_VALUE",
 * //   PredefinedAttributeSummaryList: [ // PredefinedAttributeSummaryList
 * //     { // PredefinedAttributeSummary
 * //       Name: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPredefinedAttributesCommandInput - {@link ListPredefinedAttributesCommandInput}
 * @returns {@link ListPredefinedAttributesCommandOutput}
 * @see {@link ListPredefinedAttributesCommandInput} for command's `input` shape.
 * @see {@link ListPredefinedAttributesCommandOutput} for command's `response` shape.
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
export class ListPredefinedAttributesCommand extends $Command
  .classBuilder<
    ListPredefinedAttributesCommandInput,
    ListPredefinedAttributesCommandOutput,
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
  .s("AmazonConnectService", "ListPredefinedAttributes", {})
  .n("ConnectClient", "ListPredefinedAttributesCommand")
  .f(void 0, void 0)
  .ser(se_ListPredefinedAttributesCommand)
  .de(de_ListPredefinedAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPredefinedAttributesRequest;
      output: ListPredefinedAttributesResponse;
    };
    sdk: {
      input: ListPredefinedAttributesCommandInput;
      output: ListPredefinedAttributesCommandOutput;
    };
  };
}
