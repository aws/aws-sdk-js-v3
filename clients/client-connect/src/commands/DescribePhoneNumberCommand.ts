// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribePhoneNumberRequest, DescribePhoneNumberResponse } from "../models/models_0";
import { de_DescribePhoneNumberCommand, se_DescribePhoneNumberCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribePhoneNumberCommand}.
 */
export interface DescribePhoneNumberCommandInput extends DescribePhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link DescribePhoneNumberCommand}.
 */
export interface DescribePhoneNumberCommandOutput extends DescribePhoneNumberResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets details and status of a phone number that’s claimed to your Amazon Connect instance
 *    or traffic distribution group.</p>
 *          <important>
 *             <p>If the number is claimed to a traffic distribution group, and you are calling in the Amazon Web Services Region
 *     where the traffic distribution group was created, you can use either a phone number ARN or UUID value for the
 *      <code>PhoneNumberId</code> URI request parameter. However, if the number is claimed to a traffic distribution group
 *     and you are calling this API in the alternate Amazon Web Services Region associated with the
 *     traffic distribution group, you must provide a full phone number ARN. If a UUID is provided
 *     in
 *     this scenario, you will receive a
 *     <code>ResourceNotFoundException</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribePhoneNumberCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribePhoneNumberCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribePhoneNumberRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 * };
 * const command = new DescribePhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribePhoneNumberCommandInput - {@link DescribePhoneNumberCommandInput}
 * @returns {@link DescribePhoneNumberCommandOutput}
 * @see {@link DescribePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link DescribePhoneNumberCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 *
 */
export class DescribePhoneNumberCommand extends $Command<
  DescribePhoneNumberCommandInput,
  DescribePhoneNumberCommandOutput,
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
  constructor(readonly input: DescribePhoneNumberCommandInput) {
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
  ): Handler<DescribePhoneNumberCommandInput, DescribePhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePhoneNumberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribePhoneNumberCommand";
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
  private serialize(input: DescribePhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePhoneNumberCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePhoneNumberCommandOutput> {
    return de_DescribePhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
