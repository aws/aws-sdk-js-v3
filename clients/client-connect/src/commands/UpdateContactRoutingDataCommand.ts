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
import { UpdateContactRoutingDataRequest, UpdateContactRoutingDataResponse } from "../models/models_2";
import { de_UpdateContactRoutingDataCommand, se_UpdateContactRoutingDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactRoutingDataCommand}.
 */
export interface UpdateContactRoutingDataCommandInput extends UpdateContactRoutingDataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactRoutingDataCommand}.
 */
export interface UpdateContactRoutingDataCommandOutput extends UpdateContactRoutingDataResponse, __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates routing priority and age on the contact (<b>QueuePriority</b> and <b>QueueTimeAdjustmentInSeconds</b>).
 *    These properties can be used to change a customer's position in the queue. For example, you can
 *    move a contact to the back of the queue by setting a lower routing priority relative to other
 *    contacts in queue; or you can move a contact to the front of the queue by increasing the routing
 *    age which will make the contact look artificially older and therefore higher up in the
 *    first-in-first-out routing order. Note that adjusting the routing age of a contact affects only
 *    its position in queue, and not its actual queue wait time as reported through metrics. These
 *    properties can also be updated by using <a href="https://docs.aws.amazon.com/connect/latest/adminguide/change-routing-priority.html">the Set routing priority / age flow
 *     block</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactRoutingDataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactRoutingDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactRoutingDataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   QueueTimeAdjustmentSeconds: Number("int"),
 *   QueuePriority: Number("long"),
 * };
 * const command = new UpdateContactRoutingDataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactRoutingDataCommandInput - {@link UpdateContactRoutingDataCommandInput}
 * @returns {@link UpdateContactRoutingDataCommandOutput}
 * @see {@link UpdateContactRoutingDataCommandInput} for command's `input` shape.
 * @see {@link UpdateContactRoutingDataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class UpdateContactRoutingDataCommand extends $Command<
  UpdateContactRoutingDataCommandInput,
  UpdateContactRoutingDataCommandOutput,
  ConnectClientResolvedConfig
> {
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
  constructor(readonly input: UpdateContactRoutingDataCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateContactRoutingDataCommandInput, UpdateContactRoutingDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateContactRoutingDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateContactRoutingDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "UpdateContactRoutingData",
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
  private serialize(input: UpdateContactRoutingDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateContactRoutingDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateContactRoutingDataCommandOutput> {
    return de_UpdateContactRoutingDataCommand(output, context);
  }
}
