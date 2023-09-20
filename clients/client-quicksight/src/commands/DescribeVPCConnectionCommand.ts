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

import { DescribeVPCConnectionRequest, DescribeVPCConnectionResponse } from "../models/models_3";
import { de_DescribeVPCConnectionCommand, se_DescribeVPCConnectionCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVPCConnectionCommand}.
 */
export interface DescribeVPCConnectionCommandInput extends DescribeVPCConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVPCConnectionCommand}.
 */
export interface DescribeVPCConnectionCommandOutput extends DescribeVPCConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a VPC connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeVPCConnectionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeVPCConnectionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeVPCConnectionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   VPCConnectionId: "STRING_VALUE", // required
 * };
 * const command = new DescribeVPCConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVPCConnectionResponse
 * //   VPCConnection: { // VPCConnection
 * //     VPCConnectionId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     VPCId: "STRING_VALUE",
 * //     SecurityGroupIds: [ // SecurityGroupIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     DnsResolvers: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETION_IN_PROGRESS" || "DELETION_FAILED" || "DELETED",
 * //     AvailabilityStatus: "AVAILABLE" || "UNAVAILABLE" || "PARTIALLY_AVAILABLE",
 * //     NetworkInterfaces: [ // NetworkInterfaceList
 * //       { // NetworkInterface
 * //         SubnetId: "STRING_VALUE",
 * //         AvailabilityZone: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //         Status: "CREATING" || "AVAILABLE" || "CREATION_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "DELETION_FAILED" || "DELETION_SCHEDULED" || "ATTACHMENT_FAILED_ROLLBACK_FAILED",
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RoleArn: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeVPCConnectionCommandInput - {@link DescribeVPCConnectionCommandInput}
 * @returns {@link DescribeVPCConnectionCommandOutput}
 * @see {@link DescribeVPCConnectionCommandInput} for command's `input` shape.
 * @see {@link DescribeVPCConnectionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class DescribeVPCConnectionCommand extends $Command<
  DescribeVPCConnectionCommandInput,
  DescribeVPCConnectionCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: DescribeVPCConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVPCConnectionCommandInput, DescribeVPCConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVPCConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeVPCConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "DescribeVPCConnection",
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
  private serialize(input: DescribeVPCConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVPCConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVPCConnectionCommandOutput> {
    return de_DescribeVPCConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
