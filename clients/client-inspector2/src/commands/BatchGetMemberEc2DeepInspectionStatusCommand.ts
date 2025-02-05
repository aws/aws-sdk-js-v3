// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  BatchGetMemberEc2DeepInspectionStatusRequest,
  BatchGetMemberEc2DeepInspectionStatusResponse,
} from "../models/models_0";
import {
  de_BatchGetMemberEc2DeepInspectionStatusCommand,
  se_BatchGetMemberEc2DeepInspectionStatusCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetMemberEc2DeepInspectionStatusCommand}.
 */
export interface BatchGetMemberEc2DeepInspectionStatusCommandInput
  extends BatchGetMemberEc2DeepInspectionStatusRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetMemberEc2DeepInspectionStatusCommand}.
 */
export interface BatchGetMemberEc2DeepInspectionStatusCommandOutput
  extends BatchGetMemberEc2DeepInspectionStatusResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves Amazon Inspector deep inspection activation status of multiple member accounts within your organization. You must be the delegated administrator of an organization in Amazon Inspector to use this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchGetMemberEc2DeepInspectionStatusCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchGetMemberEc2DeepInspectionStatusCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Inspector2Client(config);
 * const input = { // BatchGetMemberEc2DeepInspectionStatusRequest
 *   accountIds: [ // AccountIdSet
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetMemberEc2DeepInspectionStatusCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetMemberEc2DeepInspectionStatusResponse
 * //   accountIds: [ // MemberAccountEc2DeepInspectionStatusStateList
 * //     { // MemberAccountEc2DeepInspectionStatusState
 * //       accountId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failedAccountIds: [ // FailedMemberAccountEc2DeepInspectionStatusStateList
 * //     { // FailedMemberAccountEc2DeepInspectionStatusState
 * //       accountId: "STRING_VALUE", // required
 * //       ec2ScanStatus: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetMemberEc2DeepInspectionStatusCommandInput - {@link BatchGetMemberEc2DeepInspectionStatusCommandInput}
 * @returns {@link BatchGetMemberEc2DeepInspectionStatusCommandOutput}
 * @see {@link BatchGetMemberEc2DeepInspectionStatusCommandInput} for command's `input` shape.
 * @see {@link BatchGetMemberEc2DeepInspectionStatusCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class BatchGetMemberEc2DeepInspectionStatusCommand extends $Command
  .classBuilder<
    BatchGetMemberEc2DeepInspectionStatusCommandInput,
    BatchGetMemberEc2DeepInspectionStatusCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "BatchGetMemberEc2DeepInspectionStatus", {})
  .n("Inspector2Client", "BatchGetMemberEc2DeepInspectionStatusCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetMemberEc2DeepInspectionStatusCommand)
  .de(de_BatchGetMemberEc2DeepInspectionStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetMemberEc2DeepInspectionStatusRequest;
      output: BatchGetMemberEc2DeepInspectionStatusResponse;
    };
    sdk: {
      input: BatchGetMemberEc2DeepInspectionStatusCommandInput;
      output: BatchGetMemberEc2DeepInspectionStatusCommandOutput;
    };
  };
}
