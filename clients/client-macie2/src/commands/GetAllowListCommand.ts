// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type { GetAllowListRequest, GetAllowListResponse } from "../models/models_0";
import { GetAllowList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAllowListCommand}.
 */
export interface GetAllowListCommandInput extends GetAllowListRequest {}
/**
 * @public
 *
 * The output of {@link GetAllowListCommand}.
 */
export interface GetAllowListCommandOutput extends GetAllowListResponse, __MetadataBearer {}

/**
 * <p>Retrieves the settings and status of an allow list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetAllowListCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetAllowListCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // GetAllowListRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetAllowListCommand(input);
 * const response = await client.send(command);
 * // { // GetAllowListResponse
 * //   arn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   criteria: { // AllowListCriteria
 * //     regex: "STRING_VALUE",
 * //     s3WordsList: { // S3WordsList
 * //       bucketName: "STRING_VALUE", // required
 * //       objectKey: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   status: { // AllowListStatus
 * //     code: "OK" || "S3_OBJECT_NOT_FOUND" || "S3_USER_ACCESS_DENIED" || "S3_OBJECT_ACCESS_DENIED" || "S3_THROTTLED" || "S3_OBJECT_OVERSIZE" || "S3_OBJECT_EMPTY" || "UNKNOWN_ERROR", // required
 * //     description: "STRING_VALUE",
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAllowListCommandInput - {@link GetAllowListCommandInput}
 * @returns {@link GetAllowListCommandOutput}
 * @see {@link GetAllowListCommandInput} for command's `input` shape.
 * @see {@link GetAllowListCommandOutput} for command's `response` shape.
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
export class GetAllowListCommand extends $Command
  .classBuilder<
    GetAllowListCommandInput,
    GetAllowListCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "GetAllowList", {})
  .n("Macie2Client", "GetAllowListCommand")
  .sc(GetAllowList$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAllowListRequest;
      output: GetAllowListResponse;
    };
    sdk: {
      input: GetAllowListCommandInput;
      output: GetAllowListCommandOutput;
    };
  };
}
