// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSessionDataRequest, UpdateSessionDataResponse } from "../models/models_0";
import { UpdateSessionData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSessionDataCommand}.
 */
export interface UpdateSessionDataCommandInput extends UpdateSessionDataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSessionDataCommand}.
 */
export interface UpdateSessionDataCommandOutput extends UpdateSessionDataResponse, __MetadataBearer {}

/**
 * Updates the data stored on an Amazon Q in Connect Session.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, UpdateSessionDataCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, UpdateSessionDataCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // UpdateSessionDataRequest
 *   assistantId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE",
 *   data: [ // RuntimeSessionDataList // required
 *     { // RuntimeSessionData
 *       key: "STRING_VALUE", // required
 *       value: { // RuntimeSessionDataValue Union: only one key present
 *         stringValue: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateSessionDataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSessionDataResponse
 * //   sessionArn: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * //   namespace: "STRING_VALUE", // required
 * //   data: [ // RuntimeSessionDataList // required
 * //     { // RuntimeSessionData
 * //       key: "STRING_VALUE", // required
 * //       value: { // RuntimeSessionDataValue Union: only one key present
 * //         stringValue: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateSessionDataCommandInput - {@link UpdateSessionDataCommandInput}
 * @returns {@link UpdateSessionDataCommandOutput}
 * @see {@link UpdateSessionDataCommandInput} for command's `input` shape.
 * @see {@link UpdateSessionDataCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class UpdateSessionDataCommand extends command<UpdateSessionDataCommandInput, UpdateSessionDataCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSessionData",
  UpdateSessionData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSessionDataRequest;
      output: UpdateSessionDataResponse;
    };
    sdk: {
      input: UpdateSessionDataCommandInput;
      output: UpdateSessionDataCommandOutput;
    };
  };
}
