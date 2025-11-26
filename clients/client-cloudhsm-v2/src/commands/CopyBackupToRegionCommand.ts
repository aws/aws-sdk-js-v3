// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CopyBackupToRegionRequest, CopyBackupToRegionResponse } from "../models/models_0";
import { CopyBackupToRegion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyBackupToRegionCommand}.
 */
export interface CopyBackupToRegionCommandInput extends CopyBackupToRegionRequest {}
/**
 * @public
 *
 * The output of {@link CopyBackupToRegionCommand}.
 */
export interface CopyBackupToRegionCommandOutput extends CopyBackupToRegionResponse, __MetadataBearer {}

/**
 * <p>Copy an CloudHSM cluster backup to a different region.</p>
 *          <p>
 *             <b>Cross-account use:</b> No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, CopyBackupToRegionCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, CopyBackupToRegionCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * // import type { CloudHSMV2ClientConfig } from "@aws-sdk/client-cloudhsm-v2";
 * const config = {}; // type is CloudHSMV2ClientConfig
 * const client = new CloudHSMV2Client(config);
 * const input = { // CopyBackupToRegionRequest
 *   DestinationRegion: "STRING_VALUE", // required
 *   BackupId: "STRING_VALUE", // required
 *   TagList: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CopyBackupToRegionCommand(input);
 * const response = await client.send(command);
 * // { // CopyBackupToRegionResponse
 * //   DestinationBackup: { // DestinationBackup
 * //     CreateTimestamp: new Date("TIMESTAMP"),
 * //     SourceRegion: "STRING_VALUE",
 * //     SourceBackup: "STRING_VALUE",
 * //     SourceCluster: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyBackupToRegionCommandInput - {@link CopyBackupToRegionCommandInput}
 * @returns {@link CopyBackupToRegionCommandOutput}
 * @see {@link CopyBackupToRegionCommandInput} for command's `input` shape.
 * @see {@link CopyBackupToRegionCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for CloudHSMV2Client's `config` shape.
 *
 * @throws {@link CloudHsmAccessDeniedException} (client fault)
 *  <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 *
 * @throws {@link CloudHsmInternalFailureException} (server fault)
 *  <p>The request was rejected because of an CloudHSM internal failure. The request can
 *       be retried.</p>
 *
 * @throws {@link CloudHsmInvalidRequestException} (client fault)
 *  <p>The request was rejected because it is not a valid request.</p>
 *
 * @throws {@link CloudHsmResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it refers to a resource that cannot be
 *       found.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>The request was rejected because an error occurred.</p>
 *
 * @throws {@link CloudHsmTagException} (client fault)
 *  <p>The request was rejected because of a tagging failure. Verify the tag conditions in all applicable policies, and then retry the request.</p>
 *
 * @throws {@link CloudHSMV2ServiceException}
 * <p>Base exception class for all service exceptions from CloudHSMV2 service.</p>
 *
 *
 * @public
 */
export class CopyBackupToRegionCommand extends $Command
  .classBuilder<
    CopyBackupToRegionCommandInput,
    CopyBackupToRegionCommandOutput,
    CloudHSMV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BaldrApiService", "CopyBackupToRegion", {})
  .n("CloudHSMV2Client", "CopyBackupToRegionCommand")
  .sc(CopyBackupToRegion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyBackupToRegionRequest;
      output: CopyBackupToRegionResponse;
    };
    sdk: {
      input: CopyBackupToRegionCommandInput;
      output: CopyBackupToRegionCommandOutput;
    };
  };
}
