// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateExplainabilityExportRequest, CreateExplainabilityExportResponse } from "../models/models_0";
import { CreateExplainabilityExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Exports an Explainability resource created by the CreateExplainability operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket.
 *
 * You must specify a DataDestination object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles.
 *
 * > **Note:** The `Status` of the export job must be `ACTIVE` before you can access the export in your Amazon S3 bucket. To get the status, use the DescribeExplainabilityExport operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateExplainabilityExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateExplainabilityExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
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
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of resources per account has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * There is already a resource with this name. Try again with a different name.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try again.
 *
 * @throws {@link ForecastServiceException}
 *
 * Base exception class for all service exceptions from Forecast service.
 *
 * @public
 */
export class CreateExplainabilityExportCommand extends command<CreateExplainabilityExportCommandInput, CreateExplainabilityExportCommandOutput>(
  _ep0,
  _mw0,
  "CreateExplainabilityExport",
  CreateExplainabilityExport$
) {
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
