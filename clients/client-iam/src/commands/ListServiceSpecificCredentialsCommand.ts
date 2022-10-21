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
  ListServiceSpecificCredentialsRequest,
  ListServiceSpecificCredentialsRequestFilterSensitiveLog,
  ListServiceSpecificCredentialsResponse,
  ListServiceSpecificCredentialsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListServiceSpecificCredentialsCommand,
  serializeAws_queryListServiceSpecificCredentialsCommand,
} from "../protocols/Aws_query";

export interface ListServiceSpecificCredentialsCommandInput extends ListServiceSpecificCredentialsRequest {}
export interface ListServiceSpecificCredentialsCommandOutput
  extends ListServiceSpecificCredentialsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the service-specific credentials associated with the
 *             specified IAM user. If none exists, the operation returns an empty list. The
 *             service-specific credentials returned by this operation are used only for authenticating
 *             the IAM user to a specific service. For more information about using service-specific
 *             credentials to authenticate to an Amazon Web Services service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a>
 *             in the CodeCommit User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListServiceSpecificCredentialsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListServiceSpecificCredentialsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListServiceSpecificCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceSpecificCredentialsCommandInput} for command's `input` shape.
 * @see {@link ListServiceSpecificCredentialsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class ListServiceSpecificCredentialsCommand extends $Command<
  ListServiceSpecificCredentialsCommandInput,
  ListServiceSpecificCredentialsCommandOutput,
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

  constructor(readonly input: ListServiceSpecificCredentialsCommandInput) {
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
  ): Handler<ListServiceSpecificCredentialsCommandInput, ListServiceSpecificCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListServiceSpecificCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListServiceSpecificCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServiceSpecificCredentialsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListServiceSpecificCredentialsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListServiceSpecificCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryListServiceSpecificCredentialsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServiceSpecificCredentialsCommandOutput> {
    return deserializeAws_queryListServiceSpecificCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
