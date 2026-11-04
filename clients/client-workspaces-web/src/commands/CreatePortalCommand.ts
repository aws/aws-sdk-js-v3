// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePortalRequest, CreatePortalResponse } from "../models/models_0";
import { CreatePortal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePortalCommand}.
 */
export interface CreatePortalCommandInput extends CreatePortalRequest {}
/**
 * @public
 *
 * The output of {@link CreatePortalCommand}.
 */
export interface CreatePortalCommandOutput extends CreatePortalResponse, __MetadataBearer {}

/**
 * Creates a web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreatePortalCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreatePortalCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // CreatePortalRequest
 *   displayName: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   customerManagedKey: "STRING_VALUE",
 *   additionalEncryptionContext: { // EncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 *   authenticationType: "STRING_VALUE",
 *   instanceType: "STRING_VALUE",
 *   maxConcurrentSessions: Number("int"),
 *   portalCustomDomain: "STRING_VALUE",
 * };
 * const command = new CreatePortalCommand(input);
 * const response = await client.send(command);
 * // { // CreatePortalResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   portalEndpoint: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreatePortalCommandInput - {@link CreatePortalCommandInput}
 * @returns {@link CreatePortalCommandOutput}
 * @see {@link CreatePortalCommandInput} for command's `input` shape.
 * @see {@link CreatePortalCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
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
export class CreatePortalCommand extends command<CreatePortalCommandInput, CreatePortalCommandOutput>(
  _ep0,
  _mw0,
  "CreatePortal",
  CreatePortal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePortalRequest;
      output: CreatePortalResponse;
    };
    sdk: {
      input: CreatePortalCommandInput;
      output: CreatePortalCommandOutput;
    };
  };
}
