// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateSessionDataRequest,
  UpdateSessionDataRequestFilterSensitiveLog,
  UpdateSessionDataResponse,
  UpdateSessionDataResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateSessionDataCommand, se_UpdateSessionDataCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the data stored on an Amazon Q in Connect Session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, UpdateSessionDataCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, UpdateSessionDataCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class UpdateSessionDataCommand extends $Command
  .classBuilder<
    UpdateSessionDataCommandInput,
    UpdateSessionDataCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "UpdateSessionData", {})
  .n("QConnectClient", "UpdateSessionDataCommand")
  .f(UpdateSessionDataRequestFilterSensitiveLog, UpdateSessionDataResponseFilterSensitiveLog)
  .ser(se_UpdateSessionDataCommand)
  .de(de_UpdateSessionDataCommand)
  .build() {
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
