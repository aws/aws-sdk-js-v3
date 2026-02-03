// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvsClient";
import type { GetVersionsRequest, GetVersionsResponse } from "../models/models_0";
import { GetVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVersionsCommand}.
 */
export interface GetVersionsCommandInput extends GetVersionsRequest {}
/**
 * @public
 *
 * The output of {@link GetVersionsCommand}.
 */
export interface GetVersionsCommandOutput extends GetVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns information about VCF versions, ESX versions and EC2 instance types provided by Amazon EVS. For each VCF version, the response also includes the default ESX version and provided EC2 instance types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, GetVersionsCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, GetVersionsCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = {};
 * const command = new GetVersionsCommand(input);
 * const response = await client.send(command);
 * // { // GetVersionsResponse
 * //   vcfVersions: [ // VcfVersionList // required
 * //     { // VcfVersionInfo
 * //       vcfVersion: "VCF-5.2.1" || "VCF-5.2.2", // required
 * //       status: "STRING_VALUE", // required
 * //       defaultEsxVersion: "STRING_VALUE", // required
 * //       instanceTypes: [ // InstanceTypeList // required
 * //         "i4i.metal",
 * //       ],
 * //     },
 * //   ],
 * //   instanceTypeEsxVersions: [ // InstanceTypeEsxVersionsList // required
 * //     { // InstanceTypeEsxVersionsInfo
 * //       instanceType: "i4i.metal", // required
 * //       esxVersions: [ // EsxVersionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetVersionsCommandInput - {@link GetVersionsCommandInput}
 * @returns {@link GetVersionsCommandOutput}
 * @see {@link GetVersionsCommandInput} for command's `input` shape.
 * @see {@link GetVersionsCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The operation could not be performed because the service is throttling requests. This exception is thrown when the service endpoint receives too many concurrent requests.</p>
 *
 * @throws {@link EvsServiceException}
 * <p>Base exception class for all service exceptions from Evs service.</p>
 *
 *
 * @public
 */
export class GetVersionsCommand extends $Command
  .classBuilder<
    GetVersionsCommandInput,
    GetVersionsCommandOutput,
    EvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticVMwareService", "GetVersions", {})
  .n("EvsClient", "GetVersionsCommand")
  .sc(GetVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetVersionsResponse;
    };
    sdk: {
      input: GetVersionsCommandInput;
      output: GetVersionsCommandOutput;
    };
  };
}
