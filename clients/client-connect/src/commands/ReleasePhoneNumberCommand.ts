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
import { ReleasePhoneNumberRequest } from "../models/models_1";
import { de_ReleasePhoneNumberCommand, se_ReleasePhoneNumberCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReleasePhoneNumberCommand}.
 */
export interface ReleasePhoneNumberCommandInput extends ReleasePhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link ReleasePhoneNumberCommand}.
 */
export interface ReleasePhoneNumberCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Releases a phone number previously claimed to an Amazon Connect instance or traffic distribution group. You
 *    can call this API only in the Amazon Web Services Region where the number was claimed.</p>
 *          <important>
 *             <p>To release phone numbers from a traffic distribution group, use the <code>ReleasePhoneNumber</code> API, not the
 *      Amazon Connect console.</p>
 *             <p>After releasing a phone number, the phone number enters into a cooldown period of 30 days.
 *     It cannot be searched for or claimed again until the period has ended. If you accidentally
 *     release a phone number, contact Amazon Web Services Support.</p>
 *          </important>
 *          <p>If you plan to claim and release numbers frequently during a 30 day period,
 *                 contact us for a service quota exception. Otherwise, it is possible you will be blocked from
 *                 claiming and releasing any more numbers until 30 days past the oldest number
 *                 released has expired.</p>
 *          <p>By default you can claim and release up to 200% of your maximum number of active
 *                 phone numbers during any 30 day period. If you claim and release phone numbers using
 *                 the UI or API during a rolling 30 day cycle that exceeds 200% of your phone number
 *                 service level quota, you will be blocked from claiming any more numbers until 30
 *                 days past the oldest number released has expired. </p>
 *          <p>For example, if you already have 99 claimed numbers and a service level quota of 99 phone numbers, and in any 30
 *                 day period you release 99, claim 99, and then release 99, you will have exceeded the
 *                 200% limit. At that point you are blocked from claiming any more numbers until you
 *                 open an Amazon Web Services support ticket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ReleasePhoneNumberCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ReleasePhoneNumberCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ReleasePhoneNumberRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ReleasePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ReleasePhoneNumberCommandInput - {@link ReleasePhoneNumberCommandInput}
 * @returns {@link ReleasePhoneNumberCommandOutput}
 * @see {@link ReleasePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link ReleasePhoneNumberCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>That resource is already in use. Please try another.</p>
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
export class ReleasePhoneNumberCommand extends $Command<
  ReleasePhoneNumberCommandInput,
  ReleasePhoneNumberCommandOutput,
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
  constructor(readonly input: ReleasePhoneNumberCommandInput) {
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
  ): Handler<ReleasePhoneNumberCommandInput, ReleasePhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReleasePhoneNumberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ReleasePhoneNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "ReleasePhoneNumber",
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
  private serialize(input: ReleasePhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReleasePhoneNumberCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReleasePhoneNumberCommandOutput> {
    return de_ReleasePhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
