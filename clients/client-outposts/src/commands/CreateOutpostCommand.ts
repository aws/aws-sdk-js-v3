// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOutpostInput, CreateOutpostOutput } from "../models/models_0";
import { CreateOutpost$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateOutpostCommand}.
 */
export interface CreateOutpostCommandInput extends CreateOutpostInput {}
/**
 * @public
 *
 * The output of {@link CreateOutpostCommand}.
 */
export interface CreateOutpostCommandOutput extends CreateOutpostOutput, __MetadataBearer {}

/**
 * Creates an Outpost.
 *
 * You can specify either an Availability one or an AZ ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CreateOutpostCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CreateOutpostCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // CreateOutpostInput
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   SiteId: "STRING_VALUE", // required
 *   AvailabilityZone: "STRING_VALUE",
 *   AvailabilityZoneId: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   SupportedHardwareType: "RACK" || "SERVER",
 * };
 * const command = new CreateOutpostCommand(input);
 * const response = await client.send(command);
 * // { // CreateOutpostOutput
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
 * //     Generation: "GENERATION_2" || "GENERATION_1",
 * //     RackScalingType: "SINGLE_RACK" || "MULTI_RACK",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateOutpostCommandInput - {@link CreateOutpostCommandInput}
 * @returns {@link CreateOutpostCommandOutput}
 * @see {@link CreateOutpostCommandInput} for command's `input` shape.
 * @see {@link CreateOutpostCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have permission to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting this resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified request is not valid.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded a service quota.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter is not valid.
 *
 * @throws {@link OutpostsServiceException}
 *
 * Base exception class for all service exceptions from Outposts service.
 *
 * @public
 */
export class CreateOutpostCommand extends command<CreateOutpostCommandInput, CreateOutpostCommandOutput>(
  _ep0,
  _mw0,
  "CreateOutpost",
  CreateOutpost$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOutpostInput;
      output: CreateOutpostOutput;
    };
    sdk: {
      input: CreateOutpostCommandInput;
      output: CreateOutpostCommandOutput;
    };
  };
}
