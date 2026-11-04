// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDistributionLatestCacheResetRequest, GetDistributionLatestCacheResetResult } from "../models/models_0";
import { GetDistributionLatestCacheReset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDistributionLatestCacheResetCommand}.
 */
export interface GetDistributionLatestCacheResetCommandInput extends GetDistributionLatestCacheResetRequest {}
/**
 * @public
 *
 * The output of {@link GetDistributionLatestCacheResetCommand}.
 */
export interface GetDistributionLatestCacheResetCommandOutput extends GetDistributionLatestCacheResetResult, __MetadataBearer {}

/**
 * Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionLatestCacheResetCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDistributionLatestCacheResetCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetDistributionLatestCacheResetRequest
 *   distributionName: "STRING_VALUE",
 * };
 * const command = new GetDistributionLatestCacheResetCommand(input);
 * const response = await client.send(command);
 * // { // GetDistributionLatestCacheResetResult
 * //   status: "STRING_VALUE",
 * //   createTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetDistributionLatestCacheResetCommandInput - {@link GetDistributionLatestCacheResetCommandInput}
 * @returns {@link GetDistributionLatestCacheResetCommandOutput}
 * @see {@link GetDistributionLatestCacheResetCommandInput} for command's `input` shape.
 * @see {@link GetDistributionLatestCacheResetCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Lightsail throws this exception when user input does not conform to the validation rules of an input field.
 *
 * > **Note:** Domain and distribution APIs are only available in the N. Virginia (`us-east-1`) Amazon Web Services Region. Please set your Amazon Web Services Region configuration to `us-east-1` to create, view, or edit these resources.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Lightsail throws this exception when it cannot find a resource.
 *
 * @throws {@link OperationFailureException} (client fault)
 *
 * Lightsail throws this exception when an operation fails to execute.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * A general service exception.
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *
 * Lightsail throws this exception when the user has not been authenticated.
 *
 * @throws {@link LightsailServiceException}
 *
 * Base exception class for all service exceptions from Lightsail service.
 *
 * @public
 */
export class GetDistributionLatestCacheResetCommand extends command<GetDistributionLatestCacheResetCommandInput, GetDistributionLatestCacheResetCommandOutput>(
  _ep0,
  _mw0,
  "GetDistributionLatestCacheReset",
  GetDistributionLatestCacheReset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDistributionLatestCacheResetRequest;
      output: GetDistributionLatestCacheResetResult;
    };
    sdk: {
      input: GetDistributionLatestCacheResetCommandInput;
      output: GetDistributionLatestCacheResetCommandOutput;
    };
  };
}
