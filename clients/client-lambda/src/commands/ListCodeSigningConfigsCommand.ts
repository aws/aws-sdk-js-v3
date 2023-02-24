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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  ListCodeSigningConfigsRequest,
  ListCodeSigningConfigsRequestFilterSensitiveLog,
  ListCodeSigningConfigsResponse,
  ListCodeSigningConfigsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListCodeSigningConfigsCommand,
  serializeAws_restJson1ListCodeSigningConfigsCommand,
} from "../protocols/Aws_restJson1";

export interface ListCodeSigningConfigsCommandInput extends ListCodeSigningConfigsRequest {}
export interface ListCodeSigningConfigsCommandOutput extends ListCodeSigningConfigsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code
 *         signing configurations</a>. A request returns up to 10,000 configurations per
 *       call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListCodeSigningConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListCodeSigningConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListCodeSigningConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCodeSigningConfigsCommandInput} for command's `input` shape.
 * @see {@link ListCodeSigningConfigsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class ListCodeSigningConfigsCommand extends $Command<
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput,
  LambdaClientResolvedConfig
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

  constructor(readonly input: ListCodeSigningConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCodeSigningConfigsCommandInput, ListCodeSigningConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCodeSigningConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListCodeSigningConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCodeSigningConfigsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCodeSigningConfigsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCodeSigningConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCodeSigningConfigsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCodeSigningConfigsCommandOutput> {
    return deserializeAws_restJson1ListCodeSigningConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
