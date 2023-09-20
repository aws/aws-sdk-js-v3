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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetLoginProfileRequest, GetLoginProfileResponse } from "../models/models_0";
import { de_GetLoginProfileCommand, se_GetLoginProfileCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLoginProfileCommand}.
 */
export interface GetLoginProfileCommandInput extends GetLoginProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetLoginProfileCommand}.
 */
export interface GetLoginProfileCommandOutput extends GetLoginProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the user name for the specified IAM user. A login profile is created when
 *             you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist
 *             or does not have a password, the operation returns a 404 (<code>NoSuchEntity</code>)
 *             error.</p>
 *          <p>If you create an IAM user with access to the console, the <code>CreateDate</code>
 *             reflects the date you created the initial password for the user.</p>
 *          <p>If you create an IAM user with programmatic access, and then later add a password
 *             for the user to access the Amazon Web Services Management Console, the <code>CreateDate</code> reflects the initial
 *             password creation date. A user with programmatic access does not have a login profile
 *             unless you create a password for the user to access the Amazon Web Services Management Console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetLoginProfileRequest
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new GetLoginProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetLoginProfileResponse
 * //   LoginProfile: { // LoginProfile
 * //     UserName: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     PasswordResetRequired: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLoginProfileCommandInput - {@link GetLoginProfileCommandInput}
 * @returns {@link GetLoginProfileCommandOutput}
 * @see {@link GetLoginProfileCommandInput} for command's `input` shape.
 * @see {@link GetLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To get password information for an IAM user
 * ```javascript
 * // The following command gets information about the password for the IAM user named Anika.
 * const input = {
 *   "UserName": "Anika"
 * };
 * const command = new GetLoginProfileCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LoginProfile": {
 *     "CreateDate": "2012-09-21T23:03:39Z",
 *     "UserName": "Anika"
 *   }
 * }
 * *\/
 * // example id: d6b580cc-909f-4925-9caa-d425cbc1ad47
 * ```
 *
 */
export class GetLoginProfileCommand extends $Command<
  GetLoginProfileCommandInput,
  GetLoginProfileCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: GetLoginProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLoginProfileCommandInput, GetLoginProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLoginProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetLoginProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "GetLoginProfile",
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
  private serialize(input: GetLoginProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLoginProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLoginProfileCommandOutput> {
    return de_GetLoginProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
