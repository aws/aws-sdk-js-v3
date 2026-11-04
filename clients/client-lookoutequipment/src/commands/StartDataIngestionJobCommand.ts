// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDataIngestionJobRequest, StartDataIngestionJobResponse } from "../models/models_0";
import { StartDataIngestionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDataIngestionJobCommand}.
 */
export interface StartDataIngestionJobCommandInput extends StartDataIngestionJobRequest {}
/**
 * @public
 *
 * The output of {@link StartDataIngestionJobCommand}.
 */
export interface StartDataIngestionJobCommandOutput extends StartDataIngestionJobResponse, __MetadataBearer {}

/**
 * Starts a data ingestion job. Amazon Lookout for Equipment returns the job status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, StartDataIngestionJobCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, StartDataIngestionJobCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // StartDataIngestionJobRequest
 *   DatasetName: "STRING_VALUE", // required
 *   IngestionInputConfiguration: { // IngestionInputConfiguration
 *     S3InputConfiguration: { // IngestionS3InputConfiguration
 *       Bucket: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE",
 *       KeyPattern: "STRING_VALUE",
 *     },
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new StartDataIngestionJobCommand(input);
 * const response = await client.send(command);
 * // { // StartDataIngestionJobResponse
 * //   JobId: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS",
 * // };
 *
 * ```
 *
 * @param StartDataIngestionJobCommandInput - {@link StartDataIngestionJobCommandInput}
 * @returns {@link StartDataIngestionJobCommandOutput}
 * @see {@link StartDataIngestionJobCommandInput} for command's `input` shape.
 * @see {@link StartDataIngestionJobCommandOutput} for command's `response` shape.
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
export class StartDataIngestionJobCommand extends command<StartDataIngestionJobCommandInput, StartDataIngestionJobCommandOutput>(
  _ep0,
  _mw0,
  "StartDataIngestionJob",
  StartDataIngestionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDataIngestionJobRequest;
      output: StartDataIngestionJobResponse;
    };
    sdk: {
      input: StartDataIngestionJobCommandInput;
      output: StartDataIngestionJobCommandOutput;
    };
  };
}
