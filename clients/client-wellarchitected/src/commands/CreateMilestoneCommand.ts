// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMilestoneInput, CreateMilestoneOutput } from "../models/models_0";
import { de_CreateMilestoneCommand, se_CreateMilestoneCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMilestoneCommand}.
 */
export interface CreateMilestoneCommandInput extends CreateMilestoneInput {}
/**
 * @public
 *
 * The output of {@link CreateMilestoneCommand}.
 */
export interface CreateMilestoneCommandOutput extends CreateMilestoneOutput, __MetadataBearer {}

/**
 * <p>Create a milestone for an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateMilestoneCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateMilestoneCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateMilestoneInput
 *   WorkloadId: "STRING_VALUE", // required
 *   MilestoneName: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateMilestoneCommand(input);
 * const response = await client.send(command);
 * // { // CreateMilestoneOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   MilestoneNumber: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateMilestoneCommandInput - {@link CreateMilestoneCommandInput}
 * @returns {@link CreateMilestoneCommandOutput}
 * @see {@link CreateMilestoneCommandInput} for command's `input` shape.
 * @see {@link CreateMilestoneCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateMilestoneCommand extends $Command
  .classBuilder<
    CreateMilestoneCommandInput,
    CreateMilestoneCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "CreateMilestone", {})
  .n("WellArchitectedClient", "CreateMilestoneCommand")
  .f(void 0, void 0)
  .ser(se_CreateMilestoneCommand)
  .de(de_CreateMilestoneCommand)
  .build() {}
