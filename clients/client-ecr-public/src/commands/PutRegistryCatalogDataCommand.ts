// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRegistryCatalogDataRequest, PutRegistryCatalogDataResponse } from "../models/models_0";
import { PutRegistryCatalogData } from "../schemas/schemas_6_RegistryCatalogData";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRegistryCatalogDataCommand}.
 */
export interface PutRegistryCatalogDataCommandInput extends PutRegistryCatalogDataRequest {}
/**
 * @public
 *
 * The output of {@link PutRegistryCatalogDataCommand}.
 */
export interface PutRegistryCatalogDataCommandOutput extends PutRegistryCatalogDataResponse, __MetadataBearer {}

/**
 * <p>Create or update the catalog data for a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, PutRegistryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, PutRegistryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
 * const input = { // PutRegistryCatalogDataRequest
 *   displayName: "STRING_VALUE",
 * };
 * const command = new PutRegistryCatalogDataCommand(input);
 * const response = await client.send(command);
 * // { // PutRegistryCatalogDataResponse
 * //   registryCatalogData: { // RegistryCatalogData
 * //     displayName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutRegistryCatalogDataCommandInput - {@link PutRegistryCatalogDataCommandInput}
 * @returns {@link PutRegistryCatalogDataCommandOutput}
 * @see {@link PutRegistryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link PutRegistryCatalogDataCommandOutput} for command's `response` shape.
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
export class PutRegistryCatalogDataCommand extends $Command
  .classBuilder<
    PutRegistryCatalogDataCommandInput,
    PutRegistryCatalogDataCommandOutput,
    ECRPUBLICClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRPUBLICClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SpencerFrontendService", "PutRegistryCatalogData", {})
  .n("ECRPUBLICClient", "PutRegistryCatalogDataCommand")
  .sc(PutRegistryCatalogData)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRegistryCatalogDataRequest;
      output: PutRegistryCatalogDataResponse;
    };
    sdk: {
      input: PutRegistryCatalogDataCommandInput;
      output: PutRegistryCatalogDataCommandOutput;
    };
  };
}
