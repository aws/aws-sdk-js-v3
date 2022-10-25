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

import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import {
  GetLifecyclePoliciesRequest,
  GetLifecyclePoliciesRequestFilterSensitiveLog,
  GetLifecyclePoliciesResponse,
  GetLifecyclePoliciesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetLifecyclePoliciesCommand,
  serializeAws_restJson1GetLifecyclePoliciesCommand,
} from "../protocols/Aws_restJson1";

export interface GetLifecyclePoliciesCommandInput extends GetLifecyclePoliciesRequest {}
export interface GetLifecyclePoliciesCommandOutput extends GetLifecyclePoliciesResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about all or the specified data lifecycle policies.</p>
 * 		       <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, GetLifecyclePoliciesCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, GetLifecyclePoliciesCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new GetLifecyclePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLifecyclePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePoliciesCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for DLMClient's `config` shape.
 *
 */
export class GetLifecyclePoliciesCommand extends $Command<
  GetLifecyclePoliciesCommandInput,
  GetLifecyclePoliciesCommandOutput,
  DLMClientResolvedConfig
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

  constructor(readonly input: GetLifecyclePoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DLMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLifecyclePoliciesCommandInput, GetLifecyclePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLifecyclePoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DLMClient";
    const commandName = "GetLifecyclePoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLifecyclePoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLifecyclePoliciesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLifecyclePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLifecyclePoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLifecyclePoliciesCommandOutput> {
    return deserializeAws_restJson1GetLifecyclePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
