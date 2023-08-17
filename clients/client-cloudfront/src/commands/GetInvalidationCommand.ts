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
} from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetInvalidationRequest, GetInvalidationResult } from "../models/models_1";
import { de_GetInvalidationCommand, se_GetInvalidationCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInvalidationCommand}.
 */
export interface GetInvalidationCommandInput extends GetInvalidationRequest {}
/**
 * @public
 *
 * The output of {@link GetInvalidationCommand}.
 */
export interface GetInvalidationCommandOutput extends GetInvalidationResult, __MetadataBearer {}

/**
 * @public
 * <p>Get the information about an invalidation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetInvalidationCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetInvalidationCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetInvalidationRequest
 *   DistributionId: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetInvalidationCommand(input);
 * const response = await client.send(command);
 * // { // GetInvalidationResult
 * //   Invalidation: { // Invalidation
 * //     Id: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     CreateTime: new Date("TIMESTAMP"), // required
 * //     InvalidationBatch: { // InvalidationBatch
 * //       Paths: { // Paths
 * //         Quantity: Number("int"), // required
 * //         Items: [ // PathList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CallerReference: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInvalidationCommandInput - {@link GetInvalidationCommandInput}
 * @returns {@link GetInvalidationCommandOutput}
 * @see {@link GetInvalidationCommandInput} for command's `input` shape.
 * @see {@link GetInvalidationCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *  <p>The specified distribution does not exist.</p>
 *
 * @throws {@link NoSuchInvalidation} (client fault)
 *  <p>The specified invalidation does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class GetInvalidationCommand extends $Command<
  GetInvalidationCommandInput,
  GetInvalidationCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: GetInvalidationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInvalidationCommandInput, GetInvalidationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInvalidationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetInvalidationCommand";
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
  private serialize(input: GetInvalidationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInvalidationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInvalidationCommandOutput> {
    return de_GetInvalidationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
