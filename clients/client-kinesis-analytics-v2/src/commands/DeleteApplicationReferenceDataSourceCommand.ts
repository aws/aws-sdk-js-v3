// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import type {
  DeleteApplicationReferenceDataSourceRequest,
  DeleteApplicationReferenceDataSourceResponse,
} from "../models/models_0";
import { DeleteApplicationReferenceDataSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApplicationReferenceDataSourceCommand}.
 */
export interface DeleteApplicationReferenceDataSourceCommandInput extends DeleteApplicationReferenceDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationReferenceDataSourceCommand}.
 */
export interface DeleteApplicationReferenceDataSourceCommandOutput
  extends DeleteApplicationReferenceDataSourceResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration.</p>
 *          <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table
 *       that you created using the <a>AddApplicationReferenceDataSource</a> operation.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationReferenceDataSourceCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationReferenceDataSourceCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DeleteApplicationReferenceDataSourceRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   ReferenceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApplicationReferenceDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApplicationReferenceDataSourceResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationVersionId: Number("long"),
 * // };
 *
 * ```
 *
 * @param DeleteApplicationReferenceDataSourceCommandInput - {@link DeleteApplicationReferenceDataSourceCommandInput}
 * @returns {@link DeleteApplicationReferenceDataSourceCommandOutput}
 * @see {@link DeleteApplicationReferenceDataSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationReferenceDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request JSON is not valid for the operation.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 *
 * @public
 */
export class DeleteApplicationReferenceDataSourceCommand extends $Command
  .classBuilder<
    DeleteApplicationReferenceDataSourceCommandInput,
    DeleteApplicationReferenceDataSourceCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20180523", "DeleteApplicationReferenceDataSource", {})
  .n("KinesisAnalyticsV2Client", "DeleteApplicationReferenceDataSourceCommand")
  .sc(DeleteApplicationReferenceDataSource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationReferenceDataSourceRequest;
      output: DeleteApplicationReferenceDataSourceResponse;
    };
    sdk: {
      input: DeleteApplicationReferenceDataSourceCommandInput;
      output: DeleteApplicationReferenceDataSourceCommandOutput;
    };
  };
}
