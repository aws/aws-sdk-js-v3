// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type { ListResourceProfileDetectionsRequest, ListResourceProfileDetectionsResponse } from "../models/models_0";
import { ListResourceProfileDetections } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceProfileDetectionsCommand}.
 */
export interface ListResourceProfileDetectionsCommandInput extends ListResourceProfileDetectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceProfileDetectionsCommand}.
 */
export interface ListResourceProfileDetectionsCommandOutput
  extends ListResourceProfileDetectionsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListResourceProfileDetectionsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListResourceProfileDetectionsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // ListResourceProfileDetectionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListResourceProfileDetectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceProfileDetectionsResponse
 * //   detections: [ // __listOfDetection
 * //     { // Detection
 * //       arn: "STRING_VALUE",
 * //       count: Number("long"),
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       suppressed: true || false,
 * //       type: "CUSTOM" || "MANAGED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceProfileDetectionsCommandInput - {@link ListResourceProfileDetectionsCommandInput}
 * @returns {@link ListResourceProfileDetectionsCommandOutput}
 * @see {@link ListResourceProfileDetectionsCommandInput} for command's `input` shape.
 * @see {@link ListResourceProfileDetectionsCommandOutput} for command's `response` shape.
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
export class ListResourceProfileDetectionsCommand extends $Command
  .classBuilder<
    ListResourceProfileDetectionsCommandInput,
    ListResourceProfileDetectionsCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "ListResourceProfileDetections", {})
  .n("Macie2Client", "ListResourceProfileDetectionsCommand")
  .sc(ListResourceProfileDetections)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceProfileDetectionsRequest;
      output: ListResourceProfileDetectionsResponse;
    };
    sdk: {
      input: ListResourceProfileDetectionsCommandInput;
      output: ListResourceProfileDetectionsCommandOutput;
    };
  };
}
