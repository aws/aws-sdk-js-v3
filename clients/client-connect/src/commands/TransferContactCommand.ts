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
import { TransferContactRequest, TransferContactResponse } from "../models/models_1";
import { de_TransferContactCommand, se_TransferContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TransferContactCommand}.
 */
export interface TransferContactCommandInput extends TransferContactRequest {}
/**
 * @public
 *
 * The output of {@link TransferContactCommand}.
 */
export interface TransferContactCommandOutput extends TransferContactResponse, __MetadataBearer {}

/**
 * @public
 * <p>Transfers contacts from one agent or queue to another agent or queue at any point after a
 *    contact is created. You can transfer a contact to another queue by providing the flow which
 *    orchestrates the contact to the destination queue. This gives you more control over contact
 *    handling and helps you adhere to the service level agreement (SLA) guaranteed to your
 *    customers.</p>
 *          <p>Note the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Transfer is supported for only <code>TASK</code> contacts.</p>
 *             </li>
 *             <li>
 *                <p>Do not use both <code>QueueId</code> and <code>UserId</code> in the same call.</p>
 *             </li>
 *             <li>
 *                <p>The following flow types are supported: Inbound flow, Transfer to agent flow, and Transfer
 *      to queue flow.</p>
 *             </li>
 *             <li>
 *                <p>The <code>TransferContact</code> API can be called only on active contacts.</p>
 *             </li>
 *             <li>
 *                <p>A contact cannot be transferred more than 11 times.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, TransferContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, TransferContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // TransferContactRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE",
 *   UserId: "STRING_VALUE",
 *   ContactFlowId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new TransferContactCommand(input);
 * const response = await client.send(command);
 * // { // TransferContactResponse
 * //   ContactId: "STRING_VALUE",
 * //   ContactArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TransferContactCommandInput - {@link TransferContactCommandInput}
 * @returns {@link TransferContactCommandOutput}
 * @see {@link TransferContactCommandInput} for command's `input` shape.
 * @see {@link TransferContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p>An entity with the same name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class TransferContactCommand extends $Command<
  TransferContactCommandInput,
  TransferContactCommandOutput,
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
  constructor(readonly input: TransferContactCommandInput) {
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
  ): Handler<TransferContactCommandInput, TransferContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TransferContactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "TransferContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "TransferContact",
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
  private serialize(input: TransferContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TransferContactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TransferContactCommandOutput> {
    return de_TransferContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
