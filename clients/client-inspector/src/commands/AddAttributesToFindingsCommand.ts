// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { AddAttributesToFindingsRequest, AddAttributesToFindingsResponse } from "../models/models_0";
import { de_AddAttributesToFindingsCommand, se_AddAttributesToFindingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddAttributesToFindingsCommand}.
 */
export interface AddAttributesToFindingsCommandInput extends AddAttributesToFindingsRequest {}
/**
 * @public
 *
 * The output of {@link AddAttributesToFindingsCommand}.
 */
export interface AddAttributesToFindingsCommandOutput extends AddAttributesToFindingsResponse, __MetadataBearer {}

/**
 * <p>Assigns attributes (key and value pairs) to the findings that are specified by the
 *          ARNs of the findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, AddAttributesToFindingsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, AddAttributesToFindingsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // AddAttributesToFindingsRequest
 *   findingArns: [ // AddRemoveAttributesFindingArnList // required
 *     "STRING_VALUE",
 *   ],
 *   attributes: [ // UserAttributeList // required
 *     { // Attribute
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AddAttributesToFindingsCommand(input);
 * const response = await client.send(command);
 * // { // AddAttributesToFindingsResponse
 * //   failedItems: { // FailedItems // required
 * //     "<keys>": { // FailedItemDetails
 * //       failureCode: "INVALID_ARN" || "DUPLICATE_ARN" || "ITEM_DOES_NOT_EXIST" || "ACCESS_DENIED" || "LIMIT_EXCEEDED" || "INTERNAL_ERROR", // required
 * //       retryable: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param AddAttributesToFindingsCommandInput - {@link AddAttributesToFindingsCommandInput}
 * @returns {@link AddAttributesToFindingsCommandOutput}
 * @see {@link AddAttributesToFindingsCommandInput} for command's `input` shape.
 * @see {@link AddAttributesToFindingsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 *
 * @example Add attributes to findings
 * ```javascript
 * // Assigns attributes (key and value pairs) to the findings that are specified by the ARNs of the findings.
 * const input = {
 *   attributes: [
 *     {
 *       key: "Example",
 *       value: "example"
 *     }
 *   ],
 *   findingArns: [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-8l1VIE0D/run/0-Z02cjjug/finding/0-T8yM9mEU"
 *   ]
 * };
 * const command = new AddAttributesToFindingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failedItems:   { /* empty *\/ }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AddAttributesToFindingsCommand extends $Command
  .classBuilder<
    AddAttributesToFindingsCommandInput,
    AddAttributesToFindingsCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "AddAttributesToFindings", {})
  .n("InspectorClient", "AddAttributesToFindingsCommand")
  .f(void 0, void 0)
  .ser(se_AddAttributesToFindingsCommand)
  .de(de_AddAttributesToFindingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddAttributesToFindingsRequest;
      output: AddAttributesToFindingsResponse;
    };
    sdk: {
      input: AddAttributesToFindingsCommandInput;
      output: AddAttributesToFindingsCommandOutput;
    };
  };
}
