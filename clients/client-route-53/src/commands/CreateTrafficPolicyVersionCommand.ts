// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

import { CreateTrafficPolicyVersionRequest, CreateTrafficPolicyVersionResponse } from "../models/models_0";
import { de_CreateTrafficPolicyVersionCommand, se_CreateTrafficPolicyVersionCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTrafficPolicyVersionCommand}.
 */
export interface CreateTrafficPolicyVersionCommandInput extends CreateTrafficPolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrafficPolicyVersionCommand}.
 */
export interface CreateTrafficPolicyVersionCommandOutput extends CreateTrafficPolicyVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new version of an existing traffic policy. When you create a new version of
 * 			a traffic policy, you specify the ID of the traffic policy that you want to update and a
 * 			JSON-formatted document that describes the new version. You use traffic policies to
 * 			create multiple DNS resource record sets for one domain name (such as example.com) or
 * 			one subdomain name (such as www.example.com). You can create a maximum of 1000 versions
 * 			of a traffic policy. If you reach the limit and need to create another version, you'll
 * 			need to start a new traffic policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateTrafficPolicyVersionCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateTrafficPolicyVersionCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // CreateTrafficPolicyVersionRequest
 *   Id: "STRING_VALUE", // required
 *   Document: "STRING_VALUE", // required
 *   Comment: "STRING_VALUE",
 * };
 * const command = new CreateTrafficPolicyVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficPolicyVersionResponse
 * //   TrafficPolicy: { // TrafficPolicy
 * //     Id: "STRING_VALUE", // required
 * //     Version: Number("int"), // required
 * //     Name: "STRING_VALUE", // required
 * //     Type: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS", // required
 * //     Document: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrafficPolicyVersionCommandInput - {@link CreateTrafficPolicyVersionCommandInput}
 * @returns {@link CreateTrafficPolicyVersionCommandOutput}
 * @see {@link CreateTrafficPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidTrafficPolicyDocument} (client fault)
 *  <p>The format of the traffic policy document that you specified in the
 * 				<code>Document</code> element is not valid.</p>
 *
 * @throws {@link NoSuchTrafficPolicy} (client fault)
 *  <p>No traffic policy exists with the specified ID.</p>
 *
 * @throws {@link TooManyTrafficPolicyVersionsForCurrentPolicy} (client fault)
 *  <p>This traffic policy version can't be created because you've reached the limit of 1000
 * 			on the number of versions that you can create for the current traffic policy.</p>
 *          <p>To create more traffic policy versions, you can use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html">GetTrafficPolicy</a>
 * 			to get the traffic policy document for a specified traffic policy version, and then use
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html">CreateTrafficPolicy</a> to create a new traffic policy using the traffic policy
 * 			document.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class CreateTrafficPolicyVersionCommand extends $Command<
  CreateTrafficPolicyVersionCommandInput,
  CreateTrafficPolicyVersionCommandOutput,
  Route53ClientResolvedConfig
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
  constructor(readonly input: CreateTrafficPolicyVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTrafficPolicyVersionCommandInput, CreateTrafficPolicyVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTrafficPolicyVersionCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateTrafficPolicyVersionCommand";
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
  private serialize(input: CreateTrafficPolicyVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTrafficPolicyVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTrafficPolicyVersionCommandOutput> {
    return de_CreateTrafficPolicyVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
