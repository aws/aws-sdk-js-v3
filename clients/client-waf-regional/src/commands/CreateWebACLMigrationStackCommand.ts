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

import {
  CreateWebACLMigrationStackRequest,
  CreateWebACLMigrationStackRequestFilterSensitiveLog,
  CreateWebACLMigrationStackResponse,
  CreateWebACLMigrationStackResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateWebACLMigrationStackCommand,
  serializeAws_json1_1CreateWebACLMigrationStackCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

export interface CreateWebACLMigrationStackCommandInput extends CreateWebACLMigrationStackRequest {}
export interface CreateWebACLMigrationStackCommandOutput extends CreateWebACLMigrationStackResponse, __MetadataBearer {}

/**
 * <p>Creates an AWS CloudFormation WAFV2 template for the specified web ACL in the specified Amazon S3 bucket.
 *            Then, in CloudFormation, you create a stack from the template, to create the web ACL and its resources in AWS WAFV2.
 *            Use this to migrate your AWS WAF Classic web ACL to the latest version of AWS WAF.</p>
 *          <p>This is part of a larger migration procedure for web ACLs from AWS WAF Classic to the latest version of AWS WAF.
 *            For the full procedure, including caveats and manual steps to complete
 *            the migration and switch over to the new web ACL, see
 *            <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-migrating-from-classic.html">Migrating your AWS WAF Classic resources to AWS WAF</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF
 *   Developer Guide</a>.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, CreateWebACLMigrationStackCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, CreateWebACLMigrationStackCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new CreateWebACLMigrationStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWebACLMigrationStackCommandInput} for command's `input` shape.
 * @see {@link CreateWebACLMigrationStackCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 */
export class CreateWebACLMigrationStackCommand extends $Command<
  CreateWebACLMigrationStackCommandInput,
  CreateWebACLMigrationStackCommandOutput,
  WAFRegionalClientResolvedConfig
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

  constructor(readonly input: CreateWebACLMigrationStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWebACLMigrationStackCommandInput, CreateWebACLMigrationStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWebACLMigrationStackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "CreateWebACLMigrationStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWebACLMigrationStackRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateWebACLMigrationStackResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWebACLMigrationStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWebACLMigrationStackCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateWebACLMigrationStackCommandOutput> {
    return deserializeAws_json1_1CreateWebACLMigrationStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
