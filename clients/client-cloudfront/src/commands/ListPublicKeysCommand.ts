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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  ListPublicKeysRequest,
  ListPublicKeysRequestFilterSensitiveLog,
  ListPublicKeysResult,
  ListPublicKeysResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlListPublicKeysCommand,
  serializeAws_restXmlListPublicKeysCommand,
} from "../protocols/Aws_restXml";

export interface ListPublicKeysCommandInput extends ListPublicKeysRequest {}
export interface ListPublicKeysCommandOutput extends ListPublicKeysResult, __MetadataBearer {}

/**
 * <p>List all public keys that have been added to CloudFront for this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListPublicKeysCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListPublicKeysCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListPublicKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPublicKeysCommandInput} for command's `input` shape.
 * @see {@link ListPublicKeysCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class ListPublicKeysCommand extends $Command<
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput,
  CloudFrontClientResolvedConfig
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

  constructor(readonly input: ListPublicKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPublicKeysCommandInput, ListPublicKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPublicKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListPublicKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPublicKeysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPublicKeysResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPublicKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListPublicKeysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPublicKeysCommandOutput> {
    return deserializeAws_restXmlListPublicKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
