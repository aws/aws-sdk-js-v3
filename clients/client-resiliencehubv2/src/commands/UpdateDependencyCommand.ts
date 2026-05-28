// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDependencyRequest, UpdateDependencyResponse } from "../models/models_0";
import type {
  Resiliencehubv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Resiliencehubv2Client";
import { UpdateDependency$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDependencyCommand}.
 */
export interface UpdateDependencyCommandInput extends UpdateDependencyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDependencyCommand}.
 */
export interface UpdateDependencyCommandOutput extends UpdateDependencyResponse, __MetadataBearer {}

/**
 * <p>Updates a dependency classification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, UpdateDependencyCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, UpdateDependencyCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // UpdateDependencyRequest
 *   serviceArn: "STRING_VALUE", // required
 *   dependencyId: "STRING_VALUE", // required
 *   criticality: "HARD" || "SOFT" || "UNKNOWN",
 *   comment: "STRING_VALUE",
 * };
 * const command = new UpdateDependencyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDependencyResponse
 * //   dependencyId: "STRING_VALUE", // required
 * //   dependencyName: "STRING_VALUE", // required
 * //   location: "STRING_VALUE", // required
 * //   criticality: "HARD" || "SOFT" || "UNKNOWN", // required
 * //   comment: "STRING_VALUE",
 * //   provider: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateDependencyCommandInput - {@link UpdateDependencyCommandInput}
 * @returns {@link UpdateDependencyCommandOutput}
 * @see {@link UpdateDependencyCommandInput} for command's `input` shape.
 * @see {@link UpdateDependencyCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Conflict — resource already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class UpdateDependencyCommand extends $Command
  .classBuilder<
    UpdateDependencyCommandInput,
    UpdateDependencyCommandOutput,
    Resiliencehubv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Resiliencehubv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NGRHServiceCore", "UpdateDependency", {})
  .n("Resiliencehubv2Client", "UpdateDependencyCommand")
  .sc(UpdateDependency$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDependencyRequest;
      output: UpdateDependencyResponse;
    };
    sdk: {
      input: UpdateDependencyCommandInput;
      output: UpdateDependencyCommandOutput;
    };
  };
}
