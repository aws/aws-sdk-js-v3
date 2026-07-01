// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDepotUrlRequest, GetDepotUrlResponse } from "../models/models_0";
import { GetDepotUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDepotUrlCommand}.
 */
export interface GetDepotUrlCommandInput extends GetDepotUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetDepotUrlCommand}.
 */
export interface GetDepotUrlCommandOutput extends GetDepotUrlResponse, __MetadataBearer {}

/**
 * <p>Returns a URL and authentication token for accessing the Amazon EVS Custom Addon depot. Configure the depot URL as a download source in vSphere Lifecycle Manager (vLCM) to sync and install the Amazon EVS Custom Addon.</p> <p>The depot URL remains active until you rotate the authentication token by calling this action with <code>rotate</code> set to <code>true</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, GetDepotUrlCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, GetDepotUrlCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // GetDepotUrlRequest
 *   environmentId: "STRING_VALUE", // required
 *   rotate: true || false,
 * };
 * const command = new GetDepotUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetDepotUrlResponse
 * //   depotUrl: "STRING_VALUE", // required
 * //   token: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetDepotUrlCommandInput - {@link GetDepotUrlCommandInput}
 * @returns {@link GetDepotUrlCommandOutput}
 * @see {@link GetDepotUrlCommandInput} for command's `input` shape.
 * @see {@link GetDepotUrlCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A service resource associated with the request could not be found. The resource might not be specified correctly, or it may have a <code>state</code> of <code>DELETED</code>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The operation could not be performed because the service is throttling requests. This exception is thrown when the service endpoint receives too many concurrent requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints. You will see this exception if invalid inputs are provided for any of the Amazon EVS environment operations, or if a list operation is performed on an environment resource that is still initializing.</p>
 *
 * @throws {@link EvsServiceException}
 * <p>Base exception class for all service exceptions from Evs service.</p>
 *
 *
 * @public
 */
export class GetDepotUrlCommand extends command<GetDepotUrlCommandInput, GetDepotUrlCommandOutput>(
  _ep0,
  _mw0,
  "GetDepotUrl",
  GetDepotUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDepotUrlRequest;
      output: GetDepotUrlResponse;
    };
    sdk: {
      input: GetDepotUrlCommandInput;
      output: GetDepotUrlCommandOutput;
    };
  };
}
