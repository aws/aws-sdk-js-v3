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
import { GetSecurityGroupsForVpcRequest, GetSecurityGroupsForVpcResult } from "../models/models_5";
import { de_GetSecurityGroupsForVpcCommand, se_GetSecurityGroupsForVpcCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSecurityGroupsForVpcCommand}.
 */
export interface GetSecurityGroupsForVpcCommandInput extends GetSecurityGroupsForVpcRequest {}
/**
 * @public
 *
 * The output of {@link GetSecurityGroupsForVpcCommand}.
 */
export interface GetSecurityGroupsForVpcCommandOutput extends GetSecurityGroupsForVpcResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets security groups that can be associated by the Amazon Web Services account making the request with network interfaces in the specified VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSecurityGroupsForVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetSecurityGroupsForVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetSecurityGroupsForVpcRequest
 *   VpcId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new GetSecurityGroupsForVpcCommand(input);
 * const response = await client.send(command);
 * // { // GetSecurityGroupsForVpcResult
 * //   NextToken: "STRING_VALUE",
 * //   SecurityGroupForVpcs: [ // SecurityGroupForVpcList
 * //     { // SecurityGroupForVpc
 * //       Description: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PrimaryVpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSecurityGroupsForVpcCommandInput - {@link GetSecurityGroupsForVpcCommandInput}
 * @returns {@link GetSecurityGroupsForVpcCommandOutput}
 * @see {@link GetSecurityGroupsForVpcCommandInput} for command's `input` shape.
 * @see {@link GetSecurityGroupsForVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetSecurityGroupsForVpcCommand extends $Command<
  GetSecurityGroupsForVpcCommandInput,
  GetSecurityGroupsForVpcCommandOutput,
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
  constructor(readonly input: GetSecurityGroupsForVpcCommandInput) {
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
  ): Handler<GetSecurityGroupsForVpcCommandInput, GetSecurityGroupsForVpcCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSecurityGroupsForVpcCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetSecurityGroupsForVpcCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetSecurityGroupsForVpc",
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
  private serialize(input: GetSecurityGroupsForVpcCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSecurityGroupsForVpcCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSecurityGroupsForVpcCommandOutput> {
    return de_GetSecurityGroupsForVpcCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
