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
  DescribeDraftAppVersionResourcesImportStatusRequest,
  DescribeDraftAppVersionResourcesImportStatusResponse,
} from "../models/models_0";
import {
  de_DescribeDraftAppVersionResourcesImportStatusCommand,
  se_DescribeDraftAppVersionResourcesImportStatusCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDraftAppVersionResourcesImportStatusCommand}.
 */
export interface DescribeDraftAppVersionResourcesImportStatusCommandInput
  extends DescribeDraftAppVersionResourcesImportStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDraftAppVersionResourcesImportStatusCommand}.
 */
export interface DescribeDraftAppVersionResourcesImportStatusCommandOutput
  extends DescribeDraftAppVersionResourcesImportStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the status of importing resources to an application version.</p>
 *          <note>
 *             <p>If you get a 404 error with
 *           <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call
 *           <code>importResourcesToDraftAppVersion</code>  after creating the application and before
 *         calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the
 *         status.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeDraftAppVersionResourcesImportStatusCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeDraftAppVersionResourcesImportStatusCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // DescribeDraftAppVersionResourcesImportStatusRequest
 *   appArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDraftAppVersionResourcesImportStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDraftAppVersionResourcesImportStatusResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   statusChangeTime: new Date("TIMESTAMP"), // required
 * //   errorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDraftAppVersionResourcesImportStatusCommandInput - {@link DescribeDraftAppVersionResourcesImportStatusCommandInput}
 * @returns {@link DescribeDraftAppVersionResourcesImportStatusCommandOutput}
 * @see {@link DescribeDraftAppVersionResourcesImportStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeDraftAppVersionResourcesImportStatusCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 */
export class DescribeDraftAppVersionResourcesImportStatusCommand extends $Command<
  DescribeDraftAppVersionResourcesImportStatusCommandInput,
  DescribeDraftAppVersionResourcesImportStatusCommandOutput,
  ResiliencehubClientResolvedConfig
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
  constructor(readonly input: DescribeDraftAppVersionResourcesImportStatusCommandInput) {
    super();
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsResilienceHub",
        operation: "DescribeDraftAppVersionResourcesImportStatus",
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
    input: DescribeDraftAppVersionResourcesImportStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeDraftAppVersionResourcesImportStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDraftAppVersionResourcesImportStatusCommandOutput> {
    return de_DescribeDraftAppVersionResourcesImportStatusCommand(output, context);
  }
}
