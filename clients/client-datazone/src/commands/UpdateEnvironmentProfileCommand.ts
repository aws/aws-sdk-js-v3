// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateEnvironmentProfileInput,
  UpdateEnvironmentProfileInputFilterSensitiveLog,
  UpdateEnvironmentProfileOutput,
  UpdateEnvironmentProfileOutputFilterSensitiveLog,
} from "../models/models_2";
import { de_UpdateEnvironmentProfileCommand, se_UpdateEnvironmentProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentProfileCommand}.
 */
export interface UpdateEnvironmentProfileCommandInput extends UpdateEnvironmentProfileInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentProfileCommand}.
 */
export interface UpdateEnvironmentProfileCommandOutput extends UpdateEnvironmentProfileOutput, __MetadataBearer {}

/**
 * <p>Updates the specified environment profile in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateEnvironmentProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateEnvironmentProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // UpdateEnvironmentProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   userParameters: [ // EnvironmentParametersList
 *     { // EnvironmentParameter
 *       name: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   awsAccountId: "STRING_VALUE",
 *   awsAccountRegion: "STRING_VALUE",
 * };
 * const command = new UpdateEnvironmentProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentProfileOutput
 * //   id: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   awsAccountId: "STRING_VALUE",
 * //   awsAccountRegion: "STRING_VALUE",
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   environmentBlueprintId: "STRING_VALUE", // required
 * //   projectId: "STRING_VALUE",
 * //   userParameters: [ // CustomParameterList
 * //     { // CustomParameter
 * //       keyName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       fieldType: "STRING_VALUE", // required
 * //       defaultValue: "STRING_VALUE",
 * //       isEditable: true || false,
 * //       isOptional: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentProfileCommandInput - {@link UpdateEnvironmentProfileCommandInput}
 * @returns {@link UpdateEnvironmentProfileCommandOutput}
 * @see {@link UpdateEnvironmentProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentProfileCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
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
export class UpdateEnvironmentProfileCommand extends $Command
  .classBuilder<
    UpdateEnvironmentProfileCommandInput,
    UpdateEnvironmentProfileCommandOutput,
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
  .s("DataZone", "UpdateEnvironmentProfile", {})
  .n("DataZoneClient", "UpdateEnvironmentProfileCommand")
  .f(UpdateEnvironmentProfileInputFilterSensitiveLog, UpdateEnvironmentProfileOutputFilterSensitiveLog)
  .ser(se_UpdateEnvironmentProfileCommand)
  .de(de_UpdateEnvironmentProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentProfileInput;
      output: UpdateEnvironmentProfileOutput;
    };
    sdk: {
      input: UpdateEnvironmentProfileCommandInput;
      output: UpdateEnvironmentProfileCommandOutput;
    };
  };
}
