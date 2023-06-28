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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribePrincipalIdFormatRequest, DescribePrincipalIdFormatResult } from "../models/models_4";
import { de_DescribePrincipalIdFormatCommand, se_DescribePrincipalIdFormatCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePrincipalIdFormatCommand}.
 */
export interface DescribePrincipalIdFormatCommandInput extends DescribePrincipalIdFormatRequest {}
/**
 * @public
 *
 * The output of {@link DescribePrincipalIdFormatCommand}.
 */
export interface DescribePrincipalIdFormatCommandOutput extends DescribePrincipalIdFormatResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the ID format settings for the root user and all IAM roles and IAM users
 *             that have explicitly specified a longer ID (17-character ID) preference. </p>
 *          <p>By default, all IAM roles and IAM users default to the same ID settings as the root user, unless they
 *             explicitly override the settings. This request is useful for identifying those IAM users and IAM roles
 *             that have overridden the default ID settings.</p>
 *          <p>The following resource types support longer IDs: <code>bundle</code> |
 *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
 *           <code>network-acl</code> | <code>network-acl-association</code> |
 *           <code>network-interface</code> | <code>network-interface-attachment</code> |
 *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
 *           <code>route-table-association</code> | <code>security-group</code> |
 *           <code>snapshot</code> | <code>subnet</code> |
 *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
 *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
 *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePrincipalIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePrincipalIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribePrincipalIdFormatRequest
 *   DryRun: true || false,
 *   Resources: [ // ResourceList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribePrincipalIdFormatCommand(input);
 * const response = await client.send(command);
 * // { // DescribePrincipalIdFormatResult
 * //   Principals: [ // PrincipalIdFormatList
 * //     { // PrincipalIdFormat
 * //       Arn: "STRING_VALUE",
 * //       Statuses: [ // IdFormatList
 * //         { // IdFormat
 * //           Deadline: new Date("TIMESTAMP"),
 * //           Resource: "STRING_VALUE",
 * //           UseLongIds: true || false,
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePrincipalIdFormatCommandInput - {@link DescribePrincipalIdFormatCommandInput}
 * @returns {@link DescribePrincipalIdFormatCommandOutput}
 * @see {@link DescribePrincipalIdFormatCommandInput} for command's `input` shape.
 * @see {@link DescribePrincipalIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribePrincipalIdFormatCommand extends $Command<
  DescribePrincipalIdFormatCommandInput,
  DescribePrincipalIdFormatCommandOutput,
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
  constructor(readonly input: DescribePrincipalIdFormatCommandInput) {
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
  ): Handler<DescribePrincipalIdFormatCommandInput, DescribePrincipalIdFormatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePrincipalIdFormatCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribePrincipalIdFormatCommand";
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
  private serialize(input: DescribePrincipalIdFormatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePrincipalIdFormatCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePrincipalIdFormatCommandOutput> {
    return de_DescribePrincipalIdFormatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
