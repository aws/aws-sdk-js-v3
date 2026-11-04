// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteUserEndpointsRequest, DeleteUserEndpointsResponse } from "../models/models_0";
import { DeleteUserEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteUserEndpointsCommand}.
 */
export interface DeleteUserEndpointsCommandInput extends DeleteUserEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserEndpointsCommand}.
 */
export interface DeleteUserEndpointsCommandOutput extends DeleteUserEndpointsResponse, __MetadataBearer {}

/**
 * Deletes all the endpoints that are associated with a specific user ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteUserEndpointsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteUserEndpointsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteUserEndpointsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteUserEndpointsResponse
 * //   EndpointsResponse: { // EndpointsResponse
 * //     Item: [ // ListOfEndpointResponse // required
 * //       { // EndpointResponse
 * //         Address: "STRING_VALUE",
 * //         ApplicationId: "STRING_VALUE",
 * //         Attributes: { // MapOfListOf__string
 * //           "<keys>": [ // ListOf__string
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         ChannelType: "PUSH" || "GCM" || "APNS" || "APNS_SANDBOX" || "APNS_VOIP" || "APNS_VOIP_SANDBOX" || "ADM" || "SMS" || "VOICE" || "EMAIL" || "BAIDU" || "CUSTOM" || "IN_APP",
 * //         CohortId: "STRING_VALUE",
 * //         CreationDate: "STRING_VALUE",
 * //         Demographic: { // EndpointDemographic
 * //           AppVersion: "STRING_VALUE",
 * //           Locale: "STRING_VALUE",
 * //           Make: "STRING_VALUE",
 * //           Model: "STRING_VALUE",
 * //           ModelVersion: "STRING_VALUE",
 * //           Platform: "STRING_VALUE",
 * //           PlatformVersion: "STRING_VALUE",
 * //           Timezone: "STRING_VALUE",
 * //         },
 * //         EffectiveDate: "STRING_VALUE",
 * //         EndpointStatus: "STRING_VALUE",
 * //         Id: "STRING_VALUE",
 * //         Location: { // EndpointLocation
 * //           City: "STRING_VALUE",
 * //           Country: "STRING_VALUE",
 * //           Latitude: Number("double"),
 * //           Longitude: Number("double"),
 * //           PostalCode: "STRING_VALUE",
 * //           Region: "STRING_VALUE",
 * //         },
 * //         Metrics: { // MapOf__double
 * //           "<keys>": Number("double"),
 * //         },
 * //         OptOut: "STRING_VALUE",
 * //         RequestId: "STRING_VALUE",
 * //         User: { // EndpointUser
 * //           UserAttributes: {
 * //             "<keys>": [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           UserId: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteUserEndpointsCommandInput - {@link DeleteUserEndpointsCommandInput}
 * @returns {@link DeleteUserEndpointsCommandOutput}
 * @see {@link DeleteUserEndpointsCommandInput} for command's `input` shape.
 * @see {@link DeleteUserEndpointsCommandOutput} for command's `response` shape.
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
export class DeleteUserEndpointsCommand extends command<DeleteUserEndpointsCommandInput, DeleteUserEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteUserEndpoints",
  DeleteUserEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserEndpointsRequest;
      output: DeleteUserEndpointsResponse;
    };
    sdk: {
      input: DeleteUserEndpointsCommandInput;
      output: DeleteUserEndpointsCommandOutput;
    };
  };
}
