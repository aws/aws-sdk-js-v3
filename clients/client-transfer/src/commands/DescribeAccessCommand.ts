// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAccessRequest, DescribeAccessResponse } from "../models/models_0";
import { DescribeAccess } from "../schemas/schemas_7_User";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccessCommand}.
 */
export interface DescribeAccessCommandInput extends DescribeAccessRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccessCommand}.
 */
export interface DescribeAccessCommandOutput extends DescribeAccessResponse, __MetadataBearer {}

/**
 * <p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalId</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // DescribeAccessRequest
 *   ServerId: "STRING_VALUE", // required
 *   ExternalId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAccessCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccessResponse
 * //   ServerId: "STRING_VALUE", // required
 * //   Access: { // DescribedAccess
 * //     HomeDirectory: "STRING_VALUE",
 * //     HomeDirectoryMappings: [ // HomeDirectoryMappings
 * //       { // HomeDirectoryMapEntry
 * //         Entry: "STRING_VALUE", // required
 * //         Target: "STRING_VALUE", // required
 * //         Type: "FILE" || "DIRECTORY",
 * //       },
 * //     ],
 * //     HomeDirectoryType: "PATH" || "LOGICAL",
 * //     Policy: "STRING_VALUE",
 * //     PosixProfile: { // PosixProfile
 * //       Uid: Number("long"), // required
 * //       Gid: Number("long"), // required
 * //       SecondaryGids: [ // SecondaryGids
 * //         Number("long"),
 * //       ],
 * //     },
 * //     Role: "STRING_VALUE",
 * //     ExternalId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAccessCommandInput - {@link DescribeAccessCommandInput}
 * @returns {@link DescribeAccessCommandOutput}
 * @see {@link DescribeAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
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
export class DescribeAccessCommand extends $Command
  .classBuilder<
    DescribeAccessCommandInput,
    DescribeAccessCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "DescribeAccess", {})
  .n("TransferClient", "DescribeAccessCommand")
  .sc(DescribeAccess)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccessRequest;
      output: DescribeAccessResponse;
    };
    sdk: {
      input: DescribeAccessCommandInput;
      output: DescribeAccessCommandOutput;
    };
  };
}
