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
import { DeleteProvisioningTemplateRequest, DeleteProvisioningTemplateResponse } from "../models/models_1";
import { de_DeleteProvisioningTemplateCommand, se_DeleteProvisioningTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteProvisioningTemplateCommand}.
 */
export interface DeleteProvisioningTemplateCommandInput extends DeleteProvisioningTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProvisioningTemplateCommand}.
 */
export interface DeleteProvisioningTemplateCommandOutput extends DeleteProvisioningTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a provisioning template.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DeleteProvisioningTemplateRequest
 *   templateName: "STRING_VALUE", // required
 * };
 * const command = new DeleteProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProvisioningTemplateCommandInput - {@link DeleteProvisioningTemplateCommandInput}
 * @returns {@link DeleteProvisioningTemplateCommandOutput}
 * @see {@link DeleteProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisioningTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictingResourceUpdateException} (client fault)
 *  <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
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
export class DeleteProvisioningTemplateCommand extends $Command<
  DeleteProvisioningTemplateCommandInput,
  DeleteProvisioningTemplateCommandOutput,
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
  constructor(readonly input: DeleteProvisioningTemplateCommandInput) {
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
  ): Handler<DeleteProvisioningTemplateCommandInput, DeleteProvisioningTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteProvisioningTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteProvisioningTemplateCommand";
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
  private serialize(input: DeleteProvisioningTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteProvisioningTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteProvisioningTemplateCommandOutput> {
    return de_DeleteProvisioningTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
