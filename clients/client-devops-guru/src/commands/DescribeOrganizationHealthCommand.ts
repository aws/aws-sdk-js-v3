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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { DescribeOrganizationHealthRequest, DescribeOrganizationHealthResponse } from "../models/models_0";
import { de_DescribeOrganizationHealthCommand, se_DescribeOrganizationHealthCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationHealthCommand}.
 */
export interface DescribeOrganizationHealthCommandInput extends DescribeOrganizationHealthRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationHealthCommand}.
 */
export interface DescribeOrganizationHealthCommandOutput extends DescribeOrganizationHealthResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns active insights, predictive insights, and resource hours analyzed in last
 * 			hour.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeOrganizationHealthCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeOrganizationHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // DescribeOrganizationHealthRequest
 *   AccountIds: [ // AccountIdList
 *     "STRING_VALUE",
 *   ],
 *   OrganizationalUnitIds: [ // OrganizationalUnitIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeOrganizationHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationHealthResponse
 * //   OpenReactiveInsights: Number("int"), // required
 * //   OpenProactiveInsights: Number("int"), // required
 * //   MetricsAnalyzed: Number("int"), // required
 * //   ResourceHours: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationHealthCommandInput - {@link DescribeOrganizationHealthCommandInput}
 * @returns {@link DescribeOrganizationHealthCommandOutput}
 * @see {@link DescribeOrganizationHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationHealthCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 */
export class DescribeOrganizationHealthCommand extends $Command<
  DescribeOrganizationHealthCommandInput,
  DescribeOrganizationHealthCommandOutput,
  DevOpsGuruClientResolvedConfig
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
  constructor(readonly input: DescribeOrganizationHealthCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOrganizationHealthCommandInput, DescribeOrganizationHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOrganizationHealthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeOrganizationHealthCommand";
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
  private serialize(input: DescribeOrganizationHealthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeOrganizationHealthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationHealthCommandOutput> {
    return de_DescribeOrganizationHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
