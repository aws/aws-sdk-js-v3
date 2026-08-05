// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetDataCatalogExportConfigurationInput,
  GetDataCatalogExportConfigurationOutput,
} from "../models/models_2";
import { GetDataCatalogExportConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDataCatalogExportConfigurationCommand}.
 */
export interface GetDataCatalogExportConfigurationCommandInput extends GetDataCatalogExportConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetDataCatalogExportConfigurationCommand}.
 */
export interface GetDataCatalogExportConfigurationCommandOutput extends GetDataCatalogExportConfigurationOutput, __MetadataBearer {}

/**
 * <p>Retrieves the current export configuration for the Glue Data Catalog. The export configuration controls whether catalog metadata is exported to S3 Tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataCatalogExportConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataCatalogExportConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = {};
 * const command = new GetDataCatalogExportConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetDataCatalogExportConfigurationOutput
 * //   ExportSetting: "ENABLED" || "DISABLED",
 * //   Status: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED" || "FAILED",
 * //   EncryptionConfiguration: { // ExportEncryptionConfiguration
 * //     SseAlgorithm: "STRING_VALUE",
 * //     KmsKeyArn: "STRING_VALUE",
 * //   },
 * //   S3TableBucketArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetDataCatalogExportConfigurationCommandInput - {@link GetDataCatalogExportConfigurationCommandInput}
 * @returns {@link GetDataCatalogExportConfigurationCommandOutput}
 * @see {@link GetDataCatalogExportConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetDataCatalogExportConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetDataCatalogExportConfigurationCommand extends command<GetDataCatalogExportConfigurationCommandInput, GetDataCatalogExportConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetDataCatalogExportConfiguration",
  GetDataCatalogExportConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDataCatalogExportConfigurationOutput;
    };
    sdk: {
      input: GetDataCatalogExportConfigurationCommandInput;
      output: GetDataCatalogExportConfigurationCommandOutput;
    };
  };
}
