// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateConfigurationRequest, UpdateConfigurationResponse } from "../models/models_0";
import { UpdateConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationCommand}.
 */
export interface UpdateConfigurationCommandInput extends UpdateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationCommand}.
 */
export interface UpdateConfigurationCommandOutput extends UpdateConfigurationResponse, __MetadataBearer {}

/**
 * Updates the specified configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, UpdateConfigurationCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, UpdateConfigurationCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // import type { MqClientConfig } from "@aws-sdk/client-mq";
 * const config = {}; // type is MqClientConfig
 * const client = new MqClient(config);
 * const input = { // UpdateConfigurationRequest
 *   ConfigurationId: "STRING_VALUE", // required
 *   Data: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConfigurationResponse
 * //   Arn: "STRING_VALUE",
 * //   Created: new Date("TIMESTAMP"),
 * //   Id: "STRING_VALUE",
 * //   LatestRevision: { // ConfigurationRevision
 * //     Created: new Date("TIMESTAMP"), // required
 * //     Description: "STRING_VALUE",
 * //     Revision: Number("int"), // required
 * //   },
 * //   Name: "STRING_VALUE",
 * //   Warnings: [ // __listOfSanitizationWarning
 * //     { // SanitizationWarning
 * //       AttributeName: "STRING_VALUE",
 * //       ElementName: "STRING_VALUE",
 * //       Reason: "DISALLOWED_ELEMENT_REMOVED" || "DISALLOWED_ATTRIBUTE_REMOVED" || "INVALID_ATTRIBUTE_VALUE_REMOVED", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateConfigurationCommandInput - {@link UpdateConfigurationCommandInput}
 * @returns {@link UpdateConfigurationCommandOutput}
 * @see {@link UpdateConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * Returns information about an error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link MqServiceException}
 *
 * Base exception class for all service exceptions from Mq service.
 *
 * @public
 */
export class UpdateConfigurationCommand extends command<UpdateConfigurationCommandInput, UpdateConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConfiguration",
  UpdateConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfigurationRequest;
      output: UpdateConfigurationResponse;
    };
    sdk: {
      input: UpdateConfigurationCommandInput;
      output: UpdateConfigurationCommandOutput;
    };
  };
}
