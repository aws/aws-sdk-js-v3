// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { CreateRouterNetworkInterfaceRequest, CreateRouterNetworkInterfaceResponse } from "../models/models_0";
import { CreateRouterNetworkInterface$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRouterNetworkInterfaceCommand}.
 */
export interface CreateRouterNetworkInterfaceCommandInput extends CreateRouterNetworkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateRouterNetworkInterfaceCommand}.
 */
export interface CreateRouterNetworkInterfaceCommandOutput
  extends CreateRouterNetworkInterfaceResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new router network interface in AWS Elemental MediaConnect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, CreateRouterNetworkInterfaceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, CreateRouterNetworkInterfaceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // CreateRouterNetworkInterfaceRequest
 *   Name: "STRING_VALUE", // required
 *   Configuration: { // RouterNetworkInterfaceConfiguration Union: only one key present
 *     Public: { // PublicRouterNetworkInterfaceConfiguration
 *       AllowRules: [ // NetworkInterfaceRuleList // required
 *         { // PublicRouterNetworkInterfaceRule
 *           Cidr: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     Vpc: { // VpcRouterNetworkInterfaceConfiguration
 *       SecurityGroupIds: [ // SecurityGroupIdList // required
 *         "STRING_VALUE",
 *       ],
 *       SubnetId: "STRING_VALUE", // required
 *     },
 *   },
 *   RegionName: "STRING_VALUE",
 *   Tags: { // __mapOfString
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateRouterNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateRouterNetworkInterfaceResponse
 * //   RouterNetworkInterface: { // RouterNetworkInterface
 * //     Name: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     State: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "ERROR" || "RECOVERING", // required
 * //     NetworkInterfaceType: "PUBLIC" || "VPC", // required
 * //     Configuration: { // RouterNetworkInterfaceConfiguration Union: only one key present
 * //       Public: { // PublicRouterNetworkInterfaceConfiguration
 * //         AllowRules: [ // NetworkInterfaceRuleList // required
 * //           { // PublicRouterNetworkInterfaceRule
 * //             Cidr: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       Vpc: { // VpcRouterNetworkInterfaceConfiguration
 * //         SecurityGroupIds: [ // SecurityGroupIdList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         SubnetId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     AssociatedOutputCount: Number("int"), // required
 * //     AssociatedInputCount: Number("int"), // required
 * //     RegionName: "STRING_VALUE", // required
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     UpdatedAt: new Date("TIMESTAMP"), // required
 * //     Tags: { // __mapOfString // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRouterNetworkInterfaceCommandInput - {@link CreateRouterNetworkInterfaceCommandInput}
 * @returns {@link CreateRouterNetworkInterfaceCommandOutput}
 * @see {@link CreateRouterNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link CreateRouterNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link RouterNetworkInterfaceServiceQuotaExceededException} (client fault)
 *  <p>The request to create a new router network interface would exceed the service quotas (limits) set for the account. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class CreateRouterNetworkInterfaceCommand extends $Command
  .classBuilder<
    CreateRouterNetworkInterfaceCommandInput,
    CreateRouterNetworkInterfaceCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "CreateRouterNetworkInterface", {})
  .n("MediaConnectClient", "CreateRouterNetworkInterfaceCommand")
  .sc(CreateRouterNetworkInterface$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRouterNetworkInterfaceRequest;
      output: CreateRouterNetworkInterfaceResponse;
    };
    sdk: {
      input: CreateRouterNetworkInterfaceCommandInput;
      output: CreateRouterNetworkInterfaceCommandOutput;
    };
  };
}
