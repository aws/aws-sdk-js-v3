// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { StartExportRequest, StartExportResponse } from "../models/models_0";
import { de_StartExportCommand, se_StartExportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartExportCommand}.
 */
export interface StartExportCommandInput extends StartExportRequest {}
/**
 * @public
 *
 * The output of {@link StartExportCommand}.
 */
export interface StartExportCommandOutput extends StartExportResponse, __MetadataBearer {}

/**
 * <p>Start export.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, StartExportCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, StartExportCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // StartExportRequest
 *   s3Bucket: "STRING_VALUE", // required
 *   s3Key: "STRING_VALUE", // required
 *   s3BucketOwner: "STRING_VALUE",
 * };
 * const command = new StartExportCommand(input);
 * const response = await client.send(command);
 * // { // StartExportResponse
 * //   exportTask: { // ExportTask
 * //     exportID: "STRING_VALUE",
 * //     s3Bucket: "STRING_VALUE",
 * //     s3Key: "STRING_VALUE",
 * //     s3BucketOwner: "STRING_VALUE",
 * //     creationDateTime: "STRING_VALUE",
 * //     endDateTime: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     progressPercentage: Number("float"),
 * //     summary: { // ExportTaskSummary
 * //       serversCount: Number("long"),
 * //       applicationsCount: Number("long"),
 * //       wavesCount: Number("long"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartExportCommandInput - {@link StartExportCommandInput}
 * @returns {@link StartExportCommandOutput}
 * @see {@link StartExportCommandInput} for command's `input` shape.
 * @see {@link StartExportCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 * @public
 */
export class StartExportCommand extends $Command
  .classBuilder<
    StartExportCommandInput,
    StartExportCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "StartExport", {})
  .n("MgnClient", "StartExportCommand")
  .f(void 0, void 0)
  .ser(se_StartExportCommand)
  .de(de_StartExportCommand)
  .build() {}
