// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetJobInput, Job } from "../models/models_0";
import { GetJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetJobCommand}.
 */
export interface GetJobCommandInput extends GetJobInput {}
/**
 * @public
 *
 * The output of {@link GetJobCommand}.
 */
export interface GetJobCommandOutput extends Job, __MetadataBearer {}

/**
 * <p>Retrieves the current state of an asynchronous job, including its status and any resources that it created or updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, GetJobCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, GetJobCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // GetJobInput
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetJobCommand(input);
 * const response = await client.send(command);
 * // { // Job
 * //   jobId: "STRING_VALUE", // required
 * //   status: "SUCCESS" || "PROCESSING" || "FAILED", // required
 * //   operationType: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   brandProfileId: "STRING_VALUE",
 * //   errorCode: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * //   resources: [ // JobResourceList
 * //     { // JobResource
 * //       resourceType: "REGISTRATION" || "BRAND_PROFILE", // required
 * //       resourceId: "STRING_VALUE", // required
 * //       resourceArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetJobCommandInput - {@link GetJobCommandInput}
 * @returns {@link GetJobCommandOutput}
 * @see {@link GetJobCommandInput} for command's `input` shape.
 * @see {@link GetJobCommandOutput} for command's `response` shape.
 * @see {@link EndUserMessagingClientResolvedConfig | config} for EndUserMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist. Verify that the resource identifier is correct and try your request again.</p>
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
 * @example Get an async job
 * ```javascript
 * //
 * const input = {
 *   jobId: "job-abc12345678901234"
 * };
 * const command = new GetJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   brandProfileId: "bp-abc12345678901234",
 *   createdAt: 1727130000,
 *   jobId: "job-abc12345678901234",
 *   operationType: "CreateRegistrationsFromBrandProfile",
 *   resources: [
 *     {
 *       resourceArn: "arn:aws:end-user-messaging:us-east-1:123456789012:registration/reg-abc12345678901234",
 *       resourceId: "reg-abc12345678901234",
 *       resourceType: "REGISTRATION"
 *     }
 *   ],
 *   status: "SUCCESS",
 *   updatedAt: 1727130060
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetJobCommand extends command<GetJobCommandInput, GetJobCommandOutput>(
  _ep0,
  _mw0,
  "GetJob",
  GetJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobInput;
      output: Job;
    };
    sdk: {
      input: GetJobCommandInput;
      output: GetJobCommandOutput;
    };
  };
}
