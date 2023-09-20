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

import { DescribeHsmConfigurationsMessage, HsmConfigurationMessage } from "../models/models_1";
import { de_DescribeHsmConfigurationsCommand, se_DescribeHsmConfigurationsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeHsmConfigurationsCommand}.
 */
export interface DescribeHsmConfigurationsCommandInput extends DescribeHsmConfigurationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeHsmConfigurationsCommand}.
 */
export interface DescribeHsmConfigurationsCommandOutput extends HsmConfigurationMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the specified Amazon Redshift HSM configuration. If no
 *             configuration ID is specified, returns information about all the HSM configurations
 *             owned by your Amazon Web Services account.</p>
 *          <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all HSM connections that match any combination of the specified keys and values. For
 *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all HSM connections that
 *             have any combination of those values are returned.</p>
 *          <p>If both tag keys and values are omitted from the request, HSM connections are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeHsmConfigurationsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeHsmConfigurationsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeHsmConfigurationsMessage
 *   HsmConfigurationIdentifier: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeHsmConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // HsmConfigurationMessage
 * //   Marker: "STRING_VALUE",
 * //   HsmConfigurations: [ // HsmConfigurationList
 * //     { // HsmConfiguration
 * //       HsmConfigurationIdentifier: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       HsmIpAddress: "STRING_VALUE",
 * //       HsmPartitionName: "STRING_VALUE",
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
 * @param DescribeHsmConfigurationsCommandInput - {@link DescribeHsmConfigurationsCommandInput}
 * @returns {@link DescribeHsmConfigurationsCommandOutput}
 * @see {@link DescribeHsmConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeHsmConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link HsmConfigurationNotFoundFault} (client fault)
 *  <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeHsmConfigurationsCommand extends $Command<
  DescribeHsmConfigurationsCommandInput,
  DescribeHsmConfigurationsCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: DescribeHsmConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHsmConfigurationsCommandInput, DescribeHsmConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeHsmConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeHsmConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "DescribeHsmConfigurations",
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
  private serialize(input: DescribeHsmConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeHsmConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeHsmConfigurationsCommandOutput> {
    return de_DescribeHsmConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
