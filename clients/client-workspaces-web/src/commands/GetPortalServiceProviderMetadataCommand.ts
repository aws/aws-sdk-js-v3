// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetPortalServiceProviderMetadataRequest,
  GetPortalServiceProviderMetadataResponse,
} from "../models/models_0";
import { GetPortalServiceProviderMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPortalServiceProviderMetadataCommand}.
 */
export interface GetPortalServiceProviderMetadataCommandInput extends GetPortalServiceProviderMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetPortalServiceProviderMetadataCommand}.
 */
export interface GetPortalServiceProviderMetadataCommandOutput extends GetPortalServiceProviderMetadataResponse, __MetadataBearer {}

/**
 * Gets the service provider metadata.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetPortalServiceProviderMetadataCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetPortalServiceProviderMetadataCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetPortalServiceProviderMetadataRequest
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new GetPortalServiceProviderMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetPortalServiceProviderMetadataResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   serviceProviderSamlMetadata: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPortalServiceProviderMetadataCommandInput - {@link GetPortalServiceProviderMetadataCommandInput}
 * @returns {@link GetPortalServiceProviderMetadataCommandOutput}
 * @see {@link GetPortalServiceProviderMetadataCommandInput} for command's `input` shape.
 * @see {@link GetPortalServiceProviderMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @public
 */
export class GetPortalServiceProviderMetadataCommand extends command<GetPortalServiceProviderMetadataCommandInput, GetPortalServiceProviderMetadataCommandOutput>(
  _ep0,
  _mw0,
  "GetPortalServiceProviderMetadata",
  GetPortalServiceProviderMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPortalServiceProviderMetadataRequest;
      output: GetPortalServiceProviderMetadataResponse;
    };
    sdk: {
      input: GetPortalServiceProviderMetadataCommandInput;
      output: GetPortalServiceProviderMetadataCommandOutput;
    };
  };
}
