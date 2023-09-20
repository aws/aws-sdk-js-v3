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

import { NotifyAppValidationOutputRequest, NotifyAppValidationOutputResponse } from "../models/models_0";
import { de_NotifyAppValidationOutputCommand, se_NotifyAppValidationOutputCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link NotifyAppValidationOutputCommand}.
 */
export interface NotifyAppValidationOutputCommandInput extends NotifyAppValidationOutputRequest {}
/**
 * @public
 *
 * The output of {@link NotifyAppValidationOutputCommand}.
 */
export interface NotifyAppValidationOutputCommandOutput extends NotifyAppValidationOutputResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides information to Server Migration Service about whether application validation is successful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, NotifyAppValidationOutputCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, NotifyAppValidationOutputCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // NotifyAppValidationOutputRequest
 *   appId: "STRING_VALUE", // required
 *   notificationContext: { // NotificationContext
 *     validationId: "STRING_VALUE",
 *     status: "READY_FOR_VALIDATION" || "PENDING" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 *     statusMessage: "STRING_VALUE",
 *   },
 * };
 * const command = new NotifyAppValidationOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NotifyAppValidationOutputCommandInput - {@link NotifyAppValidationOutputCommandInput}
 * @returns {@link NotifyAppValidationOutputCommandOutput}
 * @see {@link NotifyAppValidationOutputCommandInput} for command's `input` shape.
 * @see {@link NotifyAppValidationOutputCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 */
export class NotifyAppValidationOutputCommand extends $Command<
  NotifyAppValidationOutputCommandInput,
  NotifyAppValidationOutputCommandOutput,
  SMSClientResolvedConfig
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
  constructor(readonly input: NotifyAppValidationOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NotifyAppValidationOutputCommandInput, NotifyAppValidationOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, NotifyAppValidationOutputCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "NotifyAppValidationOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSServerMigrationService_V2016_10_24",
        operation: "NotifyAppValidationOutput",
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
  private serialize(input: NotifyAppValidationOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_NotifyAppValidationOutputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NotifyAppValidationOutputCommandOutput> {
    return de_NotifyAppValidationOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
