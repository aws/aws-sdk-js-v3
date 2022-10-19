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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  GetResourceConfigHistoryRequest,
  GetResourceConfigHistoryRequestFilterSensitiveLog,
  GetResourceConfigHistoryResponse,
  GetResourceConfigHistoryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetResourceConfigHistoryCommand,
  serializeAws_json1_1GetResourceConfigHistoryCommand,
} from "../protocols/Aws_json1_1";

export interface GetResourceConfigHistoryCommandInput extends GetResourceConfigHistoryRequest {}
export interface GetResourceConfigHistoryCommandOutput extends GetResourceConfigHistoryResponse, __MetadataBearer {}

/**
 * <p>Returns a list of <code>ConfigurationItems</code> for the specified resource.
 * 			The list contains details about each state of the resource
 * 			during the specified time interval. If you specified a retention
 * 			period to retain your <code>ConfigurationItems</code> between a
 * 			minimum of 30 days and a maximum of 7 years (2557 days), Config
 * 			returns the <code>ConfigurationItems</code> for the specified
 * 			retention period. </p>
 * 		       <p>The response is paginated. By default, Config returns a
 * 			limit of 10 configuration items per page. You can customize this
 * 			number with the <code>limit</code> parameter. The response includes
 * 			a <code>nextToken</code> string. To get the next page of results,
 * 			run the request again and specify the string for the
 * 				<code>nextToken</code> parameter.</p>
 * 		       <note>
 * 			         <p>Each call to the API is limited to span a duration of seven
 * 				days. It is likely that the number of records returned is
 * 				smaller than the specified <code>limit</code>. In such cases,
 * 				you can make another call, using the
 * 				<code>nextToken</code>.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetResourceConfigHistoryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetResourceConfigHistoryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetResourceConfigHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceConfigHistoryCommandInput} for command's `input` shape.
 * @see {@link GetResourceConfigHistoryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class GetResourceConfigHistoryCommand extends $Command<
  GetResourceConfigHistoryCommandInput,
  GetResourceConfigHistoryCommandOutput,
  ConfigServiceClientResolvedConfig
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

  constructor(readonly input: GetResourceConfigHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceConfigHistoryCommandInput, GetResourceConfigHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceConfigHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetResourceConfigHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourceConfigHistoryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetResourceConfigHistoryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourceConfigHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResourceConfigHistoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceConfigHistoryCommandOutput> {
    return deserializeAws_json1_1GetResourceConfigHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
