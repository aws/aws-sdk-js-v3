// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPortalsRequest, ListPortalsResponse } from "../models/models_0";
import { ListPortals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPortalsCommand}.
 */
export interface ListPortalsCommandInput extends ListPortalsRequest {}
/**
 * @public
 *
 * The output of {@link ListPortalsCommand}.
 */
export interface ListPortalsCommandOutput extends ListPortalsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list or web portals.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListPortalsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListPortalsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListPortalsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPortalsCommand(input);
 * const response = await client.send(command);
 * // { // ListPortalsResponse
 * //   portals: [ // PortalList
 * //     { // PortalSummary
 * //       portalArn: "STRING_VALUE", // required
 * //       rendererType: "STRING_VALUE",
 * //       browserType: "STRING_VALUE",
 * //       portalStatus: "STRING_VALUE",
 * //       portalEndpoint: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //       browserSettingsArn: "STRING_VALUE",
 * //       dataProtectionSettingsArn: "STRING_VALUE",
 * //       userSettingsArn: "STRING_VALUE",
 * //       networkSettingsArn: "STRING_VALUE",
 * //       sessionLoggerArn: "STRING_VALUE",
 * //       trustStoreArn: "STRING_VALUE",
 * //       userAccessLoggingSettingsArn: "STRING_VALUE",
 * //       authenticationType: "STRING_VALUE",
 * //       ipAccessSettingsArn: "STRING_VALUE",
 * //       instanceType: "STRING_VALUE",
 * //       maxConcurrentSessions: Number("int"),
 * //       portalCustomDomain: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPortalsCommandInput - {@link ListPortalsCommandInput}
 * @returns {@link ListPortalsCommandOutput}
 * @see {@link ListPortalsCommandInput} for command's `input` shape.
 * @see {@link ListPortalsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 *
 * @public
 */
export class ListPortalsCommand extends command<ListPortalsCommandInput, ListPortalsCommandOutput>(
  _ep0,
  _mw0,
  "ListPortals",
  ListPortals$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPortalsRequest;
      output: ListPortalsResponse;
    };
    sdk: {
      input: ListPortalsCommandInput;
      output: ListPortalsCommandOutput;
    };
  };
}
