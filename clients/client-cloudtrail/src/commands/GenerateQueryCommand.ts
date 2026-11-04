// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GenerateQueryRequest, GenerateQueryResponse } from "../models/models_0";
import { GenerateQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GenerateQueryCommand}.
 */
export interface GenerateQueryCommandInput extends GenerateQueryRequest {}
/**
 * @public
 *
 * The output of {@link GenerateQueryCommand}.
 */
export interface GenerateQueryCommandOutput extends GenerateQueryResponse, __MetadataBearer {}

/**
 * > **Important:** CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see [CloudTrail Lake availability change](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-service-availability-change.html).
 *
 * Generates a query from a natural language prompt. This operation uses generative artificial intelligence (generative AI) to produce a ready-to-use SQL query from the prompt.
 *
 * The prompt can be a question or a statement about the event data in your event data store. For example, you can enter prompts like "What are my top errors in the past month?" and “Give me a list of users that used SNS.”
 *
 * The prompt must be in English. For information about limitations, permissions, and supported Regions, see [Create CloudTrail Lake queries from natural language prompts](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-query-generator.html) in the *CloudTrail* user guide.
 *
 * > **Note:**
 * >
 * > Do not include any personally identifying, confidential, or sensitive information in your prompts.
 * >
 * > This feature uses generative AI large language models (LLMs); we recommend double-checking the LLM response.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GenerateQueryCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GenerateQueryCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // GenerateQueryRequest
 *   EventDataStores: [ // EventDataStoreList // required
 *     "STRING_VALUE",
 *   ],
 *   Prompt: "STRING_VALUE", // required
 * };
 * const command = new GenerateQueryCommand(input);
 * const response = await client.send(command);
 * // { // GenerateQueryResponse
 * //   QueryStatement: "STRING_VALUE",
 * //   QueryAlias: "STRING_VALUE",
 * //   EventDataStoreOwnerAccountId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateQueryCommandInput - {@link GenerateQueryCommandInput}
 * @returns {@link GenerateQueryCommandOutput}
 * @see {@link GenerateQueryCommandInput} for command's `input` shape.
 * @see {@link GenerateQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *
 * The specified event data store ARN is not valid or does not map to an event data store in your account.
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *
 * The specified event data store was not found.
 *
 * @throws {@link GenerateResponseException} (client fault)
 *
 * This exception is thrown when a valid query could not be generated for the provided prompt.
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *
 * The event data store is inactive.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request includes a parameter that is not valid.
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *
 * This exception is thrown when the management account does not have a service-linked role.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
 *
 * @public
 */
export class GenerateQueryCommand extends command<GenerateQueryCommandInput, GenerateQueryCommandOutput>(
  _ep0,
  _mw0,
  "GenerateQuery",
  GenerateQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateQueryRequest;
      output: GenerateQueryResponse;
    };
    sdk: {
      input: GenerateQueryCommandInput;
      output: GenerateQueryCommandOutput;
    };
  };
}
