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
import { PutPrincipalMappingRequest, PutPrincipalMappingRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1PutPrincipalMappingCommand,
  serializeAws_json1_1PutPrincipalMappingCommand,
} from "../protocols/Aws_json1_1";

export interface PutPrincipalMappingCommandInput extends PutPrincipalMappingRequest {}
export interface PutPrincipalMappingCommandOutput extends __MetadataBearer {}

/**
 * <p>Maps users to their groups so that you only need to provide
 *             the user ID when you issue the query.</p>
 *          <p>You can also map sub groups to groups.
 *             For example, the group "Company Intellectual Property Teams" includes
 *             sub groups "Research" and "Engineering". These sub groups include their
 *             own list of users or people who work in these teams. Only users who work
 *             in research and engineering, and therefore belong in the intellectual
 *             property group, can see top-secret company documents in their search
 *             results.</p>
 *          <p>This is useful for user context filtering, where search results are
 *             filtered based on the user or their group access to documents. For more
 *             information, see
 *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering
 *                 on user context</a>.</p>
 *          <p>If more than five <code>PUT</code> actions for a group are currently
 *             processing, a validation exception is thrown.</p>
 *          <p>
 *             <code>PutPrincipalMapping</code> is currently not supported in the
 *             Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, PutPrincipalMappingCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, PutPrincipalMappingCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new PutPrincipalMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPrincipalMappingCommandInput} for command's `input` shape.
 * @see {@link PutPrincipalMappingCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class PutPrincipalMappingCommand extends $Command<
  PutPrincipalMappingCommandInput,
  PutPrincipalMappingCommandOutput,
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

  constructor(readonly input: PutPrincipalMappingCommandInput) {
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
  ): Handler<PutPrincipalMappingCommandInput, PutPrincipalMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutPrincipalMappingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "PutPrincipalMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPrincipalMappingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPrincipalMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutPrincipalMappingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPrincipalMappingCommandOutput> {
    return deserializeAws_json1_1PutPrincipalMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
