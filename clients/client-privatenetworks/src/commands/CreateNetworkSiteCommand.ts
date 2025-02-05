// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateNetworkSiteRequest,
  CreateNetworkSiteRequestFilterSensitiveLog,
  CreateNetworkSiteResponse,
  CreateNetworkSiteResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_CreateNetworkSiteCommand, se_CreateNetworkSiteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkSiteCommand}.
 */
export interface CreateNetworkSiteCommandInput extends CreateNetworkSiteRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkSiteCommand}.
 */
export interface CreateNetworkSiteCommandOutput extends CreateNetworkSiteResponse, __MetadataBearer {}

/**
 * <p>Creates a network site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, CreateNetworkSiteCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, CreateNetworkSiteCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PrivateNetworksClient(config);
 * const input = { // CreateNetworkSiteRequest
 *   networkSiteName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   networkArn: "STRING_VALUE", // required
 *   pendingPlan: { // SitePlan
 *     resourceDefinitions: [ // NetworkResourceDefinitions
 *       { // NetworkResourceDefinition
 *         type: "STRING_VALUE", // required
 *         options: [ // Options
 *           { // NameValuePair
 *             name: "STRING_VALUE", // required
 *             value: "STRING_VALUE",
 *           },
 *         ],
 *         count: Number("int"), // required
 *       },
 *     ],
 *     options: [
 *       {
 *         name: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   clientToken: "STRING_VALUE",
 *   availabilityZone: "STRING_VALUE",
 *   availabilityZoneId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateNetworkSiteCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkSiteResponse
 * //   networkSite: { // NetworkSite
 * //     networkSiteArn: "STRING_VALUE", // required
 * //     networkSiteName: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //     networkArn: "STRING_VALUE", // required
 * //     pendingPlan: { // SitePlan
 * //       resourceDefinitions: [ // NetworkResourceDefinitions
 * //         { // NetworkResourceDefinition
 * //           type: "STRING_VALUE", // required
 * //           options: [ // Options
 * //             { // NameValuePair
 * //               name: "STRING_VALUE", // required
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           count: Number("int"), // required
 * //         },
 * //       ],
 * //       options: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     currentPlan: {
 * //       resourceDefinitions: [
 * //         {
 * //           type: "STRING_VALUE", // required
 * //           options: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           count: Number("int"), // required
 * //         },
 * //       ],
 * //       options: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     availabilityZone: "STRING_VALUE",
 * //     availabilityZoneId: "STRING_VALUE",
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNetworkSiteCommandInput - {@link CreateNetworkSiteCommandInput}
 * @returns {@link CreateNetworkSiteCommandOutput}
 * @see {@link CreateNetworkSiteCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkSiteCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateNetworkSiteCommand extends $Command
  .classBuilder<
    CreateNetworkSiteCommandInput,
    CreateNetworkSiteCommandOutput,
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
  .s("E5GNetworkControllerLambda", "CreateNetworkSite", {})
  .n("PrivateNetworksClient", "CreateNetworkSiteCommand")
  .f(CreateNetworkSiteRequestFilterSensitiveLog, CreateNetworkSiteResponseFilterSensitiveLog)
  .ser(se_CreateNetworkSiteCommand)
  .de(de_CreateNetworkSiteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkSiteRequest;
      output: CreateNetworkSiteResponse;
    };
    sdk: {
      input: CreateNetworkSiteCommandInput;
      output: CreateNetworkSiteCommandOutput;
    };
  };
}
