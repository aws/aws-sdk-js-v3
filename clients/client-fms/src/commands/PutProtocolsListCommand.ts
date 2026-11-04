// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutProtocolsListRequest, PutProtocolsListResponse } from "../models/models_0";
import { PutProtocolsList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutProtocolsListCommand}.
 */
export interface PutProtocolsListCommandInput extends PutProtocolsListRequest {}
/**
 * @public
 *
 * The output of {@link PutProtocolsListCommand}.
 */
export interface PutProtocolsListCommandOutput extends PutProtocolsListResponse, __MetadataBearer {}

/**
 * Creates an Firewall Manager protocols list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutProtocolsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutProtocolsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // PutProtocolsListRequest
 *   ProtocolsList: { // ProtocolsListData
 *     ListId: "STRING_VALUE",
 *     ListName: "STRING_VALUE", // required
 *     ListUpdateToken: "STRING_VALUE",
 *     CreateTime: new Date("TIMESTAMP"),
 *     LastUpdateTime: new Date("TIMESTAMP"),
 *     ProtocolsList: [ // ProtocolsList // required
 *       "STRING_VALUE",
 *     ],
 *     PreviousProtocolsList: { // PreviousProtocolsList
 *       "<keys>": [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   TagList: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutProtocolsListCommand(input);
 * const response = await client.send(command);
 * // { // PutProtocolsListResponse
 * //   ProtocolsList: { // ProtocolsListData
 * //     ListId: "STRING_VALUE",
 * //     ListName: "STRING_VALUE", // required
 * //     ListUpdateToken: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     LastUpdateTime: new Date("TIMESTAMP"),
 * //     ProtocolsList: [ // ProtocolsList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     PreviousProtocolsList: { // PreviousProtocolsList
 * //       "<keys>": [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   ProtocolsListArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutProtocolsListCommandInput - {@link PutProtocolsListCommandInput}
 * @returns {@link PutProtocolsListCommandOutput}
 * @see {@link PutProtocolsListCommandInput} for command's `input` shape.
 * @see {@link PutProtocolsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The parameters of the request were invalid.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have submitted an `AssociateAdminAccount` request for an account ID that was already set as the Firewall Manager administrator. Or you might have tried to access a Region that's disabled by default, and that you need to enable for the Firewall Manager administrator account and for Organizations before you can access it.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The operation exceeds a resource limit, for example, the maximum number of `policy` objects that you can create for an Amazon Web Services account. For more information, see [Firewall Manager Limits](https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html) in the *WAF Developer Guide*.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link FMSServiceException}
 *
 * Base exception class for all service exceptions from FMS service.
 *
 * @public
 */
export class PutProtocolsListCommand extends command<PutProtocolsListCommandInput, PutProtocolsListCommandOutput>(
  _ep0,
  _mw0,
  "PutProtocolsList",
  PutProtocolsList$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutProtocolsListRequest;
      output: PutProtocolsListResponse;
    };
    sdk: {
      input: PutProtocolsListCommandInput;
      output: PutProtocolsListCommandOutput;
    };
  };
}
