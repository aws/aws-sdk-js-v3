// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type { GetClassificationScopeRequest, GetClassificationScopeResponse } from "../models/models_0";
import { GetClassificationScope$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetClassificationScopeCommand}.
 */
export interface GetClassificationScopeCommandInput extends GetClassificationScopeRequest {}
/**
 * @public
 *
 * The output of {@link GetClassificationScopeCommand}.
 */
export interface GetClassificationScopeCommandOutput extends GetClassificationScopeResponse, __MetadataBearer {}

/**
 * <p>Retrieves the classification scope settings for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetClassificationScopeCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetClassificationScopeCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // GetClassificationScopeRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetClassificationScopeCommand(input);
 * const response = await client.send(command);
 * // { // GetClassificationScopeResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   s3: { // S3ClassificationScope
 * //     excludes: { // S3ClassificationScopeExclusion
 * //       bucketNames: [ // __listOfS3BucketName // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetClassificationScopeCommandInput - {@link GetClassificationScopeCommandInput}
 * @returns {@link GetClassificationScopeCommandOutput}
 * @see {@link GetClassificationScopeCommandInput} for command's `input` shape.
 * @see {@link GetClassificationScopeCommandOutput} for command's `response` shape.
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
export class GetClassificationScopeCommand extends $Command
  .classBuilder<
    GetClassificationScopeCommandInput,
    GetClassificationScopeCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "GetClassificationScope", {})
  .n("Macie2Client", "GetClassificationScopeCommand")
  .sc(GetClassificationScope$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClassificationScopeRequest;
      output: GetClassificationScopeResponse;
    };
    sdk: {
      input: GetClassificationScopeCommandInput;
      output: GetClassificationScopeCommandOutput;
    };
  };
}
