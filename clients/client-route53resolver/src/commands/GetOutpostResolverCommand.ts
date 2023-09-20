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

import { GetOutpostResolverRequest, GetOutpostResolverResponse } from "../models/models_0";
import { de_GetOutpostResolverCommand, se_GetOutpostResolverCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOutpostResolverCommand}.
 */
export interface GetOutpostResolverCommandInput extends GetOutpostResolverRequest {}
/**
 * @public
 *
 * The output of {@link GetOutpostResolverCommand}.
 */
export interface GetOutpostResolverCommandOutput extends GetOutpostResolverResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a specified Resolver on the Outpost, such as its instance count and
 * 			type, name, and the current status of the Resolver.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetOutpostResolverCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetOutpostResolverCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // GetOutpostResolverRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetOutpostResolverCommand(input);
 * const response = await client.send(command);
 * // { // GetOutpostResolverResponse
 * //   OutpostResolver: { // OutpostResolver
 * //     Arn: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     InstanceCount: Number("int"),
 * //     PreferredInstanceType: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING" || "ACTION_NEEDED" || "FAILED_CREATION" || "FAILED_DELETION",
 * //     StatusMessage: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOutpostResolverCommandInput - {@link GetOutpostResolverCommandInput}
 * @returns {@link GetOutpostResolverCommandOutput}
 * @see {@link GetOutpostResolverCommandInput} for command's `input` shape.
 * @see {@link GetOutpostResolverCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You have provided an invalid command. Supported values are <code>ADD</code>,
 * 			<code>REMOVE</code>, or <code>REPLACE</code> a domain.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 */
export class GetOutpostResolverCommand extends $Command<
  GetOutpostResolverCommandInput,
  GetOutpostResolverCommandOutput,
  Route53ResolverClientResolvedConfig
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
  constructor(readonly input: GetOutpostResolverCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOutpostResolverCommandInput, GetOutpostResolverCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOutpostResolverCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetOutpostResolverCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Resolver",
        operation: "GetOutpostResolver",
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
  private serialize(input: GetOutpostResolverCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetOutpostResolverCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOutpostResolverCommandOutput> {
    return de_GetOutpostResolverCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
