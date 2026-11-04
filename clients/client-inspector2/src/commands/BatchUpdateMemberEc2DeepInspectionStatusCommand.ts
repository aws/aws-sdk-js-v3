// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchUpdateMemberEc2DeepInspectionStatusRequest,
  BatchUpdateMemberEc2DeepInspectionStatusResponse,
} from "../models/models_0";
import { BatchUpdateMemberEc2DeepInspectionStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchUpdateMemberEc2DeepInspectionStatusCommand}.
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusCommandInput extends BatchUpdateMemberEc2DeepInspectionStatusRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateMemberEc2DeepInspectionStatusCommand}.
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusCommandOutput extends BatchUpdateMemberEc2DeepInspectionStatusResponse, __MetadataBearer {}

/**
 * Activates or deactivates Amazon Inspector deep inspection for the provided member accounts in your organization. You must be the delegated administrator of an organization in Amazon Inspector to use this API.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @public
 */
export class BatchUpdateMemberEc2DeepInspectionStatusCommand extends command<BatchUpdateMemberEc2DeepInspectionStatusCommandInput, BatchUpdateMemberEc2DeepInspectionStatusCommandOutput>(
  _ep0,
  _mw0,
  "BatchUpdateMemberEc2DeepInspectionStatus",
  BatchUpdateMemberEc2DeepInspectionStatus$
) {
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
