// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSolNetworkInstanceInput, UpdateSolNetworkInstanceOutput } from "../models/models_0";
import { UpdateSolNetworkInstance } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSolNetworkInstanceCommand}.
 */
export interface UpdateSolNetworkInstanceCommandInput extends UpdateSolNetworkInstanceInput {}
/**
 * @public
 *
 * The output of {@link UpdateSolNetworkInstanceCommand}.
 */
export interface UpdateSolNetworkInstanceCommandOutput extends UpdateSolNetworkInstanceOutput, __MetadataBearer {}

/**
 * <p>Update a network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 *          <p>Choose the <i>updateType</i> parameter to target the necessary update of the network instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, UpdateSolNetworkInstanceCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, UpdateSolNetworkInstanceCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // UpdateSolNetworkInstanceInput
 *   nsInstanceId: "STRING_VALUE", // required
 *   updateType: "MODIFY_VNF_INFORMATION" || "UPDATE_NS", // required
 *   modifyVnfInfoData: { // UpdateSolNetworkModify
 *     vnfInstanceId: "STRING_VALUE", // required
 *     vnfConfigurableProperties: "DOCUMENT_VALUE", // required
 *   },
 *   updateNs: { // UpdateSolNetworkServiceData
 *     nsdInfoId: "STRING_VALUE", // required
 *     additionalParamsForNs: "DOCUMENT_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSolNetworkInstanceOutput
 * //   nsLcmOpOccId: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSolNetworkInstanceCommandInput - {@link UpdateSolNetworkInstanceCommandInput}
 * @returns {@link UpdateSolNetworkInstanceCommandOutput}
 * @see {@link UpdateSolNetworkInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateSolNetworkInstanceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quotas have been exceeded.</p>
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
 * @example Update a Sol Network Instance
 * ```javascript
 * //
 * const input = {
 *   modifyVnfInfoData: {
 *     vnfConfigurableProperties: {
 *       pcf.pods: "10",
 *       pcf.port: "8080"
 *     },
 *     vnfInstanceId: "fi-0d5b823eb5c2a9241"
 *   },
 *   nsInstanceId: "ni-0d5b823eb5c2a9241",
 *   tags: {
 *     Name: "Resource"
 *   },
 *   updateType: "MODIFY_VNF_INFORMATION"
 * };
 * const command = new UpdateSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nsLcmOpOccId: "no-0d5b823eb5c2a9241",
 *   tags: {
 *     Name: "Resource"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Update a Sol Network Instance
 * ```javascript
 * //
 * const input = {
 *   nsInstanceId: "ni-0d5b823eb5c2a9241",
 *   tags: {
 *     Name: "Resource"
 *   },
 *   updateNs: {
 *     additionalParamsForNs: {
 *       availability_zone: "us-west-2a",
 *       cidr_block: "10.0.0.0/16"
 *     },
 *     nsdInfoId: "np-0d5b823eb5c2a9241"
 *   },
 *   updateType: "UPDATE_NS"
 * };
 * const command = new UpdateSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nsLcmOpOccId: "no-0d5b823eb5c2a9241",
 *   tags: {
 *     Name: "Resource"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateSolNetworkInstanceCommand extends $Command
  .classBuilder<
    UpdateSolNetworkInstanceCommandInput,
    UpdateSolNetworkInstanceCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "UpdateSolNetworkInstance", {})
  .n("TnbClient", "UpdateSolNetworkInstanceCommand")
  .sc(UpdateSolNetworkInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSolNetworkInstanceInput;
      output: UpdateSolNetworkInstanceOutput;
    };
    sdk: {
      input: UpdateSolNetworkInstanceCommandInput;
      output: UpdateSolNetworkInstanceCommandOutput;
    };
  };
}
