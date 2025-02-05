// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveEntityOwnerInput, RemoveEntityOwnerOutput } from "../models/models_1";
import { de_RemoveEntityOwnerCommand, se_RemoveEntityOwnerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveEntityOwnerCommand}.
 */
export interface RemoveEntityOwnerCommandInput extends RemoveEntityOwnerInput {}
/**
 * @public
 *
 * The output of {@link RemoveEntityOwnerCommand}.
 */
export interface RemoveEntityOwnerCommandOutput extends RemoveEntityOwnerOutput, __MetadataBearer {}

/**
 * <p>Removes an owner from an entity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, RemoveEntityOwnerCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, RemoveEntityOwnerCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataZoneClient(config);
 * const input = { // RemoveEntityOwnerInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityType: "DOMAIN_UNIT", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   owner: { // OwnerProperties Union: only one key present
 *     user: { // OwnerUserProperties
 *       userIdentifier: "STRING_VALUE", // required
 *     },
 *     group: { // OwnerGroupProperties
 *       groupIdentifier: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RemoveEntityOwnerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveEntityOwnerCommandInput - {@link RemoveEntityOwnerCommandInput}
 * @returns {@link RemoveEntityOwnerCommandOutput}
 * @see {@link RemoveEntityOwnerCommandInput} for command's `input` shape.
 * @see {@link RemoveEntityOwnerCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 * @public
 */
export class RemoveEntityOwnerCommand extends $Command
  .classBuilder<
    RemoveEntityOwnerCommandInput,
    RemoveEntityOwnerCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "RemoveEntityOwner", {})
  .n("DataZoneClient", "RemoveEntityOwnerCommand")
  .f(void 0, void 0)
  .ser(se_RemoveEntityOwnerCommand)
  .de(de_RemoveEntityOwnerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveEntityOwnerInput;
      output: {};
    };
    sdk: {
      input: RemoveEntityOwnerCommandInput;
      output: RemoveEntityOwnerCommandOutput;
    };
  };
}
