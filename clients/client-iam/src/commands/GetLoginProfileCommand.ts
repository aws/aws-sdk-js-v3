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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  GetLoginProfileRequest,
  GetLoginProfileRequestFilterSensitiveLog,
  GetLoginProfileResponse,
  GetLoginProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetLoginProfileCommand,
  serializeAws_queryGetLoginProfileCommand,
} from "../protocols/Aws_query";

export interface GetLoginProfileCommandInput extends GetLoginProfileRequest {}
export interface GetLoginProfileCommandOutput extends GetLoginProfileResponse, __MetadataBearer {}

/**
 * <p>Retrieves the user name for the specified IAM user. A login profile is created when
 *             you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist
 *             or does not have a password, the operation returns a 404 (<code>NoSuchEntity</code>)
 *             error.</p>
 *         <p>If you create an IAM user with access to the console, the <code>CreateDate</code>
 *             reflects the date you created the initial password for the user.</p>
 *         <p>If you create an IAM user with programmatic access, and then later add a password
 *             for the user to access the Amazon Web Services Management Console, the <code>CreateDate</code> reflects the initial
 *             password creation date. A user with programmatic access does not have a login profile
 *             unless you create a password for the user to access the Amazon Web Services Management Console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetLoginProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoginProfileCommandInput} for command's `input` shape.
 * @see {@link GetLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
      inputFilterSensitiveLog: GetLoginProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLoginProfileResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLoginProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetLoginProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLoginProfileCommandOutput> {
    return deserializeAws_queryGetLoginProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
