// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDirectoryRegistrationRequest, GetDirectoryRegistrationResponse } from "../models/models_0";
import { GetDirectoryRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDirectoryRegistrationCommand}.
 */
export interface GetDirectoryRegistrationCommandInput extends GetDirectoryRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link GetDirectoryRegistrationCommand}.
 */
export interface GetDirectoryRegistrationCommandOutput extends GetDirectoryRegistrationResponse, __MetadataBearer {}

/**
 * A structure that contains information about your directory registration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, GetDirectoryRegistrationCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, GetDirectoryRegistrationCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * // import type { PcaConnectorAdClientConfig } from "@aws-sdk/client-pca-connector-ad";
 * const config = {}; // type is PcaConnectorAdClientConfig
 * const client = new PcaConnectorAdClient(config);
 * const input = { // GetDirectoryRegistrationRequest
 *   DirectoryRegistrationArn: "STRING_VALUE", // required
 * };
 * const command = new GetDirectoryRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // GetDirectoryRegistrationResponse
 * //   DirectoryRegistration: { // DirectoryRegistration
 * //     Arn: "STRING_VALUE",
 * //     DirectoryId: "STRING_VALUE",
 * //     Status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //     StatusReason: "DIRECTORY_ACCESS_DENIED" || "DIRECTORY_RESOURCE_NOT_FOUND" || "DIRECTORY_NOT_ACTIVE" || "DIRECTORY_NOT_REACHABLE" || "DIRECTORY_TYPE_NOT_SUPPORTED" || "INTERNAL_FAILURE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDirectoryRegistrationCommandInput - {@link GetDirectoryRegistrationCommandInput}
 * @returns {@link GetDirectoryRegistrationCommandOutput}
 * @see {@link GetDirectoryRegistrationCommandInput} for command's `input` shape.
 * @see {@link GetDirectoryRegistrationCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorAdClientResolvedConfig | config} for PcaConnectorAdClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You can receive this error if you attempt to create a resource share when you don't have the required permissions. This can be caused by insufficient permissions in policies attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP) that affects your Amazon Web Services account.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent resource. The resource might not be specified correctly, or its status might not be ACTIVE.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An input validation error occurred. For example, invalid characters in a template name, or if a pagination token is invalid.
 *
 * @throws {@link PcaConnectorAdServiceException}
 *
 * Base exception class for all service exceptions from PcaConnectorAd service.
 *
 * @public
 */
export class GetDirectoryRegistrationCommand extends command<GetDirectoryRegistrationCommandInput, GetDirectoryRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "GetDirectoryRegistration",
  GetDirectoryRegistration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDirectoryRegistrationRequest;
      output: GetDirectoryRegistrationResponse;
    };
    sdk: {
      input: GetDirectoryRegistrationCommandInput;
      output: GetDirectoryRegistrationCommandOutput;
    };
  };
}
