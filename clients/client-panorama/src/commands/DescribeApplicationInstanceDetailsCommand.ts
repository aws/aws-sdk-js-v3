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
  DescribeApplicationInstanceDetailsRequest,
  DescribeApplicationInstanceDetailsResponse,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  de_DescribeApplicationInstanceDetailsCommand,
  se_DescribeApplicationInstanceDetailsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationInstanceDetailsCommand}.
 */
export interface DescribeApplicationInstanceDetailsCommandInput extends DescribeApplicationInstanceDetailsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationInstanceDetailsCommand}.
 */
export interface DescribeApplicationInstanceDetailsCommandOutput
  extends DescribeApplicationInstanceDetailsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about an application instance's configuration manifest.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribeApplicationInstanceDetailsCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribeApplicationInstanceDetailsCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // DescribeApplicationInstanceDetailsRequest
 *   ApplicationInstanceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeApplicationInstanceDetailsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationInstanceDetailsResponse
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   DefaultRuntimeContextDevice: "STRING_VALUE",
 * //   ManifestPayload: { // ManifestPayload Union: only one key present
 * //     PayloadData: "STRING_VALUE",
 * //   },
 * //   ManifestOverridesPayload: { // ManifestOverridesPayload Union: only one key present
 * //     PayloadData: "STRING_VALUE",
 * //   },
 * //   ApplicationInstanceIdToReplace: "STRING_VALUE",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   ApplicationInstanceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationInstanceDetailsCommandInput - {@link DescribeApplicationInstanceDetailsCommandInput}
 * @returns {@link DescribeApplicationInstanceDetailsCommandOutput}
 * @see {@link DescribeApplicationInstanceDetailsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationInstanceDetailsCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 */
export class DescribeApplicationInstanceDetailsCommand extends $Command<
  DescribeApplicationInstanceDetailsCommandInput,
  DescribeApplicationInstanceDetailsCommandOutput,
  PanoramaClientResolvedConfig
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
  constructor(readonly input: DescribeApplicationInstanceDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeApplicationInstanceDetailsCommandInput, DescribeApplicationInstanceDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeApplicationInstanceDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "DescribeApplicationInstanceDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OmniCloudServiceLambda",
        operation: "DescribeApplicationInstanceDetails",
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
    input: DescribeApplicationInstanceDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeApplicationInstanceDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeApplicationInstanceDetailsCommandOutput> {
    return de_DescribeApplicationInstanceDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
