// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UntagInput, UntagOutput } from "../models/models_0";
import { Untag$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UntagCommand}.
 */
export interface UntagCommandInput extends UntagInput {}
/**
 * @public
 *
 * The output of {@link UntagCommand}.
 */
export interface UntagCommandOutput extends UntagOutput, __MetadataBearer {}

/**
 * Deletes tags from a specified resource group.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:Untag`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, UntagCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, UntagCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // UntagInput
 *   Arn: "STRING_VALUE", // required
 *   Keys: [ // TagKeyList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagCommand(input);
 * const response = await client.send(command);
 * // { // UntagOutput
 * //   Arn: "STRING_VALUE",
 * //   Keys: [ // TagKeyList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UntagCommandInput - {@link UntagCommandInput}
 * @returns {@link UntagCommandOutput}
 * @see {@link UntagCommandInput} for command's `input` shape.
 * @see {@link UntagCommandOutput} for command's `response` shape.
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
export class UntagCommand extends command<UntagCommandInput, UntagCommandOutput>(
  _ep0,
  _mw0,
  "Untag",
  Untag$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagInput;
      output: UntagOutput;
    };
    sdk: {
      input: UntagCommandInput;
      output: UntagCommandOutput;
    };
  };
}
