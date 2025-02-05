// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEngagementRequest, DescribeEngagementResult } from "../models/models_0";
import { de_DescribeEngagementCommand, se_DescribeEngagementCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEngagementCommand}.
 */
export interface DescribeEngagementCommandInput extends DescribeEngagementRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEngagementCommand}.
 */
export interface DescribeEngagementCommandOutput extends DescribeEngagementResult, __MetadataBearer {}

/**
 * <p>Incident Manager uses engagements to engage contacts and escalation plans during an incident.
 *          Use this command to describe the engagement that occurred during an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DescribeEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DescribeEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMContactsClient(config);
 * const input = { // DescribeEngagementRequest
 *   EngagementId: "STRING_VALUE", // required
 * };
 * const command = new DescribeEngagementCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEngagementResult
 * //   ContactArn: "STRING_VALUE", // required
 * //   EngagementArn: "STRING_VALUE", // required
 * //   Sender: "STRING_VALUE", // required
 * //   Subject: "STRING_VALUE", // required
 * //   Content: "STRING_VALUE", // required
 * //   PublicSubject: "STRING_VALUE",
 * //   PublicContent: "STRING_VALUE",
 * //   IncidentId: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   StopTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeEngagementCommandInput - {@link DescribeEngagementCommandInput}
 * @returns {@link DescribeEngagementCommandOutput}
 * @see {@link DescribeEngagementCommandInput} for command's `input` shape.
 * @see {@link DescribeEngagementCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeEngagementCommand extends $Command
  .classBuilder<
    DescribeEngagementCommandInput,
    DescribeEngagementCommandOutput,
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
  .s("SSMContacts", "DescribeEngagement", {})
  .n("SSMContactsClient", "DescribeEngagementCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEngagementCommand)
  .de(de_DescribeEngagementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEngagementRequest;
      output: DescribeEngagementResult;
    };
    sdk: {
      input: DescribeEngagementCommandInput;
      output: DescribeEngagementCommandOutput;
    };
  };
}
