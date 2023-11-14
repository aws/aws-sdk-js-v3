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

import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { ListCrossAccountResourcesRequest, ListCrossAccountResourcesResponse } from "../models/models_0";
import { de_ListCrossAccountResourcesCommand, se_ListCrossAccountResourcesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCrossAccountResourcesCommand}.
 */
export interface ListCrossAccountResourcesCommandInput extends ListCrossAccountResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListCrossAccountResourcesCommand}.
 */
export interface ListCrossAccountResourcesCommandOutput extends ListCrossAccountResourcesResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the cross-account endpoints available to add to an accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCrossAccountResourcesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCrossAccountResourcesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListCrossAccountResourcesRequest
 *   AcceleratorArn: "STRING_VALUE",
 *   ResourceOwnerAwsAccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCrossAccountResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListCrossAccountResourcesResponse
 * //   CrossAccountResources: [ // CrossAccountResources
 * //     { // CrossAccountResource
 * //       EndpointId: "STRING_VALUE",
 * //       AttachmentArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCrossAccountResourcesCommandInput - {@link ListCrossAccountResourcesCommandInput}
 * @returns {@link ListCrossAccountResourcesCommandOutput}
 * @see {@link ListCrossAccountResourcesCommandInput} for command's `input` shape.
 * @see {@link ListCrossAccountResourcesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>There isn't another item to return.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class ListCrossAccountResourcesCommand extends $Command<
  ListCrossAccountResourcesCommandInput,
  ListCrossAccountResourcesCommandOutput,
  GlobalAcceleratorClientResolvedConfig
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
  constructor(readonly input: ListCrossAccountResourcesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCrossAccountResourcesCommandInput, ListCrossAccountResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCrossAccountResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListCrossAccountResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GlobalAccelerator_V20180706",
        operation: "ListCrossAccountResources",
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
  private serialize(input: ListCrossAccountResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCrossAccountResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCrossAccountResourcesCommandOutput> {
    return de_ListCrossAccountResourcesCommand(output, context);
  }
}
