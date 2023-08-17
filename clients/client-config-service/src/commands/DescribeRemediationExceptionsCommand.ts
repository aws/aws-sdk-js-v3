// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeRemediationExceptionsRequest, DescribeRemediationExceptionsResponse } from "../models/models_0";
import {
  de_DescribeRemediationExceptionsCommand,
  se_DescribeRemediationExceptionsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRemediationExceptionsCommand}.
 */
export interface DescribeRemediationExceptionsCommandInput extends DescribeRemediationExceptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRemediationExceptionsCommand}.
 */
export interface DescribeRemediationExceptionsCommandOutput
  extends DescribeRemediationExceptionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted.
 * 			When you specify the limit and the next token, you receive a paginated response. </p>
 *          <note>
 *             <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource.
 * 				Remediation exceptions blocks auto-remediation until the exception is cleared.</p>
 *             <p>When you specify the limit and the next token, you receive a paginated response. </p>
 *             <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeRemediationExceptionsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeRemediationExceptionsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeRemediationExceptionsRequest
 *   ConfigRuleName: "STRING_VALUE", // required
 *   ResourceKeys: [ // RemediationExceptionResourceKeys
 *     { // RemediationExceptionResourceKey
 *       ResourceType: "STRING_VALUE",
 *       ResourceId: "STRING_VALUE",
 *     },
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeRemediationExceptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRemediationExceptionsResponse
 * //   RemediationExceptions: [ // RemediationExceptions
 * //     { // RemediationException
 * //       ConfigRuleName: "STRING_VALUE", // required
 * //       ResourceType: "STRING_VALUE", // required
 * //       ResourceId: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE",
 * //       ExpirationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRemediationExceptionsCommandInput - {@link DescribeRemediationExceptionsCommandInput}
 * @returns {@link DescribeRemediationExceptionsCommandOutput}
 * @see {@link DescribeRemediationExceptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRemediationExceptionsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class DescribeRemediationExceptionsCommand extends $Command<
  DescribeRemediationExceptionsCommandInput,
  DescribeRemediationExceptionsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DescribeRemediationExceptionsCommandInput) {
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
  ): Handler<DescribeRemediationExceptionsCommandInput, DescribeRemediationExceptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRemediationExceptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeRemediationExceptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeRemediationExceptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRemediationExceptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRemediationExceptionsCommandOutput> {
    return de_DescribeRemediationExceptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
