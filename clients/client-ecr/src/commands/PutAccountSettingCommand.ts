// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAccountSettingRequest, PutAccountSettingResponse } from "../models/models_0";
import { PutAccountSetting$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAccountSettingCommand}.
 */
export interface PutAccountSettingCommandInput extends PutAccountSettingRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountSettingCommand}.
 */
export interface PutAccountSettingCommandOutput extends PutAccountSettingResponse, __MetadataBearer {}

/**
 * Allows you to change the basic scan type version or registry policy scope.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutAccountSettingCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutAccountSettingCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // PutAccountSettingRequest
 *   name: "STRING_VALUE", // required
 *   value: "STRING_VALUE", // required
 * };
 * const command = new PutAccountSettingCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountSettingResponse
 * //   name: "STRING_VALUE",
 * //   value: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutAccountSettingCommandInput - {@link PutAccountSettingCommandInput}
 * @returns {@link PutAccountSettingCommandOutput}
 * @see {@link PutAccountSettingCommandInput} for command's `input` shape.
 * @see {@link PutAccountSettingCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The operation did not succeed because it would have exceeded a service limit for your account. For more information, see [Amazon ECR service quotas](https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html) in the Amazon Elastic Container Registry User Guide.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There was an exception validating this request.
 *
 * @throws {@link ECRServiceException}
 *
 * Base exception class for all service exceptions from ECR service.
 *
 * @public
 */
export class PutAccountSettingCommand extends command<PutAccountSettingCommandInput, PutAccountSettingCommandOutput>(
  _ep0,
  _mw0,
  "PutAccountSetting",
  PutAccountSetting$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountSettingRequest;
      output: PutAccountSettingResponse;
    };
    sdk: {
      input: PutAccountSettingCommandInput;
      output: PutAccountSettingCommandOutput;
    };
  };
}
