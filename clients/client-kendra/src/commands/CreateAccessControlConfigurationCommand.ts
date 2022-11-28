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
  CreateAccessControlConfigurationRequest,
  CreateAccessControlConfigurationRequestFilterSensitiveLog,
  CreateAccessControlConfigurationResponse,
  CreateAccessControlConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateAccessControlConfigurationCommand,
  serializeAws_json1_1CreateAccessControlConfigurationCommand,
} from "../protocols/Aws_json1_1";

export interface CreateAccessControlConfigurationCommandInput extends CreateAccessControlConfigurationRequest {}
export interface CreateAccessControlConfigurationCommandOutput
  extends CreateAccessControlConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates an access configuration for your documents. This includes
 *             user and group access information for your documents. This is useful
 *             for user context filtering, where search results are filtered based
 *             on the user or their group access to documents.</p>
 *          <p>You can use this to re-configure your existing document level access control without
 *             indexing all of your documents again. For example, your index contains top-secret
 *             company documents that only certain employees or users should access. One of these users
 *             leaves the company or switches to a team that should be blocked from accessing
 *             top-secret documents. The user still has access to top-secret documents because the user
 *             had access when your documents were previously indexed. You
 *             can create a specific access control configuration for the user with deny
 *             access. You can later update the access control configuration to allow access if the
 *             user returns to the company and re-joins the 'top-secret' team. You can re-configure
 *             access control for your documents as circumstances change.</p>
 *          <p>To apply your access control configuration to certain documents, you call
 *             the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a>
 *             API with the <code>AccessControlConfigurationId</code> included in the
 *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a>
 *             object. If you use an S3 bucket as a data source, you update the
 *             <code>.metadata.json</code> with the <code>AccessControlConfigurationId</code>
 *             and synchronize your data source. Amazon Kendra currently only supports
 *             access control configuration for S3 data sources and documents indexed using the
 *             <code>BatchPutDocument</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateAccessControlConfigurationCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateAccessControlConfigurationCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new CreateAccessControlConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessControlConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateAccessControlConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class CreateAccessControlConfigurationCommand extends $Command<
  CreateAccessControlConfigurationCommandInput,
  CreateAccessControlConfigurationCommandOutput,
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

  constructor(readonly input: CreateAccessControlConfigurationCommandInput) {
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
  ): Handler<CreateAccessControlConfigurationCommandInput, CreateAccessControlConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccessControlConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "CreateAccessControlConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccessControlConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAccessControlConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateAccessControlConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAccessControlConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAccessControlConfigurationCommandOutput> {
    return deserializeAws_json1_1CreateAccessControlConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
