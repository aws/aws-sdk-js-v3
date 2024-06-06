// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSolNetworkPackageDescriptorInput, GetSolNetworkPackageDescriptorOutput } from "../models/models_0";
import {
  de_GetSolNetworkPackageDescriptorCommand,
  se_GetSolNetworkPackageDescriptorCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSolNetworkPackageDescriptorCommand}.
 */
export interface GetSolNetworkPackageDescriptorCommandInput extends GetSolNetworkPackageDescriptorInput {}
/**
 * @public
 */
export type GetSolNetworkPackageDescriptorCommandOutputType = Omit<GetSolNetworkPackageDescriptorOutput, "nsd"> & {
  nsd?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetSolNetworkPackageDescriptorCommand}.
 */
export interface GetSolNetworkPackageDescriptorCommandOutput
  extends GetSolNetworkPackageDescriptorCommandOutputType,
    __MetadataBearer {}

/**
 * <p>Gets the content of the network service descriptor.</p>
 *          <p>A network service descriptor is a .yaml file in a network package that uses the TOSCA standard to describe the network functions you want to deploy and the Amazon Web Services infrastructure you want to deploy the network functions on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolNetworkPackageDescriptorCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolNetworkPackageDescriptorCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // GetSolNetworkPackageDescriptorInput
 *   nsdInfoId: "STRING_VALUE", // required
 * };
 * const command = new GetSolNetworkPackageDescriptorCommand(input);
 * const response = await client.send(command);
 * // { // GetSolNetworkPackageDescriptorOutput
 * //   contentType: "text/plain",
 * //   nsd: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param GetSolNetworkPackageDescriptorCommandInput - {@link GetSolNetworkPackageDescriptorCommandInput}
 * @returns {@link GetSolNetworkPackageDescriptorCommandOutput}
 * @see {@link GetSolNetworkPackageDescriptorCommandInput} for command's `input` shape.
 * @see {@link GetSolNetworkPackageDescriptorCommandOutput} for command's `response` shape.
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
 *  <p>Unable to process the request because the client provided input failed to satisfy request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 * @public
 */
export class GetSolNetworkPackageDescriptorCommand extends $Command
  .classBuilder<
    GetSolNetworkPackageDescriptorCommandInput,
    GetSolNetworkPackageDescriptorCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TNB", "GetSolNetworkPackageDescriptor", {})
  .n("TnbClient", "GetSolNetworkPackageDescriptorCommand")
  .f(void 0, void 0)
  .ser(se_GetSolNetworkPackageDescriptorCommand)
  .de(de_GetSolNetworkPackageDescriptorCommand)
  .build() {}
