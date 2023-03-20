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
import { ListStreamingDistributionsRequest, ListStreamingDistributionsResult } from "../models/models_1";
import {
  deserializeAws_restXmlListStreamingDistributionsCommand,
  serializeAws_restXmlListStreamingDistributionsCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link ListStreamingDistributionsCommand}.
 */
export interface ListStreamingDistributionsCommandInput extends ListStreamingDistributionsRequest {}
/**
 * @public
 *
 * The output of {@link ListStreamingDistributionsCommand}.
 */
export interface ListStreamingDistributionsCommandOutput extends ListStreamingDistributionsResult, __MetadataBearer {}

/**
 * @public
 * <p>List streaming distributions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListStreamingDistributionsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListStreamingDistributionsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListStreamingDistributionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListStreamingDistributionsCommandInput - {@link ListStreamingDistributionsCommandInput}
 * @returns {@link ListStreamingDistributionsCommandOutput}
 * @see {@link ListStreamingDistributionsCommandInput} for command's `input` shape.
 * @see {@link ListStreamingDistributionsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 *
 */
export class ListStreamingDistributionsCommand extends $Command<
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListStreamingDistributionsCommandInput) {
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
  ): Handler<ListStreamingDistributionsCommandInput, ListStreamingDistributionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStreamingDistributionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListStreamingDistributionsCommand";
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
  private serialize(input: ListStreamingDistributionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListStreamingDistributionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStreamingDistributionsCommandOutput> {
    return deserializeAws_restXmlListStreamingDistributionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
