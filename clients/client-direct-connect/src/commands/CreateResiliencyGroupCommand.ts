// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateResiliencyGroupRequest, CreateResiliencyGroupResult } from "../models/models_0";
import { CreateResiliencyGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateResiliencyGroupCommand}.
 */
export interface CreateResiliencyGroupCommandInput extends CreateResiliencyGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateResiliencyGroupCommand}.
 */
export interface CreateResiliencyGroupCommandOutput extends CreateResiliencyGroupResult, __MetadataBearer {}

/**
 * <p>Creates a resiliency group. A resiliency group lets you group Direct Connect connections together
 *       and manage them as a single unit to meet a target resiliency model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateResiliencyGroupCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateResiliencyGroupCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // CreateResiliencyGroupRequest
 *   resiliencyGroupName: "STRING_VALUE", // required
 *   intendedResiliencyModel: "maximum-resiliency" || "high-resiliency" || "basic-resiliency", // required
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateResiliencyGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateResiliencyGroupResult
 * //   resiliencyGroup: { // ResiliencyGroup
 * //     resiliencyGroupId: "STRING_VALUE",
 * //     resiliencyGroupArn: "STRING_VALUE",
 * //     resiliencyGroupName: "STRING_VALUE",
 * //     resiliencyGroupType: "Managed",
 * //     ownerAccount: "STRING_VALUE",
 * //     state: "pending" || "available" || "deleting" || "deleted",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateResiliencyGroupCommandInput - {@link CreateResiliencyGroupCommandInput}
 * @returns {@link CreateResiliencyGroupCommandOutput}
 * @see {@link CreateResiliencyGroupCommandInput} for command's `input` shape.
 * @see {@link CreateResiliencyGroupCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DuplicateTagKeysException} (client fault)
 *  <p>A tag key was specified more than once.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The rate limiter limit has been exceeded for the connection. You cannot add more rate limiters to virtual interfaces on this connection.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have reached the limit on the number of tags that can be assigned.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class CreateResiliencyGroupCommand extends command<CreateResiliencyGroupCommandInput, CreateResiliencyGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateResiliencyGroup",
  CreateResiliencyGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResiliencyGroupRequest;
      output: CreateResiliencyGroupResult;
    };
    sdk: {
      input: CreateResiliencyGroupCommandInput;
      output: CreateResiliencyGroupCommandOutput;
    };
  };
}
