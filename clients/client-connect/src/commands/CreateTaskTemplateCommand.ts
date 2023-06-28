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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { CreateTaskTemplateRequest, CreateTaskTemplateResponse } from "../models/models_0";
import { de_CreateTaskTemplateCommand, se_CreateTaskTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTaskTemplateCommand}.
 */
export interface CreateTaskTemplateCommandInput extends CreateTaskTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateTaskTemplateCommand}.
 */
export interface CreateTaskTemplateCommandOutput extends CreateTaskTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new task template in the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateTaskTemplateCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateTaskTemplateCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // CreateTaskTemplateRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ContactFlowId: "STRING_VALUE",
 *   Constraints: { // TaskTemplateConstraints
 *     RequiredFields: [ // RequiredTaskTemplateFields
 *       { // RequiredFieldInfo
 *         Id: { // TaskTemplateFieldIdentifier
 *           Name: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     ReadOnlyFields: [ // ReadOnlyTaskTemplateFields
 *       { // ReadOnlyFieldInfo
 *         Id: {
 *           Name: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     InvisibleFields: [ // InvisibleTaskTemplateFields
 *       { // InvisibleFieldInfo
 *         Id: {
 *           Name: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 *   Defaults: { // TaskTemplateDefaults
 *     DefaultFieldValues: [ // TaskTemplateDefaultFieldValueList
 *       { // TaskTemplateDefaultFieldValue
 *         Id: {
 *           Name: "STRING_VALUE",
 *         },
 *         DefaultValue: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Status: "ACTIVE" || "INACTIVE",
 *   Fields: [ // TaskTemplateFields // required
 *     { // TaskTemplateField
 *       Id: {
 *         Name: "STRING_VALUE",
 *       },
 *       Description: "STRING_VALUE",
 *       Type: "NAME" || "DESCRIPTION" || "SCHEDULED_TIME" || "QUICK_CONNECT" || "URL" || "NUMBER" || "TEXT" || "TEXT_AREA" || "DATE_TIME" || "BOOLEAN" || "SINGLE_SELECT" || "EMAIL",
 *       SingleSelectOptions: [ // SingleSelectOptions
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateTaskTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateTaskTemplateResponse
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTaskTemplateCommandInput - {@link CreateTaskTemplateCommandInput}
 * @returns {@link CreateTaskTemplateCommandOutput}
 * @see {@link CreateTaskTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateTaskTemplateCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link PropertyValidationException} (client fault)
 *  <p>The property is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class CreateTaskTemplateCommand extends $Command<
  CreateTaskTemplateCommandInput,
  CreateTaskTemplateCommandOutput,
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
  constructor(readonly input: CreateTaskTemplateCommandInput) {
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
  ): Handler<CreateTaskTemplateCommandInput, CreateTaskTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTaskTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateTaskTemplateCommand";
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
  private serialize(input: CreateTaskTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTaskTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTaskTemplateCommandOutput> {
    return de_CreateTaskTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
