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
  DescribePolicyRequest,
  DescribePolicyRequestFilterSensitiveLog,
  DescribePolicyResponse,
  DescribePolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1DescribePolicyCommand,
  serializeAws_json1_1DescribePolicyCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribePolicyCommand}.
 */
export interface DescribePolicyCommandInput extends DescribePolicyRequest {}
/**
 * The output of {@link DescribePolicyCommand}.
 */
export interface DescribePolicyCommandOutput extends DescribePolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a policy.</p>
 *          <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribePolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribePolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribePolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @example To get information about a policy
 * ```javascript
 * // The following example shows how to request information about a policy:/n/n
 * const input = {
 *   "PolicyId": "p-examplepolicyid111"
 * };
 * const command = new DescribePolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Policy": {
 *     "Content": "{\\n  \\\"Version\\\": \\\"2012-10-17\\\",\\n  \\\"Statement\\\": [\\n    {\\n      \\\"Effect\\\": \\\"Allow\\\",\\n      \\\"Action\\\": \\\"*\\\",\\n      \\\"Resource\\\": \\\"*\\\"\\n    }\\n  ]\\n}",
 *     "PolicySummary": {
 *       "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111",
 *       "AwsManaged": false,
 *       "Description": "Enables admins to delegate S3 permissions",
 *       "Id": "p-examplepolicyid111",
 *       "Name": "AllowAllS3Actions",
 *       "Type": "SERVICE_CONTROL_POLICY"
 *     }
 *   }
 * }
 * *\/
 * // example id: to-get-information-about-a-policy
 * ```
 *
 */
export class DescribePolicyCommand extends $Command<
  DescribePolicyCommandInput,
  DescribePolicyCommandOutput,
  OrganizationsClientResolvedConfig
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

  constructor(readonly input: DescribePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePolicyCommandInput, DescribePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DescribePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePolicyCommandOutput> {
    return deserializeAws_json1_1DescribePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
