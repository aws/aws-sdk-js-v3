// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListModelsRequest, ListModelsResponse } from "../models/models_0";
import { ListModels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListModelsCommand}.
 */
export interface ListModelsCommandInput extends ListModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelsCommand}.
 */
export interface ListModelsCommandOutput extends ListModelsResponse, __MetadataBearer {}

/**
 * Generates a list of all models in the account, including model name and ARN, dataset, and status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListModelsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListModelsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListModelsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS",
 *   ModelNameBeginsWith: "STRING_VALUE",
 *   DatasetNameBeginsWith: "STRING_VALUE",
 * };
 * const command = new ListModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ModelSummaries: [ // ModelSummaries
 * //     { // ModelSummary
 * //       ModelName: "STRING_VALUE",
 * //       ModelArn: "STRING_VALUE",
 * //       DatasetName: "STRING_VALUE",
 * //       DatasetArn: "STRING_VALUE",
 * //       Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       ActiveModelVersion: Number("long"),
 * //       ActiveModelVersionArn: "STRING_VALUE",
 * //       LatestScheduledRetrainingStatus: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS" || "CANCELED",
 * //       LatestScheduledRetrainingModelVersion: Number("long"),
 * //       LatestScheduledRetrainingStartTime: new Date("TIMESTAMP"),
 * //       NextScheduledRetrainingStartDate: new Date("TIMESTAMP"),
 * //       RetrainingSchedulerStatus: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * //       ModelDiagnosticsOutputConfiguration: { // ModelDiagnosticsOutputConfiguration
 * //         S3OutputConfiguration: { // ModelDiagnosticsS3OutputConfiguration
 * //           Bucket: "STRING_VALUE", // required
 * //           Prefix: "STRING_VALUE",
 * //         },
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //       ModelQuality: "QUALITY_THRESHOLD_MET" || "CANNOT_DETERMINE_QUALITY" || "POOR_QUALITY_DETECTED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListModelsCommandInput - {@link ListModelsCommandInput}
 * @returns {@link ListModelsCommandOutput}
 * @see {@link ListModelsCommandInput} for command's `input` shape.
 * @see {@link ListModelsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request could not be completed because you do not have access to the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Processing of the request has failed because of an unknown error, exception or failure.
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
export class ListModelsCommand extends command<ListModelsCommandInput, ListModelsCommandOutput>(
  _ep0,
  _mw0,
  "ListModels",
  ListModels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelsRequest;
      output: ListModelsResponse;
    };
    sdk: {
      input: ListModelsCommandInput;
      output: ListModelsCommandOutput;
    };
  };
}
