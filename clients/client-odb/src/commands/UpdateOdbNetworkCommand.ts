// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateOdbNetworkInput, UpdateOdbNetworkOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { UpdateOdbNetwork } from "../schemas/schemas_3_Cloud";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOdbNetworkCommand}.
 */
export interface UpdateOdbNetworkCommandInput extends UpdateOdbNetworkInput {}
/**
 * @public
 *
 * The output of {@link UpdateOdbNetworkCommand}.
 */
export interface UpdateOdbNetworkCommandOutput extends UpdateOdbNetworkOutput, __MetadataBearer {}

/**
 * <p>Updates properties of a specified ODB network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, UpdateOdbNetworkCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, UpdateOdbNetworkCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // UpdateOdbNetworkInput
 *   odbNetworkId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   peeredCidrsToBeAdded: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   peeredCidrsToBeRemoved: [
 *     "STRING_VALUE",
 *   ],
 *   s3Access: "ENABLED" || "DISABLED",
 *   zeroEtlAccess: "ENABLED" || "DISABLED",
 *   s3PolicyDocument: "STRING_VALUE",
 * };
 * const command = new UpdateOdbNetworkCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOdbNetworkOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   odbNetworkId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateOdbNetworkCommandInput - {@link UpdateOdbNetworkCommandInput}
 * @returns {@link UpdateOdbNetworkCommandOutput}
 * @see {@link UpdateOdbNetworkCommandInput} for command's `input` shape.
 * @see {@link UpdateOdbNetworkCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class UpdateOdbNetworkCommand extends $Command
  .classBuilder<
    UpdateOdbNetworkCommandInput,
    UpdateOdbNetworkCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "UpdateOdbNetwork", {})
  .n("OdbClient", "UpdateOdbNetworkCommand")
  .sc(UpdateOdbNetwork)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOdbNetworkInput;
      output: UpdateOdbNetworkOutput;
    };
    sdk: {
      input: UpdateOdbNetworkCommandInput;
      output: UpdateOdbNetworkCommandOutput;
    };
  };
}
