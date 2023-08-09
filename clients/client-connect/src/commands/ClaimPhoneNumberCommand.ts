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
import { ClaimPhoneNumberRequest, ClaimPhoneNumberResponse } from "../models/models_0";
import { de_ClaimPhoneNumberCommand, se_ClaimPhoneNumberCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ClaimPhoneNumberCommand}.
 */
export interface ClaimPhoneNumberCommandInput extends ClaimPhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link ClaimPhoneNumberCommand}.
 */
export interface ClaimPhoneNumberCommandOutput extends ClaimPhoneNumberResponse, __MetadataBearer {}

/**
 * @public
 * <p>Claims an available phone number to your Amazon Connect instance or traffic distribution
 *    group. You can call this API only in the same Amazon Web Services Region where the Amazon Connect instance or traffic distribution group was created.</p>
 *          <p>For more information about how to use this operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/claim-phone-number.html">Claim a phone number in your
 *     country</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/claim-phone-numbers-traffic-distribution-groups.html">Claim phone
 *     numbers to traffic distribution groups</a> in the <i>Amazon Connect Administrator
 *     Guide</i>. </p>
 *          <important>
 *             <p>You can call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchAvailablePhoneNumbers.html">SearchAvailablePhoneNumbers</a> API for available phone numbers that you can claim. Call
 *     the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> API to verify the status of a previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a>
 *     operation.</p>
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
 * import { ConnectClient, ClaimPhoneNumberCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ClaimPhoneNumberCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ClaimPhoneNumberRequest
 *   TargetArn: "STRING_VALUE", // required
 *   PhoneNumber: "STRING_VALUE", // required
 *   PhoneNumberDescription: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ClaimPhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // ClaimPhoneNumberResponse
 * //   PhoneNumberId: "STRING_VALUE",
 * //   PhoneNumberArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ClaimPhoneNumberCommandInput - {@link ClaimPhoneNumberCommandInput}
 * @returns {@link ClaimPhoneNumberCommandOutput}
 * @see {@link ClaimPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link ClaimPhoneNumberCommandOutput} for command's `response` shape.
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
export class ClaimPhoneNumberCommand extends $Command<
  ClaimPhoneNumberCommandInput,
  ClaimPhoneNumberCommandOutput,
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
  constructor(readonly input: ClaimPhoneNumberCommandInput) {
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
  ): Handler<ClaimPhoneNumberCommandInput, ClaimPhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ClaimPhoneNumberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ClaimPhoneNumberCommand";
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
  private serialize(input: ClaimPhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ClaimPhoneNumberCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ClaimPhoneNumberCommandOutput> {
    return de_ClaimPhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
