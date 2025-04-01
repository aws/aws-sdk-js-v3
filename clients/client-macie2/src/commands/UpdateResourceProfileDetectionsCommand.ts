// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { UpdateResourceProfileDetectionsRequest, UpdateResourceProfileDetectionsResponse } from "../models/models_1";
import {
  de_UpdateResourceProfileDetectionsCommand,
  se_UpdateResourceProfileDetectionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResourceProfileDetectionsCommand}.
 */
export interface UpdateResourceProfileDetectionsCommandInput extends UpdateResourceProfileDetectionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceProfileDetectionsCommand}.
 */
export interface UpdateResourceProfileDetectionsCommandOutput
  extends UpdateResourceProfileDetectionsResponse,
    __MetadataBearer {}

/**
 * <p>Updates the sensitivity scoring settings for an S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateResourceProfileDetectionsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateResourceProfileDetectionsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // UpdateResourceProfileDetectionsRequest
 *   resourceArn: "STRING_VALUE", // required
 *   suppressDataIdentifiers: [ // __listOfSuppressDataIdentifier
 *     { // SuppressDataIdentifier
 *       id: "STRING_VALUE",
 *       type: "CUSTOM" || "MANAGED",
 *     },
 *   ],
 * };
 * const command = new UpdateResourceProfileDetectionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateResourceProfileDetectionsCommandInput - {@link UpdateResourceProfileDetectionsCommandInput}
 * @returns {@link UpdateResourceProfileDetectionsCommandOutput}
 * @see {@link UpdateResourceProfileDetectionsCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceProfileDetectionsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class UpdateResourceProfileDetectionsCommand extends $Command
  .classBuilder<
    UpdateResourceProfileDetectionsCommandInput,
    UpdateResourceProfileDetectionsCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Macie2", "UpdateResourceProfileDetections", {})
  .n("Macie2Client", "UpdateResourceProfileDetectionsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateResourceProfileDetectionsCommand)
  .de(de_UpdateResourceProfileDetectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourceProfileDetectionsRequest;
      output: {};
    };
    sdk: {
      input: UpdateResourceProfileDetectionsCommandInput;
      output: UpdateResourceProfileDetectionsCommandOutput;
    };
  };
}
