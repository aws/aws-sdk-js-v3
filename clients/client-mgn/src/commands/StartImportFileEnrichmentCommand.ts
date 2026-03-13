// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type { StartImportFileEnrichmentRequest, StartImportFileEnrichmentResponse } from "../models/models_0";
import { StartImportFileEnrichment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartImportFileEnrichmentCommand}.
 */
export interface StartImportFileEnrichmentCommandInput extends StartImportFileEnrichmentRequest {}
/**
 * @public
 *
 * The output of {@link StartImportFileEnrichmentCommand}.
 */
export interface StartImportFileEnrichmentCommandOutput extends StartImportFileEnrichmentResponse, __MetadataBearer {}

/**
 * <p>Starts an import file enrichment job to process and enrich network migration import files with additional metadata and IP assignment strategies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, StartImportFileEnrichmentCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, StartImportFileEnrichmentCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // StartImportFileEnrichmentRequest
 *   clientToken: "STRING_VALUE",
 *   s3BucketSource: { // EnrichmentSourceS3Configuration
 *     s3Bucket: "STRING_VALUE", // required
 *     s3BucketOwner: "STRING_VALUE", // required
 *     s3Key: "STRING_VALUE", // required
 *   },
 *   s3BucketTarget: { // EnrichmentTargetS3Configuration
 *     s3Bucket: "STRING_VALUE", // required
 *     s3BucketOwner: "STRING_VALUE", // required
 *     s3Key: "STRING_VALUE", // required
 *   },
 *   ipAssignmentStrategy: "STRING_VALUE",
 * };
 * const command = new StartImportFileEnrichmentCommand(input);
 * const response = await client.send(command);
 * // { // StartImportFileEnrichmentResponse
 * //   jobID: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartImportFileEnrichmentCommandInput - {@link StartImportFileEnrichmentCommandInput}
 * @returns {@link StartImportFileEnrichmentCommandOutput}
 * @see {@link StartImportFileEnrichmentCommandInput} for command's `input` shape.
 * @see {@link StartImportFileEnrichmentCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Reached throttling quota exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample StartImportFileEnrichment call
 * ```javascript
 * //
 * const input = {
 *   ipAssignmentStrategy: "STATIC",
 *   s3BucketSource: {
 *     s3Bucket: "my-source-bucket",
 *     s3BucketOwner: "123456789012",
 *     s3Key: "imports/source-file.csv"
 *   },
 *   s3BucketTarget: {
 *     s3Bucket: "my-target-bucket",
 *     s3BucketOwner: "123456789012",
 *     s3Key: "enriched/output.csv"
 *   }
 * };
 * const command = new StartImportFileEnrichmentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobID: "01234567-abcd-abcd-efab-0123456789ab"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartImportFileEnrichmentCommand extends $Command
  .classBuilder<
    StartImportFileEnrichmentCommandInput,
    StartImportFileEnrichmentCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "StartImportFileEnrichment", {})
  .n("MgnClient", "StartImportFileEnrichmentCommand")
  .sc(StartImportFileEnrichment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartImportFileEnrichmentRequest;
      output: StartImportFileEnrichmentResponse;
    };
    sdk: {
      input: StartImportFileEnrichmentCommandInput;
      output: StartImportFileEnrichmentCommandOutput;
    };
  };
}
