// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SdkStream as __SdkStream,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@aws-sdk/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import {
  GetPackageVersionAssetRequest,
  GetPackageVersionAssetRequestFilterSensitiveLog,
  GetPackageVersionAssetResult,
  GetPackageVersionAssetResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetPackageVersionAssetCommand,
  serializeAws_restJson1GetPackageVersionAssetCommand,
} from "../protocols/Aws_restJson1";

export interface GetPackageVersionAssetCommandInput extends GetPackageVersionAssetRequest {}
export interface GetPackageVersionAssetCommandOutput
  extends __WithSdkStreamMixin<GetPackageVersionAssetResult, "asset">,
    __MetadataBearer {}

/**
 * <p>
 *       Returns an asset (or file) that is in a package. For example, for a Maven package version, use
 *       <code>GetPackageVersionAsset</code> to download a <code>JAR</code> file, a <code>POM</code> file,
 *       or any other assets in the package version.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetPackageVersionAssetCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetPackageVersionAssetCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetPackageVersionAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPackageVersionAssetCommandInput} for command's `input` shape.
 * @see {@link GetPackageVersionAssetCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 */
export class GetPackageVersionAssetCommand extends $Command<
  GetPackageVersionAssetCommandInput,
  GetPackageVersionAssetCommandOutput,
  CodeartifactClientResolvedConfig
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

  constructor(readonly input: GetPackageVersionAssetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPackageVersionAssetCommandInput, GetPackageVersionAssetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPackageVersionAssetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "GetPackageVersionAssetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPackageVersionAssetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPackageVersionAssetResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPackageVersionAssetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPackageVersionAssetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<GetPackageVersionAssetCommandOutput> {
    return deserializeAws_restJson1GetPackageVersionAssetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
