// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListModelVersionsRequest, ListModelVersionsResponse } from "../models/models_0";
import { ListModelVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListModelVersionsCommand}.
 */
export interface ListModelVersionsCommandInput extends ListModelVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelVersionsCommand}.
 */
export interface ListModelVersionsCommandOutput extends ListModelVersionsResponse, __MetadataBearer {}

/**
 * Generates a list of all model versions for a given model, including the model version, model version ARN, and status. To list a subset of versions, use the `MaxModelVersion` and `MinModelVersion` fields.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListModelVersionsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListModelVersionsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListModelVersionsRequest
 *   ModelName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS" || "CANCELED",
 *   SourceType: "TRAINING" || "RETRAINING" || "IMPORT",
 *   CreatedAtEndTime: new Date("TIMESTAMP"),
 *   CreatedAtStartTime: new Date("TIMESTAMP"),
 *   MaxModelVersion: Number("long"),
 *   MinModelVersion: Number("long"),
 * };
 * const command = new ListModelVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelVersionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ModelVersionSummaries: [ // ModelVersionSummaries
 * //     { // ModelVersionSummary
 * //       ModelName: "STRING_VALUE",
 * //       ModelArn: "STRING_VALUE",
 * //       ModelVersion: Number("long"),
 * //       ModelVersionArn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS" || "CANCELED",
 * //       SourceType: "TRAINING" || "RETRAINING" || "IMPORT",
 * //       ModelQuality: "QUALITY_THRESHOLD_MET" || "CANNOT_DETERMINE_QUALITY" || "POOR_QUALITY_DETECTED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListModelVersionsCommandInput - {@link ListModelVersionsCommandInput}
 * @returns {@link ListModelVersionsCommandOutput}
 * @see {@link ListModelVersionsCommandInput} for command's `input` shape.
 * @see {@link ListModelVersionsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource requested could not be found. Verify the resource ID and retry your request.
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
export class ListModelVersionsCommand extends command<ListModelVersionsCommandInput, ListModelVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListModelVersions",
  ListModelVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelVersionsRequest;
      output: ListModelVersionsResponse;
    };
    sdk: {
      input: ListModelVersionsCommandInput;
      output: ListModelVersionsCommandOutput;
    };
  };
}
