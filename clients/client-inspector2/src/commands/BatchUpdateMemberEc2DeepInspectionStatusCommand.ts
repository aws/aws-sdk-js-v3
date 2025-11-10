// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  BatchUpdateMemberEc2DeepInspectionStatusRequest,
  BatchUpdateMemberEc2DeepInspectionStatusResponse,
} from "../models/models_0";
import { BatchUpdateMemberEc2DeepInspectionStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateMemberEc2DeepInspectionStatusCommand}.
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusCommandInput
  extends BatchUpdateMemberEc2DeepInspectionStatusRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateMemberEc2DeepInspectionStatusCommand}.
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusCommandOutput
  extends BatchUpdateMemberEc2DeepInspectionStatusResponse,
    __MetadataBearer {}

/**
 * <p>Activates or deactivates Amazon Inspector deep inspection for the provided member accounts in your
 *          organization. You must be the delegated administrator of an organization in Amazon Inspector to use
 *          this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchUpdateMemberEc2DeepInspectionStatusCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchUpdateMemberEc2DeepInspectionStatusCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // BatchUpdateMemberEc2DeepInspectionStatusRequest
 *   accountIds: [ // MemberAccountEc2DeepInspectionStatusList // required
 *     { // MemberAccountEc2DeepInspectionStatus
 *       accountId: "STRING_VALUE", // required
 *       activateDeepInspection: true || false, // required
 *     },
 *   ],
 * };
 * const command = new BatchUpdateMemberEc2DeepInspectionStatusCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateMemberEc2DeepInspectionStatusResponse
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
 * @param BatchUpdateMemberEc2DeepInspectionStatusCommandInput - {@link BatchUpdateMemberEc2DeepInspectionStatusCommandInput}
 * @returns {@link BatchUpdateMemberEc2DeepInspectionStatusCommandOutput}
 * @see {@link BatchUpdateMemberEc2DeepInspectionStatusCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateMemberEc2DeepInspectionStatusCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
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
 *
 * @public
 */
export class BatchUpdateMemberEc2DeepInspectionStatusCommand extends $Command
  .classBuilder<
    BatchUpdateMemberEc2DeepInspectionStatusCommandInput,
    BatchUpdateMemberEc2DeepInspectionStatusCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "BatchUpdateMemberEc2DeepInspectionStatus", {})
  .n("Inspector2Client", "BatchUpdateMemberEc2DeepInspectionStatusCommand")
  .sc(BatchUpdateMemberEc2DeepInspectionStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateMemberEc2DeepInspectionStatusRequest;
      output: BatchUpdateMemberEc2DeepInspectionStatusResponse;
    };
    sdk: {
      input: BatchUpdateMemberEc2DeepInspectionStatusCommandInput;
      output: BatchUpdateMemberEc2DeepInspectionStatusCommandOutput;
    };
  };
}
