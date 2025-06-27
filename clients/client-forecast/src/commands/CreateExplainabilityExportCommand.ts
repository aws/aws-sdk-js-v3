// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreateExplainabilityExportRequest,
  CreateExplainabilityExportRequestFilterSensitiveLog,
  CreateExplainabilityExportResponse,
} from "../models/models_0";
import { de_CreateExplainabilityExportCommand, se_CreateExplainabilityExportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateExplainabilityExportCommand}.
 */
export interface CreateExplainabilityExportCommandInput extends CreateExplainabilityExportRequest {}
/**
 * @public
 *
 * The output of {@link CreateExplainabilityExportCommand}.
 */
export interface CreateExplainabilityExportCommandOutput extends CreateExplainabilityExportResponse, __MetadataBearer {}

/**
 * <p>Exports an Explainability resource created by the <a>CreateExplainability</a> operation. Exported files are exported to an Amazon Simple Storage Service (Amazon
 *             S3) bucket.</p>
 *          <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3
 *             bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3
 *             bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p>
 *          <note>
 *             <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you
 *                 can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribeExplainabilityExport</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateExplainabilityExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateExplainabilityExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // CreateExplainabilityExportRequest
 *   ExplainabilityExportName: "STRING_VALUE", // required
 *   ExplainabilityArn: "STRING_VALUE", // required
 *   Destination: { // DataDestination
 *     S3Config: { // S3Config
 *       Path: "STRING_VALUE", // required
 *       RoleArn: "STRING_VALUE", // required
 *       KMSKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Format: "STRING_VALUE",
 * };
 * const command = new CreateExplainabilityExportCommand(input);
 * const response = await client.send(command);
 * // { // CreateExplainabilityExportResponse
 * //   ExplainabilityExportArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateExplainabilityExportCommandInput - {@link CreateExplainabilityExportCommandInput}
 * @returns {@link CreateExplainabilityExportCommandOutput}
 * @see {@link CreateExplainabilityExportCommandInput} for command's `input` shape.
 * @see {@link CreateExplainabilityExportCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of resources per account has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>There is already a resource with this name. Try again with a different name.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 *
 * @public
 */
export class CreateExplainabilityExportCommand extends $Command
  .classBuilder<
    CreateExplainabilityExportCommandInput,
    CreateExplainabilityExportCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonForecast", "CreateExplainabilityExport", {})
  .n("ForecastClient", "CreateExplainabilityExportCommand")
  .f(CreateExplainabilityExportRequestFilterSensitiveLog, void 0)
  .ser(se_CreateExplainabilityExportCommand)
  .de(de_CreateExplainabilityExportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExplainabilityExportRequest;
      output: CreateExplainabilityExportResponse;
    };
    sdk: {
      input: CreateExplainabilityExportCommandInput;
      output: CreateExplainabilityExportCommandOutput;
    };
  };
}
