// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccountPropertiesRequest, GetAccountPropertiesResponse } from "../models/models_0";
import { GetAccountProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccountPropertiesCommand}.
 */
export interface GetAccountPropertiesCommandInput extends GetAccountPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountPropertiesCommand}.
 */
export interface GetAccountPropertiesCommandOutput extends GetAccountPropertiesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the account-level properties for the caller's Amazon Web Services account. Account
 *             properties are configuration settings that control account-wide IAM features such as
 *             Role Manager.</p>
 *          <p>The service returns properties as key-value pairs in
 *                 <code>Namespace/PropertyName</code> format. Each namespace groups related
 *             configuration settings. Use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutAccountProperties.html">PutAccountProperties</a> to modify these properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccountPropertiesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccountPropertiesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new GetAccountPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountPropertiesResponse
 * //   Properties: { // accountPropertiesMapType
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountPropertiesCommandInput - {@link GetAccountPropertiesCommandInput}
 * @returns {@link GetAccountPropertiesCommandOutput}
 * @see {@link GetAccountPropertiesCommandInput} for command's `input` shape.
 * @see {@link GetAccountPropertiesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class GetAccountPropertiesCommand extends command<GetAccountPropertiesCommandInput, GetAccountPropertiesCommandOutput>(
  _ep0,
  _mw0,
  "GetAccountProperties",
  GetAccountProperties$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountPropertiesResponse;
    };
    sdk: {
      input: GetAccountPropertiesCommandInput;
      output: GetAccountPropertiesCommandOutput;
    };
  };
}
