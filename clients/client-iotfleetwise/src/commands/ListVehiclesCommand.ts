// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { ListVehiclesRequest, ListVehiclesResponse } from "../models/models_0";
import { de_ListVehiclesCommand, se_ListVehiclesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVehiclesCommand}.
 */
export interface ListVehiclesCommandInput extends ListVehiclesRequest {}
/**
 * @public
 *
 * The output of {@link ListVehiclesCommand}.
 */
export interface ListVehiclesCommandOutput extends ListVehiclesResponse, __MetadataBearer {}

/**
 * <p> Retrieves a list of summaries of created vehicles. </p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListVehiclesCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListVehiclesCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListVehiclesRequest
 *   modelManifestArn: "STRING_VALUE",
 *   attributeNames: [ // attributeNamesList
 *     "STRING_VALUE",
 *   ],
 *   attributeValues: [ // attributeValuesList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListVehiclesCommand(input);
 * const response = await client.send(command);
 * // { // ListVehiclesResponse
 * //   vehicleSummaries: [ // vehicleSummaries
 * //     { // VehicleSummary
 * //       vehicleName: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       modelManifestArn: "STRING_VALUE", // required
 * //       decoderManifestArn: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastModificationTime: new Date("TIMESTAMP"), // required
 * //       attributes: { // attributesMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVehiclesCommandInput - {@link ListVehiclesCommandInput}
 * @returns {@link ListVehiclesCommandOutput}
 * @see {@link ListVehiclesCommandInput} for command's `input` shape.
 * @see {@link ListVehiclesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListVehiclesCommand extends $Command
  .classBuilder<
    ListVehiclesCommandInput,
    ListVehiclesCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "ListVehicles", {})
  .n("IoTFleetWiseClient", "ListVehiclesCommand")
  .f(void 0, void 0)
  .ser(se_ListVehiclesCommand)
  .de(de_ListVehiclesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVehiclesRequest;
      output: ListVehiclesResponse;
    };
    sdk: {
      input: ListVehiclesCommandInput;
      output: ListVehiclesCommandOutput;
    };
  };
}
