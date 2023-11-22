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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteKeyValueStoreRequest } from "../models/models_1";
import { de_DeleteKeyValueStoreCommand, se_DeleteKeyValueStoreCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteKeyValueStoreCommand}.
 */
export interface DeleteKeyValueStoreCommandInput extends DeleteKeyValueStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKeyValueStoreCommand}.
 */
export interface DeleteKeyValueStoreCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Specifies the Key Value Store to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteKeyValueStoreCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteKeyValueStoreCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteKeyValueStoreRequest
 *   Name: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new DeleteKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteKeyValueStoreCommandInput - {@link DeleteKeyValueStoreCommandInput}
 * @returns {@link DeleteKeyValueStoreCommandOutput}
 * @see {@link DeleteKeyValueStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyValueStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CannotDeleteEntityWhileInUse} (client fault)
 *  <p>The Key Value Store entity cannot be deleted while it is in use.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The Key Value Store entity was not found.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @example To delete a KeyValueStore
 * ```javascript
 * // Use the following command to delete a KeyValueStore.
 * const input = {
 *   "IfMatch": "ETVPDKIKX0DER",
 *   "Name": "my-keyvaluestore-name"
 * };
 * const command = new DeleteKeyValueStoreCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-key-value-store-1699751759648
 * ```
 *
 */
export class DeleteKeyValueStoreCommand extends $Command<
  DeleteKeyValueStoreCommandInput,
  DeleteKeyValueStoreCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: DeleteKeyValueStoreCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteKeyValueStoreCommandInput, DeleteKeyValueStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteKeyValueStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DeleteKeyValueStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "DeleteKeyValueStore",
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
  private serialize(input: DeleteKeyValueStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteKeyValueStoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteKeyValueStoreCommandOutput> {
    return de_DeleteKeyValueStoreCommand(output, context);
  }
}
