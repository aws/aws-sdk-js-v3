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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DeactivateEvaluationFormRequest, DeactivateEvaluationFormResponse } from "../models/models_0";
import { de_DeactivateEvaluationFormCommand, se_DeactivateEvaluationFormCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeactivateEvaluationFormCommand}.
 */
export interface DeactivateEvaluationFormCommandInput extends DeactivateEvaluationFormRequest {}
/**
 * @public
 *
 * The output of {@link DeactivateEvaluationFormCommand}.
 */
export interface DeactivateEvaluationFormCommandOutput extends DeactivateEvaluationFormResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deactivates an evaluation form in the specified Amazon Connect instance. After a form is deactivated,
 *    it is no longer available for users to start new evaluations based on the form. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeactivateEvaluationFormCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeactivateEvaluationFormCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DeactivateEvaluationFormRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationFormId: "STRING_VALUE", // required
 *   EvaluationFormVersion: Number("int"), // required
 * };
 * const command = new DeactivateEvaluationFormCommand(input);
 * const response = await client.send(command);
 * // { // DeactivateEvaluationFormResponse
 * //   EvaluationFormId: "STRING_VALUE", // required
 * //   EvaluationFormArn: "STRING_VALUE", // required
 * //   EvaluationFormVersion: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param DeactivateEvaluationFormCommandInput - {@link DeactivateEvaluationFormCommandInput}
 * @returns {@link DeactivateEvaluationFormCommandOutput}
 * @see {@link DeactivateEvaluationFormCommandInput} for command's `input` shape.
 * @see {@link DeactivateEvaluationFormCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class DeactivateEvaluationFormCommand extends $Command<
  DeactivateEvaluationFormCommandInput,
  DeactivateEvaluationFormCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: DeactivateEvaluationFormCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeactivateEvaluationFormCommandInput, DeactivateEvaluationFormCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeactivateEvaluationFormCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DeactivateEvaluationFormCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "DeactivateEvaluationForm",
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
  private serialize(input: DeactivateEvaluationFormCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeactivateEvaluationFormCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeactivateEvaluationFormCommandOutput> {
    return de_DeactivateEvaluationFormCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
