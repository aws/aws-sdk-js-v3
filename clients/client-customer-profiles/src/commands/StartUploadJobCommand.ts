// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartUploadJobRequest, StartUploadJobResponse } from "../models/models_1";
import { StartUploadJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartUploadJobCommand}.
 */
export interface StartUploadJobCommandInput extends StartUploadJobRequest {}
/**
 * @public
 *
 * The output of {@link StartUploadJobCommand}.
 */
export interface StartUploadJobCommandOutput extends StartUploadJobResponse, __MetadataBearer {}

/**
 * This API starts the processing of an upload job to ingest profile data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, StartUploadJobCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, StartUploadJobCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // StartUploadJobRequest
 *   DomainName: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StartUploadJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartUploadJobCommandInput - {@link StartUploadJobCommandInput}
 * @returns {@link StartUploadJobCommandOutput}
 * @see {@link StartUploadJobCommandInput} for command's `input` shape.
 * @see {@link StartUploadJobCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class StartUploadJobCommand extends command<StartUploadJobCommandInput, StartUploadJobCommandOutput>(
  _ep0,
  _mw0,
  "StartUploadJob",
  StartUploadJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartUploadJobRequest;
      output: {};
    };
    sdk: {
      input: StartUploadJobCommandInput;
      output: StartUploadJobCommandOutput;
    };
  };
}
