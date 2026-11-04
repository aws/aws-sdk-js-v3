// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAppsRequest, GetAppsResponse } from "../models/models_0";
import { GetApps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAppsCommand}.
 */
export interface GetAppsCommandInput extends GetAppsRequest {}
/**
 * @public
 *
 * The output of {@link GetAppsCommand}.
 */
export interface GetAppsCommandOutput extends GetAppsResponse, __MetadataBearer {}

/**
 * Retrieves information about all the applications that are associated with your Amazon Pinpoint account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetAppsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetAppsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetAppsRequest
 *   PageSize: "STRING_VALUE",
 *   Token: "STRING_VALUE",
 * };
 * const command = new GetAppsCommand(input);
 * const response = await client.send(command);
 * // { // GetAppsResponse
 * //   ApplicationsResponse: { // ApplicationsResponse
 * //     Item: [ // ListOfApplicationResponse
 * //       { // ApplicationResponse
 * //         Arn: "STRING_VALUE", // required
 * //         Id: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         tags: { // MapOf__string
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         CreationDate: "STRING_VALUE",
 * //       },
 * //     ],
 * //     NextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAppsCommandInput - {@link GetAppsCommandInput}
 * @returns {@link GetAppsCommandOutput}
 * @see {@link GetAppsCommandInput} for command's `input` shape.
 * @see {@link GetAppsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link PinpointServiceException}
 *
 * Base exception class for all service exceptions from Pinpoint service.
 *
 * @public
 */
export class GetAppsCommand extends command<GetAppsCommandInput, GetAppsCommandOutput>(
  _ep0,
  _mw0,
  "GetApps",
  GetApps$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAppsRequest;
      output: GetAppsResponse;
    };
    sdk: {
      input: GetAppsCommandInput;
      output: GetAppsCommandOutput;
    };
  };
}
