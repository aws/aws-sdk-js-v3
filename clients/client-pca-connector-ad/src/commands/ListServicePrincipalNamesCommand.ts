// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListServicePrincipalNamesRequest, ListServicePrincipalNamesResponse } from "../models/models_0";
import { PcaConnectorAdClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorAdClient";
import { ListServicePrincipalNames } from "../schemas/schemas_3_ServicePrincipal";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServicePrincipalNamesCommand}.
 */
export interface ListServicePrincipalNamesCommandInput extends ListServicePrincipalNamesRequest {}
/**
 * @public
 *
 * The output of {@link ListServicePrincipalNamesCommand}.
 */
export interface ListServicePrincipalNamesCommandOutput extends ListServicePrincipalNamesResponse, __MetadataBearer {}

/**
 * <p>Lists the service principal names that the connector uses to authenticate with
 *          Active Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, ListServicePrincipalNamesCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, ListServicePrincipalNamesCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * // import type { PcaConnectorAdClientConfig } from "@aws-sdk/client-pca-connector-ad";
 * const config = {}; // type is PcaConnectorAdClientConfig
 * const client = new PcaConnectorAdClient(config);
 * const input = { // ListServicePrincipalNamesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DirectoryRegistrationArn: "STRING_VALUE", // required
 * };
 * const command = new ListServicePrincipalNamesCommand(input);
 * const response = await client.send(command);
 * // { // ListServicePrincipalNamesResponse
 * //   ServicePrincipalNames: [ // ServicePrincipalNameList
 * //     { // ServicePrincipalNameSummary
 * //       DirectoryRegistrationArn: "STRING_VALUE",
 * //       ConnectorArn: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //       StatusReason: "DIRECTORY_ACCESS_DENIED" || "DIRECTORY_NOT_REACHABLE" || "DIRECTORY_RESOURCE_NOT_FOUND" || "SPN_EXISTS_ON_DIFFERENT_AD_OBJECT" || "SPN_LIMIT_EXCEEDED" || "INTERNAL_FAILURE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServicePrincipalNamesCommandInput - {@link ListServicePrincipalNamesCommandInput}
 * @returns {@link ListServicePrincipalNamesCommandOutput}
 * @see {@link ListServicePrincipalNamesCommandInput} for command's `input` shape.
 * @see {@link ListServicePrincipalNamesCommandOutput} for command's `response` shape.
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
export class ListServicePrincipalNamesCommand extends $Command
  .classBuilder<
    ListServicePrincipalNamesCommandInput,
    ListServicePrincipalNamesCommandOutput,
    PcaConnectorAdClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PcaConnectorAdClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PcaConnectorAd", "ListServicePrincipalNames", {})
  .n("PcaConnectorAdClient", "ListServicePrincipalNamesCommand")
  .sc(ListServicePrincipalNames)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServicePrincipalNamesRequest;
      output: ListServicePrincipalNamesResponse;
    };
    sdk: {
      input: ListServicePrincipalNamesCommandInput;
      output: ListServicePrincipalNamesCommandOutput;
    };
  };
}
