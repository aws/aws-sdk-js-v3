// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateMergedGraphqlApiRequest, DisassociateMergedGraphqlApiResponse } from "../models/models_0";
import {
  de_DisassociateMergedGraphqlApiCommand,
  se_DisassociateMergedGraphqlApiCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateMergedGraphqlApiCommand}.
 */
export interface DisassociateMergedGraphqlApiCommandInput extends DisassociateMergedGraphqlApiRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMergedGraphqlApiCommand}.
 */
export interface DisassociateMergedGraphqlApiCommandOutput
  extends DisassociateMergedGraphqlApiResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an association between a Merged API and source API using the source API's
 *          identifier and the association ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DisassociateMergedGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DisassociateMergedGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // DisassociateMergedGraphqlApiRequest
 *   sourceApiIdentifier: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateMergedGraphqlApiCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateMergedGraphqlApiResponse
 * //   sourceApiAssociationStatus: "MERGE_SCHEDULED" || "MERGE_FAILED" || "MERGE_SUCCESS" || "MERGE_IN_PROGRESS" || "AUTO_MERGE_SCHEDULE_FAILED" || "DELETION_SCHEDULED" || "DELETION_IN_PROGRESS" || "DELETION_FAILED",
 * // };
 *
 * ```
 *
 * @param DisassociateMergedGraphqlApiCommandInput - {@link DisassociateMergedGraphqlApiCommandInput}
 * @returns {@link DisassociateMergedGraphqlApiCommandOutput}
 * @see {@link DisassociateMergedGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link DisassociateMergedGraphqlApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 * @public
 */
export class DisassociateMergedGraphqlApiCommand extends $Command
  .classBuilder<
    DisassociateMergedGraphqlApiCommandInput,
    DisassociateMergedGraphqlApiCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "DisassociateMergedGraphqlApi", {})
  .n("AppSyncClient", "DisassociateMergedGraphqlApiCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateMergedGraphqlApiCommand)
  .de(de_DisassociateMergedGraphqlApiCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateMergedGraphqlApiRequest;
      output: DisassociateMergedGraphqlApiResponse;
    };
    sdk: {
      input: DisassociateMergedGraphqlApiCommandInput;
      output: DisassociateMergedGraphqlApiCommandOutput;
    };
  };
}
