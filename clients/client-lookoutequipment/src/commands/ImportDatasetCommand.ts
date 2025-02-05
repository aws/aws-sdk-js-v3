// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ImportDatasetRequest, ImportDatasetResponse } from "../models/models_0";
import { de_ImportDatasetCommand, se_ImportDatasetCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Imports a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ImportDatasetCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ImportDatasetCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request could not be completed due to a conflict with the current state of the
 *          target resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> Resource limitations have been exceeded. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 * @public
 */
export class ImportDatasetCommand extends $Command
  .classBuilder<
    ImportDatasetCommandInput,
    ImportDatasetCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLookoutEquipmentFrontendService", "ImportDataset", {})
  .n("LookoutEquipmentClient", "ImportDatasetCommand")
  .f(void 0, void 0)
  .ser(se_ImportDatasetCommand)
  .de(de_ImportDatasetCommand)
  .build() {
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
