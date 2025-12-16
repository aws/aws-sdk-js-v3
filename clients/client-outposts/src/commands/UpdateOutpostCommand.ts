// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateOutpostInput, UpdateOutpostOutput } from "../models/models_0";
import type { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { UpdateOutpost$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOutpostCommand}.
 */
export interface UpdateOutpostCommandInput extends UpdateOutpostInput {}
/**
 * @public
 *
 * The output of {@link UpdateOutpostCommand}.
 */
export interface UpdateOutpostCommandOutput extends UpdateOutpostOutput, __MetadataBearer {}

/**
 * <p> Updates an Outpost. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, UpdateOutpostCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, UpdateOutpostCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // UpdateOutpostInput
 *   OutpostId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   SupportedHardwareType: "RACK" || "SERVER",
 * };
 * const command = new UpdateOutpostCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOutpostOutput
 * //   Outpost: { // Outpost
 * //     OutpostId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //     SiteId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     LifeCycleStatus: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     SiteArn: "STRING_VALUE",
 * //     SupportedHardwareType: "RACK" || "SERVER",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateOutpostCommandInput - {@link UpdateOutpostCommandInput}
 * @returns {@link UpdateOutpostCommandOutput}
 * @see {@link UpdateOutpostCommandInput} for command's `input` shape.
 * @see {@link UpdateOutpostCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class UpdateOutpostCommand extends $Command
  .classBuilder<
    UpdateOutpostCommandInput,
    UpdateOutpostCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "UpdateOutpost", {})
  .n("OutpostsClient", "UpdateOutpostCommand")
  .sc(UpdateOutpost$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOutpostInput;
      output: UpdateOutpostOutput;
    };
    sdk: {
      input: UpdateOutpostCommandInput;
      output: UpdateOutpostCommandOutput;
    };
  };
}
