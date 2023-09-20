// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudControlClient";
import { DeleteResourceInput, DeleteResourceOutput, DeleteResourceOutputFilterSensitiveLog } from "../models/models_0";
import { de_DeleteResourceCommand, se_DeleteResourceCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Deletes the specified resource. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-delete.html">Deleting a
 *         resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
 *          <p>After you have initiated a resource deletion request, you can monitor the progress of your
 *       request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the
 *         <code>ProgressEvent</code> returned by <code>DeleteResource</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, DeleteResourceCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, DeleteResourceCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
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
 *  <p>The resource with the name requested already exists.</p>
 *
 * @throws {@link ClientTokenConflictException} (client fault)
 *  <p>The specified client token has already been used in another resource request.</p>
 *          <p>It's best practice for client tokens to be unique for each resource operation request.
 *       However, client token expire after 36 hours.</p>
 *
 * @throws {@link ConcurrentOperationException} (client fault)
 *  <p>Another resource operation is currently being performed on this resource.</p>
 *
 * @throws {@link GeneralServiceException} (client fault)
 *  <p>The resource handler has returned that the downstream service generated an error that
 *       doesn't map to any other handler error code.</p>
 *
 * @throws {@link HandlerFailureException} (server fault)
 *  <p>The resource handler has failed without a returning a more specific error code. This can
 *       include timeouts.</p>
 *
 * @throws {@link HandlerInternalFailureException} (server fault)
 *  <p>The resource handler has returned that an unexpected error occurred within the resource
 *       handler.</p>
 *
 * @throws {@link InvalidCredentialsException} (client fault)
 *  <p>The resource handler has returned that the credentials provided by the user are
 *       invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The resource handler has returned that invalid input from the user has generated a generic
 *       exception.</p>
 *
 * @throws {@link NetworkFailureException} (server fault)
 *  <p>The resource handler has returned that the request couldn't be completed due to networking
 *       issues, such as a failure to receive a response from the server.</p>
 *
 * @throws {@link NotStabilizedException} (client fault)
 *  <p>The resource handler has returned that the downstream resource failed to complete all of
 *       its ready-state checks.</p>
 *
 * @throws {@link NotUpdatableException} (client fault)
 *  <p>One or more properties included in this resource operation are defined as create-only, and
 *       therefore can't be updated.</p>
 *
 * @throws {@link PrivateTypeException} (client fault)
 *  <p>Cloud Control API hasn't received a valid response from the resource handler, due to a configuration
 *       error. This includes issues such as the resource handler returning an invalid response, or
 *       timing out.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource is temporarily unavailable to be acted upon. For example, if the resource is
 *       currently undergoing an operation and can't be acted upon until that operation is
 *       finished.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource with the specified identifier can't be found.</p>
 *
 * @throws {@link ServiceInternalErrorException} (server fault)
 *  <p>The resource handler has returned that the downstream service returned an internal error,
 *       typically with a <code>5XX HTTP</code> status code.</p>
 *
 * @throws {@link ServiceLimitExceededException} (client fault)
 *  <p>The resource handler has returned that a non-transient resource limit was reached on the
 *       service side.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *  <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 *
 * @throws {@link UnsupportedActionException} (client fault)
 *  <p>The specified resource doesn't support this resource operation.</p>
 *
 * @throws {@link CloudControlServiceException}
 * <p>Base exception class for all service exceptions from CloudControl service.</p>
 *
 */
export class DeleteResourceCommand extends $Command<
  DeleteResourceCommandInput,
  DeleteResourceCommandOutput,
  CloudControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeleteResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteResourceCommandInput, DeleteResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudControlClient";
    const commandName = "DeleteResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DeleteResourceOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudApiService",
        operation: "DeleteResource",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteResourceCommandOutput> {
    return de_DeleteResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
