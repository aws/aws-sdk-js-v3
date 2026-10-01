// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListJobsInput, ListJobsOutput } from "../models/models_0";
import { ListJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListJobsCommand}.
 */
export interface ListJobsCommandInput extends ListJobsInput {}
/**
 * @public
 *
 * The output of {@link ListJobsCommand}.
 */
export interface ListJobsCommandOutput extends ListJobsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of the asynchronous jobs in your account. You can filter the results by status, brand profile, or operation type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, ListJobsCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, ListJobsCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // ListJobsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   status: "SUCCESS" || "PROCESSING" || "FAILED",
 *   brandProfileId: "STRING_VALUE",
 *   operationType: "STRING_VALUE",
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsOutput
 * //   jobs: [ // JobSummaryList // required
 * //     { // JobSummary
 * //       jobId: "STRING_VALUE", // required
 * //       status: "SUCCESS" || "PROCESSING" || "FAILED", // required
 * //       operationType: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       brandProfileId: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       resources: [ // JobResourceList
 * //         { // JobResource
 * //           resourceType: "REGISTRATION" || "BRAND_PROFILE", // required
 * //           resourceId: "STRING_VALUE", // required
 * //           resourceArn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobsCommandInput - {@link ListJobsCommandInput}
 * @returns {@link ListJobsCommandOutput}
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link EndUserMessagingClientResolvedConfig | config} for EndUserMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link EndUserMessagingServiceException}
 * <p>Base exception class for all service exceptions from EndUserMessaging service.</p>
 *
 *
 * @example List async jobs
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10,
 *   status: "SUCCESS"
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobs: [
 *     {
 *       brandProfileId: "bp-abc12345678901234",
 *       createdAt: 1727130000,
 *       jobId: "job-abc12345678901234",
 *       operationType: "CreateRegistrationsFromBrandProfile",
 *       status: "SUCCESS",
 *       updatedAt: 1727130060
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListJobsCommand extends command<ListJobsCommandInput, ListJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListJobs",
  ListJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobsInput;
      output: ListJobsOutput;
    };
    sdk: {
      input: ListJobsCommandInput;
      output: ListJobsCommandOutput;
    };
  };
}
