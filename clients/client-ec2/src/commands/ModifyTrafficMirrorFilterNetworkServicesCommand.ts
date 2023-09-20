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
  ModifyTrafficMirrorFilterNetworkServicesRequest,
  ModifyTrafficMirrorFilterNetworkServicesResult,
} from "../models/models_6";
import {
  de_ModifyTrafficMirrorFilterNetworkServicesCommand,
  se_ModifyTrafficMirrorFilterNetworkServicesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyTrafficMirrorFilterNetworkServicesCommand}.
 */
export interface ModifyTrafficMirrorFilterNetworkServicesCommandInput
  extends ModifyTrafficMirrorFilterNetworkServicesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTrafficMirrorFilterNetworkServicesCommand}.
 */
export interface ModifyTrafficMirrorFilterNetworkServicesCommandOutput
  extends ModifyTrafficMirrorFilterNetworkServicesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Allows or restricts mirroring network services.</p>
 *          <p> By default, Amazon DNS network services are not eligible for Traffic Mirror. Use <code>AddNetworkServices</code> to add network services to a Traffic Mirror filter. When a network service is added to the Traffic Mirror filter, all traffic related to that network service will be mirrored.
 *          When you no longer want to mirror network services, use <code>RemoveNetworkServices</code> to remove the network services from the Traffic Mirror filter.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTrafficMirrorFilterNetworkServicesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTrafficMirrorFilterNetworkServicesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyTrafficMirrorFilterNetworkServicesRequest
 *   TrafficMirrorFilterId: "STRING_VALUE", // required
 *   AddNetworkServices: [ // TrafficMirrorNetworkServiceList
 *     "amazon-dns",
 *   ],
 *   RemoveNetworkServices: [
 *     "amazon-dns",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ModifyTrafficMirrorFilterNetworkServicesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTrafficMirrorFilterNetworkServicesResult
 * //   TrafficMirrorFilter: { // TrafficMirrorFilter
 * //     TrafficMirrorFilterId: "STRING_VALUE",
 * //     IngressFilterRules: [ // TrafficMirrorFilterRuleList
 * //       { // TrafficMirrorFilterRule
 * //         TrafficMirrorFilterRuleId: "STRING_VALUE",
 * //         TrafficMirrorFilterId: "STRING_VALUE",
 * //         TrafficDirection: "ingress" || "egress",
 * //         RuleNumber: Number("int"),
 * //         RuleAction: "accept" || "reject",
 * //         Protocol: Number("int"),
 * //         DestinationPortRange: { // TrafficMirrorPortRange
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         SourcePortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         DestinationCidrBlock: "STRING_VALUE",
 * //         SourceCidrBlock: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     EgressFilterRules: [
 * //       {
 * //         TrafficMirrorFilterRuleId: "STRING_VALUE",
 * //         TrafficMirrorFilterId: "STRING_VALUE",
 * //         TrafficDirection: "ingress" || "egress",
 * //         RuleNumber: Number("int"),
 * //         RuleAction: "accept" || "reject",
 * //         Protocol: Number("int"),
 * //         DestinationPortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         SourcePortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         DestinationCidrBlock: "STRING_VALUE",
 * //         SourceCidrBlock: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     NetworkServices: [ // TrafficMirrorNetworkServiceList
 * //       "amazon-dns",
 * //     ],
 * //     Description: "STRING_VALUE",
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
 * @param ModifyTrafficMirrorFilterNetworkServicesCommandInput - {@link ModifyTrafficMirrorFilterNetworkServicesCommandInput}
 * @returns {@link ModifyTrafficMirrorFilterNetworkServicesCommandOutput}
 * @see {@link ModifyTrafficMirrorFilterNetworkServicesCommandInput} for command's `input` shape.
 * @see {@link ModifyTrafficMirrorFilterNetworkServicesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyTrafficMirrorFilterNetworkServicesCommand extends $Command<
  ModifyTrafficMirrorFilterNetworkServicesCommandInput,
  ModifyTrafficMirrorFilterNetworkServicesCommandOutput,
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
  constructor(readonly input: ModifyTrafficMirrorFilterNetworkServicesCommandInput) {
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
  ): Handler<
    ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    ModifyTrafficMirrorFilterNetworkServicesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ModifyTrafficMirrorFilterNetworkServicesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyTrafficMirrorFilterNetworkServicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyTrafficMirrorFilterNetworkServices",
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
    input: ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyTrafficMirrorFilterNetworkServicesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyTrafficMirrorFilterNetworkServicesCommandOutput> {
    return de_ModifyTrafficMirrorFilterNetworkServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
