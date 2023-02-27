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
  ListMFADevicesRequest,
  ListMFADevicesRequestFilterSensitiveLog,
  ListMFADevicesResponse,
  ListMFADevicesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListMFADevicesCommand,
  serializeAws_queryListMFADevicesCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link ListMFADevicesCommand}.
 */
export interface ListMFADevicesCommandInput extends ListMFADevicesRequest {}
/**
 * The output of {@link ListMFADevicesCommand}.
 */
export interface ListMFADevicesCommandOutput extends ListMFADevicesResponse, __MetadataBearer {}

/**
 * <p>Lists the MFA devices for an IAM user. If the request includes a IAM user name,
 *             then this operation lists all the MFA devices associated with the specified user. If you
 *             do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services
 *             access key ID signing the request for this operation.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListMFADevicesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListMFADevicesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListMFADevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMFADevicesCommandInput} for command's `input` shape.
 * @see {@link ListMFADevicesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class ListMFADevicesCommand extends $Command<
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput,
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

  constructor(readonly input: ListMFADevicesCommandInput) {
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
  ): Handler<ListMFADevicesCommandInput, ListMFADevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMFADevicesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListMFADevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMFADevicesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListMFADevicesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMFADevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListMFADevicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMFADevicesCommandOutput> {
    return deserializeAws_queryListMFADevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
