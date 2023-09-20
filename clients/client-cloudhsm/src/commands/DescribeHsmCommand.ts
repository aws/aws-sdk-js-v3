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

import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { DescribeHsmRequest, DescribeHsmResponse } from "../models/models_0";
import { de_DescribeHsmCommand, se_DescribeHsmCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeHsmCommand}.
 */
export interface DescribeHsmCommandInput extends DescribeHsmRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHsmCommand}.
 */
export interface DescribeHsmCommandOutput extends DescribeHsmResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Retrieves information about an HSM. You can identify the HSM by its ARN or its serial
 *       number.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, DescribeHsmCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, DescribeHsmCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const input = { // DescribeHsmRequest
 *   HsmArn: "STRING_VALUE",
 *   HsmSerialNumber: "STRING_VALUE",
 * };
 * const command = new DescribeHsmCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHsmResponse
 * //   HsmArn: "STRING_VALUE",
 * //   Status: "PENDING" || "RUNNING" || "UPDATING" || "SUSPENDED" || "TERMINATING" || "TERMINATED" || "DEGRADED",
 * //   StatusDetails: "STRING_VALUE",
 * //   AvailabilityZone: "STRING_VALUE",
 * //   EniId: "STRING_VALUE",
 * //   EniIp: "STRING_VALUE",
 * //   SubscriptionType: "PRODUCTION",
 * //   SubscriptionStartDate: "STRING_VALUE",
 * //   SubscriptionEndDate: "STRING_VALUE",
 * //   VpcId: "STRING_VALUE",
 * //   SubnetId: "STRING_VALUE",
 * //   IamRoleArn: "STRING_VALUE",
 * //   SerialNumber: "STRING_VALUE",
 * //   VendorName: "STRING_VALUE",
 * //   HsmType: "STRING_VALUE",
 * //   SoftwareVersion: "STRING_VALUE",
 * //   SshPublicKey: "STRING_VALUE",
 * //   SshKeyLastUpdated: "STRING_VALUE",
 * //   ServerCertUri: "STRING_VALUE",
 * //   ServerCertLastUpdated: "STRING_VALUE",
 * //   Partitions: [ // PartitionList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeHsmCommandInput - {@link DescribeHsmCommandInput}
 * @returns {@link DescribeHsmCommandOutput}
 * @see {@link DescribeHsmCommandInput} for command's `input` shape.
 * @see {@link DescribeHsmCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for CloudHSMClient's `config` shape.
 *
 * @throws {@link CloudHsmInternalException} (server fault)
 *  <p>Indicates that an internal error occurred.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that one or more of the request parameters are not valid.</p>
 *
 * @throws {@link CloudHSMServiceException}
 * <p>Base exception class for all service exceptions from CloudHSM service.</p>
 *
 */
export class DescribeHsmCommand extends $Command<
  DescribeHsmCommandInput,
  DescribeHsmCommandOutput,
  CloudHSMClientResolvedConfig
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
  constructor(readonly input: DescribeHsmCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHsmCommandInput, DescribeHsmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeHsmCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMClient";
    const commandName = "DescribeHsmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudHsmFrontendService",
        operation: "DescribeHsm",
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
  private serialize(input: DescribeHsmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeHsmCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHsmCommandOutput> {
    return de_DescribeHsmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
