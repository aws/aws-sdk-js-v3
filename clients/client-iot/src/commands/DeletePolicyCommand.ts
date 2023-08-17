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
} from "@smithy/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeletePolicyRequest } from "../models/models_1";
import { de_DeletePolicyCommand, se_DeletePolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeletePolicyCommand}.
 */
export interface DeletePolicyCommandInput extends DeletePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeletePolicyCommand}.
 */
export interface DeletePolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified policy.</p>
 *          <p>A policy cannot be deleted if it has non-default versions or it is attached to any
 *          certificate.</p>
 *          <p>To delete a policy, use the <a>DeletePolicyVersion</a> action to delete all non-default
 *          versions of the policy; use the <a>DetachPolicy</a> action to detach the policy from any
 *          certificate; and then use the DeletePolicy action to delete the policy.</p>
 *          <p>When a policy is deleted using DeletePolicy, its default version is deleted with
 *          it.</p>
 *          <note>
 *             <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after
 *          a policy is detached before it's ready to be deleted.</p>
 *          </note>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicy</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeletePolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeletePolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DeletePolicyRequest
 *   policyName: "STRING_VALUE", // required
 * };
 * const command = new DeletePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePolicyCommandInput - {@link DeletePolicyCommandInput}
 * @returns {@link DeletePolicyCommandOutput}
 * @see {@link DeletePolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link DeleteConflictException} (client fault)
 *  <p>You can't delete the resource because it is attached to one or more
 *          resources.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class DeletePolicyCommand extends $Command<
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: DeletePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePolicyCommandInput, DeletePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeletePolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeletePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DeletePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeletePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePolicyCommandOutput> {
    return de_DeletePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
