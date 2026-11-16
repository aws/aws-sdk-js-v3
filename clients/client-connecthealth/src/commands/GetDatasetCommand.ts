// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDatasetInput, GetDatasetOutput } from "../models/models_0";
import { GetDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDatasetCommand}.
 */
export interface GetDatasetCommandInput extends GetDatasetInput {}
/**
 * @public
 *
 * The output of {@link GetDatasetCommand}.
 */
export interface GetDatasetCommandOutput extends GetDatasetOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a Dataset, including its status and, after it is built, its results. A dataset whose status is DELETED returns ResourceNotFoundException.</p> <p>Datasets are in preview release and are subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectHealthClient, GetDatasetCommand } from "@aws-sdk/client-connecthealth"; // ES Modules import
 * // const { ConnectHealthClient, GetDatasetCommand } = require("@aws-sdk/client-connecthealth"); // CommonJS import
 * // import type { ConnectHealthClientConfig } from "@aws-sdk/client-connecthealth";
 * const config = {}; // type is ConnectHealthClientConfig
 * const client = new ConnectHealthClient(config);
 * const input = { // GetDatasetInput
 *   domainId: "STRING_VALUE", // required
 *   datasetId: "STRING_VALUE", // required
 * };
 * const command = new GetDatasetCommand(input);
 * const response = await client.send(command);
 * // { // GetDatasetOutput
 * //   arn: "STRING_VALUE", // required
 * //   datasetId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   type: "MEDICAL_CODING", // required
 * //   config: { // DatasetConfig Union: only one key present
 * //     medicalCoding: { // MedicalCodingDatasetConfig
 * //       s3InputPath: "STRING_VALUE", // required
 * //       s3OutputPath: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   status: "CREATING" || "ACTIVE" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED" || "DELETED", // required
 * //   statusDetails: "STRING_VALUE",
 * //   artifacts: { // DatasetArtifacts Union: only one key present
 * //     medicalCoding: { // MedicalCodingDatasetArtifacts
 * //       evaluationS3Uri: "STRING_VALUE",
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetDatasetCommandInput - {@link GetDatasetCommandInput}
 * @returns {@link GetDatasetCommandOutput}
 * @see {@link GetDatasetCommandInput} for command's `input` shape.
 * @see {@link GetDatasetCommandOutput} for command's `response` shape.
 * @see {@link ConnectHealthClientResolvedConfig | config} for ConnectHealthClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error is thrown when the client does not supply proper credentials to the API.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error is thrown when a transient error causes our API to fail.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error is thrown when the requested resource is not found.</p>
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
export class GetDatasetCommand extends command<GetDatasetCommandInput, GetDatasetCommandOutput>(
  _ep0,
  _mw0,
  "GetDataset",
  GetDataset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDatasetInput;
      output: GetDatasetOutput;
    };
    sdk: {
      input: GetDatasetCommandInput;
      output: GetDatasetCommandOutput;
    };
  };
}
