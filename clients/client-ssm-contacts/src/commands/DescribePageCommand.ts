// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePageRequest, DescribePageResult } from "../models/models_0";
import { de_DescribePageCommand, se_DescribePageCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePageCommand}.
 */
export interface DescribePageCommandInput extends DescribePageRequest {}
/**
 * @public
 *
 * The output of {@link DescribePageCommand}.
 */
export interface DescribePageCommandOutput extends DescribePageResult, __MetadataBearer {}

/**
 * <p>Lists details of the engagement to a contact channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DescribePageCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DescribePageCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // DescribePageRequest
 *   PageId: "STRING_VALUE", // required
 * };
 * const command = new DescribePageCommand(input);
 * const response = await client.send(command);
 * // { // DescribePageResult
 * //   PageArn: "STRING_VALUE", // required
 * //   EngagementArn: "STRING_VALUE", // required
 * //   ContactArn: "STRING_VALUE", // required
 * //   Sender: "STRING_VALUE", // required
 * //   Subject: "STRING_VALUE", // required
 * //   Content: "STRING_VALUE", // required
 * //   PublicSubject: "STRING_VALUE",
 * //   PublicContent: "STRING_VALUE",
 * //   IncidentId: "STRING_VALUE",
 * //   SentTime: new Date("TIMESTAMP"),
 * //   ReadTime: new Date("TIMESTAMP"),
 * //   DeliveryTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribePageCommandInput - {@link DescribePageCommandInput}
 * @returns {@link DescribePageCommandOutput}
 * @see {@link DescribePageCommandInput} for command's `input` shape.
 * @see {@link DescribePageCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link DataEncryptionException} (client fault)
 *  <p>The operation failed to due an encryption key error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 *
 * @public
 */
export class DescribePageCommand extends $Command
  .classBuilder<
    DescribePageCommandInput,
    DescribePageCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMContacts", "DescribePage", {})
  .n("SSMContactsClient", "DescribePageCommand")
  .f(void 0, void 0)
  .ser(se_DescribePageCommand)
  .de(de_DescribePageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePageRequest;
      output: DescribePageResult;
    };
    sdk: {
      input: DescribePageCommandInput;
      output: DescribePageCommandOutput;
    };
  };
}
