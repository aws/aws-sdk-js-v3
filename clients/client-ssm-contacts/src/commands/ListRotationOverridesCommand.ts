// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRotationOverridesRequest, ListRotationOverridesResult } from "../models/models_0";
import { de_ListRotationOverridesCommand, se_ListRotationOverridesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRotationOverridesCommand}.
 */
export interface ListRotationOverridesCommandInput extends ListRotationOverridesRequest {}
/**
 * @public
 *
 * The output of {@link ListRotationOverridesCommand}.
 */
export interface ListRotationOverridesCommandOutput extends ListRotationOverridesResult, __MetadataBearer {}

/**
 * <p>Retrieves a list of overrides currently specified for an on-call rotation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListRotationOverridesCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListRotationOverridesCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // ListRotationOverridesRequest
 *   RotationId: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRotationOverridesCommand(input);
 * const response = await client.send(command);
 * // { // ListRotationOverridesResult
 * //   RotationOverrides: [ // RotationOverrides
 * //     { // RotationOverride
 * //       RotationOverrideId: "STRING_VALUE", // required
 * //       NewContactIds: [ // SsmContactsArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"), // required
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRotationOverridesCommandInput - {@link ListRotationOverridesCommandInput}
 * @returns {@link ListRotationOverridesCommandOutput}
 * @see {@link ListRotationOverridesCommandInput} for command's `input` shape.
 * @see {@link ListRotationOverridesCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 *
 * @public
 */
export class ListRotationOverridesCommand extends $Command
  .classBuilder<
    ListRotationOverridesCommandInput,
    ListRotationOverridesCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMContacts", "ListRotationOverrides", {})
  .n("SSMContactsClient", "ListRotationOverridesCommand")
  .f(void 0, void 0)
  .ser(se_ListRotationOverridesCommand)
  .de(de_ListRotationOverridesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRotationOverridesRequest;
      output: ListRotationOverridesResult;
    };
    sdk: {
      input: ListRotationOverridesCommandInput;
      output: ListRotationOverridesCommandOutput;
    };
  };
}
