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
import { DescribePodIdentityAssociationRequest, DescribePodIdentityAssociationResponse } from "../models/models_0";
import {
  de_DescribePodIdentityAssociationCommand,
  se_DescribePodIdentityAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePodIdentityAssociationCommand}.
 */
export interface DescribePodIdentityAssociationCommandInput extends DescribePodIdentityAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DescribePodIdentityAssociationCommand}.
 */
export interface DescribePodIdentityAssociationCommandOutput
  extends DescribePodIdentityAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns descriptive information about an EKS Pod Identity association.</p>
 *          <p>This action requires the ID of the association. You can get the ID from the response to
 *             the <code>CreatePodIdentityAssocation</code> for newly created associations. Or, you can
 *             list the IDs for associations with <code>ListPodIdentityAssociations</code> and filter the
 *             list by namespace or service account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribePodIdentityAssociationCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribePodIdentityAssociationCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DescribePodIdentityAssociationRequest
 *   clusterName: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 * };
 * const command = new DescribePodIdentityAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DescribePodIdentityAssociationResponse
 * //   association: { // PodIdentityAssociation
 * //     clusterName: "STRING_VALUE",
 * //     namespace: "STRING_VALUE",
 * //     serviceAccount: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     associationArn: "STRING_VALUE",
 * //     associationId: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePodIdentityAssociationCommandInput - {@link DescribePodIdentityAssociationCommandInput}
 * @returns {@link DescribePodIdentityAssociationCommandOutput}
 * @see {@link DescribePodIdentityAssociationCommandInput} for command's `input` shape.
 * @see {@link DescribePodIdentityAssociationCommandOutput} for command's `response` shape.
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
export class DescribePodIdentityAssociationCommand extends $Command<
  DescribePodIdentityAssociationCommandInput,
  DescribePodIdentityAssociationCommandOutput,
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
  constructor(readonly input: DescribePodIdentityAssociationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePodIdentityAssociationCommandInput, DescribePodIdentityAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePodIdentityAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribePodIdentityAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "DescribePodIdentityAssociation",
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
    input: DescribePodIdentityAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribePodIdentityAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePodIdentityAssociationCommandOutput> {
    return de_DescribePodIdentityAssociationCommand(output, context);
  }
}
