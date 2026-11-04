// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateTargetAccountConfigurationRequest,
  CreateTargetAccountConfigurationResponse,
} from "../models/models_0";
import { CreateTargetAccountConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTargetAccountConfigurationCommand}.
 */
export interface CreateTargetAccountConfigurationCommandInput extends CreateTargetAccountConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateTargetAccountConfigurationCommand}.
 */
export interface CreateTargetAccountConfigurationCommandOutput extends CreateTargetAccountConfigurationResponse, __MetadataBearer {}

/**
 * Creates a target account configuration for the experiment template. A target account configuration is required when `accountTargeting` of `experimentOptions` is set to `multi-account`. For more information, see [experiment options](https://docs.aws.amazon.com/fis/latest/userguide/experiment-options.html) in the *Fault Injection Service User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, CreateTargetAccountConfigurationCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, CreateTargetAccountConfigurationCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // CreateTargetAccountConfigurationRequest
 *   clientToken: "STRING_VALUE",
 *   experimentTemplateId: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateTargetAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateTargetAccountConfigurationResponse
 * //   targetAccountConfiguration: { // TargetAccountConfiguration
 * //     roleArn: "STRING_VALUE",
 * //     accountId: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateTargetAccountConfigurationCommandInput - {@link CreateTargetAccountConfigurationCommandInput}
 * @returns {@link CreateTargetAccountConfigurationCommandOutput}
 * @see {@link CreateTargetAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateTargetAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of a conflict.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded your service quota.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The specified input is not valid, or fails to satisfy the constraints for the request.
 *
 * @throws {@link FisServiceException}
 *
 * Base exception class for all service exceptions from Fis service.
 *
 * @public
 */
export class CreateTargetAccountConfigurationCommand extends command<CreateTargetAccountConfigurationCommandInput, CreateTargetAccountConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateTargetAccountConfiguration",
  CreateTargetAccountConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTargetAccountConfigurationRequest;
      output: CreateTargetAccountConfigurationResponse;
    };
    sdk: {
      input: CreateTargetAccountConfigurationCommandInput;
      output: CreateTargetAccountConfigurationCommandOutput;
    };
  };
}
