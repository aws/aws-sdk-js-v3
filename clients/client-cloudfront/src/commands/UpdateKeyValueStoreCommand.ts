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
import { UpdateKeyValueStoreRequest, UpdateKeyValueStoreResult } from "../models/models_1";
import { de_UpdateKeyValueStoreCommand, se_UpdateKeyValueStoreCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateKeyValueStoreCommand}.
 */
export interface UpdateKeyValueStoreCommandInput extends UpdateKeyValueStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKeyValueStoreCommand}.
 */
export interface UpdateKeyValueStoreCommandOutput extends UpdateKeyValueStoreResult, __MetadataBearer {}

/**
 * @public
 * <p>Specifies the Key Value Store to update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateKeyValueStoreCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateKeyValueStoreCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateKeyValueStoreRequest
 *   Name: "STRING_VALUE", // required
 *   Comment: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new UpdateKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKeyValueStoreResult
 * //   KeyValueStore: { // KeyValueStore
 * //     Name: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE", // required
 * //     ARN: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateKeyValueStoreCommandInput - {@link UpdateKeyValueStoreCommandInput}
 * @returns {@link UpdateKeyValueStoreCommandOutput}
 * @see {@link UpdateKeyValueStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyValueStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The Key Value Store entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
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
 */
export class UpdateKeyValueStoreCommand extends $Command<
  UpdateKeyValueStoreCommandInput,
  UpdateKeyValueStoreCommandOutput,
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
  constructor(readonly input: UpdateKeyValueStoreCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateKeyValueStoreCommandInput, UpdateKeyValueStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateKeyValueStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateKeyValueStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "UpdateKeyValueStore",
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
  private serialize(input: UpdateKeyValueStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateKeyValueStoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateKeyValueStoreCommandOutput> {
    return de_UpdateKeyValueStoreCommand(output, context);
  }
}
