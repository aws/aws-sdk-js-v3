// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSolNetworkInstanceInput, GetSolNetworkInstanceOutput } from "../models/models_0";
import { GetSolNetworkInstance } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSolNetworkInstanceCommand}.
 */
export interface GetSolNetworkInstanceCommandInput extends GetSolNetworkInstanceInput {}
/**
 * @public
 *
 * The output of {@link GetSolNetworkInstanceCommand}.
 */
export interface GetSolNetworkInstanceCommandOutput extends GetSolNetworkInstanceOutput, __MetadataBearer {}

/**
 * <p>Gets the details of the network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolNetworkInstanceCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolNetworkInstanceCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // GetSolNetworkInstanceInput
 *   nsInstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetSolNetworkInstanceOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   nsInstanceName: "STRING_VALUE", // required
 * //   nsInstanceDescription: "STRING_VALUE", // required
 * //   nsdId: "STRING_VALUE", // required
 * //   nsdInfoId: "STRING_VALUE", // required
 * //   nsState: "INSTANTIATED" || "NOT_INSTANTIATED" || "UPDATED" || "IMPAIRED" || "UPDATE_FAILED" || "STOPPED" || "DELETED" || "INSTANTIATE_IN_PROGRESS" || "INTENT_TO_UPDATE_IN_PROGRESS" || "UPDATE_IN_PROGRESS" || "TERMINATE_IN_PROGRESS",
 * //   lcmOpInfo: { // LcmOperationInfo
 * //     nsLcmOpOccId: "STRING_VALUE", // required
 * //   },
 * //   metadata: { // GetSolNetworkInstanceMetadata
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModified: new Date("TIMESTAMP"), // required
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSolNetworkInstanceCommandInput - {@link GetSolNetworkInstanceCommandInput}
 * @returns {@link GetSolNetworkInstanceCommandOutput}
 * @see {@link GetSolNetworkInstanceCommandInput} for command's `input` shape.
 * @see {@link GetSolNetworkInstanceCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy
 *          request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 *
 * @example Get a Sol Network Instance details
 * ```javascript
 * //
 * const input = {
 *   nsInstanceId: "ni-07aa863e53460a2a6"
 * };
 * const command = new GetSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:tnb:us-west-2:123456789000:network-instance/ni-07aa863e53460a2a6",
 *   id: "ni-07aa863e53460a2a6",
 *   lcmOpInfo: {
 *     nsLcmOpOccId: "no-0d5b823eb5c2a9241"
 *   },
 *   metadata: {
 *     createdAt: "2022-06-10T19:48:33Z",
 *     lastModified: "2022-06-10T19:48:33Z"
 *   },
 *   nsInstanceDescription: "Network service for CITY",
 *   nsInstanceName: "CITY Instance",
 *   nsState: "INSTANTIATED",
 *   nsdId: "6625a858-2157-4d74-9197-a6ff67d51f3e",
 *   nsdInfoId: "np-07aa863e53460a2a6"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSolNetworkInstanceCommand extends $Command
  .classBuilder<
    GetSolNetworkInstanceCommandInput,
    GetSolNetworkInstanceCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "GetSolNetworkInstance", {})
  .n("TnbClient", "GetSolNetworkInstanceCommand")
  .sc(GetSolNetworkInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSolNetworkInstanceInput;
      output: GetSolNetworkInstanceOutput;
    };
    sdk: {
      input: GetSolNetworkInstanceCommandInput;
      output: GetSolNetworkInstanceCommandOutput;
    };
  };
}
