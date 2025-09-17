// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDirectoryRegistrationRequest, CreateDirectoryRegistrationResponse } from "../models/models_0";
import { PcaConnectorAdClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorAdClient";
import {
  de_CreateDirectoryRegistrationCommand,
  se_CreateDirectoryRegistrationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDirectoryRegistrationCommand}.
 */
export interface CreateDirectoryRegistrationCommandInput extends CreateDirectoryRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link CreateDirectoryRegistrationCommand}.
 */
export interface CreateDirectoryRegistrationCommandOutput
  extends CreateDirectoryRegistrationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a directory registration that authorizes communication between Amazon Web Services Private CA and an
 *          Active Directory</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, CreateDirectoryRegistrationCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, CreateDirectoryRegistrationCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * // import type { PcaConnectorAdClientConfig } from "@aws-sdk/client-pca-connector-ad";
 * const config = {}; // type is PcaConnectorAdClientConfig
 * const client = new PcaConnectorAdClient(config);
 * const input = { // CreateDirectoryRegistrationRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDirectoryRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDirectoryRegistrationResponse
 * //   DirectoryRegistrationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDirectoryRegistrationCommandInput - {@link CreateDirectoryRegistrationCommandInput}
 * @returns {@link CreateDirectoryRegistrationCommandOutput}
 * @see {@link CreateDirectoryRegistrationCommandInput} for command's `input` shape.
 * @see {@link CreateDirectoryRegistrationCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorAdClientResolvedConfig | config} for PcaConnectorAdClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You can receive this error if you attempt to create a resource share when you don't have
 *          the required permissions. This can be caused by insufficient permissions in policies
 *          attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *          because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *          that affects your Amazon Web Services account. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons because the requested
 *          resource was being concurrently modified by another request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with
 *          an internal server. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occurred. For example, invalid characters in a template name,
 *          or if a pagination token is invalid. </p>
 *
 * @throws {@link PcaConnectorAdServiceException}
 * <p>Base exception class for all service exceptions from PcaConnectorAd service.</p>
 *
 *
 * @public
 */
export class CreateDirectoryRegistrationCommand extends $Command
  .classBuilder<
    CreateDirectoryRegistrationCommandInput,
    CreateDirectoryRegistrationCommandOutput,
    PcaConnectorAdClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PcaConnectorAdClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PcaConnectorAd", "CreateDirectoryRegistration", {})
  .n("PcaConnectorAdClient", "CreateDirectoryRegistrationCommand")
  .f(void 0, void 0)
  .ser(se_CreateDirectoryRegistrationCommand)
  .de(de_CreateDirectoryRegistrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDirectoryRegistrationRequest;
      output: CreateDirectoryRegistrationResponse;
    };
    sdk: {
      input: CreateDirectoryRegistrationCommandInput;
      output: CreateDirectoryRegistrationCommandOutput;
    };
  };
}
