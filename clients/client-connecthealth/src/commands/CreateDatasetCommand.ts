// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDatasetInput, CreateDatasetOutput } from "../models/models_0";
import { CreateDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandInput extends CreateDatasetInput {}
/**
 * @public
 *
 * The output of {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandOutput extends CreateDatasetOutput, __MetadataBearer {}

/**
 * <p>Creates a Dataset in a Domain and starts building it. A new dataset has the status CREATING. When it's ready to use, its status changes to ACTIVE, or to CREATE_FAILED if it fails to build. To check the status, call GetDataset.</p> <p>This operation is idempotent: if you retry a request with the same clientToken, it returns the dataset that the first request created.</p> <p>For a medical coding dataset, Amazon Connect Health uses the coded examples that are in the s3InputPath when you create the dataset, and writes evaluation scores to the s3OutputPath. Later changes to the s3InputPath don't change the dataset. To use this operation, you must have s3:GetObject and s3:ListBucket permissions for the input location and s3:PutObject permission for the output location, and kms:Decrypt and kms:GenerateDataKey permissions if you encrypt the locations with an AWS KMS key.</p> <p>Datasets are in preview release and are subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectHealthClient, CreateDatasetCommand } from "@aws-sdk/client-connecthealth"; // ES Modules import
 * // const { ConnectHealthClient, CreateDatasetCommand } = require("@aws-sdk/client-connecthealth"); // CommonJS import
 * // import type { ConnectHealthClientConfig } from "@aws-sdk/client-connecthealth";
 * const config = {}; // type is ConnectHealthClientConfig
 * const client = new ConnectHealthClient(config);
 * const input = { // CreateDatasetInput
 *   domainId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   config: { // DatasetConfig Union: only one key present
 *     medicalCoding: { // MedicalCodingDatasetConfig
 *       s3InputPath: "STRING_VALUE", // required
 *       s3OutputPath: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetOutput
 * //   arn: "STRING_VALUE", // required
 * //   datasetId: "STRING_VALUE", // required
 * //   type: "MEDICAL_CODING", // required
 * //   status: "CREATING" || "ACTIVE" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED" || "DELETED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateDatasetCommandInput - {@link CreateDatasetCommandInput}
 * @returns {@link CreateDatasetCommandOutput}
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link ConnectHealthClientResolvedConfig | config} for ConnectHealthClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error is thrown when the client does not supply proper credentials to the API.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This error is thrown when a resource update is no longer valid due to assumptions about initial state changing.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error is thrown when a transient error causes our API to fail.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error is thrown when the requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error is thrown when the client exceeds the allowed request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This error is thrown when the client supplies invalid input to the API.</p>
 *
 * @throws {@link ConnectHealthServiceException}
 * <p>Base exception class for all service exceptions from ConnectHealth service.</p>
 *
 *
 * @public
 */
export class CreateDatasetCommand extends command<CreateDatasetCommandInput, CreateDatasetCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataset",
  CreateDataset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetInput;
      output: CreateDatasetOutput;
    };
    sdk: {
      input: CreateDatasetCommandInput;
      output: CreateDatasetCommandOutput;
    };
  };
}
