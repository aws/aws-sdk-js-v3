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
  DescribeOrganizationConformancePacksRequest,
  DescribeOrganizationConformancePacksRequestFilterSensitiveLog,
  DescribeOrganizationConformancePacksResponse,
  DescribeOrganizationConformancePacksResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeOrganizationConformancePacksCommand,
  serializeAws_json1_1DescribeOrganizationConformancePacksCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeOrganizationConformancePacksCommandInput extends DescribeOrganizationConformancePacksRequest {}
export interface DescribeOrganizationConformancePacksCommandOutput
  extends DescribeOrganizationConformancePacksResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of organization conformance packs. </p>
 * 		       <note>
 *             <p>When you specify the limit and the next token, you receive a paginated response. </p>
 * 			         <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable,
 * 			when you request all the organization conformance packs. </p>
 *
 * 			         <p>
 *                <i>For accounts within an organzation</i>
 *             </p>
 *
 * 			         <p>If you deploy an organizational rule or conformance pack in an organization
 * 				administrator account, and then establish a delegated administrator and deploy an
 * 				organizational rule or conformance pack in the delegated administrator account, you
 * 				won't be able to see the organizational rule or conformance pack in the organization
 * 				administrator account from the delegated administrator account or see the organizational
 * 				rule or conformance pack in the delegated administrator account from organization
 * 				administrator account. The <code>DescribeOrganizationConfigRules</code> and
 * 				<code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with
 * 				the organization-related resource that were deployed from within the account calling
 * 				those APIs.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConformancePacksCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConformancePacksCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeOrganizationConformancePacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationConformancePacksCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConformancePacksCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class DescribeOrganizationConformancePacksCommand extends $Command<
  DescribeOrganizationConformancePacksCommandInput,
  DescribeOrganizationConformancePacksCommandOutput,
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

  constructor(readonly input: DescribeOrganizationConformancePacksCommandInput) {
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
  ): Handler<DescribeOrganizationConformancePacksCommandInput, DescribeOrganizationConformancePacksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOrganizationConformancePacksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeOrganizationConformancePacksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOrganizationConformancePacksRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeOrganizationConformancePacksResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeOrganizationConformancePacksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeOrganizationConformancePacksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationConformancePacksCommandOutput> {
    return deserializeAws_json1_1DescribeOrganizationConformancePacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
