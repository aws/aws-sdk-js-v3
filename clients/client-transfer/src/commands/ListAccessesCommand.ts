// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccessesRequest, ListAccessesResponse } from "../models/models_0";
import { de_ListAccessesCommand, se_ListAccessesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessesCommand}.
 */
export interface ListAccessesCommandInput extends ListAccessesRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessesCommand}.
 */
export interface ListAccessesCommandOutput extends ListAccessesResponse, __MetadataBearer {}

/**
 * <p>Lists the details for all the accesses you have on your server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListAccessesCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListAccessesCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // ListAccessesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ServerId: "STRING_VALUE", // required
 * };
 * const command = new ListAccessesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessesResponse
 * //   NextToken: "STRING_VALUE",
 * //   ServerId: "STRING_VALUE", // required
 * //   Accesses: [ // ListedAccesses // required
 * //     { // ListedAccess
 * //       HomeDirectory: "STRING_VALUE",
 * //       HomeDirectoryType: "PATH" || "LOGICAL",
 * //       Role: "STRING_VALUE",
 * //       ExternalId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccessesCommandInput - {@link ListAccessesCommandInput}
 * @returns {@link ListAccessesCommandOutput}
 * @see {@link ListAccessesCommandInput} for command's `input` shape.
 * @see {@link ListAccessesCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class ListAccessesCommand extends $Command
  .classBuilder<
    ListAccessesCommandInput,
    ListAccessesCommandOutput,
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
  .s("TransferService", "ListAccesses", {})
  .n("TransferClient", "ListAccessesCommand")
  .f(void 0, void 0)
  .ser(se_ListAccessesCommand)
  .de(de_ListAccessesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessesRequest;
      output: ListAccessesResponse;
    };
    sdk: {
      input: ListAccessesCommandInput;
      output: ListAccessesCommandOutput;
    };
  };
}
