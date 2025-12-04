// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type { UpdateAllowListRequest, UpdateAllowListResponse } from "../models/models_0";
import { UpdateAllowList } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAllowListCommand}.
 */
export interface UpdateAllowListCommandInput extends UpdateAllowListRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAllowListCommand}.
 */
export interface UpdateAllowListCommandOutput extends UpdateAllowListResponse, __MetadataBearer {}

/**
 * <p>Updates the settings for an allow list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateAllowListCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateAllowListCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // UpdateAllowListRequest
 *   criteria: { // AllowListCriteria
 *     regex: "STRING_VALUE",
 *     s3WordsList: { // S3WordsList
 *       bucketName: "STRING_VALUE", // required
 *       objectKey: "STRING_VALUE", // required
 *     },
 *   },
 *   description: "STRING_VALUE",
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new UpdateAllowListCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAllowListResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAllowListCommandInput - {@link UpdateAllowListCommandInput}
 * @returns {@link UpdateAllowListCommandOutput}
 * @see {@link UpdateAllowListCommandInput} for command's `input` shape.
 * @see {@link UpdateAllowListCommandOutput} for command's `response` shape.
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
export class UpdateAllowListCommand extends $Command
  .classBuilder<
    UpdateAllowListCommandInput,
    UpdateAllowListCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "UpdateAllowList", {})
  .n("Macie2Client", "UpdateAllowListCommand")
  .sc(UpdateAllowList)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAllowListRequest;
      output: UpdateAllowListResponse;
    };
    sdk: {
      input: UpdateAllowListCommandInput;
      output: UpdateAllowListCommandOutput;
    };
  };
}
