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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  CreateProvisioningTemplateVersionRequest,
  CreateProvisioningTemplateVersionResponse,
} from "../models/models_0";
import {
  de_CreateProvisioningTemplateVersionCommand,
  se_CreateProvisioningTemplateVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateProvisioningTemplateVersionCommand}.
 */
export interface CreateProvisioningTemplateVersionCommandInput extends CreateProvisioningTemplateVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateProvisioningTemplateVersionCommand}.
 */
export interface CreateProvisioningTemplateVersionCommandOutput
  extends CreateProvisioningTemplateVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new version of a provisioning template.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplateVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningTemplateVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningTemplateVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateProvisioningTemplateVersionRequest
 *   templateName: "STRING_VALUE", // required
 *   templateBody: "STRING_VALUE", // required
 *   setAsDefault: true || false,
 * };
 * const command = new CreateProvisioningTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateProvisioningTemplateVersionResponse
 * //   templateArn: "STRING_VALUE",
 * //   templateName: "STRING_VALUE",
 * //   versionId: Number("int"),
 * //   isDefaultVersion: true || false,
 * // };
 *
 * ```
 *
 * @param CreateProvisioningTemplateVersionCommandInput - {@link CreateProvisioningTemplateVersionCommandInput}
 * @returns {@link CreateProvisioningTemplateVersionCommandOutput}
 * @see {@link CreateProvisioningTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictingResourceUpdateException} (client fault)
 *  <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
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
 * @throws {@link VersionsLimitExceededException} (client fault)
 *  <p>The number of policy versions exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class CreateProvisioningTemplateVersionCommand extends $Command<
  CreateProvisioningTemplateVersionCommandInput,
  CreateProvisioningTemplateVersionCommandOutput,
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
  constructor(readonly input: CreateProvisioningTemplateVersionCommandInput) {
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
  ): Handler<CreateProvisioningTemplateVersionCommandInput, CreateProvisioningTemplateVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateProvisioningTemplateVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateProvisioningTemplateVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "CreateProvisioningTemplateVersion",
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
  private serialize(
    input: CreateProvisioningTemplateVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateProvisioningTemplateVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateProvisioningTemplateVersionCommandOutput> {
    return de_CreateProvisioningTemplateVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
