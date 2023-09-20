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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeNetworkInsightsAccessScopesRequest,
  DescribeNetworkInsightsAccessScopesResult,
} from "../models/models_4";
import {
  de_DescribeNetworkInsightsAccessScopesCommand,
  se_DescribeNetworkInsightsAccessScopesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkInsightsAccessScopesCommand}.
 */
export interface DescribeNetworkInsightsAccessScopesCommandInput extends DescribeNetworkInsightsAccessScopesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkInsightsAccessScopesCommand}.
 */
export interface DescribeNetworkInsightsAccessScopesCommandOutput
  extends DescribeNetworkInsightsAccessScopesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Network Access Scopes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInsightsAccessScopesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInsightsAccessScopesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkInsightsAccessScopesRequest
 *   NetworkInsightsAccessScopeIds: [ // NetworkInsightsAccessScopeIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeNetworkInsightsAccessScopesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkInsightsAccessScopesResult
 * //   NetworkInsightsAccessScopes: [ // NetworkInsightsAccessScopeList
 * //     { // NetworkInsightsAccessScope
 * //       NetworkInsightsAccessScopeId: "STRING_VALUE",
 * //       NetworkInsightsAccessScopeArn: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       UpdatedDate: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNetworkInsightsAccessScopesCommandInput - {@link DescribeNetworkInsightsAccessScopesCommandInput}
 * @returns {@link DescribeNetworkInsightsAccessScopesCommandOutput}
 * @see {@link DescribeNetworkInsightsAccessScopesCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInsightsAccessScopesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeNetworkInsightsAccessScopesCommand extends $Command<
  DescribeNetworkInsightsAccessScopesCommandInput,
  DescribeNetworkInsightsAccessScopesCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribeNetworkInsightsAccessScopesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNetworkInsightsAccessScopesCommandInput, DescribeNetworkInsightsAccessScopesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNetworkInsightsAccessScopesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeNetworkInsightsAccessScopesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeNetworkInsightsAccessScopes",
      },
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
  private serialize(
    input: DescribeNetworkInsightsAccessScopesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeNetworkInsightsAccessScopesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNetworkInsightsAccessScopesCommandOutput> {
    return de_DescribeNetworkInsightsAccessScopesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
