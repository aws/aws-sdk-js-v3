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

import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import { DescribeBundleRequest, DescribeBundleResult } from "../models/models_0";
import { de_DescribeBundleCommand, se_DescribeBundleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBundleCommand}.
 */
export interface DescribeBundleCommandInput extends DescribeBundleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBundleCommand}.
 */
export interface DescribeBundleCommandOutput extends DescribeBundleResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *             Get the bundle details for the requested bundle id.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, DescribeBundleCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, DescribeBundleCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const input = { // DescribeBundleRequest
 *   bundleId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBundleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBundleResult
 * //   details: { // BundleDetails
 * //     bundleId: "STRING_VALUE",
 * //     title: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     iconUrl: "STRING_VALUE",
 * //     availablePlatforms: [ // Platforms
 * //       "OSX" || "WINDOWS" || "LINUX" || "OBJC" || "SWIFT" || "ANDROID" || "JAVASCRIPT",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBundleCommandInput - {@link DescribeBundleCommandInput}
 * @returns {@link DescribeBundleCommandOutput}
 * @see {@link DescribeBundleCommandInput} for command's `input` shape.
 * @see {@link DescribeBundleCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for MobileClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>
 *             The request cannot be processed because some parameter is not valid or the project
 *             state prevents the operation from being performed.
 *         </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>
 *             The service has encountered an unexpected error condition which prevents it from
 *             servicing the request.
 *         </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>
 *             No entity can be found with the specified identifier.
 *         </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>
 *             The service is temporarily unavailable. The request should be retried after some
 *             time delay.
 *         </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>
 *             Too many requests have been received for this AWS account in too short a time. The
 *             request should be retried after some time delay.
 *         </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>
 *             Credentials of the caller are insufficient to authorize the request.
 *         </p>
 *
 * @throws {@link MobileServiceException}
 * <p>Base exception class for all service exceptions from Mobile service.</p>
 *
 */
export class DescribeBundleCommand extends $Command<
  DescribeBundleCommandInput,
  DescribeBundleCommandOutput,
  MobileClientResolvedConfig
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
  constructor(readonly input: DescribeBundleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MobileClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBundleCommandInput, DescribeBundleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBundleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MobileClient";
    const commandName = "DescribeBundleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMobileService",
        operation: "DescribeBundle",
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
  private serialize(input: DescribeBundleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBundleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBundleCommandOutput> {
    return de_DescribeBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
