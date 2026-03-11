// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartDomainExportRequest, StartDomainExportResponse } from "../models/models_0";
import { StartDomainExport$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SimpleDBv2ClientResolvedConfig } from "../SimpleDBv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDomainExportCommand}.
 */
export interface StartDomainExportCommandInput extends StartDomainExportRequest {}
/**
 * @public
 *
 * The output of {@link StartDomainExportCommand}.
 */
export interface StartDomainExportCommandOutput extends StartDomainExportResponse, __MetadataBearer {}

/**
 * Initiates the export of a SimpleDB domain to an S3 bucket.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimpleDBv2Client, StartDomainExportCommand } from "@aws-sdk/client-simpledbv2"; // ES Modules import
 * // const { SimpleDBv2Client, StartDomainExportCommand } = require("@aws-sdk/client-simpledbv2"); // CommonJS import
 * // import type { SimpleDBv2ClientConfig } from "@aws-sdk/client-simpledbv2";
 * const config = {}; // type is SimpleDBv2ClientConfig
 * const client = new SimpleDBv2Client(config);
 * const input = { // StartDomainExportRequest
 *   clientToken: "STRING_VALUE",
 *   domainName: "STRING_VALUE", // required
 *   s3Bucket: "STRING_VALUE", // required
 *   s3KeyPrefix: "STRING_VALUE",
 *   s3SseAlgorithm: "AES256" || "KMS",
 *   s3SseKmsKeyId: "STRING_VALUE",
 *   s3BucketOwner: "STRING_VALUE",
 * };
 * const command = new StartDomainExportCommand(input);
 * const response = await client.send(command);
 * // { // StartDomainExportResponse
 * //   clientToken: "STRING_VALUE", // required
 * //   exportArn: "STRING_VALUE", // required
 * //   requestedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartDomainExportCommandInput - {@link StartDomainExportCommandInput}
 * @returns {@link StartDomainExportCommandOutput}
 * @see {@link StartDomainExportCommandInput} for command's `input` shape.
 * @see {@link StartDomainExportCommandOutput} for command's `response` shape.
 * @see {@link SimpleDBv2ClientResolvedConfig | config} for SimpleDBv2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  Indicates a conflict with one or more parameters of the request.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  Parameters that must not be used together were used together in the request.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  The specified parameter value is not valid.
 *
 * @throws {@link NoSuchDomainException} (client fault)
 *  The specified domain does not exist.
 *
 * @throws {@link NumberExportsLimitExceeded} (client fault)
 *  Cannot start export as export quota limit was exceeded
 *
 * @throws {@link SimpleDBv2ServiceException}
 * <p>Base exception class for all service exceptions from SimpleDBv2 service.</p>
 *
 *
 * @example Start a domain export
 * ```javascript
 * //
 * const input = {
 *   domainName: "my-domain",
 *   s3Bucket: "my-export-bucket"
 * };
 * const command = new StartDomainExportCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "abc123-def456-ghi789",
 *   exportArn: "arn:aws:sdb:us-east-1:123456789012:export/abc123",
 *   requestedAt: 1234567890
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartDomainExportCommand extends $Command
  .classBuilder<
    StartDomainExportCommandInput,
    StartDomainExportCommandOutput,
    SimpleDBv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SimpleDBv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleDBv2", "StartDomainExport", {})
  .n("SimpleDBv2Client", "StartDomainExportCommand")
  .sc(StartDomainExport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDomainExportRequest;
      output: StartDomainExportResponse;
    };
    sdk: {
      input: StartDomainExportCommandInput;
      output: StartDomainExportCommandOutput;
    };
  };
}
