// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResiliencyGroupRequest, GetResiliencyGroupResult } from "../models/models_0";
import { GetResiliencyGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResiliencyGroupCommand}.
 */
export interface GetResiliencyGroupCommandInput extends GetResiliencyGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetResiliencyGroupCommand}.
 */
export interface GetResiliencyGroupCommandOutput extends GetResiliencyGroupResult, __MetadataBearer {}

/**
 * <p>Gets information about the specified resiliency group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, GetResiliencyGroupCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, GetResiliencyGroupCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // GetResiliencyGroupRequest
 *   resiliencyGroupId: "STRING_VALUE", // required
 * };
 * const command = new GetResiliencyGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetResiliencyGroupResult
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
 * @param GetResiliencyGroupCommandInput - {@link GetResiliencyGroupCommandInput}
 * @returns {@link GetResiliencyGroupCommandOutput}
 * @see {@link GetResiliencyGroupCommandInput} for command's `input` shape.
 * @see {@link GetResiliencyGroupCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class GetResiliencyGroupCommand extends command<GetResiliencyGroupCommandInput, GetResiliencyGroupCommandOutput>(
  _ep0,
  _mw0,
  "GetResiliencyGroup",
  GetResiliencyGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResiliencyGroupRequest;
      output: GetResiliencyGroupResult;
    };
    sdk: {
      input: GetResiliencyGroupCommandInput;
      output: GetResiliencyGroupCommandOutput;
    };
  };
}
