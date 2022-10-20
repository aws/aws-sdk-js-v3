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
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DescribeDraftAppVersionResourcesImportStatusRequest,
  DescribeDraftAppVersionResourcesImportStatusRequestFilterSensitiveLog,
  DescribeDraftAppVersionResourcesImportStatusResponse,
  DescribeDraftAppVersionResourcesImportStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDraftAppVersionResourcesImportStatusCommand,
  serializeAws_restJson1DescribeDraftAppVersionResourcesImportStatusCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface DescribeDraftAppVersionResourcesImportStatusCommandInput
  extends DescribeDraftAppVersionResourcesImportStatusRequest {}
export interface DescribeDraftAppVersionResourcesImportStatusCommandOutput
  extends DescribeDraftAppVersionResourcesImportStatusResponse,
    __MetadataBearer {}

/**
 * <p>Describes the status of importing resources to an application version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeDraftAppVersionResourcesImportStatusCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeDraftAppVersionResourcesImportStatusCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new DescribeDraftAppVersionResourcesImportStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDraftAppVersionResourcesImportStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeDraftAppVersionResourcesImportStatusCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class DescribeDraftAppVersionResourcesImportStatusCommand extends $Command<
  DescribeDraftAppVersionResourcesImportStatusCommandInput,
  DescribeDraftAppVersionResourcesImportStatusCommandOutput,
  ResiliencehubClientResolvedConfig
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

  constructor(readonly input: DescribeDraftAppVersionResourcesImportStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeDraftAppVersionResourcesImportStatusCommandInput,
    DescribeDraftAppVersionResourcesImportStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeDraftAppVersionResourcesImportStatusCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "DescribeDraftAppVersionResourcesImportStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDraftAppVersionResourcesImportStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeDraftAppVersionResourcesImportStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDraftAppVersionResourcesImportStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDraftAppVersionResourcesImportStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDraftAppVersionResourcesImportStatusCommandOutput> {
    return deserializeAws_restJson1DescribeDraftAppVersionResourcesImportStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
