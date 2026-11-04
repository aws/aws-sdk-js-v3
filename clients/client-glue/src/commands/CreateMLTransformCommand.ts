// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMLTransformRequest, CreateMLTransformResponse } from "../models/models_1";
import { CreateMLTransform$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMLTransformCommand}.
 */
export interface CreateMLTransformCommandInput extends CreateMLTransformRequest {}
/**
 * @public
 *
 * The output of {@link CreateMLTransformCommand}.
 */
export interface CreateMLTransformCommandOutput extends CreateMLTransformResponse, __MetadataBearer {}

/**
 * Creates an Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it.
 *
 * Call this operation as the first step in the process of using a machine learning transform (such as the `FindMatches` transform) for deduplicating data. You can provide an optional `Description`, in addition to the parameters that you want to use for your algorithm.
 *
 * You must also specify certain parameters for the tasks that Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include `Role`, and optionally, `AllocatedCapacity`, `Timeout`, and `MaxRetries`. For more information, see [Jobs](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateMLTransformRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   InputRecordTables: [ // GlueTables // required
 *     { // GlueTable
 *       DatabaseName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *       CatalogId: "STRING_VALUE",
 *       ConnectionName: "STRING_VALUE",
 *       AdditionalOptions: { // GlueTableAdditionalOptions
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   Parameters: { // TransformParameters
 *     TransformType: "FIND_MATCHES", // required
 *     FindMatchesParameters: { // FindMatchesParameters
 *       PrimaryKeyColumnName: "STRING_VALUE",
 *       PrecisionRecallTradeoff: Number("double"),
 *       AccuracyCostTradeoff: Number("double"),
 *       EnforceProvidedLabels: true || false,
 *     },
 *   },
 *   Role: "STRING_VALUE", // required
 *   GlueVersion: "STRING_VALUE",
 *   MaxCapacity: Number("double"),
 *   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.4X" || "G.8X" || "G.025X" || "Z.2X" || "G.12X" || "G.16X" || "R.1X" || "R.2X" || "R.4X" || "R.8X",
 *   NumberOfWorkers: Number("int"),
 *   Timeout: Number("int"),
 *   MaxRetries: Number("int"),
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TransformEncryption: { // TransformEncryption
 *     MlUserDataEncryption: { // MLUserDataEncryption
 *       MlUserDataEncryptionMode: "DISABLED" || "SSE-KMS", // required
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *     TaskRunSecurityConfigurationName: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMLTransformCommand(input);
 * const response = await client.send(command);
 * // { // CreateMLTransformResponse
 * //   TransformId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMLTransformCommandInput - {@link CreateMLTransformCommandInput}
 * @returns {@link CreateMLTransformCommandOutput}
 * @see {@link CreateMLTransformCommandInput} for command's `input` shape.
 * @see {@link CreateMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * The same unique identifier was associated with two different records.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class CreateMLTransformCommand extends command<CreateMLTransformCommandInput, CreateMLTransformCommandOutput>(
  _ep0,
  _mw0,
  "CreateMLTransform",
  CreateMLTransform$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMLTransformRequest;
      output: CreateMLTransformResponse;
    };
    sdk: {
      input: CreateMLTransformCommandInput;
      output: CreateMLTransformCommandOutput;
    };
  };
}
