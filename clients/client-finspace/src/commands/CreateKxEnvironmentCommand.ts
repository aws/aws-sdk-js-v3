// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { CreateKxEnvironmentRequest, CreateKxEnvironmentResponse } from "../models/models_0";
import { CreateKxEnvironment } from "../schemas/schemas_3_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateKxEnvironmentCommand}.
 */
export interface CreateKxEnvironmentCommandInput extends CreateKxEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateKxEnvironmentCommand}.
 */
export interface CreateKxEnvironmentCommandOutput extends CreateKxEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Creates a managed kdb environment for the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, CreateKxEnvironmentCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, CreateKxEnvironmentCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // CreateKxEnvironmentRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateKxEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateKxEnvironmentResponse
 * //   name: "STRING_VALUE",
 * //   status: "CREATE_REQUESTED" || "CREATING" || "CREATED" || "DELETE_REQUESTED" || "DELETING" || "DELETED" || "FAILED_CREATION" || "RETRY_DELETION" || "FAILED_DELETION" || "UPDATE_NETWORK_REQUESTED" || "UPDATING_NETWORK" || "FAILED_UPDATING_NETWORK" || "SUSPENDED",
 * //   environmentId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   environmentArn: "STRING_VALUE",
 * //   kmsKeyId: "STRING_VALUE",
 * //   creationTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateKxEnvironmentCommandInput - {@link CreateKxEnvironmentCommandInput}
 * @returns {@link CreateKxEnvironmentCommandOutput}
 * @see {@link CreateKxEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateKxEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> You have exceeded your service quota. To perform the requested action,
 *          remove some of the relevant resources, or use Service Quotas to request a service quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class CreateKxEnvironmentCommand extends $Command
  .classBuilder<
    CreateKxEnvironmentCommandInput,
    CreateKxEnvironmentCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "CreateKxEnvironment", {})
  .n("FinspaceClient", "CreateKxEnvironmentCommand")
  .sc(CreateKxEnvironment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKxEnvironmentRequest;
      output: CreateKxEnvironmentResponse;
    };
    sdk: {
      input: CreateKxEnvironmentCommandInput;
      output: CreateKxEnvironmentCommandOutput;
    };
  };
}
