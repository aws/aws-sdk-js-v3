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
import { DescribeUserRequest, DescribeUserResponse } from "../models/models_0";
import { de_DescribeUserCommand, se_DescribeUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserCommand}.
 */
export interface DescribeUserCommandInput extends DescribeUserRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserCommand}.
 */
export interface DescribeUserCommandOutput extends DescribeUserResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified user account. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID in the Amazon Connect console</a> (it’s the final part of the ARN). The console does not display the
 *    user IDs. Instead, list the users and note the IDs provided in the output.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeUserCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeUserCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeUserRequest
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeUserCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserResponse
 * //   User: { // User
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Username: "STRING_VALUE",
 * //     IdentityInfo: { // UserIdentityInfo
 * //       FirstName: "STRING_VALUE",
 * //       LastName: "STRING_VALUE",
 * //       Email: "STRING_VALUE",
 * //       SecondaryEmail: "STRING_VALUE",
 * //       Mobile: "STRING_VALUE",
 * //     },
 * //     PhoneConfig: { // UserPhoneConfig
 * //       PhoneType: "SOFT_PHONE" || "DESK_PHONE", // required
 * //       AutoAccept: true || false,
 * //       AfterContactWorkTimeLimit: Number("int"),
 * //       DeskPhoneNumber: "STRING_VALUE",
 * //     },
 * //     DirectoryUserId: "STRING_VALUE",
 * //     SecurityProfileIds: [ // SecurityProfileIds
 * //       "STRING_VALUE",
 * //     ],
 * //     RoutingProfileId: "STRING_VALUE",
 * //     HierarchyGroupId: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeUserCommandInput - {@link DescribeUserCommandInput}
 * @returns {@link DescribeUserCommandOutput}
 * @see {@link DescribeUserCommandInput} for command's `input` shape.
 * @see {@link DescribeUserCommandOutput} for command's `response` shape.
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
export class DescribeUserCommand extends $Command<
  DescribeUserCommandInput,
  DescribeUserCommandOutput,
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
  constructor(readonly input: DescribeUserCommandInput) {
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
  ): Handler<DescribeUserCommandInput, DescribeUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeUserCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "DescribeUser",
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
  private serialize(input: DescribeUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeUserCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUserCommandOutput> {
    return de_DescribeUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
