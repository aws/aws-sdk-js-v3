// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListVolumesRequest, ListVolumesResponse } from "../models/models_0";
import { ListVolumes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVolumesCommand}.
 */
export interface ListVolumesCommandInput extends ListVolumesRequest {}
/**
 * @public
 *
 * The output of {@link ListVolumesCommand}.
 */
export interface ListVolumesCommandOutput extends ListVolumesResponse, __MetadataBearer {}

/**
 * <p>Lists the persistent volumes in a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListVolumesCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListVolumesCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListVolumesRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListVolumesCommand(input);
 * const response = await client.send(command);
 * // { // ListVolumesResponse
 * //   volumes: [ // VolumeSummaries // required
 * //     { // VolumeSummary
 * //       volumeId: "STRING_VALUE", // required
 * //       farmId: "STRING_VALUE", // required
 * //       fleetId: "STRING_VALUE", // required
 * //       state: "PENDING_CREATION" || "PENDING_ATTACHMENT" || "IN_USE" || "AVAILABLE" || "PENDING_DELETION", // required
 * //       sizeGiB: Number("int"), // required
 * //       availabilityZoneId: "STRING_VALUE", // required
 * //       attachedWorkerId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVolumesCommandInput - {@link ListVolumesCommandInput}
 * @returns {@link ListVolumesCommandOutput}
 * @see {@link ListVolumesCommandInput} for command's `input` shape.
 * @see {@link ListVolumesCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @example List volumes for a fleet
 * ```javascript
 * //
 * const input = {
 *   farmId: "farm-1234567890abcdef1234567890abcdef",
 *   fleetId: "fleet-1234567890abcdef1234567890abcdef"
 * };
 * const command = new ListVolumesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ListVolumesCommand extends $Command
  .classBuilder<
    ListVolumesCommandInput,
    ListVolumesCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "ListVolumes", {})
  .n("DeadlineClient", "ListVolumesCommand")
  .sc(ListVolumes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVolumesRequest;
      output: ListVolumesResponse;
    };
    sdk: {
      input: ListVolumesCommandInput;
      output: ListVolumesCommandOutput;
    };
  };
}
