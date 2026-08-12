// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAccountPropertiesRequest, PutAccountPropertiesResponse } from "../models/models_0";
import { PutAccountProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAccountPropertiesCommand}.
 */
export interface PutAccountPropertiesCommandInput extends PutAccountPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountPropertiesCommand}.
 */
export interface PutAccountPropertiesCommandOutput extends PutAccountPropertiesResponse, __MetadataBearer {}

/**
 * <p>Sets account-level properties for the caller's Amazon Web Services account. Account properties are
 *             configuration settings that control account-wide IAM features such as Role
 *             Manager.</p>
 *          <p>Specify properties as key-value pairs in
 *                 <code>Namespace/PropertyName</code> format. All properties in a single request must
 *             belong to the same namespace. Use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountProperties.html">GetAccountProperties</a> to view the current properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutAccountPropertiesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutAccountPropertiesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // PutAccountPropertiesRequest
 *   Properties: { // accountPropertiesMapType // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutAccountPropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccountPropertiesCommandInput - {@link PutAccountPropertiesCommandInput}
 * @returns {@link PutAccountPropertiesCommandOutput}
 * @see {@link PutAccountPropertiesCommandInput} for command's `input` shape.
 * @see {@link PutAccountPropertiesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
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
export class PutAccountPropertiesCommand extends command<PutAccountPropertiesCommandInput, PutAccountPropertiesCommandOutput>(
  _ep0,
  _mw0,
  "PutAccountProperties",
  PutAccountProperties$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountPropertiesRequest;
      output: {};
    };
    sdk: {
      input: PutAccountPropertiesCommandInput;
      output: PutAccountPropertiesCommandOutput;
    };
  };
}
