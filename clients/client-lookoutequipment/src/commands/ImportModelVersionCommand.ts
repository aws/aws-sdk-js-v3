// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LookoutEquipmentClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LookoutEquipmentClient";
import type { ImportModelVersionRequest, ImportModelVersionResponse } from "../models/models_0";
import { ImportModelVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportModelVersionCommand}.
 */
export interface ImportModelVersionCommandInput extends ImportModelVersionRequest {}
/**
 * @public
 *
 * The output of {@link ImportModelVersionCommand}.
 */
export interface ImportModelVersionCommandOutput extends ImportModelVersionResponse, __MetadataBearer {}

/**
 * <p>Imports a model that has been trained successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ImportModelVersionCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ImportModelVersionCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ImportModelVersionRequest
 *   SourceModelVersionArn: "STRING_VALUE", // required
 *   ModelName: "STRING_VALUE",
 *   DatasetName: "STRING_VALUE", // required
 *   LabelsInputConfiguration: { // LabelsInputConfiguration
 *     S3InputConfiguration: { // LabelsS3InputConfiguration
 *       Bucket: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE",
 *     },
 *     LabelGroupName: "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE",
 *   ServerSideKmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   InferenceDataImportStrategy: "NO_IMPORT" || "ADD_WHEN_EMPTY" || "OVERWRITE",
 * };
 * const command = new ImportModelVersionCommand(input);
 * const response = await client.send(command);
 * // { // ImportModelVersionResponse
 * //   ModelName: "STRING_VALUE",
 * //   ModelArn: "STRING_VALUE",
 * //   ModelVersionArn: "STRING_VALUE",
 * //   ModelVersion: Number("long"),
 * //   Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS" || "CANCELED",
 * // };
 *
 * ```
 *
 * @param ImportModelVersionCommandInput - {@link ImportModelVersionCommandInput}
 * @returns {@link ImportModelVersionCommandOutput}
 * @see {@link ImportModelVersionCommandInput} for command's `input` shape.
 * @see {@link ImportModelVersionCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ImportModelVersionCommand extends $Command
  .classBuilder<
    ImportModelVersionCommandInput,
    ImportModelVersionCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "ImportModelVersion", {})
  .n("LookoutEquipmentClient", "ImportModelVersionCommand")
  .sc(ImportModelVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportModelVersionRequest;
      output: ImportModelVersionResponse;
    };
    sdk: {
      input: ImportModelVersionCommandInput;
      output: ImportModelVersionCommandOutput;
    };
  };
}
