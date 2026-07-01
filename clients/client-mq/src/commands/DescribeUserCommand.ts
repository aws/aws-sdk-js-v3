// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeUserRequest, DescribeUserResponse } from "../models/models_0";
import { DescribeUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeUserCommand}.
 */
export interface DescribeUserCommandInput extends DescribeUserRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserCommand}.
 */
export interface DescribeUserCommandOutput extends DescribeUserResponse, __MetadataBearer {}

/**
 * <p>Returns information about an ActiveMQ user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeUserCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeUserCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // import type { MqClientConfig } from "@aws-sdk/client-mq";
 * const config = {}; // type is MqClientConfig
 * const client = new MqClient(config);
 * const input = { // DescribeUserRequest
 *   BrokerId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 * };
 * const command = new DescribeUserCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserResponse
 * //   BrokerId: "STRING_VALUE",
 * //   ConsoleAccess: true || false,
 * //   Groups: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   Pending: { // UserPendingChanges
 * //     ConsoleAccess: true || false,
 * //     Groups: [
 * //       "STRING_VALUE",
 * //     ],
 * //     PendingChange: "CREATE" || "UPDATE" || "DELETE", // required
 * //   },
 * //   Username: "STRING_VALUE",
 * //   ReplicationUser: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeUserCommandInput - {@link DescribeUserCommandInput}
 * @returns {@link DescribeUserCommandOutput}
 * @see {@link DescribeUserCommandInput} for command's `input` shape.
 * @see {@link DescribeUserCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 *
 * @public
 */
export class DescribeUserCommand extends command<DescribeUserCommandInput, DescribeUserCommandOutput>(
  _ep0,
  _mw0,
  "DescribeUser",
  DescribeUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUserRequest;
      output: DescribeUserResponse;
    };
    sdk: {
      input: DescribeUserCommandInput;
      output: DescribeUserCommandOutput;
    };
  };
}
