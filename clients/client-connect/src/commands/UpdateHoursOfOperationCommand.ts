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
import { UpdateHoursOfOperationRequest } from "../models/models_1";
import { de_UpdateHoursOfOperationCommand, se_UpdateHoursOfOperationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateHoursOfOperationCommand}.
 */
export interface UpdateHoursOfOperationCommandInput extends UpdateHoursOfOperationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHoursOfOperationCommand}.
 */
export interface UpdateHoursOfOperationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates the hours of operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateHoursOfOperationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateHoursOfOperationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateHoursOfOperationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   TimeZone: "STRING_VALUE",
 *   Config: [ // HoursOfOperationConfigList
 *     { // HoursOfOperationConfig
 *       Day: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY", // required
 *       StartTime: { // HoursOfOperationTimeSlice
 *         Hours: Number("int"), // required
 *         Minutes: Number("int"), // required
 *       },
 *       EndTime: {
 *         Hours: Number("int"), // required
 *         Minutes: Number("int"), // required
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateHoursOfOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateHoursOfOperationCommandInput - {@link UpdateHoursOfOperationCommandInput}
 * @returns {@link UpdateHoursOfOperationCommandOutput}
 * @see {@link UpdateHoursOfOperationCommandInput} for command's `input` shape.
 * @see {@link UpdateHoursOfOperationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
export class UpdateHoursOfOperationCommand extends $Command<
  UpdateHoursOfOperationCommandInput,
  UpdateHoursOfOperationCommandOutput,
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
  constructor(readonly input: UpdateHoursOfOperationCommandInput) {
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
  ): Handler<UpdateHoursOfOperationCommandInput, UpdateHoursOfOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateHoursOfOperationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateHoursOfOperationCommand";
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
  private serialize(input: UpdateHoursOfOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateHoursOfOperationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHoursOfOperationCommandOutput> {
    return de_UpdateHoursOfOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
