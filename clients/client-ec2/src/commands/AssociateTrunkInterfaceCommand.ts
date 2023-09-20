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
import { AssociateTrunkInterfaceRequest, AssociateTrunkInterfaceResult } from "../models/models_0";
import { de_AssociateTrunkInterfaceCommand, se_AssociateTrunkInterfaceCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateTrunkInterfaceCommand}.
 */
export interface AssociateTrunkInterfaceCommandInput extends AssociateTrunkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTrunkInterfaceCommand}.
 */
export interface AssociateTrunkInterfaceCommandOutput extends AssociateTrunkInterfaceResult, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This API action is currently in <b>limited preview only</b>.
 *                 If you are interested in using this feature, contact your account manager.</p>
 *          </note>
 *          <p>Associates a branch network interface with a trunk network interface.</p>
 *          <p>Before you create the association, run the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html">create-network-interface</a> command and set
 *             <code>--interface-type</code> to <code>trunk</code>. You must also create a network interface for each branch network interface that you want to associate with the trunk network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateTrunkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateTrunkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateTrunkInterfaceRequest
 *   BranchInterfaceId: "STRING_VALUE", // required
 *   TrunkInterfaceId: "STRING_VALUE", // required
 *   VlanId: Number("int"),
 *   GreKey: Number("int"),
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new AssociateTrunkInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTrunkInterfaceResult
 * //   InterfaceAssociation: { // TrunkInterfaceAssociation
 * //     AssociationId: "STRING_VALUE",
 * //     BranchInterfaceId: "STRING_VALUE",
 * //     TrunkInterfaceId: "STRING_VALUE",
 * //     InterfaceProtocol: "VLAN" || "GRE",
 * //     VlanId: Number("int"),
 * //     GreKey: Number("int"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateTrunkInterfaceCommandInput - {@link AssociateTrunkInterfaceCommandInput}
 * @returns {@link AssociateTrunkInterfaceCommandOutput}
 * @see {@link AssociateTrunkInterfaceCommandInput} for command's `input` shape.
 * @see {@link AssociateTrunkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class AssociateTrunkInterfaceCommand extends $Command<
  AssociateTrunkInterfaceCommandInput,
  AssociateTrunkInterfaceCommandOutput,
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
  constructor(readonly input: AssociateTrunkInterfaceCommandInput) {
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
  ): Handler<AssociateTrunkInterfaceCommandInput, AssociateTrunkInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateTrunkInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateTrunkInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "AssociateTrunkInterface",
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
  private serialize(input: AssociateTrunkInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateTrunkInterfaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateTrunkInterfaceCommandOutput> {
    return de_AssociateTrunkInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
