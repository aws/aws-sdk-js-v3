// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGroupRequest, GetGroupResponse } from "../models/models_0";
import { GetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGroupCommand}.
 */
export interface GetGroupCommandInput extends GetGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupCommand}.
 */
export interface GetGroupCommandOutput extends GetGroupResponse, __MetadataBearer {}

/**
 * Returns information about one group. Groups are a global resource, so you can use this operation from any Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, GetGroupCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, GetGroupCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // GetGroupRequest
 *   GroupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupResponse
 * //   Group: { // Group
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGroupCommandInput - {@link GetGroupCommandInput}
 * @returns {@link GetGroupCommandOutput}
 * @see {@link GetGroupCommandInput} for command's `input` shape.
 * @see {@link GetGroupCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflicting operation is already in progress.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unknown internal error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One of the specified resources was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter could not be validated.
 *
 * @throws {@link SyntheticsServiceException}
 *
 * Base exception class for all service exceptions from Synthetics service.
 *
 * @public
 */
export class GetGroupCommand extends command<GetGroupCommandInput, GetGroupCommandOutput>(
  _ep0,
  _mw0,
  "GetGroup",
  GetGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupRequest;
      output: GetGroupResponse;
    };
    sdk: {
      input: GetGroupCommandInput;
      output: GetGroupCommandOutput;
    };
  };
}
