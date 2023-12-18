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
import { ListAssociatedAccessPoliciesRequest, ListAssociatedAccessPoliciesResponse } from "../models/models_0";
import {
  de_ListAssociatedAccessPoliciesCommand,
  se_ListAssociatedAccessPoliciesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssociatedAccessPoliciesCommand}.
 */
export interface ListAssociatedAccessPoliciesCommandInput extends ListAssociatedAccessPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedAccessPoliciesCommand}.
 */
export interface ListAssociatedAccessPoliciesCommandOutput
  extends ListAssociatedAccessPoliciesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the access policies associated with an access entry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListAssociatedAccessPoliciesCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListAssociatedAccessPoliciesCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // ListAssociatedAccessPoliciesRequest
 *   clusterName: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAssociatedAccessPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedAccessPoliciesResponse
 * //   clusterName: "STRING_VALUE",
 * //   principalArn: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * //   associatedAccessPolicies: [ // AssociatedAccessPoliciesList
 * //     { // AssociatedAccessPolicy
 * //       policyArn: "STRING_VALUE",
 * //       accessScope: { // AccessScope
 * //         type: "cluster" || "namespace",
 * //         namespaces: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       associatedAt: new Date("TIMESTAMP"),
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAssociatedAccessPoliciesCommandInput - {@link ListAssociatedAccessPoliciesCommandInput}
 * @returns {@link ListAssociatedAccessPoliciesCommandOutput}
 * @see {@link ListAssociatedAccessPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedAccessPoliciesCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
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
export class ListAssociatedAccessPoliciesCommand extends $Command<
  ListAssociatedAccessPoliciesCommandInput,
  ListAssociatedAccessPoliciesCommandOutput,
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
  constructor(readonly input: ListAssociatedAccessPoliciesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssociatedAccessPoliciesCommandInput, ListAssociatedAccessPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssociatedAccessPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "ListAssociatedAccessPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "ListAssociatedAccessPolicies",
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
  private serialize(input: ListAssociatedAccessPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssociatedAccessPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssociatedAccessPoliciesCommandOutput> {
    return de_ListAssociatedAccessPoliciesCommand(output, context);
  }
}
