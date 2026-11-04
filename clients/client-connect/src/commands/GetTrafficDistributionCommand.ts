// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTrafficDistributionRequest, GetTrafficDistributionResponse } from "../models/models_2";
import { GetTrafficDistribution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTrafficDistributionCommand}.
 */
export interface GetTrafficDistributionCommandInput extends GetTrafficDistributionRequest {}
/**
 * @public
 *
 * The output of {@link GetTrafficDistributionCommand}.
 */
export interface GetTrafficDistributionCommandOutput extends GetTrafficDistributionResponse, __MetadataBearer {}

/**
 * Retrieves the current traffic distribution for a given traffic distribution group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetTrafficDistributionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetTrafficDistributionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetTrafficDistributionRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetTrafficDistributionCommand(input);
 * const response = await client.send(command);
 * // { // GetTrafficDistributionResponse
 * //   TelephonyConfig: { // TelephonyConfig
 * //     Distributions: [ // DistributionList // required
 * //       { // Distribution
 * //         Region: "STRING_VALUE", // required
 * //         Percentage: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   SignInConfig: { // SignInConfig
 * //     Distributions: [ // SignInDistributionList // required
 * //       { // SignInDistribution
 * //         Region: "STRING_VALUE", // required
 * //         Enabled: true || false, // required
 * //       },
 * //     ],
 * //   },
 * //   AgentConfig: { // AgentConfig
 * //     Distributions: [ // required
 * //       {
 * //         Region: "STRING_VALUE", // required
 * //         Percentage: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * //   LastFailoverTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetTrafficDistributionCommandInput - {@link GetTrafficDistributionCommandInput}
 * @returns {@link GetTrafficDistributionCommandOutput}
 * @see {@link GetTrafficDistributionCommandInput} for command's `input` shape.
 * @see {@link GetTrafficDistributionCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class GetTrafficDistributionCommand extends command<GetTrafficDistributionCommandInput, GetTrafficDistributionCommandOutput>(
  _ep0,
  _mw0,
  "GetTrafficDistribution",
  GetTrafficDistribution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrafficDistributionRequest;
      output: GetTrafficDistributionResponse;
    };
    sdk: {
      input: GetTrafficDistributionCommandInput;
      output: GetTrafficDistributionCommandOutput;
    };
  };
}
