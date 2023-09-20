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
import { DisassociateIpamResourceDiscoveryRequest, DisassociateIpamResourceDiscoveryResult } from "../models/models_5";
import {
  de_DisassociateIpamResourceDiscoveryCommand,
  se_DisassociateIpamResourceDiscoveryCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateIpamResourceDiscoveryCommand}.
 */
export interface DisassociateIpamResourceDiscoveryCommandInput extends DisassociateIpamResourceDiscoveryRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateIpamResourceDiscoveryCommand}.
 */
export interface DisassociateIpamResourceDiscoveryCommandOutput
  extends DisassociateIpamResourceDiscoveryResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a resource discovery from an Amazon VPC IPAM. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateIpamResourceDiscoveryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateIpamResourceDiscoveryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateIpamResourceDiscoveryRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryAssociationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateIpamResourceDiscoveryCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateIpamResourceDiscoveryResult
 * //   IpamResourceDiscoveryAssociation: { // IpamResourceDiscoveryAssociation
 * //     OwnerId: "STRING_VALUE",
 * //     IpamResourceDiscoveryAssociationId: "STRING_VALUE",
 * //     IpamResourceDiscoveryAssociationArn: "STRING_VALUE",
 * //     IpamResourceDiscoveryId: "STRING_VALUE",
 * //     IpamId: "STRING_VALUE",
 * //     IpamArn: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     IsDefault: true || false,
 * //     ResourceDiscoveryStatus: "active" || "not-found",
 * //     State: "associate-in-progress" || "associate-complete" || "associate-failed" || "disassociate-in-progress" || "disassociate-complete" || "disassociate-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateIpamResourceDiscoveryCommandInput - {@link DisassociateIpamResourceDiscoveryCommandInput}
 * @returns {@link DisassociateIpamResourceDiscoveryCommandOutput}
 * @see {@link DisassociateIpamResourceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link DisassociateIpamResourceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DisassociateIpamResourceDiscoveryCommand extends $Command<
  DisassociateIpamResourceDiscoveryCommandInput,
  DisassociateIpamResourceDiscoveryCommandOutput,
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
  constructor(readonly input: DisassociateIpamResourceDiscoveryCommandInput) {
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
  ): Handler<DisassociateIpamResourceDiscoveryCommandInput, DisassociateIpamResourceDiscoveryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateIpamResourceDiscoveryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateIpamResourceDiscoveryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DisassociateIpamResourceDiscovery",
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
    input: DisassociateIpamResourceDiscoveryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisassociateIpamResourceDiscoveryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateIpamResourceDiscoveryCommandOutput> {
    return de_DisassociateIpamResourceDiscoveryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
