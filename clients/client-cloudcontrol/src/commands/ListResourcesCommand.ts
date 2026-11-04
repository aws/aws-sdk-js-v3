// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResourcesInput, ListResourcesOutput } from "../models/models_0";
import { ListResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourcesCommand}.
 */
export interface ListResourcesCommandInput extends ListResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListResourcesCommand}.
 */
export interface ListResourcesCommandOutput extends ListResourcesOutput, __MetadataBearer {}

/**
 * Returns information about the specified resources. For more information, see [Discovering resources](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-list.html) in the *Amazon Web Services Cloud Control API User Guide*.
 *
 * You can use this action to return information about existing resources in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, ListResourcesCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, ListResourcesCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
 * // import type { CloudControlClientConfig } from "@aws-sdk/client-cloudcontrol";
 * const config = {}; // type is CloudControlClientConfig
 * const client = new CloudControlClient(config);
 * const input = { // ListResourcesInput
 *   TypeName: "STRING_VALUE", // required
 *   TypeVersionId: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ResourceModel: "STRING_VALUE",
 * };
 * const command = new ListResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesOutput
 * //   TypeName: "STRING_VALUE",
 * //   ResourceDescriptions: [ // ResourceDescriptions
 * //     { // ResourceDescription
 * //       Identifier: "STRING_VALUE",
 * //       Properties: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcesCommandInput - {@link ListResourcesCommandInput}
 * @returns {@link ListResourcesCommandOutput}
 * @see {@link ListResourcesCommandInput} for command's `input` shape.
 * @see {@link ListResourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudControlClientResolvedConfig | config} for CloudControlClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * The resource with the name requested already exists.
 *
 * @throws {@link GeneralServiceException} (client fault)
 *
 * The resource handler has returned that the downstream service generated an error that doesn't map to any other handler error code.
 *
 * @throws {@link HandlerFailureException} (server fault)
 *
 * The resource handler has failed without a returning a more specific error code. This can include timeouts.
 *
 * @throws {@link HandlerInternalFailureException} (server fault)
 *
 * The resource handler has returned that an unexpected error occurred within the resource handler.
 *
 * @throws {@link InvalidCredentialsException} (client fault)
 *
 * The resource handler has returned that the credentials provided by the user are invalid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The resource handler has returned that invalid input from the user has generated a generic exception.
 *
 * @throws {@link NetworkFailureException} (server fault)
 *
 * The resource handler has returned that the request couldn't be completed due to networking issues, such as a failure to receive a response from the server.
 *
 * @throws {@link NotStabilizedException} (client fault)
 *
 * The resource handler has returned that the downstream resource failed to complete all of its ready-state checks.
 *
 * @throws {@link NotUpdatableException} (client fault)
 *
 * One or more properties included in this resource operation are defined as create-only, and therefore can't be updated.
 *
 * @throws {@link PrivateTypeException} (client fault)
 *
 * Cloud Control API hasn't received a valid response from the resource handler, due to a configuration error. This includes issues such as the resource handler returning an invalid response, or timing out.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * The resource is temporarily unavailable to be acted upon. For example, if the resource is currently undergoing an operation and can't be acted upon until that operation is finished.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource with the specified identifier can't be found.
 *
 * @throws {@link ServiceInternalErrorException} (server fault)
 *
 * The resource handler has returned that the downstream service returned an internal error, typically with a `5XX HTTP` status code.
 *
 * @throws {@link ServiceLimitExceededException} (client fault)
 *
 * The resource handler has returned that a non-transient resource limit was reached on the service side.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *
 * The specified extension doesn't exist in the CloudFormation registry.
 *
 * @throws {@link UnsupportedActionException} (client fault)
 *
 * The specified resource doesn't support this resource operation.
 *
 * @throws {@link CloudControlServiceException}
 *
 * Base exception class for all service exceptions from CloudControl service.
 *
 * @public
 */
export class ListResourcesCommand extends command<ListResourcesCommandInput, ListResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListResources",
  ListResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcesInput;
      output: ListResourcesOutput;
    };
    sdk: {
      input: ListResourcesCommandInput;
      output: ListResourcesCommandOutput;
    };
  };
}
