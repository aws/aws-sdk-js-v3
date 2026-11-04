// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLinksRequest, GetLinksResponse } from "../models/models_0";
import { GetLinks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLinksCommand}.
 */
export interface GetLinksCommandInput extends GetLinksRequest {}
/**
 * @public
 *
 * The output of {@link GetLinksCommand}.
 */
export interface GetLinksCommandOutput extends GetLinksResponse, __MetadataBearer {}

/**
 * Gets information about one or more links in a specified global network.
 *
 * If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetLinksCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetLinksCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetLinksRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   LinkIds: [ // LinkIdList
 *     "STRING_VALUE",
 *   ],
 *   SiteId: "STRING_VALUE",
 *   Type: "STRING_VALUE",
 *   Provider: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetLinksCommand(input);
 * const response = await client.send(command);
 * // { // GetLinksResponse
 * //   Links: [ // LinkList
 * //     { // Link
 * //       LinkId: "STRING_VALUE",
 * //       LinkArn: "STRING_VALUE",
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       SiteId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Bandwidth: { // Bandwidth
 * //         UploadSpeed: Number("int"),
 * //         DownloadSpeed: Number("int"),
 * //       },
 * //       Provider: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       State: "PENDING" || "AVAILABLE" || "DELETING" || "UPDATING",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLinksCommandInput - {@link GetLinksCommandInput}
 * @returns {@link GetLinksCommandOutput}
 * @see {@link GetLinksCommandInput} for command's `input` shape.
 * @see {@link GetLinksCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class GetLinksCommand extends command<GetLinksCommandInput, GetLinksCommandOutput>(
  _ep0,
  _mw0,
  "GetLinks",
  GetLinks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLinksRequest;
      output: GetLinksResponse;
    };
    sdk: {
      input: GetLinksCommandInput;
      output: GetLinksCommandOutput;
    };
  };
}
