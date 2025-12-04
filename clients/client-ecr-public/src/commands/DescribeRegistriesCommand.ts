// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeRegistriesRequest, DescribeRegistriesResponse } from "../models/models_0";
import { DescribeRegistries } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegistriesCommand}.
 */
export interface DescribeRegistriesCommandInput extends DescribeRegistriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegistriesCommand}.
 */
export interface DescribeRegistriesCommandOutput extends DescribeRegistriesResponse, __MetadataBearer {}

/**
 * <p>Returns details for a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, DescribeRegistriesCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, DescribeRegistriesCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
 * const input = { // DescribeRegistriesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeRegistriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegistriesResponse
 * //   registries: [ // RegistryList // required
 * //     { // Registry
 * //       registryId: "STRING_VALUE", // required
 * //       registryArn: "STRING_VALUE", // required
 * //       registryUri: "STRING_VALUE", // required
 * //       verified: true || false, // required
 * //       aliases: [ // RegistryAliasList // required
 * //         { // RegistryAlias
 * //           name: "STRING_VALUE", // required
 * //           status: "ACTIVE" || "PENDING" || "REJECTED", // required
 * //           primaryRegistryAlias: true || false, // required
 * //           defaultRegistryAlias: true || false, // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRegistriesCommandInput - {@link DescribeRegistriesCommandInput}
 * @returns {@link DescribeRegistriesCommandOutput}
 * @see {@link DescribeRegistriesCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistriesCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *  <p>The action isn't supported in this Region.</p>
 *
 * @throws {@link ECRPUBLICServiceException}
 * <p>Base exception class for all service exceptions from ECRPUBLIC service.</p>
 *
 *
 * @public
 */
export class DescribeRegistriesCommand extends $Command
  .classBuilder<
    DescribeRegistriesCommandInput,
    DescribeRegistriesCommandOutput,
    ECRPUBLICClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRPUBLICClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SpencerFrontendService", "DescribeRegistries", {})
  .n("ECRPUBLICClient", "DescribeRegistriesCommand")
  .sc(DescribeRegistries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRegistriesRequest;
      output: DescribeRegistriesResponse;
    };
    sdk: {
      input: DescribeRegistriesCommandInput;
      output: DescribeRegistriesCommandOutput;
    };
  };
}
