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
import { CreateKeyValueStoreRequest, CreateKeyValueStoreResult } from "../models/models_0";
import { de_CreateKeyValueStoreCommand, se_CreateKeyValueStoreCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateKeyValueStoreCommand}.
 */
export interface CreateKeyValueStoreCommandInput extends CreateKeyValueStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateKeyValueStoreCommand}.
 */
export interface CreateKeyValueStoreCommandOutput extends CreateKeyValueStoreResult, __MetadataBearer {}

/**
 * @public
 * <p>Specifies the Key Value Store resource to add to your account. In your account, the Key Value Store names must be unique. You can also import Key Value Store data in JSON format from an S3 bucket by providing a valid <code>ImportSource</code> that you own.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateKeyValueStoreCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateKeyValueStoreCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateKeyValueStoreRequest
 *   Name: "STRING_VALUE", // required
 *   Comment: "STRING_VALUE",
 *   ImportSource: { // ImportSource
 *     SourceType: "S3", // required
 *     SourceARN: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateKeyValueStoreResult
 * //   KeyValueStore: { // KeyValueStore
 * //     Name: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE", // required
 * //     ARN: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   },
 * //   ETag: "STRING_VALUE",
 * //   Location: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateKeyValueStoreCommandInput - {@link CreateKeyValueStoreCommandInput}
 * @returns {@link CreateKeyValueStoreCommandOutput}
 * @see {@link CreateKeyValueStoreCommandInput} for command's `input` shape.
 * @see {@link CreateKeyValueStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityAlreadyExists} (client fault)
 *  <p>The Key Value Store entity already exists. You must provide a unique Key Value Store
 * 			entity.</p>
 *
 * @throws {@link EntityLimitExceeded} (client fault)
 *  <p>The Key Value Store entity limit has been exceeded.</p>
 *
 * @throws {@link EntitySizeLimitExceeded} (client fault)
 *  <p>The Key Value Store entity size limit was exceeded.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class CreateKeyValueStoreCommand extends $Command<
  CreateKeyValueStoreCommandInput,
  CreateKeyValueStoreCommandOutput,
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
  constructor(readonly input: CreateKeyValueStoreCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateKeyValueStoreCommandInput, CreateKeyValueStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateKeyValueStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateKeyValueStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "CreateKeyValueStore",
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
  private serialize(input: CreateKeyValueStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateKeyValueStoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKeyValueStoreCommandOutput> {
    return de_CreateKeyValueStoreCommand(output, context);
  }
}
