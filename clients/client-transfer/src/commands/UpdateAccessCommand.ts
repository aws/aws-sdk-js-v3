// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAccessRequest, UpdateAccessResponse } from "../models/models_0";
import { de_UpdateAccessCommand, se_UpdateAccessCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccessCommand}.
 */
export interface UpdateAccessCommandInput extends UpdateAccessRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessCommand}.
 */
export interface UpdateAccessCommandOutput extends UpdateAccessResponse, __MetadataBearer {}

/**
 * <p>Allows you to update parameters for the access specified in the <code>ServerID</code> and
 *       <code>ExternalID</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // UpdateAccessRequest
 *   HomeDirectory: "STRING_VALUE",
 *   HomeDirectoryType: "PATH" || "LOGICAL",
 *   HomeDirectoryMappings: [ // HomeDirectoryMappings
 *     { // HomeDirectoryMapEntry
 *       Entry: "STRING_VALUE", // required
 *       Target: "STRING_VALUE", // required
 *       Type: "FILE" || "DIRECTORY",
 *     },
 *   ],
 *   Policy: "STRING_VALUE",
 *   PosixProfile: { // PosixProfile
 *     Uid: Number("long"), // required
 *     Gid: Number("long"), // required
 *     SecondaryGids: [ // SecondaryGids
 *       Number("long"),
 *     ],
 *   },
 *   Role: "STRING_VALUE",
 *   ServerId: "STRING_VALUE", // required
 *   ExternalId: "STRING_VALUE", // required
 * };
 * const command = new UpdateAccessCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccessResponse
 * //   ServerId: "STRING_VALUE", // required
 * //   ExternalId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateAccessCommandInput - {@link UpdateAccessCommandInput}
 * @returns {@link UpdateAccessCommandOutput}
 * @see {@link UpdateAccessCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The requested resource does not exist, or exists in a region other than the one specified for the command.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class UpdateAccessCommand extends $Command
  .classBuilder<
    UpdateAccessCommandInput,
    UpdateAccessCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TransferService", "UpdateAccess", {})
  .n("TransferClient", "UpdateAccessCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAccessCommand)
  .de(de_UpdateAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessRequest;
      output: UpdateAccessResponse;
    };
    sdk: {
      input: UpdateAccessCommandInput;
      output: UpdateAccessCommandOutput;
    };
  };
}
