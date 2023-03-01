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

import {
  AcceptPageRequest,
  AcceptPageRequestFilterSensitiveLog,
  AcceptPageResult,
  AcceptPageResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AcceptPageCommand,
  serializeAws_json1_1AcceptPageCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * The input for {@link AcceptPageCommand}.
 */
export interface AcceptPageCommandInput extends AcceptPageRequest {}
/**
 * The output of {@link AcceptPageCommand}.
 */
export interface AcceptPageCommandOutput extends AcceptPageResult, __MetadataBearer {}

/**
 * <p>Used to acknowledge an engagement to a contact channel during an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, AcceptPageCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, AcceptPageCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new AcceptPageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptPageCommandInput} for command's `input` shape.
 * @see {@link AcceptPageCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 *
 * @example To accept a page during and engagement
 * ```javascript
 * // The following accept-page operation uses an accept code sent to the contact channel to accept a page.
 * const input = {
 *   "AcceptCode": "425440",
 *   "AcceptType": "READ",
 *   "PageId": "arn:aws:ssm-contacts:us-east-2:682428703967:page/akuam/94ea0c7b-56d9-46c3-b84a-a37c8b067ad3"
 * };
 * const command = new AcceptPageCommand(input);
 * await client.send(command);
 * ```
 *
 */
export class AcceptPageCommand extends $Command<
  AcceptPageCommandInput,
  AcceptPageCommandOutput,
  SSMContactsClientResolvedConfig
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

  constructor(readonly input: AcceptPageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptPageCommandInput, AcceptPageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AcceptPageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "AcceptPageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptPageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AcceptPageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptPageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcceptPageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptPageCommandOutput> {
    return deserializeAws_json1_1AcceptPageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
