// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWorkloadShareInput, CreateWorkloadShareOutput } from "../models/models_0";
import { CreateWorkloadShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Create a workload share.
 *
 * The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.
 *
 * If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload.
 *
 * For more information, see [Sharing a workload](https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html) in the *Well-Architected Tool User Guide*.
 *
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
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The user has reached their resource quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class CreateWorkloadShareCommand extends command<CreateWorkloadShareCommandInput, CreateWorkloadShareCommandOutput>(
  _ep0,
  _mw0,
  "CreateWorkloadShare",
  CreateWorkloadShare$
) {
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
