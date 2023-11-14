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
import { DescribeCrossAccountAttachmentRequest, DescribeCrossAccountAttachmentResponse } from "../models/models_0";
import {
  de_DescribeCrossAccountAttachmentCommand,
  se_DescribeCrossAccountAttachmentCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCrossAccountAttachmentCommand}.
 */
export interface DescribeCrossAccountAttachmentCommandInput extends DescribeCrossAccountAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCrossAccountAttachmentCommand}.
 */
export interface DescribeCrossAccountAttachmentCommandOutput
  extends DescribeCrossAccountAttachmentResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets configuration information about a cross-account attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCrossAccountAttachmentCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCrossAccountAttachmentCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DescribeCrossAccountAttachmentRequest
 *   AttachmentArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCrossAccountAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCrossAccountAttachmentResponse
 * //   CrossAccountAttachment: { // Attachment
 * //     AttachmentArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Principals: [ // Principals
 * //       "STRING_VALUE",
 * //     ],
 * //     Resources: [ // Resources
 * //       { // Resource
 * //         EndpointId: "STRING_VALUE", // required
 * //         Region: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCrossAccountAttachmentCommandInput - {@link DescribeCrossAccountAttachmentCommandInput}
 * @returns {@link DescribeCrossAccountAttachmentCommandOutput}
 * @see {@link DescribeCrossAccountAttachmentCommandInput} for command's `input` shape.
 * @see {@link DescribeCrossAccountAttachmentCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link AttachmentNotFoundException} (client fault)
 *  <p>No cross-account attachment was found.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class DescribeCrossAccountAttachmentCommand extends $Command<
  DescribeCrossAccountAttachmentCommandInput,
  DescribeCrossAccountAttachmentCommandOutput,
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
  constructor(readonly input: DescribeCrossAccountAttachmentCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCrossAccountAttachmentCommandInput, DescribeCrossAccountAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCrossAccountAttachmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DescribeCrossAccountAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GlobalAccelerator_V20180706",
        operation: "DescribeCrossAccountAttachment",
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
    input: DescribeCrossAccountAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeCrossAccountAttachmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCrossAccountAttachmentCommandOutput> {
    return de_DescribeCrossAccountAttachmentCommand(output, context);
  }
}
