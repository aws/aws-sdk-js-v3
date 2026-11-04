// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportDatasetRequest, ImportDatasetResponse } from "../models/models_0";
import { ImportDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ImportDatasetCommand}.
 */
export interface ImportDatasetCommandInput extends ImportDatasetRequest {}
/**
 * @public
 *
 * The output of {@link ImportDatasetCommand}.
 */
export interface ImportDatasetCommandOutput extends ImportDatasetResponse, __MetadataBearer {}

/**
 * Imports a dataset.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ImportDatasetCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ImportDatasetCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ImportDatasetRequest
 *   SourceDatasetArn: "STRING_VALUE", // required
 *   DatasetName: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE", // required
 *   ServerSideKmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ImportDatasetCommand(input);
 * const response = await client.send(command);
 * // { // ImportDatasetResponse
 * //   DatasetName: "STRING_VALUE",
 * //   DatasetArn: "STRING_VALUE",
 * //   Status: "CREATED" || "INGESTION_IN_PROGRESS" || "ACTIVE" || "IMPORT_IN_PROGRESS",
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportDatasetCommandInput - {@link ImportDatasetCommandInput}
 * @returns {@link ImportDatasetCommandOutput}
 * @see {@link ImportDatasetCommandInput} for command's `input` shape.
 * @see {@link ImportDatasetCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request could not be completed because you do not have access to the resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Processing of the request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource requested could not be found. Verify the resource ID and retry your request.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Resource limitations have been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services service that's being utilized.
 *
 * @throws {@link LookoutEquipmentServiceException}
 *
 * Base exception class for all service exceptions from LookoutEquipment service.
 *
 * @public
 */
export class ImportDatasetCommand extends command<ImportDatasetCommandInput, ImportDatasetCommandOutput>(
  _ep0,
  _mw0,
  "ImportDataset",
  ImportDataset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportDatasetRequest;
      output: ImportDatasetResponse;
    };
    sdk: {
      input: ImportDatasetCommandInput;
      output: ImportDatasetCommandOutput;
    };
  };
}
