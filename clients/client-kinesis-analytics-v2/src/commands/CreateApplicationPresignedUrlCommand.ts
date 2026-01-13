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
import type { CreateApplicationPresignedUrlRequest, CreateApplicationPresignedUrlResponse } from "../models/models_0";
import { CreateApplicationPresignedUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApplicationPresignedUrlCommand}.
 */
export interface CreateApplicationPresignedUrlCommandInput extends CreateApplicationPresignedUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationPresignedUrlCommand}.
 */
export interface CreateApplicationPresignedUrlCommandOutput extends CreateApplicationPresignedUrlResponse, __MetadataBearer {}

/**
 * <p>Creates and returns a URL that you can use to connect to
 *             an application's extension.</p>
 *          <p>The IAM role or user used to call this API defines the permissions to access the
 *       extension. After the presigned URL is created, no additional permission is required to access
 *       this URL. IAM authorization policies for this API are also enforced for every HTTP request
 *       that attempts to connect to the extension. </p>
 *          <p>You    control the amount of time that the URL will be valid using the <code>SessionExpirationDurationInSeconds</code>
 *         parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.</p>
 *          <note>
 *             <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes
 *             to be valid.
 *             If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, CreateApplicationPresignedUrlCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, CreateApplicationPresignedUrlCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // CreateApplicationPresignedUrlRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   UrlType: "FLINK_DASHBOARD_URL" || "ZEPPELIN_UI_URL", // required
 *   SessionExpirationDurationInSeconds: Number("long"),
 * };
 * const command = new CreateApplicationPresignedUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationPresignedUrlResponse
 * //   AuthorizedUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateApplicationPresignedUrlCommandInput - {@link CreateApplicationPresignedUrlCommandInput}
 * @returns {@link CreateApplicationPresignedUrlCommandOutput}
 * @see {@link CreateApplicationPresignedUrlCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationPresignedUrlCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
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
export class CreateApplicationPresignedUrlCommand extends $Command
  .classBuilder<
    CreateApplicationPresignedUrlCommandInput,
    CreateApplicationPresignedUrlCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20180523", "CreateApplicationPresignedUrl", {})
  .n("KinesisAnalyticsV2Client", "CreateApplicationPresignedUrlCommand")
  .sc(CreateApplicationPresignedUrl$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationPresignedUrlRequest;
      output: CreateApplicationPresignedUrlResponse;
    };
    sdk: {
      input: CreateApplicationPresignedUrlCommandInput;
      output: CreateApplicationPresignedUrlCommandOutput;
    };
  };
}
