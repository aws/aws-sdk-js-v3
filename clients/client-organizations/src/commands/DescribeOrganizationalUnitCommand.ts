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
  DescribeOrganizationalUnitRequest,
  DescribeOrganizationalUnitRequestFilterSensitiveLog,
  DescribeOrganizationalUnitResponse,
  DescribeOrganizationalUnitResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1DescribeOrganizationalUnitCommand,
  serializeAws_json1_1DescribeOrganizationalUnitCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeOrganizationalUnitCommand}.
 */
export interface DescribeOrganizationalUnitCommandInput extends DescribeOrganizationalUnitRequest {}
/**
 * The output of {@link DescribeOrganizationalUnitCommand}.
 */
export interface DescribeOrganizationalUnitCommandOutput extends DescribeOrganizationalUnitResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an organizational unit (OU).</p>
 *          <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeOrganizationalUnitCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeOrganizationalUnitCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribeOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationalUnitCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @example To get information about an organizational unit
 * ```javascript
 * // The following example shows how to request details about an OU:/n/n
 * const input = {
 *   "OrganizationalUnitId": "ou-examplerootid111-exampleouid111"
 * };
 * const command = new DescribeOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OrganizationalUnit": {
 *     "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111",
 *     "Id": "ou-examplerootid111-exampleouid111",
 *     "Name": "Accounting Group"
 *   }
 * }
 * *\/
 * // example id: to-get-information-about-an-organizational-unit
 * ```
 *
 */
export class DescribeOrganizationalUnitCommand extends $Command<
  DescribeOrganizationalUnitCommandInput,
  DescribeOrganizationalUnitCommandOutput,
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

  constructor(readonly input: DescribeOrganizationalUnitCommandInput) {
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
  ): Handler<DescribeOrganizationalUnitCommandInput, DescribeOrganizationalUnitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOrganizationalUnitCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DescribeOrganizationalUnitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOrganizationalUnitRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeOrganizationalUnitResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeOrganizationalUnitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeOrganizationalUnitCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationalUnitCommandOutput> {
    return deserializeAws_json1_1DescribeOrganizationalUnitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
