// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourceInput, GetResourceOutput } from "../models/models_0";
import { GetResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourceCommand}.
 */
export interface GetResourceCommandInput extends GetResourceInput {}
/**
 * @public
 *
 * The output of {@link GetResourceCommand}.
 */
export interface GetResourceCommandOutput extends GetResourceOutput, __MetadataBearer {}

/**
 * Returns information about the current state of the specified resource. For details, see [Reading a resource's current state](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-read.html).
 *
 * You can use this action to return information about an existing resource in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, GetResourceCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, GetResourceCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
 * // import type { CloudControlClientConfig } from "@aws-sdk/client-cloudcontrol";
 * const config = {}; // type is CloudControlClientConfig
 * const client = new CloudControlClient(config);
 * const input = { // GetResourceInput
 *   TypeName: "STRING_VALUE", // required
 *   TypeVersionId: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetResourceCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceOutput
 * //   TypeName: "STRING_VALUE",
 * //   ResourceDescription: { // ResourceDescription
 * //     Identifier: "STRING_VALUE",
 * //     Properties: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourceCommandInput - {@link GetResourceCommandInput}
 * @returns {@link GetResourceCommandOutput}
 * @see {@link GetResourceCommandInput} for command's `input` shape.
 * @see {@link GetResourceCommandOutput} for command's `response` shape.
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
export class GetResourceCommand extends command<GetResourceCommandInput, GetResourceCommandOutput>(
  _ep0,
  _mw0,
  "GetResource",
  GetResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceInput;
      output: GetResourceOutput;
    };
    sdk: {
      input: GetResourceCommandInput;
      output: GetResourceCommandOutput;
    };
  };
}
