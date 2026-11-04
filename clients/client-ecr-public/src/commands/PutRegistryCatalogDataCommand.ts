// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRegistryCatalogDataRequest, PutRegistryCatalogDataResponse } from "../models/models_0";
import { PutRegistryCatalogData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Create or update the catalog data for a public registry.
 *
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
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *
 * The action isn't supported in this Region.
 *
 * @throws {@link ECRPUBLICServiceException}
 *
 * Base exception class for all service exceptions from ECRPUBLIC service.
 *
 * @public
 */
export class PutRegistryCatalogDataCommand extends command<PutRegistryCatalogDataCommandInput, PutRegistryCatalogDataCommandOutput>(
  _ep0,
  _mw0,
  "PutRegistryCatalogData",
  PutRegistryCatalogData$
) {
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
