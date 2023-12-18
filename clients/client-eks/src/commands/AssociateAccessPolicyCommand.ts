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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { AssociateAccessPolicyRequest, AssociateAccessPolicyResponse } from "../models/models_0";
import { de_AssociateAccessPolicyCommand, se_AssociateAccessPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateAccessPolicyCommand}.
 */
export interface AssociateAccessPolicyCommandInput extends AssociateAccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAccessPolicyCommand}.
 */
export interface AssociateAccessPolicyCommandOutput extends AssociateAccessPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Associates an access policy and its scope to an access entry. For more information
 *             about associating access policies, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/access-policies.html">Associating and disassociating
 *                 access policies to and from access entries</a> in the <i>Amazon EKS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, AssociateAccessPolicyCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, AssociateAccessPolicyCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // AssociateAccessPolicyRequest
 *   clusterName: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE", // required
 *   policyArn: "STRING_VALUE", // required
 *   accessScope: { // AccessScope
 *     type: "cluster" || "namespace",
 *     namespaces: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new AssociateAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAccessPolicyResponse
 * //   clusterName: "STRING_VALUE",
 * //   principalArn: "STRING_VALUE",
 * //   associatedAccessPolicy: { // AssociatedAccessPolicy
 * //     policyArn: "STRING_VALUE",
 * //     accessScope: { // AccessScope
 * //       type: "cluster" || "namespace",
 * //       namespaces: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     associatedAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateAccessPolicyCommandInput - {@link AssociateAccessPolicyCommandInput}
 * @returns {@link AssociateAccessPolicyCommandOutput}
 * @see {@link AssociateAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link AssociateAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 */
export class AssociateAccessPolicyCommand extends $Command<
  AssociateAccessPolicyCommandInput,
  AssociateAccessPolicyCommandOutput,
  EKSClientResolvedConfig
> {
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
  constructor(readonly input: AssociateAccessPolicyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateAccessPolicyCommandInput, AssociateAccessPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateAccessPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "AssociateAccessPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "AssociateAccessPolicy",
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
  private serialize(input: AssociateAccessPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateAccessPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateAccessPolicyCommandOutput> {
    return de_AssociateAccessPolicyCommand(output, context);
  }
}
