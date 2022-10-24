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
  DescribePatchPropertiesRequest,
  DescribePatchPropertiesRequestFilterSensitiveLog,
  DescribePatchPropertiesResult,
  DescribePatchPropertiesResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1DescribePatchPropertiesCommand,
  serializeAws_json1_1DescribePatchPropertiesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface DescribePatchPropertiesCommandInput extends DescribePatchPropertiesRequest {}
export interface DescribePatchPropertiesCommandOutput extends DescribePatchPropertiesResult, __MetadataBearer {}

/**
 * <p>Lists the properties of available patches organized by product, product family,
 *    classification, severity, and other properties of available patches. You can use the reported
 *    properties in the filters you specify in requests for operations such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p>
 *          <p>The following section lists the properties that can be used in filters for each major
 *    operating system type:</p>
 *          <dl>
 *             <dt>AMAZON_LINUX</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>AMAZON_LINUX_2</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>CENTOS</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>DEBIAN</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code>
 *                </p>
 *             </dd>
 *             <dt>MACOS</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code>
 *                </p>
 *             </dd>
 *             <dt>ORACLE_LINUX</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>REDHAT_ENTERPRISE_LINUX</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>SUSE</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> |
 *        <code>SEVERITY</code>
 *                </p>
 *             </dd>
 *             <dt>UBUNTU</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code>
 *                </p>
 *             </dd>
 *             <dt>WINDOWS</dt>
 *             <dd>
 *                <p>Valid properties: <code>PRODUCT</code> | <code>PRODUCT_FAMILY</code> |
 *        <code>CLASSIFICATION</code> | <code>MSRC_SEVERITY</code>
 *                </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchPropertiesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchPropertiesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribePatchPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePatchPropertiesCommandInput} for command's `input` shape.
 * @see {@link DescribePatchPropertiesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class DescribePatchPropertiesCommand extends $Command<
  DescribePatchPropertiesCommandInput,
  DescribePatchPropertiesCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: DescribePatchPropertiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePatchPropertiesCommandInput, DescribePatchPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePatchPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribePatchPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePatchPropertiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePatchPropertiesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePatchPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePatchPropertiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePatchPropertiesCommandOutput> {
    return deserializeAws_json1_1DescribePatchPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
