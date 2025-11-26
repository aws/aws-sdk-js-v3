// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyBackupAttributesRequest, ModifyBackupAttributesResponse } from "../models/models_0";
import { ModifyBackupAttributes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyBackupAttributesCommand}.
 */
export interface ModifyBackupAttributesCommandInput extends ModifyBackupAttributesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyBackupAttributesCommand}.
 */
export interface ModifyBackupAttributesCommandOutput extends ModifyBackupAttributesResponse, __MetadataBearer {}

/**
 * <p>Modifies attributes for CloudHSM backup.</p>
 *          <p>
 *             <b>Cross-account use:</b> No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, ModifyBackupAttributesCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, ModifyBackupAttributesCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * // import type { CloudHSMV2ClientConfig } from "@aws-sdk/client-cloudhsm-v2";
 * const config = {}; // type is CloudHSMV2ClientConfig
 * const client = new CloudHSMV2Client(config);
 * const input = { // ModifyBackupAttributesRequest
 *   BackupId: "STRING_VALUE", // required
 *   NeverExpires: true || false, // required
 * };
 * const command = new ModifyBackupAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyBackupAttributesResponse
 * //   Backup: { // Backup
 * //     BackupId: "STRING_VALUE", // required
 * //     BackupArn: "STRING_VALUE",
 * //     BackupState: "CREATE_IN_PROGRESS" || "READY" || "DELETED" || "PENDING_DELETION",
 * //     ClusterId: "STRING_VALUE",
 * //     CreateTimestamp: new Date("TIMESTAMP"),
 * //     CopyTimestamp: new Date("TIMESTAMP"),
 * //     NeverExpires: true || false,
 * //     SourceRegion: "STRING_VALUE",
 * //     SourceBackup: "STRING_VALUE",
 * //     SourceCluster: "STRING_VALUE",
 * //     DeleteTimestamp: new Date("TIMESTAMP"),
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     HsmType: "STRING_VALUE",
 * //     Mode: "FIPS" || "NON_FIPS",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyBackupAttributesCommandInput - {@link ModifyBackupAttributesCommandInput}
 * @returns {@link ModifyBackupAttributesCommandOutput}
 * @see {@link ModifyBackupAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyBackupAttributesCommandOutput} for command's `response` shape.
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
 * @throws {@link CloudHSMV2ServiceException}
 * <p>Base exception class for all service exceptions from CloudHSMV2 service.</p>
 *
 *
 * @public
 */
export class ModifyBackupAttributesCommand extends $Command
  .classBuilder<
    ModifyBackupAttributesCommandInput,
    ModifyBackupAttributesCommandOutput,
    CloudHSMV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BaldrApiService", "ModifyBackupAttributes", {})
  .n("CloudHSMV2Client", "ModifyBackupAttributesCommand")
  .sc(ModifyBackupAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyBackupAttributesRequest;
      output: ModifyBackupAttributesResponse;
    };
    sdk: {
      input: ModifyBackupAttributesCommandInput;
      output: ModifyBackupAttributesCommandOutput;
    };
  };
}
