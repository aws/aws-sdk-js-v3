// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { UpdateClassificationScopeRequest, UpdateClassificationScopeResponse } from "../models/models_1";
import { de_UpdateClassificationScopeCommand, se_UpdateClassificationScopeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateClassificationScopeCommand}.
 */
export interface UpdateClassificationScopeCommandInput extends UpdateClassificationScopeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClassificationScopeCommand}.
 */
export interface UpdateClassificationScopeCommandOutput extends UpdateClassificationScopeResponse, __MetadataBearer {}

/**
 * <p>Updates the classification scope settings for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateClassificationScopeCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateClassificationScopeCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // UpdateClassificationScopeRequest
 *   id: "STRING_VALUE", // required
 *   s3: { // S3ClassificationScopeUpdate
 *     excludes: { // S3ClassificationScopeExclusionUpdate
 *       bucketNames: [ // __listOfS3BucketName // required
 *         "STRING_VALUE",
 *       ],
 *       operation: "ADD" || "REPLACE" || "REMOVE", // required
 *     },
 *   },
 * };
 * const command = new UpdateClassificationScopeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateClassificationScopeCommandInput - {@link UpdateClassificationScopeCommandInput}
 * @returns {@link UpdateClassificationScopeCommandOutput}
 * @see {@link UpdateClassificationScopeCommandInput} for command's `input` shape.
 * @see {@link UpdateClassificationScopeCommandOutput} for command's `response` shape.
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
export class UpdateClassificationScopeCommand extends $Command
  .classBuilder<
    UpdateClassificationScopeCommandInput,
    UpdateClassificationScopeCommandOutput,
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
  .s("Macie2", "UpdateClassificationScope", {})
  .n("Macie2Client", "UpdateClassificationScopeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateClassificationScopeCommand)
  .de(de_UpdateClassificationScopeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClassificationScopeRequest;
      output: {};
    };
    sdk: {
      input: UpdateClassificationScopeCommandInput;
      output: UpdateClassificationScopeCommandOutput;
    };
  };
}
