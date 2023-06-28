// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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
} from "@smithy/types";

import { ListStorageLensConfigurationsRequest, ListStorageLensConfigurationsResult } from "../models/models_0";
import {
  de_ListStorageLensConfigurationsCommand,
  se_ListStorageLensConfigurationsCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStorageLensConfigurationsCommand}.
 */
export interface ListStorageLensConfigurationsCommandInput extends ListStorageLensConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListStorageLensConfigurationsCommand}.
 */
export interface ListStorageLensConfigurationsCommandOutput
  extends ListStorageLensConfigurationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your
 *             storage activity and usage with Amazon S3 Storage Lens </a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action, you must have permission to perform the
 *                <code>s3:ListStorageLensConfigurations</code> action. For more information, see
 *                <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to
 *                use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListStorageLensConfigurationsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListStorageLensConfigurationsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // ListStorageLensConfigurationsRequest
 *   AccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListStorageLensConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListStorageLensConfigurationsResult
 * //   NextToken: "STRING_VALUE",
 * //   StorageLensConfigurationList: [ // StorageLensConfigurationList
 * //     { // ListStorageLensConfigurationEntry
 * //       Id: "STRING_VALUE", // required
 * //       StorageLensArn: "STRING_VALUE", // required
 * //       HomeRegion: "STRING_VALUE", // required
 * //       IsEnabled: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListStorageLensConfigurationsCommandInput - {@link ListStorageLensConfigurationsCommandInput}
 * @returns {@link ListStorageLensConfigurationsCommandOutput}
 * @see {@link ListStorageLensConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListStorageLensConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class ListStorageLensConfigurationsCommand extends $Command<
  ListStorageLensConfigurationsCommandInput,
  ListStorageLensConfigurationsCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListStorageLensConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStorageLensConfigurationsCommandInput, ListStorageLensConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStorageLensConfigurationsCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "ListStorageLensConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListStorageLensConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListStorageLensConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStorageLensConfigurationsCommandOutput> {
    return de_ListStorageLensConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
