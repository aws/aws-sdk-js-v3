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

import { GetSubscriberRequest, GetSubscriberResponse } from "../models/models_0";
import { de_GetSubscriberCommand, se_GetSubscriberCommand } from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSubscriberCommand}.
 */
export interface GetSubscriberCommandInput extends GetSubscriberRequest {}
/**
 * @public
 *
 * The output of {@link GetSubscriberCommand}.
 */
export interface GetSubscriberCommandOutput extends GetSubscriberResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the subscription information for the specified subscription ID. You can get
 *          information about a specific subscriber.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, GetSubscriberCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, GetSubscriberCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // GetSubscriberRequest
 *   subscriberId: "STRING_VALUE", // required
 * };
 * const command = new GetSubscriberCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriberResponse
 * //   subscriber: { // SubscriberResource
 * //     subscriberId: "STRING_VALUE", // required
 * //     subscriberArn: "STRING_VALUE", // required
 * //     subscriberIdentity: { // AwsIdentity
 * //       principal: "STRING_VALUE", // required
 * //       externalId: "STRING_VALUE", // required
 * //     },
 * //     subscriberName: "STRING_VALUE", // required
 * //     subscriberDescription: "STRING_VALUE",
 * //     sources: [ // LogSourceResourceList // required
 * //       { // LogSourceResource Union: only one key present
 * //         awsLogSource: { // AwsLogSourceResource
 * //           sourceName: "ROUTE53" || "VPC_FLOW" || "SH_FINDINGS" || "CLOUD_TRAIL_MGMT" || "LAMBDA_EXECUTION" || "S3_DATA",
 * //           sourceVersion: "STRING_VALUE",
 * //         },
 * //         customLogSource: { // CustomLogSourceResource
 * //           sourceName: "STRING_VALUE",
 * //           sourceVersion: "STRING_VALUE",
 * //           provider: { // CustomLogSourceProvider
 * //             roleArn: "STRING_VALUE",
 * //             location: "STRING_VALUE",
 * //           },
 * //           attributes: { // CustomLogSourceAttributes
 * //             crawlerArn: "STRING_VALUE",
 * //             databaseArn: "STRING_VALUE",
 * //             tableArn: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     accessTypes: [ // AccessTypeList
 * //       "LAKEFORMATION" || "S3",
 * //     ],
 * //     roleArn: "STRING_VALUE",
 * //     s3BucketArn: "STRING_VALUE",
 * //     subscriberEndpoint: "STRING_VALUE",
 * //     subscriberStatus: "ACTIVE" || "DEACTIVATED" || "PENDING" || "READY",
 * //     resourceShareArn: "STRING_VALUE",
 * //     resourceShareName: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSubscriberCommandInput - {@link GetSubscriberCommandInput}
 * @returns {@link GetSubscriberCommandOutput}
 * @see {@link GetSubscriberCommandInput} for command's `input` shape.
 * @see {@link GetSubscriberCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 */
export class GetSubscriberCommand extends $Command<
  GetSubscriberCommandInput,
  GetSubscriberCommandOutput,
  SecurityLakeClientResolvedConfig
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
  constructor(readonly input: GetSubscriberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSubscriberCommandInput, GetSubscriberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSubscriberCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "GetSubscriberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityLake",
        operation: "GetSubscriber",
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
  private serialize(input: GetSubscriberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSubscriberCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSubscriberCommandOutput> {
    return de_GetSubscriberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
