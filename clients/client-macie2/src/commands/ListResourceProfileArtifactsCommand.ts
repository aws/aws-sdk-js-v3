// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { ListResourceProfileArtifactsRequest, ListResourceProfileArtifactsResponse } from "../models/models_1";
import {
  de_ListResourceProfileArtifactsCommand,
  se_ListResourceProfileArtifactsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceProfileArtifactsCommand}.
 */
export interface ListResourceProfileArtifactsCommandInput extends ListResourceProfileArtifactsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceProfileArtifactsCommand}.
 */
export interface ListResourceProfileArtifactsCommandOutput
  extends ListResourceProfileArtifactsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about objects that Amazon Macie selected from an S3 bucket for automated sensitive data discovery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListResourceProfileArtifactsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListResourceProfileArtifactsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Macie2Client(config);
 * const input = { // ListResourceProfileArtifactsRequest
 *   nextToken: "STRING_VALUE",
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListResourceProfileArtifactsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceProfileArtifactsResponse
 * //   artifacts: [ // __listOfResourceProfileArtifact
 * //     { // ResourceProfileArtifact
 * //       arn: "STRING_VALUE", // required
 * //       classificationResultStatus: "STRING_VALUE", // required
 * //       sensitive: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceProfileArtifactsCommandInput - {@link ListResourceProfileArtifactsCommandInput}
 * @returns {@link ListResourceProfileArtifactsCommandOutput}
 * @see {@link ListResourceProfileArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListResourceProfileArtifactsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListResourceProfileArtifactsCommand extends $Command
  .classBuilder<
    ListResourceProfileArtifactsCommandInput,
    ListResourceProfileArtifactsCommandOutput,
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
  .s("Macie2", "ListResourceProfileArtifacts", {})
  .n("Macie2Client", "ListResourceProfileArtifactsCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceProfileArtifactsCommand)
  .de(de_ListResourceProfileArtifactsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceProfileArtifactsRequest;
      output: ListResourceProfileArtifactsResponse;
    };
    sdk: {
      input: ListResourceProfileArtifactsCommandInput;
      output: ListResourceProfileArtifactsCommandOutput;
    };
  };
}
