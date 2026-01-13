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
import type { AddApplicationOutputRequest, AddApplicationOutputResponse } from "../models/models_0";
import { AddApplicationOutput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddApplicationOutputCommand}.
 */
export interface AddApplicationOutputCommandInput extends AddApplicationOutputRequest {}
/**
 * @public
 *
 * The output of {@link AddApplicationOutputCommand}.
 */
export interface AddApplicationOutputCommandOutput extends AddApplicationOutputResponse, __MetadataBearer {}

/**
 * <p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p>
 *          <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within
 *       your application to an external destination (such as an Kinesis data stream, a Kinesis Data
 *       Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to
 *       your application using this operation. You can configure one or more outputs for your
 *       application. Each output configuration maps an in-application stream and an external
 *       destination.</p>
 *          <p> You can use one of the output configurations to deliver data from your
 *       in-application error stream to an external destination so that you can analyze the
 *       errors.  </p>
 *          <p> Any configuration update, including adding a streaming source using this
 *       operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application
 *       version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationOutputCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationOutputCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // AddApplicationOutputRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   Output: { // Output
 *     Name: "STRING_VALUE", // required
 *     KinesisStreamsOutput: { // KinesisStreamsOutput
 *       ResourceARN: "STRING_VALUE", // required
 *     },
 *     KinesisFirehoseOutput: { // KinesisFirehoseOutput
 *       ResourceARN: "STRING_VALUE", // required
 *     },
 *     LambdaOutput: { // LambdaOutput
 *       ResourceARN: "STRING_VALUE", // required
 *     },
 *     DestinationSchema: { // DestinationSchema
 *       RecordFormatType: "JSON" || "CSV", // required
 *     },
 *   },
 * };
 * const command = new AddApplicationOutputCommand(input);
 * const response = await client.send(command);
 * // { // AddApplicationOutputResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationVersionId: Number("long"),
 * //   OutputDescriptions: [ // OutputDescriptions
 * //     { // OutputDescription
 * //       OutputId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       KinesisStreamsOutputDescription: { // KinesisStreamsOutputDescription
 * //         ResourceARN: "STRING_VALUE", // required
 * //         RoleARN: "STRING_VALUE",
 * //       },
 * //       KinesisFirehoseOutputDescription: { // KinesisFirehoseOutputDescription
 * //         ResourceARN: "STRING_VALUE", // required
 * //         RoleARN: "STRING_VALUE",
 * //       },
 * //       LambdaOutputDescription: { // LambdaOutputDescription
 * //         ResourceARN: "STRING_VALUE", // required
 * //         RoleARN: "STRING_VALUE",
 * //       },
 * //       DestinationSchema: { // DestinationSchema
 * //         RecordFormatType: "JSON" || "CSV", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddApplicationOutputCommandInput - {@link AddApplicationOutputCommandInput}
 * @returns {@link AddApplicationOutputCommandOutput}
 * @see {@link AddApplicationOutputCommandInput} for command's `input` shape.
 * @see {@link AddApplicationOutputCommandOutput} for command's `response` shape.
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
export class AddApplicationOutputCommand extends $Command
  .classBuilder<
    AddApplicationOutputCommandInput,
    AddApplicationOutputCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20180523", "AddApplicationOutput", {})
  .n("KinesisAnalyticsV2Client", "AddApplicationOutputCommand")
  .sc(AddApplicationOutput$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddApplicationOutputRequest;
      output: AddApplicationOutputResponse;
    };
    sdk: {
      input: AddApplicationOutputCommandInput;
      output: AddApplicationOutputCommandOutput;
    };
  };
}
