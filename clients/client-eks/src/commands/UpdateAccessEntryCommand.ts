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
import { UpdateAccessEntryRequest, UpdateAccessEntryResponse } from "../models/models_0";
import { de_UpdateAccessEntryCommand, se_UpdateAccessEntryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccessEntryCommand}.
 */
export interface UpdateAccessEntryCommandInput extends UpdateAccessEntryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessEntryCommand}.
 */
export interface UpdateAccessEntryCommandOutput extends UpdateAccessEntryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an access entry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateAccessEntryCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateAccessEntryCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // UpdateAccessEntryRequest
 *   clusterName: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE", // required
 *   kubernetesGroups: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   clientRequestToken: "STRING_VALUE",
 *   username: "STRING_VALUE",
 * };
 * const command = new UpdateAccessEntryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccessEntryResponse
 * //   accessEntry: { // AccessEntry
 * //     clusterName: "STRING_VALUE",
 * //     principalArn: "STRING_VALUE",
 * //     kubernetesGroups: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     accessEntryArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     username: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAccessEntryCommandInput - {@link UpdateAccessEntryCommandInput}
 * @returns {@link UpdateAccessEntryCommandOutput}
 * @see {@link UpdateAccessEntryCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessEntryCommandOutput} for command's `response` shape.
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
export class UpdateAccessEntryCommand extends $Command<
  UpdateAccessEntryCommandInput,
  UpdateAccessEntryCommandOutput,
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
  constructor(readonly input: UpdateAccessEntryCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAccessEntryCommandInput, UpdateAccessEntryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAccessEntryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "UpdateAccessEntryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "UpdateAccessEntry",
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
  private serialize(input: UpdateAccessEntryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAccessEntryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAccessEntryCommandOutput> {
    return de_UpdateAccessEntryCommand(output, context);
  }
}
