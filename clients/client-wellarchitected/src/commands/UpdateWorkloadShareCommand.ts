// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorkloadShareInput, UpdateWorkloadShareOutput } from "../models/models_0";
import { de_UpdateWorkloadShareCommand, se_UpdateWorkloadShareCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkloadShareCommand}.
 */
export interface UpdateWorkloadShareCommandInput extends UpdateWorkloadShareInput {}
/**
 * @public
 *
 * The output of {@link UpdateWorkloadShareCommand}.
 */
export interface UpdateWorkloadShareCommandOutput extends UpdateWorkloadShareOutput, __MetadataBearer {}

/**
 * <p>Update a workload share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateWorkloadShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateWorkloadShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateWorkloadShareInput
 *   ShareId: "STRING_VALUE", // required
 *   WorkloadId: "STRING_VALUE", // required
 *   PermissionType: "READONLY" || "CONTRIBUTOR", // required
 * };
 * const command = new UpdateWorkloadShareCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkloadShareOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   WorkloadShare: { // WorkloadShare
 * //     ShareId: "STRING_VALUE",
 * //     SharedBy: "STRING_VALUE",
 * //     SharedWith: "STRING_VALUE",
 * //     PermissionType: "READONLY" || "CONTRIBUTOR",
 * //     Status: "ACCEPTED" || "REJECTED" || "PENDING" || "REVOKED" || "EXPIRED" || "ASSOCIATING" || "ASSOCIATED" || "FAILED",
 * //     WorkloadName: "STRING_VALUE",
 * //     WorkloadId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkloadShareCommandInput - {@link UpdateWorkloadShareCommandInput}
 * @returns {@link UpdateWorkloadShareCommandOutput}
 * @see {@link UpdateWorkloadShareCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkloadShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 * @public
 */
export class UpdateWorkloadShareCommand extends $Command
  .classBuilder<
    UpdateWorkloadShareCommandInput,
    UpdateWorkloadShareCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "UpdateWorkloadShare", {})
  .n("WellArchitectedClient", "UpdateWorkloadShareCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWorkloadShareCommand)
  .de(de_UpdateWorkloadShareCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkloadShareInput;
      output: UpdateWorkloadShareOutput;
    };
    sdk: {
      input: UpdateWorkloadShareCommandInput;
      output: UpdateWorkloadShareCommandOutput;
    };
  };
}
