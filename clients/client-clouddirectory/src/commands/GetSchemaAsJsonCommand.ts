// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudDirectoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSchemaAsJsonRequest, GetSchemaAsJsonResponse } from "../models/models_0";
import { GetSchemaAsJson } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSchemaAsJsonCommand}.
 */
export interface GetSchemaAsJsonCommandInput extends GetSchemaAsJsonRequest {}
/**
 * @public
 *
 * The output of {@link GetSchemaAsJsonCommand}.
 */
export interface GetSchemaAsJsonCommandOutput extends GetSchemaAsJsonResponse, __MetadataBearer {}

/**
 * <p>Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetSchemaAsJsonCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetSchemaAsJsonCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // GetSchemaAsJsonRequest
 *   SchemaArn: "STRING_VALUE", // required
 * };
 * const command = new GetSchemaAsJsonCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaAsJsonResponse
 * //   Name: "STRING_VALUE",
 * //   Document: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSchemaAsJsonCommandInput - {@link GetSchemaAsJsonCommandInput}
 * @returns {@link GetSchemaAsJsonCommandOutput}
 * @see {@link GetSchemaAsJsonCommandInput} for command's `input` shape.
 * @see {@link GetSchemaAsJsonCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>Indicates that the provided ARN value is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link RetryableConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 *
 * @throws {@link CloudDirectoryServiceException}
 * <p>Base exception class for all service exceptions from CloudDirectory service.</p>
 *
 *
 * @example To get schema information and display it in JSON format
 * ```javascript
 * //
 * const input = {
 *   SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY/schema/org/1"
 * };
 * const command = new GetSchemaAsJsonCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Document: `{"sourceSchemaArn":"arn:aws:clouddirectory:us-west-2:45132example:schema/published/org/1","facets":{"node2":{"facetAttributes":{},"objectType":"NODE"},"Organization":{"facetAttributes":{"account_id":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"account_name":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"telephone_number":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"description":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"mailing_address_country":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"mailing_address_state":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"mailing_address_street2":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"mailing_address_street1":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"web_site":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"email":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"mailing_address_city":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"organization_status":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"mailing_address_postal_code":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"}},"objectType":"LEAF_NODE"},"nodex":{"facetAttributes":{},"objectType":"NODE"},"Legal_Entity":{"facetAttributes":{"industry_vertical":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"registered_company_name":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"billing_currency":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"mailing_address_country":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"mailing_address_state":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"mailing_address_street2":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"mailing_address_street1":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"tax_id":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"mailing_address_city":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"},"mailing_address_postal_code":{"attributeDefinition":{"attributeType":"STRING","isImmutable":false,"attributeRules":{"nameLength":{"parameters":{"min":"1","max":"1024"},"ruleType":"STRING_LENGTH"}}},"requiredBehavior":"NOT_REQUIRED"}},"objectType":"LEAF_NODE"},"policyfacet":{"facetAttributes":{},"objectType":"POLICY"},"node1":{"facetAttributes":{},"objectType":"NODE"}},"typedLinkFacets":{"exampletypedlink":{"facetAttributes":{"1":{"attributeDefinition":{"attributeType":"BINARY","isImmutable":false,"attributeRules":{}},"requiredBehavior":"REQUIRED_ALWAYS"}},"identityAttributeOrder":["1"]},"exampletypedlink8":{"facetAttributes":{"22":{"attributeDefinition":{"attributeType":"BINARY","isImmutable":false,"attributeRules":{}},"requiredBehavior":"REQUIRED_ALWAYS"}},"identityAttributeOrder":["22"]}}}`,
 *   Name: "org"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSchemaAsJsonCommand extends $Command
  .classBuilder<
    GetSchemaAsJsonCommandInput,
    GetSchemaAsJsonCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "GetSchemaAsJson", {})
  .n("CloudDirectoryClient", "GetSchemaAsJsonCommand")
  .sc(GetSchemaAsJson)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSchemaAsJsonRequest;
      output: GetSchemaAsJsonResponse;
    };
    sdk: {
      input: GetSchemaAsJsonCommandInput;
      output: GetSchemaAsJsonCommandOutput;
    };
  };
}
