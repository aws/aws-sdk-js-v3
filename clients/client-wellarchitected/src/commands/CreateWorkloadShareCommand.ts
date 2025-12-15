// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateWorkloadShareInput, CreateWorkloadShareOutput } from "../models/models_0";
import { CreateWorkloadShare$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  WellArchitectedClientResolvedConfig,
} from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkloadShareCommand}.
 */
export interface CreateWorkloadShareCommandInput extends CreateWorkloadShareInput {}
/**
 * @public
 *
 * The output of {@link CreateWorkloadShareCommand}.
 */
export interface CreateWorkloadShareCommandOutput extends CreateWorkloadShareOutput, __MetadataBearer {}

/**
 * <p>Create a workload share.</p>
 *          <p>The owner of a workload can share it with other Amazon Web Services accounts and users in the same
 *             Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is
 *             deleted.</p>
 *          <p>If you share a workload with an organization or OU, all accounts in the organization or OU
 *             are granted access to the workload.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a workload</a> in the
 *                 <i>Well-Architected Tool User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateWorkloadShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateWorkloadShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateWorkloadShareInput
 *   WorkloadId: "STRING_VALUE", // required
 *   SharedWith: "STRING_VALUE", // required
 *   PermissionType: "READONLY" || "CONTRIBUTOR", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateWorkloadShareCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkloadShareOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   ShareId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWorkloadShareCommandInput - {@link CreateWorkloadShareCommandInput}
 * @returns {@link CreateWorkloadShareCommandOutput}
 * @see {@link CreateWorkloadShareCommandInput} for command's `input` shape.
 * @see {@link CreateWorkloadShareCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
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
 *
 * @public
 */
export class CreateWorkloadShareCommand extends $Command
  .classBuilder<
    CreateWorkloadShareCommandInput,
    CreateWorkloadShareCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "CreateWorkloadShare", {})
  .n("WellArchitectedClient", "CreateWorkloadShareCommand")
  .sc(CreateWorkloadShare$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkloadShareInput;
      output: CreateWorkloadShareOutput;
    };
    sdk: {
      input: CreateWorkloadShareCommandInput;
      output: CreateWorkloadShareCommandOutput;
    };
  };
}
