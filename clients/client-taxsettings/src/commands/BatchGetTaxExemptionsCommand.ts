// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetTaxExemptionsRequest, BatchGetTaxExemptionsResponse } from "../models/models_0";
import { BatchGetTaxExemptions } from "../schemas/schemas_1_Tax";
import { ServiceInputTypes, ServiceOutputTypes, TaxSettingsClientResolvedConfig } from "../TaxSettingsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetTaxExemptionsCommand}.
 */
export interface BatchGetTaxExemptionsCommandInput extends BatchGetTaxExemptionsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetTaxExemptionsCommand}.
 */
export interface BatchGetTaxExemptionsCommandOutput extends BatchGetTaxExemptionsResponse, __MetadataBearer {}

/**
 * <p>Get the active tax exemptions for a given list of accounts. The IAM action is <code>tax:GetExemptions</code>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TaxSettingsClient, BatchGetTaxExemptionsCommand } from "@aws-sdk/client-taxsettings"; // ES Modules import
 * // const { TaxSettingsClient, BatchGetTaxExemptionsCommand } = require("@aws-sdk/client-taxsettings"); // CommonJS import
 * // import type { TaxSettingsClientConfig } from "@aws-sdk/client-taxsettings";
 * const config = {}; // type is TaxSettingsClientConfig
 * const client = new TaxSettingsClient(config);
 * const input = { // BatchGetTaxExemptionsRequest
 *   accountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetTaxExemptionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetTaxExemptionsResponse
 * //   taxExemptionDetailsMap: { // TaxExemptionDetailsMap
 * //     "<keys>": { // TaxExemptionDetails
 * //       taxExemptions: [ // TaxExemptions
 * //         { // TaxExemption
 * //           authority: { // Authority
 * //             country: "STRING_VALUE", // required
 * //             state: "STRING_VALUE",
 * //           },
 * //           taxExemptionType: { // TaxExemptionType
 * //             displayName: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //             applicableJurisdictions: [ // Authorities
 * //               {
 * //                 country: "STRING_VALUE", // required
 * //                 state: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           effectiveDate: new Date("TIMESTAMP"),
 * //           expirationDate: new Date("TIMESTAMP"),
 * //           systemEffectiveDate: new Date("TIMESTAMP"),
 * //           status: "None" || "Valid" || "Expired" || "Pending",
 * //         },
 * //       ],
 * //       heritageObtainedDetails: true || false,
 * //       heritageObtainedParentEntity: "STRING_VALUE",
 * //       heritageObtainedReason: "STRING_VALUE",
 * //     },
 * //   },
 * //   failedAccounts: [ // AccountIds
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetTaxExemptionsCommandInput - {@link BatchGetTaxExemptionsCommandInput}
 * @returns {@link BatchGetTaxExemptionsCommandOutput}
 * @see {@link BatchGetTaxExemptionsCommandInput} for command's `input` shape.
 * @see {@link BatchGetTaxExemptionsCommandOutput} for command's `response` shape.
 * @see {@link TaxSettingsClientResolvedConfig | config} for TaxSettingsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception thrown when an unexpected error occurs when processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception thrown when the input doesn't have a resource associated to it.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception when the input doesn't pass validation for at least one of the input
 *       parameters. </p>
 *
 * @throws {@link TaxSettingsServiceException}
 * <p>Base exception class for all service exceptions from TaxSettings service.</p>
 *
 *
 * @public
 */
export class BatchGetTaxExemptionsCommand extends $Command
  .classBuilder<
    BatchGetTaxExemptionsCommandInput,
    BatchGetTaxExemptionsCommandOutput,
    TaxSettingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TaxSettingsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaxSettings", "BatchGetTaxExemptions", {})
  .n("TaxSettingsClient", "BatchGetTaxExemptionsCommand")
  .sc(BatchGetTaxExemptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetTaxExemptionsRequest;
      output: BatchGetTaxExemptionsResponse;
    };
    sdk: {
      input: BatchGetTaxExemptionsCommandInput;
      output: BatchGetTaxExemptionsCommandOutput;
    };
  };
}
