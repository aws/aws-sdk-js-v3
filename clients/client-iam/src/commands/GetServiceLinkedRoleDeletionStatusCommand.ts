// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  GetServiceLinkedRoleDeletionStatusRequest,
  GetServiceLinkedRoleDeletionStatusResponse,
} from "../models/models_0";
import {
  de_GetServiceLinkedRoleDeletionStatusCommand,
  se_GetServiceLinkedRoleDeletionStatusCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceLinkedRoleDeletionStatusCommand}.
 */
export interface GetServiceLinkedRoleDeletionStatusCommandInput extends GetServiceLinkedRoleDeletionStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceLinkedRoleDeletionStatusCommand}.
 */
export interface GetServiceLinkedRoleDeletionStatusCommandOutput
  extends GetServiceLinkedRoleDeletionStatusResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion,
 *             you can use the <code>DeletionTaskId</code> parameter in
 *                 <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion.
 *             If the deletion fails, this operation returns the reason that it failed, if that
 *             information is returned by the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServiceLinkedRoleDeletionStatusCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServiceLinkedRoleDeletionStatusCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetServiceLinkedRoleDeletionStatusRequest
 *   DeletionTaskId: "STRING_VALUE", // required
 * };
 * const command = new GetServiceLinkedRoleDeletionStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceLinkedRoleDeletionStatusResponse
 * //   Status: "SUCCEEDED" || "IN_PROGRESS" || "FAILED" || "NOT_STARTED", // required
 * //   Reason: { // DeletionTaskFailureReasonType
 * //     Reason: "STRING_VALUE",
 * //     RoleUsageList: [ // RoleUsageListType
 * //       { // RoleUsageType
 * //         Region: "STRING_VALUE",
 * //         Resources: [ // ArnListType
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceLinkedRoleDeletionStatusCommandInput - {@link GetServiceLinkedRoleDeletionStatusCommandInput}
 * @returns {@link GetServiceLinkedRoleDeletionStatusCommandOutput}
 * @see {@link GetServiceLinkedRoleDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link GetServiceLinkedRoleDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class GetServiceLinkedRoleDeletionStatusCommand extends $Command
  .classBuilder<
    GetServiceLinkedRoleDeletionStatusCommandInput,
    GetServiceLinkedRoleDeletionStatusCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "GetServiceLinkedRoleDeletionStatus", {})
  .n("IAMClient", "GetServiceLinkedRoleDeletionStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetServiceLinkedRoleDeletionStatusCommand)
  .de(de_GetServiceLinkedRoleDeletionStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceLinkedRoleDeletionStatusRequest;
      output: GetServiceLinkedRoleDeletionStatusResponse;
    };
    sdk: {
      input: GetServiceLinkedRoleDeletionStatusCommandInput;
      output: GetServiceLinkedRoleDeletionStatusCommandOutput;
    };
  };
}
