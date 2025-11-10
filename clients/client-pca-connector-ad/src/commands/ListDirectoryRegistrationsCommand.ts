// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDirectoryRegistrationsRequest, ListDirectoryRegistrationsResponse } from "../models/models_0";
import { PcaConnectorAdClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorAdClient";
import { ListDirectoryRegistrations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDirectoryRegistrationsCommand}.
 */
export interface ListDirectoryRegistrationsCommandInput extends ListDirectoryRegistrationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDirectoryRegistrationsCommand}.
 */
export interface ListDirectoryRegistrationsCommandOutput extends ListDirectoryRegistrationsResponse, __MetadataBearer {}

/**
 * <p>Lists the directory registrations that you created by using the <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration">https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration</a>
 *          action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, ListDirectoryRegistrationsCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, ListDirectoryRegistrationsCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * // import type { PcaConnectorAdClientConfig } from "@aws-sdk/client-pca-connector-ad";
 * const config = {}; // type is PcaConnectorAdClientConfig
 * const client = new PcaConnectorAdClient(config);
 * const input = { // ListDirectoryRegistrationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDirectoryRegistrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDirectoryRegistrationsResponse
 * //   DirectoryRegistrations: [ // DirectoryRegistrationList
 * //     { // DirectoryRegistrationSummary
 * //       Arn: "STRING_VALUE",
 * //       DirectoryId: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //       StatusReason: "DIRECTORY_ACCESS_DENIED" || "DIRECTORY_RESOURCE_NOT_FOUND" || "DIRECTORY_NOT_ACTIVE" || "DIRECTORY_NOT_REACHABLE" || "DIRECTORY_TYPE_NOT_SUPPORTED" || "INTERNAL_FAILURE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDirectoryRegistrationsCommandInput - {@link ListDirectoryRegistrationsCommandInput}
 * @returns {@link ListDirectoryRegistrationsCommandOutput}
 * @see {@link ListDirectoryRegistrationsCommandInput} for command's `input` shape.
 * @see {@link ListDirectoryRegistrationsCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorAdClientResolvedConfig | config} for PcaConnectorAdClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You can receive this error if you attempt to create a resource share when you don't have
 *          the required permissions. This can be caused by insufficient permissions in policies
 *          attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *          because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *          that affects your Amazon Web Services account. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with
 *          an internal server. </p>
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
export class ListDirectoryRegistrationsCommand extends $Command
  .classBuilder<
    ListDirectoryRegistrationsCommandInput,
    ListDirectoryRegistrationsCommandOutput,
    PcaConnectorAdClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PcaConnectorAdClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PcaConnectorAd", "ListDirectoryRegistrations", {})
  .n("PcaConnectorAdClient", "ListDirectoryRegistrationsCommand")
  .sc(ListDirectoryRegistrations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDirectoryRegistrationsRequest;
      output: ListDirectoryRegistrationsResponse;
    };
    sdk: {
      input: ListDirectoryRegistrationsCommandInput;
      output: ListDirectoryRegistrationsCommandOutput;
    };
  };
}
