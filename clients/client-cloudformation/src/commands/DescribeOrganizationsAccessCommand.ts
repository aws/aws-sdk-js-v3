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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeOrganizationsAccessInput, DescribeOrganizationsAccessOutput } from "../models/models_0";
import { de_DescribeOrganizationsAccessCommand, se_DescribeOrganizationsAccessCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationsAccessCommand}.
 */
export interface DescribeOrganizationsAccessCommandInput extends DescribeOrganizationsAccessInput {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationsAccessCommand}.
 */
export interface DescribeOrganizationsAccessCommandOutput extends DescribeOrganizationsAccessOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the account's <code>OrganizationAccess</code> status. This API
 *       can be called either by the management account or the delegated administrator by using the
 *       <code>CallAs</code> parameter. This API can also be called without the <code>CallAs</code>
 *       parameter by the management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeOrganizationsAccessCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeOrganizationsAccessCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeOrganizationsAccessInput
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new DescribeOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationsAccessOutput
 * //   Status: "ENABLED" || "DISABLED" || "DISABLED_PERMANENTLY",
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationsAccessCommandInput - {@link DescribeOrganizationsAccessCommandInput}
 * @returns {@link DescribeOrganizationsAccessCommandOutput}
 * @see {@link DescribeOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationsAccessCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The specified operation isn't valid.</p>
 *
 * @throws {@link OperationNotFoundException} (client fault)
 *  <p>The specified ID refers to an operation that doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class DescribeOrganizationsAccessCommand extends $Command<
  DescribeOrganizationsAccessCommandInput,
  DescribeOrganizationsAccessCommandOutput,
  CloudFormationClientResolvedConfig
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
  constructor(readonly input: DescribeOrganizationsAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOrganizationsAccessCommandInput, DescribeOrganizationsAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOrganizationsAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeOrganizationsAccessCommand";
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
  private serialize(input: DescribeOrganizationsAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeOrganizationsAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationsAccessCommandOutput> {
    return de_DescribeOrganizationsAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
