// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLicenseEndpointRequest, GetLicenseEndpointResponse } from "../models/models_1";
import { GetLicenseEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLicenseEndpointCommand}.
 */
export interface GetLicenseEndpointCommandInput extends GetLicenseEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetLicenseEndpointCommand}.
 */
export interface GetLicenseEndpointCommandOutput extends GetLicenseEndpointResponse, __MetadataBearer {}

/**
 * Gets a licence endpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetLicenseEndpointCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetLicenseEndpointCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetLicenseEndpointRequest
 *   licenseEndpointId: "STRING_VALUE", // required
 * };
 * const command = new GetLicenseEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetLicenseEndpointResponse
 * //   licenseEndpointId: "STRING_VALUE", // required
 * //   status: "CREATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "READY" || "NOT_READY", // required
 * //   statusMessage: "STRING_VALUE", // required
 * //   vpcId: "STRING_VALUE",
 * //   dnsName: "STRING_VALUE",
 * //   subnetIds: [ // SubnetIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   securityGroupIds: [ // SecurityGroupIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLicenseEndpointCommandInput - {@link GetLicenseEndpointCommandInput}
 * @returns {@link GetLicenseEndpointCommandOutput}
 * @see {@link GetLicenseEndpointCommandInput} for command's `input` shape.
 * @see {@link GetLicenseEndpointCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You don't have permission to perform the action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class GetLicenseEndpointCommand extends command<GetLicenseEndpointCommandInput, GetLicenseEndpointCommandOutput>(
  _ep0,
  _mw0,
  "GetLicenseEndpoint",
  GetLicenseEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLicenseEndpointRequest;
      output: GetLicenseEndpointResponse;
    };
    sdk: {
      input: GetLicenseEndpointCommandInput;
      output: GetLicenseEndpointCommandOutput;
    };
  };
}
