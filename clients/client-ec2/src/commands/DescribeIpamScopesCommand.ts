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
import { DescribeIpamScopesRequest, DescribeIpamScopesResult } from "../models/models_4";
import { de_DescribeIpamScopesCommand, se_DescribeIpamScopesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamScopesCommand}.
 */
export interface DescribeIpamScopesCommandInput extends DescribeIpamScopesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamScopesCommand}.
 */
export interface DescribeIpamScopesCommandOutput extends DescribeIpamScopesResult, __MetadataBearer {}

/**
 * @public
 * <p>Get information about your IPAM scopes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamScopesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamScopesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamScopesRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   IpamScopeIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeIpamScopesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamScopesResult
 * //   NextToken: "STRING_VALUE",
 * //   IpamScopes: [ // IpamScopeSet
 * //     { // IpamScope
 * //       OwnerId: "STRING_VALUE",
 * //       IpamScopeId: "STRING_VALUE",
 * //       IpamScopeArn: "STRING_VALUE",
 * //       IpamArn: "STRING_VALUE",
 * //       IpamRegion: "STRING_VALUE",
 * //       IpamScopeType: "public" || "private",
 * //       IsDefault: true || false,
 * //       Description: "STRING_VALUE",
 * //       PoolCount: Number("int"),
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIpamScopesCommandInput - {@link DescribeIpamScopesCommandInput}
 * @returns {@link DescribeIpamScopesCommandOutput}
 * @see {@link DescribeIpamScopesCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamScopesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeIpamScopesCommand extends $Command<
  DescribeIpamScopesCommandInput,
  DescribeIpamScopesCommandOutput,
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
  constructor(readonly input: DescribeIpamScopesCommandInput) {
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
  ): Handler<DescribeIpamScopesCommandInput, DescribeIpamScopesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIpamScopesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeIpamScopesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeIpamScopes",
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
  private serialize(input: DescribeIpamScopesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeIpamScopesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIpamScopesCommandOutput> {
    return de_DescribeIpamScopesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
