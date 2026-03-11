// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetExportRequest, GetExportResponse } from "../models/models_0";
import { GetExport$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SimpleDBv2ClientResolvedConfig } from "../SimpleDBv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExportCommand}.
 */
export interface GetExportCommandInput extends GetExportRequest {}
/**
 * @public
 *
 * The output of {@link GetExportCommand}.
 */
export interface GetExportCommandOutput extends GetExportResponse, __MetadataBearer {}

/**
 * Returns information for an existing domain export.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimpleDBv2Client, GetExportCommand } from "@aws-sdk/client-simpledbv2"; // ES Modules import
 * // const { SimpleDBv2Client, GetExportCommand } = require("@aws-sdk/client-simpledbv2"); // CommonJS import
 * // import type { SimpleDBv2ClientConfig } from "@aws-sdk/client-simpledbv2";
 * const config = {}; // type is SimpleDBv2ClientConfig
 * const client = new SimpleDBv2Client(config);
 * const input = { // GetExportRequest
 *   exportArn: "STRING_VALUE", // required
 * };
 * const command = new GetExportCommand(input);
 * const response = await client.send(command);
 * // { // GetExportResponse
 * //   exportArn: "STRING_VALUE", // required
 * //   clientToken: "STRING_VALUE", // required
 * //   exportStatus: "PENDING" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //   domainName: "STRING_VALUE", // required
 * //   requestedAt: new Date("TIMESTAMP"), // required
 * //   s3Bucket: "STRING_VALUE", // required
 * //   s3KeyPrefix: "STRING_VALUE",
 * //   s3SseAlgorithm: "AES256" || "KMS",
 * //   s3SseKmsKeyId: "STRING_VALUE",
 * //   s3BucketOwner: "STRING_VALUE",
 * //   failureCode: "STRING_VALUE",
 * //   failureMessage: "STRING_VALUE",
 * //   exportManifest: "STRING_VALUE",
 * //   itemsCount: Number("long"),
 * //   exportDataCutoffTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetExportCommandInput - {@link GetExportCommandInput}
 * @returns {@link GetExportCommandOutput}
 * @see {@link GetExportCommandInput} for command's `input` shape.
 * @see {@link GetExportCommandOutput} for command's `response` shape.
 * @see {@link SimpleDBv2ClientResolvedConfig | config} for SimpleDBv2Client's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  The specified parameter value is not valid.
 *
 * @throws {@link NoSuchExportException} (client fault)
 *  Export with specified ARN does not exist.
 *
 * @throws {@link SimpleDBv2ServiceException}
 * <p>Base exception class for all service exceptions from SimpleDBv2 service.</p>
 *
 *
 * @example Get export details
 * ```javascript
 * //
 * const input = {
 *   exportArn: "arn:aws:sdb:us-east-1:123456789012:export/abc123"
 * };
 * const command = new GetExportCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "abc123-def456-ghi789",
 *   domainName: "my-domain",
 *   exportArn: "arn:aws:sdb:us-east-1:123456789012:export/abc123",
 *   exportDataCutoffTime: 1234567895,
 *   exportStatus: "SUCCEEDED",
 *   requestedAt: 1234567890,
 *   s3Bucket: "my-export-bucket"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetExportCommand extends $Command
  .classBuilder<
    GetExportCommandInput,
    GetExportCommandOutput,
    SimpleDBv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SimpleDBv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleDBv2", "GetExport", {})
  .n("SimpleDBv2Client", "GetExportCommand")
  .sc(GetExport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExportRequest;
      output: GetExportResponse;
    };
    sdk: {
      input: GetExportCommandInput;
      output: GetExportCommandOutput;
    };
  };
}
