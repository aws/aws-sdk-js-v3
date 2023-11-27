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
import { ListPodIdentityAssociationsRequest, ListPodIdentityAssociationsResponse } from "../models/models_0";
import {
  de_ListPodIdentityAssociationsCommand,
  se_ListPodIdentityAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPodIdentityAssociationsCommand}.
 */
export interface ListPodIdentityAssociationsCommandInput extends ListPodIdentityAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListPodIdentityAssociationsCommand}.
 */
export interface ListPodIdentityAssociationsCommandOutput
  extends ListPodIdentityAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List the EKS Pod Identity associations in a cluster. You can filter the list by the namespace that the
 *             association is in or the service account that the association uses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListPodIdentityAssociationsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListPodIdentityAssociationsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // ListPodIdentityAssociationsRequest
 *   clusterName: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE",
 *   serviceAccount: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPodIdentityAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPodIdentityAssociationsResponse
 * //   associations: [ // PodIdentityAssociationSummaries
 * //     { // PodIdentityAssociationSummary
 * //       clusterName: "STRING_VALUE",
 * //       namespace: "STRING_VALUE",
 * //       serviceAccount: "STRING_VALUE",
 * //       associationArn: "STRING_VALUE",
 * //       associationId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPodIdentityAssociationsCommandInput - {@link ListPodIdentityAssociationsCommandInput}
 * @returns {@link ListPodIdentityAssociationsCommandOutput}
 * @see {@link ListPodIdentityAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListPodIdentityAssociationsCommandOutput} for command's `response` shape.
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
 *                 <a>ListClusters</a>. You can view your available managed node groups with
 *                 <a>ListNodegroups</a>. Amazon EKS clusters and node groups are
 *             Region-specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 */
export class ListPodIdentityAssociationsCommand extends $Command<
  ListPodIdentityAssociationsCommandInput,
  ListPodIdentityAssociationsCommandOutput,
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
  constructor(readonly input: ListPodIdentityAssociationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPodIdentityAssociationsCommandInput, ListPodIdentityAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPodIdentityAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "ListPodIdentityAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "ListPodIdentityAssociations",
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
  private serialize(input: ListPodIdentityAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPodIdentityAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPodIdentityAssociationsCommandOutput> {
    return de_ListPodIdentityAssociationsCommand(output, context);
  }
}
