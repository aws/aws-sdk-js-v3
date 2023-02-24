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
  UpdateAccessControlConfigurationRequest,
  UpdateAccessControlConfigurationRequestFilterSensitiveLog,
  UpdateAccessControlConfigurationResponse,
  UpdateAccessControlConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateAccessControlConfigurationCommand,
  serializeAws_json1_1UpdateAccessControlConfigurationCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateAccessControlConfigurationCommandInput extends UpdateAccessControlConfigurationRequest {}
export interface UpdateAccessControlConfigurationCommandOutput
  extends UpdateAccessControlConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates an access control configuration for your documents in an index. This
 *             includes user and group access information for your documents. This is useful
 *             for user context filtering, where search results are filtered based on the user
 *             or their group access to documents.</p>
 *          <p>You can update an access control configuration you created without indexing all
 *             of your documents again. For example, your index contains top-secret company
 *             documents that only certain employees or users should access. You created an 'allow'
 *             access control configuration for one user who recently joined the 'top-secret' team,
 *             switching from a team with 'deny' access to top-secret documents. However, the user
 *             suddenly returns to their previous team and should no longer have access to top secret
 *             documents. You can update the access control configuration to re-configure access
 *             control for your documents as circumstances change.</p>
 *          <p>You call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API to
 *             apply the updated access control configuration, with the
 *                 <code>AccessControlConfigurationId</code> included in the
 *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a>
 *             object. If you use an S3 bucket as a data source, you synchronize your data source to
 *             apply the <code>AccessControlConfigurationId</code> in the <code>.metadata.json</code> file.
 *             Amazon Kendra currently only supports access control configuration for S3 data
 *             sources and documents indexed using the <code>BatchPutDocument</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateAccessControlConfigurationCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateAccessControlConfigurationCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new UpdateAccessControlConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccessControlConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessControlConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class UpdateAccessControlConfigurationCommand extends $Command<
  UpdateAccessControlConfigurationCommandInput,
  UpdateAccessControlConfigurationCommandOutput,
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

  constructor(readonly input: UpdateAccessControlConfigurationCommandInput) {
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
  ): Handler<UpdateAccessControlConfigurationCommandInput, UpdateAccessControlConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAccessControlConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "UpdateAccessControlConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAccessControlConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateAccessControlConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateAccessControlConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAccessControlConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAccessControlConfigurationCommandOutput> {
    return deserializeAws_json1_1UpdateAccessControlConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
