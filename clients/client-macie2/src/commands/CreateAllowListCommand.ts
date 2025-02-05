// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { CreateAllowListRequest, CreateAllowListResponse } from "../models/models_0";
import { de_CreateAllowListCommand, se_CreateAllowListCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAllowListCommand}.
 */
export interface CreateAllowListCommandInput extends CreateAllowListRequest {}
/**
 * @public
 *
 * The output of {@link CreateAllowListCommand}.
 */
export interface CreateAllowListCommandOutput extends CreateAllowListResponse, __MetadataBearer {}

/**
 * <p>Creates and defines the settings for an allow list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateAllowListCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateAllowListCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Macie2Client(config);
 * const input = { // CreateAllowListRequest
 *   clientToken: "STRING_VALUE", // required
 *   criteria: { // AllowListCriteria
 *     regex: "STRING_VALUE",
 *     s3WordsList: { // S3WordsList
 *       bucketName: "STRING_VALUE", // required
 *       objectKey: "STRING_VALUE", // required
 *     },
 *   },
 *   description: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAllowListCommand(input);
 * const response = await client.send(command);
 * // { // CreateAllowListResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAllowListCommandInput - {@link CreateAllowListCommandInput}
 * @returns {@link CreateAllowListCommandOutput}
 * @see {@link CreateAllowListCommandInput} for command's `input` shape.
 * @see {@link CreateAllowListCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
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
 * @public
 */
export class CreateAllowListCommand extends $Command
  .classBuilder<
    CreateAllowListCommandInput,
    CreateAllowListCommandOutput,
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
  .s("Macie2", "CreateAllowList", {})
  .n("Macie2Client", "CreateAllowListCommand")
  .f(void 0, void 0)
  .ser(se_CreateAllowListCommand)
  .de(de_CreateAllowListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAllowListRequest;
      output: CreateAllowListResponse;
    };
    sdk: {
      input: CreateAllowListCommandInput;
      output: CreateAllowListCommandOutput;
    };
  };
}
