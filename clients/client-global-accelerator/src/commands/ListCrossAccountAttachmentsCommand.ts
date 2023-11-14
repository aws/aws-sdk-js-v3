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
import { ListCrossAccountAttachmentsRequest, ListCrossAccountAttachmentsResponse } from "../models/models_0";
import { de_ListCrossAccountAttachmentsCommand, se_ListCrossAccountAttachmentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCrossAccountAttachmentsCommand}.
 */
export interface ListCrossAccountAttachmentsCommandInput extends ListCrossAccountAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListCrossAccountAttachmentsCommand}.
 */
export interface ListCrossAccountAttachmentsCommandOutput
  extends ListCrossAccountAttachmentsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List the cross-account attachments that have been created in Global Accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCrossAccountAttachmentsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCrossAccountAttachmentsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListCrossAccountAttachmentsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCrossAccountAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListCrossAccountAttachmentsResponse
 * //   CrossAccountAttachments: [ // Attachments
 * //     { // Attachment
 * //       AttachmentArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Principals: [ // Principals
 * //         "STRING_VALUE",
 * //       ],
 * //       Resources: [ // Resources
 * //         { // Resource
 * //           EndpointId: "STRING_VALUE", // required
 * //           Region: "STRING_VALUE",
 * //         },
 * //       ],
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCrossAccountAttachmentsCommandInput - {@link ListCrossAccountAttachmentsCommandInput}
 * @returns {@link ListCrossAccountAttachmentsCommandOutput}
 * @see {@link ListCrossAccountAttachmentsCommandInput} for command's `input` shape.
 * @see {@link ListCrossAccountAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
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
export class ListCrossAccountAttachmentsCommand extends $Command<
  ListCrossAccountAttachmentsCommandInput,
  ListCrossAccountAttachmentsCommandOutput,
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
  constructor(readonly input: ListCrossAccountAttachmentsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCrossAccountAttachmentsCommandInput, ListCrossAccountAttachmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCrossAccountAttachmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListCrossAccountAttachmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GlobalAccelerator_V20180706",
        operation: "ListCrossAccountAttachments",
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
  private serialize(input: ListCrossAccountAttachmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCrossAccountAttachmentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCrossAccountAttachmentsCommandOutput> {
    return de_ListCrossAccountAttachmentsCommand(output, context);
  }
}
