// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetOrderRequest, GetOrderResponse, GetOrderResponseFilterSensitiveLog } from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_GetOrderCommand, se_GetOrderCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOrderCommand}.
 */
export interface GetOrderCommandInput extends GetOrderRequest {}
/**
 * @public
 *
 * The output of {@link GetOrderCommand}.
 */
export interface GetOrderCommandOutput extends GetOrderResponse, __MetadataBearer {}

/**
 * <p>Gets the specified order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, GetOrderCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, GetOrderCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // GetOrderRequest
 *   orderArn: "STRING_VALUE", // required
 * };
 * const command = new GetOrderCommand(input);
 * const response = await client.send(command);
 * // { // GetOrderResponse
 * //   order: { // Order
 * //     orderArn: "STRING_VALUE",
 * //     shippingAddress: { // Address
 * //       city: "STRING_VALUE", // required
 * //       company: "STRING_VALUE",
 * //       country: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       phoneNumber: "STRING_VALUE",
 * //       postalCode: "STRING_VALUE", // required
 * //       stateOrProvince: "STRING_VALUE", // required
 * //       street1: "STRING_VALUE", // required
 * //       street2: "STRING_VALUE",
 * //       street3: "STRING_VALUE",
 * //       emailAddress: "STRING_VALUE",
 * //     },
 * //     networkArn: "STRING_VALUE",
 * //     networkSiteArn: "STRING_VALUE",
 * //     trackingInformation: [ // TrackingInformationList
 * //       { // TrackingInformation
 * //         trackingNumber: "STRING_VALUE",
 * //       },
 * //     ],
 * //     acknowledgmentStatus: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     orderedResources: [ // OrderedResourceDefinitions
 * //       { // OrderedResourceDefinition
 * //         type: "STRING_VALUE", // required
 * //         count: Number("int"), // required
 * //         commitmentConfiguration: { // CommitmentConfiguration
 * //           commitmentLength: "STRING_VALUE", // required
 * //           automaticRenewal: true || false, // required
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOrderCommandInput - {@link GetOrderCommandInput}
 * @returns {@link GetOrderCommandOutput}
 * @see {@link GetOrderCommandInput} for command's `input` shape.
 * @see {@link GetOrderCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Information about an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation.</p>
 *
 * @throws {@link PrivateNetworksServiceException}
 * <p>Base exception class for all service exceptions from PrivateNetworks service.</p>
 *
 *
 * @public
 */
export class GetOrderCommand extends $Command
  .classBuilder<
    GetOrderCommandInput,
    GetOrderCommandOutput,
    PrivateNetworksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PrivateNetworksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("E5GNetworkControllerLambda", "GetOrder", {})
  .n("PrivateNetworksClient", "GetOrderCommand")
  .f(void 0, GetOrderResponseFilterSensitiveLog)
  .ser(se_GetOrderCommand)
  .de(de_GetOrderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOrderRequest;
      output: GetOrderResponse;
    };
    sdk: {
      input: GetOrderCommandInput;
      output: GetOrderCommandOutput;
    };
  };
}
