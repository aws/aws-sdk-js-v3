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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { DescribeServiceIntegrationRequest, DescribeServiceIntegrationResponse } from "../models/models_0";
import { de_DescribeServiceIntegrationCommand, se_DescribeServiceIntegrationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeServiceIntegrationCommand}.
 */
export interface DescribeServiceIntegrationCommandInput extends DescribeServiceIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServiceIntegrationCommand}.
 */
export interface DescribeServiceIntegrationCommandOutput extends DescribeServiceIntegrationResponse, __MetadataBearer {}

/**
 * @public
 * <p> Returns the integration status of services that are integrated with DevOps Guru.
 * 			The one service that can be integrated with DevOps Guru
 *       	is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeServiceIntegrationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeServiceIntegrationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = {};
 * const command = new DescribeServiceIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceIntegrationResponse
 * //   ServiceIntegration: { // ServiceIntegrationConfig
 * //     OpsCenter: { // OpsCenterIntegration
 * //       OptInStatus: "ENABLED" || "DISABLED",
 * //     },
 * //     LogsAnomalyDetection: { // LogsAnomalyDetectionIntegration
 * //       OptInStatus: "ENABLED" || "DISABLED",
 * //     },
 * //     KMSServerSideEncryption: { // KMSServerSideEncryptionIntegration
 * //       KMSKeyId: "STRING_VALUE",
 * //       OptInStatus: "ENABLED" || "DISABLED",
 * //       Type: "CUSTOMER_MANAGED_KEY" || "AWS_OWNED_KMS_KEY",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeServiceIntegrationCommandInput - {@link DescribeServiceIntegrationCommandInput}
 * @returns {@link DescribeServiceIntegrationCommandOutput}
 * @see {@link DescribeServiceIntegrationCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceIntegrationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource could not be found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 */
export class DescribeServiceIntegrationCommand extends $Command<
  DescribeServiceIntegrationCommandInput,
  DescribeServiceIntegrationCommandOutput,
  DevOpsGuruClientResolvedConfig
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
  constructor(readonly input: DescribeServiceIntegrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServiceIntegrationCommandInput, DescribeServiceIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeServiceIntegrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeServiceIntegrationCommand";
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
  private serialize(input: DescribeServiceIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeServiceIntegrationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeServiceIntegrationCommandOutput> {
    return de_DescribeServiceIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
