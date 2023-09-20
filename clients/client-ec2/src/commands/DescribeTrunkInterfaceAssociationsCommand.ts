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
  DescribeTrunkInterfaceAssociationsRequest,
  DescribeTrunkInterfaceAssociationsResult,
} from "../models/models_4";
import {
  de_DescribeTrunkInterfaceAssociationsCommand,
  se_DescribeTrunkInterfaceAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrunkInterfaceAssociationsCommand}.
 */
export interface DescribeTrunkInterfaceAssociationsCommandInput extends DescribeTrunkInterfaceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrunkInterfaceAssociationsCommand}.
 */
export interface DescribeTrunkInterfaceAssociationsCommandOutput
  extends DescribeTrunkInterfaceAssociationsResult,
    __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This API action is currently in <b>limited preview only</b>.
 *                 If you are interested in using this feature, contact your account manager.</p>
 *          </note>
 *          <p>Describes one or more network interface trunk associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTrunkInterfaceAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTrunkInterfaceAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTrunkInterfaceAssociationsRequest
 *   AssociationIds: [ // TrunkInterfaceAssociationIdList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
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
 * const command = new DescribeTrunkInterfaceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrunkInterfaceAssociationsResult
 * //   InterfaceAssociations: [ // TrunkInterfaceAssociationList
 * //     { // TrunkInterfaceAssociation
 * //       AssociationId: "STRING_VALUE",
 * //       BranchInterfaceId: "STRING_VALUE",
 * //       TrunkInterfaceId: "STRING_VALUE",
 * //       InterfaceProtocol: "VLAN" || "GRE",
 * //       VlanId: Number("int"),
 * //       GreKey: Number("int"),
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
 * @param DescribeTrunkInterfaceAssociationsCommandInput - {@link DescribeTrunkInterfaceAssociationsCommandInput}
 * @returns {@link DescribeTrunkInterfaceAssociationsCommandOutput}
 * @see {@link DescribeTrunkInterfaceAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrunkInterfaceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeTrunkInterfaceAssociationsCommand extends $Command<
  DescribeTrunkInterfaceAssociationsCommandInput,
  DescribeTrunkInterfaceAssociationsCommandOutput,
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
  constructor(readonly input: DescribeTrunkInterfaceAssociationsCommandInput) {
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
  ): Handler<DescribeTrunkInterfaceAssociationsCommandInput, DescribeTrunkInterfaceAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrunkInterfaceAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTrunkInterfaceAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeTrunkInterfaceAssociations",
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
    input: DescribeTrunkInterfaceAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeTrunkInterfaceAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrunkInterfaceAssociationsCommandOutput> {
    return de_DescribeTrunkInterfaceAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
