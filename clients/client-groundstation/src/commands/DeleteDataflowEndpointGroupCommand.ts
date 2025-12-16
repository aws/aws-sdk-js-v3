// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import type { DataflowEndpointGroupIdResponse, DeleteDataflowEndpointGroupRequest } from "../models/models_0";
import { DeleteDataflowEndpointGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataflowEndpointGroupCommand}.
 */
export interface DeleteDataflowEndpointGroupCommandInput extends DeleteDataflowEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataflowEndpointGroupCommand}.
 */
export interface DeleteDataflowEndpointGroupCommandOutput extends DataflowEndpointGroupIdResponse, __MetadataBearer {}

/**
 * <p>Deletes a dataflow endpoint group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DeleteDataflowEndpointGroupCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DeleteDataflowEndpointGroupCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // DeleteDataflowEndpointGroupRequest
 *   dataflowEndpointGroupId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataflowEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // { // DataflowEndpointGroupIdResponse
 * //   dataflowEndpointGroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDataflowEndpointGroupCommandInput - {@link DeleteDataflowEndpointGroupCommandInput}
 * @returns {@link DeleteDataflowEndpointGroupCommandOutput}
 * @see {@link DeleteDataflowEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDataflowEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class DeleteDataflowEndpointGroupCommand extends $Command
  .classBuilder<
    DeleteDataflowEndpointGroupCommandInput,
    DeleteDataflowEndpointGroupCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "DeleteDataflowEndpointGroup", {})
  .n("GroundStationClient", "DeleteDataflowEndpointGroupCommand")
  .sc(DeleteDataflowEndpointGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataflowEndpointGroupRequest;
      output: DataflowEndpointGroupIdResponse;
    };
    sdk: {
      input: DeleteDataflowEndpointGroupCommandInput;
      output: DeleteDataflowEndpointGroupCommandOutput;
    };
  };
}
