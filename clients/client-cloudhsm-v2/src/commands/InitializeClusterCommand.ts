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

import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { InitializeClusterRequest, InitializeClusterResponse } from "../models/models_0";
import { de_InitializeClusterCommand, se_InitializeClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InitializeClusterCommand}.
 */
export interface InitializeClusterCommandInput extends InitializeClusterRequest {}
/**
 * @public
 *
 * The output of {@link InitializeClusterCommand}.
 */
export interface InitializeClusterCommandOutput extends InitializeClusterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your
 *       issuing certificate authority (CA) and the CA's root certificate. Before you can claim a
 *       cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA.
 *       To get the cluster's CSR, use <a>DescribeClusters</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, InitializeClusterCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, InitializeClusterCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const input = { // InitializeClusterRequest
 *   ClusterId: "STRING_VALUE", // required
 *   SignedCert: "STRING_VALUE", // required
 *   TrustAnchor: "STRING_VALUE", // required
 * };
 * const command = new InitializeClusterCommand(input);
 * const response = await client.send(command);
 * // { // InitializeClusterResponse
 * //   State: "CREATE_IN_PROGRESS" || "UNINITIALIZED" || "INITIALIZE_IN_PROGRESS" || "INITIALIZED" || "ACTIVE" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DEGRADED",
 * //   StateMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InitializeClusterCommandInput - {@link InitializeClusterCommandInput}
 * @returns {@link InitializeClusterCommandOutput}
 * @see {@link InitializeClusterCommandInput} for command's `input` shape.
 * @see {@link InitializeClusterCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for CloudHSMV2Client's `config` shape.
 *
 * @throws {@link CloudHsmAccessDeniedException} (client fault)
 *  <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 *
 * @throws {@link CloudHsmInternalFailureException} (server fault)
 *  <p>The request was rejected because of an AWS CloudHSM internal failure. The request can
 *       be retried.</p>
 *
 * @throws {@link CloudHsmInvalidRequestException} (client fault)
 *  <p>The request was rejected because it is not a valid request.</p>
 *
 * @throws {@link CloudHsmResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it refers to a resource that cannot be
 *       found.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>The request was rejected because an error occurred.</p>
 *
 * @throws {@link CloudHSMV2ServiceException}
 * <p>Base exception class for all service exceptions from CloudHSMV2 service.</p>
 *
 */
export class InitializeClusterCommand extends $Command<
  InitializeClusterCommandInput,
  InitializeClusterCommandOutput,
  CloudHSMV2ClientResolvedConfig
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
  constructor(readonly input: InitializeClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InitializeClusterCommandInput, InitializeClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InitializeClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMV2Client";
    const commandName = "InitializeClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BaldrApiService",
        operation: "InitializeCluster",
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
  private serialize(input: InitializeClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InitializeClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitializeClusterCommandOutput> {
    return de_InitializeClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
