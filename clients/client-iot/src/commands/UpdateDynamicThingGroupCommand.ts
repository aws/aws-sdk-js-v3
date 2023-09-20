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
import { UpdateDynamicThingGroupRequest, UpdateDynamicThingGroupResponse } from "../models/models_2";
import { de_UpdateDynamicThingGroupCommand, se_UpdateDynamicThingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDynamicThingGroupCommand}.
 */
export interface UpdateDynamicThingGroupCommandInput extends UpdateDynamicThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDynamicThingGroupCommand}.
 */
export interface UpdateDynamicThingGroupCommandOutput extends UpdateDynamicThingGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a dynamic thing group.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDynamicThingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateDynamicThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateDynamicThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdateDynamicThingGroupRequest
 *   thingGroupName: "STRING_VALUE", // required
 *   thingGroupProperties: { // ThingGroupProperties
 *     thingGroupDescription: "STRING_VALUE",
 *     attributePayload: { // AttributePayload
 *       attributes: { // Attributes
 *         "<keys>": "STRING_VALUE",
 *       },
 *       merge: true || false,
 *     },
 *   },
 *   expectedVersion: Number("long"),
 *   indexName: "STRING_VALUE",
 *   queryString: "STRING_VALUE",
 *   queryVersion: "STRING_VALUE",
 * };
 * const command = new UpdateDynamicThingGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDynamicThingGroupResponse
 * //   version: Number("long"),
 * // };
 *
 * ```
 *
 * @param UpdateDynamicThingGroupCommandInput - {@link UpdateDynamicThingGroupCommandInput}
 * @returns {@link UpdateDynamicThingGroupCommandOutput}
 * @see {@link UpdateDynamicThingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateDynamicThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidQueryException} (client fault)
 *  <p>The query is invalid.</p>
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
 * @throws {@link VersionConflictException} (client fault)
 *  <p>An exception thrown when the version of an entity specified with the
 *             <code>expectedVersion</code> parameter does not match the latest version in the
 *          system.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class UpdateDynamicThingGroupCommand extends $Command<
  UpdateDynamicThingGroupCommandInput,
  UpdateDynamicThingGroupCommandOutput,
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
  constructor(readonly input: UpdateDynamicThingGroupCommandInput) {
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
  ): Handler<UpdateDynamicThingGroupCommandInput, UpdateDynamicThingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDynamicThingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateDynamicThingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "UpdateDynamicThingGroup",
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
  private serialize(input: UpdateDynamicThingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDynamicThingGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDynamicThingGroupCommandOutput> {
    return de_UpdateDynamicThingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
