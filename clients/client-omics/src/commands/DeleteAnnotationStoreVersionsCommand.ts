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

import { DeleteAnnotationStoreVersionsRequest, DeleteAnnotationStoreVersionsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  de_DeleteAnnotationStoreVersionsCommand,
  se_DeleteAnnotationStoreVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAnnotationStoreVersionsCommand}.
 */
export interface DeleteAnnotationStoreVersionsCommandInput extends DeleteAnnotationStoreVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnnotationStoreVersionsCommand}.
 */
export interface DeleteAnnotationStoreVersionsCommandOutput
  extends DeleteAnnotationStoreVersionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 * Deletes one or multiple versions of an annotation store.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteAnnotationStoreVersionsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteAnnotationStoreVersionsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // DeleteAnnotationStoreVersionsRequest
 *   name: "STRING_VALUE", // required
 *   versions: [ // VersionList // required
 *     "STRING_VALUE",
 *   ],
 *   force: true || false,
 * };
 * const command = new DeleteAnnotationStoreVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAnnotationStoreVersionsResponse
 * //   errors: [ // VersionDeleteErrorList
 * //     { // VersionDeleteError
 * //       versionName: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteAnnotationStoreVersionsCommandInput - {@link DeleteAnnotationStoreVersionsCommandInput}
 * @returns {@link DeleteAnnotationStoreVersionsCommandOutput}
 * @see {@link DeleteAnnotationStoreVersionsCommandInput} for command's `input` shape.
 * @see {@link DeleteAnnotationStoreVersionsCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 */
export class DeleteAnnotationStoreVersionsCommand extends $Command<
  DeleteAnnotationStoreVersionsCommandInput,
  DeleteAnnotationStoreVersionsCommandOutput,
  OmicsClientResolvedConfig
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
  constructor(readonly input: DeleteAnnotationStoreVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAnnotationStoreVersionsCommandInput, DeleteAnnotationStoreVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAnnotationStoreVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "DeleteAnnotationStoreVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Omics",
        operation: "DeleteAnnotationStoreVersions",
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
  private serialize(input: DeleteAnnotationStoreVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteAnnotationStoreVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAnnotationStoreVersionsCommandOutput> {
    return de_DeleteAnnotationStoreVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
