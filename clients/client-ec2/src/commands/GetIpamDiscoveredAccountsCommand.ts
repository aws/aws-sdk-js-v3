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
import { GetIpamDiscoveredAccountsRequest, GetIpamDiscoveredAccountsResult } from "../models/models_5";
import { de_GetIpamDiscoveredAccountsCommand, se_GetIpamDiscoveredAccountsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIpamDiscoveredAccountsCommand}.
 */
export interface GetIpamDiscoveredAccountsCommandInput extends GetIpamDiscoveredAccountsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamDiscoveredAccountsCommand}.
 */
export interface GetIpamDiscoveredAccountsCommandOutput extends GetIpamDiscoveredAccountsResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets IPAM discovered accounts. A discovered account is an Amazon Web Services account that is monitored under a resource discovery. If you have integrated IPAM with Amazon Web Services Organizations, all accounts in the organization are discovered accounts. Only the IPAM account can get all discovered accounts in the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamDiscoveredAccountsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamDiscoveredAccountsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetIpamDiscoveredAccountsRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryId: "STRING_VALUE", // required
 *   DiscoveryRegion: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetIpamDiscoveredAccountsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamDiscoveredAccountsResult
 * //   IpamDiscoveredAccounts: [ // IpamDiscoveredAccountSet
 * //     { // IpamDiscoveredAccount
 * //       AccountId: "STRING_VALUE",
 * //       DiscoveryRegion: "STRING_VALUE",
 * //       FailureReason: { // IpamDiscoveryFailureReason
 * //         Code: "assume-role-failure" || "throttling-failure" || "unauthorized-failure",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       LastAttemptedDiscoveryTime: new Date("TIMESTAMP"),
 * //       LastSuccessfulDiscoveryTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamDiscoveredAccountsCommandInput - {@link GetIpamDiscoveredAccountsCommandInput}
 * @returns {@link GetIpamDiscoveredAccountsCommandOutput}
 * @see {@link GetIpamDiscoveredAccountsCommandInput} for command's `input` shape.
 * @see {@link GetIpamDiscoveredAccountsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetIpamDiscoveredAccountsCommand extends $Command<
  GetIpamDiscoveredAccountsCommandInput,
  GetIpamDiscoveredAccountsCommandOutput,
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
  constructor(readonly input: GetIpamDiscoveredAccountsCommandInput) {
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
  ): Handler<GetIpamDiscoveredAccountsCommandInput, GetIpamDiscoveredAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIpamDiscoveredAccountsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetIpamDiscoveredAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetIpamDiscoveredAccounts",
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
  private serialize(input: GetIpamDiscoveredAccountsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIpamDiscoveredAccountsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIpamDiscoveredAccountsCommandOutput> {
    return de_GetIpamDiscoveredAccountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
