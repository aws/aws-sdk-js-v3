// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopUploadJobRequest, StopUploadJobResponse } from "../models/models_1";
import { de_StopUploadJobCommand, se_StopUploadJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopUploadJobCommand}.
 */
export interface StopUploadJobCommandInput extends StopUploadJobRequest {}
/**
 * @public
 *
 * The output of {@link StopUploadJobCommand}.
 */
export interface StopUploadJobCommandOutput extends StopUploadJobResponse, __MetadataBearer {}

/**
 * <p>This API stops the processing of an upload job. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, StopUploadJobCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, StopUploadJobCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // StopUploadJobRequest
 *   DomainName: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopUploadJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopUploadJobCommandInput - {@link StopUploadJobCommandInput}
 * @returns {@link StopUploadJobCommandOutput}
 * @see {@link StopUploadJobCommandInput} for command's `input` shape.
 * @see {@link StopUploadJobCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class StopUploadJobCommand extends $Command
  .classBuilder<
    StopUploadJobCommandInput,
    StopUploadJobCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "StopUploadJob", {})
  .n("CustomerProfilesClient", "StopUploadJobCommand")
  .f(void 0, void 0)
  .ser(se_StopUploadJobCommand)
  .de(de_StopUploadJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopUploadJobRequest;
      output: {};
    };
    sdk: {
      input: StopUploadJobCommandInput;
      output: StopUploadJobCommandOutput;
    };
  };
}
