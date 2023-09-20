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

import { AccountAttributesMessage, DescribeAccountAttributesMessage } from "../models/models_0";
import { de_DescribeAccountAttributesCommand, se_DescribeAccountAttributesCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandInput extends DescribeAccountAttributesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandOutput extends AccountAttributesMessage, __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p>
 *          <p>This command doesn't take any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeAccountAttributesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeAccountAttributesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = {};
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * // { // AccountAttributesMessage
 * //   AccountQuotas: [ // AccountQuotaList
 * //     { // AccountQuota
 * //       AccountQuotaName: "STRING_VALUE",
 * //       Used: Number("long"),
 * //       Max: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAccountAttributesCommandInput - {@link DescribeAccountAttributesCommandInput}
 * @returns {@link DescribeAccountAttributesCommandOutput}
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe account attributes
 * ```javascript
 * // The following example retrieves the attributes for the current AWS account.
 * const input = {};
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AccountQuotas": [
 *     {
 *       "AccountQuotaName": "DBInstances",
 *       "Max": 40,
 *       "Used": 4
 *     },
 *     {
 *       "AccountQuotaName": "ReservedDBInstances",
 *       "Max": 40,
 *       "Used": 0
 *     },
 *     {
 *       "AccountQuotaName": "AllocatedStorage",
 *       "Max": 100000,
 *       "Used": 40
 *     },
 *     {
 *       "AccountQuotaName": "DBSecurityGroups",
 *       "Max": 25,
 *       "Used": 0
 *     },
 *     {
 *       "AccountQuotaName": "AuthorizationsPerDBSecurityGroup",
 *       "Max": 20,
 *       "Used": 0
 *     },
 *     {
 *       "AccountQuotaName": "DBParameterGroups",
 *       "Max": 50,
 *       "Used": 1
 *     },
 *     {
 *       "AccountQuotaName": "ManualSnapshots",
 *       "Max": 100,
 *       "Used": 3
 *     },
 *     {
 *       "AccountQuotaName": "EventSubscriptions",
 *       "Max": 20,
 *       "Used": 0
 *     },
 *     {
 *       "AccountQuotaName": "DBSubnetGroups",
 *       "Max": 50,
 *       "Used": 1
 *     },
 *     {
 *       "AccountQuotaName": "OptionGroups",
 *       "Max": 20,
 *       "Used": 1
 *     },
 *     {
 *       "AccountQuotaName": "SubnetsPerDBSubnetGroup",
 *       "Max": 20,
 *       "Used": 6
 *     },
 *     {
 *       "AccountQuotaName": "ReadReplicasPerMaster",
 *       "Max": 5,
 *       "Used": 0
 *     },
 *     {
 *       "AccountQuotaName": "DBClusters",
 *       "Max": 40,
 *       "Used": 1
 *     },
 *     {
 *       "AccountQuotaName": "DBClusterParameterGroups",
 *       "Max": 50,
 *       "Used": 0
 *     },
 *     {
 *       "AccountQuotaName": "DBClusterRoles",
 *       "Max": 5,
 *       "Used": 0
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-account-attributes-1680210466935
 * ```
 *
 */
export class DescribeAccountAttributesCommand extends $Command<
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DescribeAccountAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccountAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeAccountAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeAccountAttributes",
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
  private serialize(input: DescribeAccountAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAccountAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountAttributesCommandOutput> {
    return de_DescribeAccountAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
