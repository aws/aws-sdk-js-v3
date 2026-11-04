// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteResourceInput, DeleteResourceOutput } from "../models/models_0";
import { DeleteResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteResourceCommand}.
 */
export interface DeleteResourceCommandInput extends DeleteResourceInput {}
/**
 * @public
 *
 * The output of {@link DeleteResourceCommand}.
 */
export interface DeleteResourceCommandOutput extends DeleteResourceOutput, __MetadataBearer {}

/**
 * Deletes the specified resource. For details, see [Deleting a resource](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-delete.html) in the *Amazon Web Services Cloud Control API User Guide*.
 *
 * After you have initiated a resource deletion request, you can monitor the progress of your request by calling [GetResourceRequestStatus](https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html) using the `RequestToken` of the `ProgressEvent` returned by `DeleteResource`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, DeleteResourceCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, DeleteResourceCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
 * // import type { CloudControlClientConfig } from "@aws-sdk/client-cloudcontrol";
 * const config = {}; // type is CloudControlClientConfig
 * const client = new CloudControlClient(config);
 * const input = { // DeleteResourceInput
 *   TypeName: "STRING_VALUE", // required
 *   TypeVersionId: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteResourceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResourceOutput
 * //   ProgressEvent: { // ProgressEvent
 * //     TypeName: "STRING_VALUE",
 * //     Identifier: "STRING_VALUE",
 * //     RequestToken: "STRING_VALUE",
 * //     HooksRequestToken: "STRING_VALUE",
 * //     Operation: "STRING_VALUE",
 * //     OperationStatus: "STRING_VALUE",
 * //     EventTime: new Date("TIMESTAMP"),
 * //     ResourceModel: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     ErrorCode: "STRING_VALUE",
 * //     RetryAfter: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteResourceCommandInput - {@link DeleteResourceCommandInput}
 * @returns {@link DeleteResourceCommandOutput}
 * @see {@link DeleteResourceCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudControlClientResolvedConfig | config} for CloudControlClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * The resource with the name requested already exists.
 *
 * @throws {@link ClientTokenConflictException} (client fault)
 *
 * The specified client token has already been used in another resource request.
 *
 * It's best practice for client tokens to be unique for each resource operation request. However, client token expire after 36 hours.
 *
 * @throws {@link ConcurrentOperationException} (client fault)
 *
 * Another resource operation is currently being performed on this resource.
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
export class DeleteResourceCommand extends command<DeleteResourceCommandInput, DeleteResourceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteResource",
  DeleteResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourceInput;
      output: DeleteResourceOutput;
    };
    sdk: {
      input: DeleteResourceCommandInput;
      output: DeleteResourceCommandOutput;
    };
  };
}
