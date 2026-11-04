// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutGroupConfigurationInput, PutGroupConfigurationOutput } from "../models/models_0";
import { PutGroupConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutGroupConfigurationCommand}.
 */
export interface PutGroupConfigurationCommandInput extends PutGroupConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutGroupConfigurationCommand}.
 */
export interface PutGroupConfigurationCommandOutput extends PutGroupConfigurationOutput, __MetadataBearer {}

/**
 * Attaches a service configuration to the specified group. This occurs asynchronously, and can take time to complete. You can use GetGroupConfiguration to check the status of the update.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:PutGroupConfiguration`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, PutGroupConfigurationCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, PutGroupConfigurationCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // PutGroupConfigurationInput
 *   Group: "STRING_VALUE",
 *   Configuration: [ // GroupConfigurationList
 *     { // GroupConfigurationItem
 *       Type: "STRING_VALUE", // required
 *       Parameters: [ // GroupParameterList
 *         { // GroupConfigurationParameter
 *           Name: "STRING_VALUE", // required
 *           Values: [ // GroupConfigurationParameterValueList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutGroupConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutGroupConfigurationCommandInput - {@link PutGroupConfigurationCommandInput}
 * @returns {@link PutGroupConfigurationCommandOutput}
 * @see {@link PutGroupConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutGroupConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for ResourceGroupsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request includes one or more parameters that violate validation rules.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The caller isn't authorized to make the request. Check permissions.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal error occurred while processing the request. Try again later.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * The request uses an HTTP method that isn't allowed for the specified resource.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the specified resources don't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * You've exceeded throttling limits by making too many requests in a period of time.
 *
 * @throws {@link ResourceGroupsServiceException}
 *
 * Base exception class for all service exceptions from ResourceGroups service.
 *
 * @public
 */
export class PutGroupConfigurationCommand extends command<PutGroupConfigurationCommandInput, PutGroupConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutGroupConfiguration",
  PutGroupConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutGroupConfigurationInput;
      output: {};
    };
    sdk: {
      input: PutGroupConfigurationCommandInput;
      output: PutGroupConfigurationCommandOutput;
    };
  };
}
