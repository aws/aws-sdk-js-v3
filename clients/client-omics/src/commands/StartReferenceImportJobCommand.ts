// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartReferenceImportJobRequest, StartReferenceImportJobResponse } from "../models/models_0";
import { StartReferenceImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartReferenceImportJobCommand}.
 */
export interface StartReferenceImportJobCommandInput extends StartReferenceImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartReferenceImportJobCommand}.
 */
export interface StartReferenceImportJobCommandOutput extends StartReferenceImportJobResponse, __MetadataBearer {}

/**
 * Imports a reference genome from Amazon S3 into a specified reference store. You can have multiple reference genomes in a reference store. You can only import reference genomes one at a time into each reference store. Monitor the status of your reference import job by using the `GetReferenceImportJob` API operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartReferenceImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartReferenceImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // StartReferenceImportJobRequest
 *   referenceStoreId: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   sources: [ // StartReferenceImportJobSourceList // required
 *     { // StartReferenceImportJobSourceItem
 *       sourceFile: "STRING_VALUE", // required
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       tags: { // TagMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new StartReferenceImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartReferenceImportJobResponse
 * //   id: "STRING_VALUE", // required
 * //   referenceStoreId: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartReferenceImportJobCommandInput - {@link StartReferenceImportJobCommandInput}
 * @returns {@link StartReferenceImportJobCommandOutput}
 * @see {@link StartReferenceImportJobCommandInput} for command's `input` shape.
 * @see {@link StartReferenceImportJobCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class StartReferenceImportJobCommand extends command<StartReferenceImportJobCommandInput, StartReferenceImportJobCommandOutput>(
  _ep0,
  _mw0,
  "StartReferenceImportJob",
  StartReferenceImportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartReferenceImportJobRequest;
      output: StartReferenceImportJobResponse;
    };
    sdk: {
      input: StartReferenceImportJobCommandInput;
      output: StartReferenceImportJobCommandOutput;
    };
  };
}
