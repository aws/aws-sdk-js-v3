// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateDelegationRequestRequest, CreateDelegationRequestResponse } from "../models/models_0";
import { CreateDelegationRequest } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDelegationRequestCommand}.
 */
export interface CreateDelegationRequestCommandInput extends CreateDelegationRequestRequest {}
/**
 * @public
 *
 * The output of {@link CreateDelegationRequestCommand}.
 */
export interface CreateDelegationRequestCommandOutput extends CreateDelegationRequestResponse, __MetadataBearer {}

/**
 * <p>This API is currently unavailable for general use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateDelegationRequestCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateDelegationRequestCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // CreateDelegationRequestRequest
 *   OwnerAccountId: "STRING_VALUE",
 *   Description: "STRING_VALUE", // required
 *   Permissions: { // DelegationPermission
 *     PolicyTemplateArn: "STRING_VALUE",
 *     Parameters: [ // policyParameterListType
 *       { // PolicyParameter
 *         Name: "STRING_VALUE",
 *         Values: [ // policyParameterValuesListType
 *           "STRING_VALUE",
 *         ],
 *         Type: "string" || "stringList",
 *       },
 *     ],
 *   },
 *   RequestMessage: "STRING_VALUE",
 *   RequestorWorkflowId: "STRING_VALUE", // required
 *   RedirectUrl: "STRING_VALUE",
 *   NotificationChannel: "STRING_VALUE", // required
 *   SessionDuration: Number("int"), // required
 *   OnlySendByOwner: true || false,
 * };
 * const command = new CreateDelegationRequestCommand(input);
 * const response = await client.send(command);
 * // { // CreateDelegationRequestResponse
 * //   ConsoleDeepLink: "STRING_VALUE",
 * //   DelegationRequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDelegationRequestCommandInput - {@link CreateDelegationRequestCommandInput}
 * @returns {@link CreateDelegationRequestCommandOutput}
 * @see {@link CreateDelegationRequestCommandInput} for command's `input` shape.
 * @see {@link CreateDelegationRequestCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class CreateDelegationRequestCommand extends $Command
  .classBuilder<
    CreateDelegationRequestCommandInput,
    CreateDelegationRequestCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "CreateDelegationRequest", {})
  .n("IAMClient", "CreateDelegationRequestCommand")
  .sc(CreateDelegationRequest)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDelegationRequestRequest;
      output: CreateDelegationRequestResponse;
    };
    sdk: {
      input: CreateDelegationRequestCommandInput;
      output: CreateDelegationRequestCommandOutput;
    };
  };
}
