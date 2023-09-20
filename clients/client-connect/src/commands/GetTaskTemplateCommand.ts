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
import { GetTaskTemplateRequest, GetTaskTemplateResponse } from "../models/models_1";
import { de_GetTaskTemplateCommand, se_GetTaskTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTaskTemplateCommand}.
 */
export interface GetTaskTemplateCommandInput extends GetTaskTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetTaskTemplateCommand}.
 */
export interface GetTaskTemplateCommandOutput extends GetTaskTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets details about a specific task template in the specified Amazon Connect
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetTaskTemplateCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetTaskTemplateCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // GetTaskTemplateRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TaskTemplateId: "STRING_VALUE", // required
 *   SnapshotVersion: "STRING_VALUE",
 * };
 * const command = new GetTaskTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetTaskTemplateResponse
 * //   InstanceId: "STRING_VALUE",
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   ContactFlowId: "STRING_VALUE",
 * //   Constraints: { // TaskTemplateConstraints
 * //     RequiredFields: [ // RequiredTaskTemplateFields
 * //       { // RequiredFieldInfo
 * //         Id: { // TaskTemplateFieldIdentifier
 * //           Name: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     ReadOnlyFields: [ // ReadOnlyTaskTemplateFields
 * //       { // ReadOnlyFieldInfo
 * //         Id: {
 * //           Name: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     InvisibleFields: [ // InvisibleTaskTemplateFields
 * //       { // InvisibleFieldInfo
 * //         Id: {
 * //           Name: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   Defaults: { // TaskTemplateDefaults
 * //     DefaultFieldValues: [ // TaskTemplateDefaultFieldValueList
 * //       { // TaskTemplateDefaultFieldValue
 * //         Id: {
 * //           Name: "STRING_VALUE",
 * //         },
 * //         DefaultValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   Fields: [ // TaskTemplateFields
 * //     { // TaskTemplateField
 * //       Id: {
 * //         Name: "STRING_VALUE",
 * //       },
 * //       Description: "STRING_VALUE",
 * //       Type: "NAME" || "DESCRIPTION" || "SCHEDULED_TIME" || "QUICK_CONNECT" || "URL" || "NUMBER" || "TEXT" || "TEXT_AREA" || "DATE_TIME" || "BOOLEAN" || "SINGLE_SELECT" || "EMAIL",
 * //       SingleSelectOptions: [ // SingleSelectOptions
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Status: "ACTIVE" || "INACTIVE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTaskTemplateCommandInput - {@link GetTaskTemplateCommandInput}
 * @returns {@link GetTaskTemplateCommandOutput}
 * @see {@link GetTaskTemplateCommandInput} for command's `input` shape.
 * @see {@link GetTaskTemplateCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class GetTaskTemplateCommand extends $Command<
  GetTaskTemplateCommandInput,
  GetTaskTemplateCommandOutput,
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
  constructor(readonly input: GetTaskTemplateCommandInput) {
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
  ): Handler<GetTaskTemplateCommandInput, GetTaskTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTaskTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "GetTaskTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "GetTaskTemplate",
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
  private serialize(input: GetTaskTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTaskTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTaskTemplateCommandOutput> {
    return de_GetTaskTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
