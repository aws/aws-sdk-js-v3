// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccessRequest, CreateAccessResponse } from "../models/models_0";
import { CreateAccess } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessCommand}.
 */
export interface CreateAccessCommandInput extends CreateAccessRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessCommand}.
 */
export interface CreateAccessCommandOutput extends CreateAccessResponse, __MetadataBearer {}

/**
 * <p>Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // CreateAccessRequest
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
 *   Role: "STRING_VALUE", // required
 *   ServerId: "STRING_VALUE", // required
 *   ExternalId: "STRING_VALUE", // required
 * };
 * const command = new CreateAccessCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessResponse
 * //   ServerId: "STRING_VALUE", // required
 * //   ExternalId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAccessCommandInput - {@link CreateAccessCommandInput}
 * @returns {@link CreateAccessCommandOutput}
 * @see {@link CreateAccessCommandInput} for command's `input` shape.
 * @see {@link CreateAccessCommandOutput} for command's `response` shape.
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
export class CreateAccessCommand extends $Command
  .classBuilder<
    CreateAccessCommandInput,
    CreateAccessCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "CreateAccess", {})
  .n("TransferClient", "CreateAccessCommand")
  .sc(CreateAccess)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessRequest;
      output: CreateAccessResponse;
    };
    sdk: {
      input: CreateAccessCommandInput;
      output: CreateAccessCommandOutput;
    };
  };
}
