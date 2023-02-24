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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import {
  DescribePrincipalMappingRequest,
  DescribePrincipalMappingRequestFilterSensitiveLog,
  DescribePrincipalMappingResponse,
  DescribePrincipalMappingResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribePrincipalMappingCommand,
  serializeAws_json1_1DescribePrincipalMappingCommand,
} from "../protocols/Aws_json1_1";

export interface DescribePrincipalMappingCommandInput extends DescribePrincipalMappingRequest {}
export interface DescribePrincipalMappingCommandOutput extends DescribePrincipalMappingResponse, __MetadataBearer {}

/**
 * <p>Describes the processing of <code>PUT</code> and <code>DELETE</code> actions
 *             for mapping users to their groups. This includes information on the status of
 *             actions currently processing or yet to be processed, when actions were last updated,
 *             when actions were received by Amazon Kendra, the latest action that should process
 *             and apply after other actions, and useful error messages if an action could
 *             not be processed.</p>
 *          <p>
 *             <code>DescribePrincipalMapping</code> is currently not supported in the
 *             Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribePrincipalMappingCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribePrincipalMappingCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribePrincipalMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePrincipalMappingCommandInput} for command's `input` shape.
 * @see {@link DescribePrincipalMappingCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class DescribePrincipalMappingCommand extends $Command<
  DescribePrincipalMappingCommandInput,
  DescribePrincipalMappingCommandOutput,
  KendraClientResolvedConfig
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

  constructor(readonly input: DescribePrincipalMappingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePrincipalMappingCommandInput, DescribePrincipalMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePrincipalMappingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "DescribePrincipalMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePrincipalMappingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePrincipalMappingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePrincipalMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePrincipalMappingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePrincipalMappingCommandOutput> {
    return deserializeAws_json1_1DescribePrincipalMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
