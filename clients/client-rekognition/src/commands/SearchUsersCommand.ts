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

import { SearchUsersRequest, SearchUsersResponse } from "../models/models_0";
import { de_SearchUsersCommand, se_SearchUsersCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchUsersCommand}.
 */
export interface SearchUsersCommandInput extends SearchUsersRequest {}
/**
 * @public
 *
 * The output of {@link SearchUsersCommand}.
 */
export interface SearchUsersCommandOutput extends SearchUsersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Searches for UserIDs within a collection based on a <code>FaceId</code> or
 *         <code>UserId</code>. This API can be used to find the closest UserID (with a highest
 *       similarity) to associate a face. The request must be provided with either <code>FaceId</code>
 *       or <code>UserId</code>. The operation returns an array of UserID that match the
 *         <code>FaceId</code> or <code>UserId</code>, ordered by similarity score with the highest
 *       similarity first. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, SearchUsersCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, SearchUsersCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // SearchUsersRequest
 *   CollectionId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE",
 *   FaceId: "STRING_VALUE",
 *   UserMatchThreshold: Number("float"),
 *   MaxUsers: Number("int"),
 * };
 * const command = new SearchUsersCommand(input);
 * const response = await client.send(command);
 * // { // SearchUsersResponse
 * //   UserMatches: [ // UserMatchList
 * //     { // UserMatch
 * //       Similarity: Number("float"),
 * //       User: { // MatchedUser
 * //         UserId: "STRING_VALUE",
 * //         UserStatus: "ACTIVE" || "UPDATING" || "CREATING" || "CREATED",
 * //       },
 * //     },
 * //   ],
 * //   FaceModelVersion: "STRING_VALUE",
 * //   SearchedFace: { // SearchedFace
 * //     FaceId: "STRING_VALUE",
 * //   },
 * //   SearchedUser: { // SearchedUser
 * //     UserId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param SearchUsersCommandInput - {@link SearchUsersCommandInput}
 * @returns {@link SearchUsersCommandOutput}
 * @see {@link SearchUsersCommandInput} for command's `input` shape.
 * @see {@link SearchUsersCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @example SearchUsers
 * ```javascript
 * // Searches for UserIDs within a collection based on a FaceId or UserId.
 * const input = {
 *   "CollectionId": "MyCollection",
 *   "MaxUsers": 2,
 *   "UserId": "DemoUser",
 *   "UserMatchThreshold": 70
 * };
 * const command = new SearchUsersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FaceModelVersion": "6",
 *   "SearchedUser": {
 *     "UserId": "DemoUser"
 *   },
 *   "UserMatches": [
 *     {
 *       "Similarity": 99.88186645507812,
 *       "User": {
 *         "UserId": "demoUser1",
 *         "UserStatus": "ACTIVE"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: searchusers-1686182912030
 * ```
 *
 */
export class SearchUsersCommand extends $Command<
  SearchUsersCommandInput,
  SearchUsersCommandOutput,
  RekognitionClientResolvedConfig
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
  constructor(readonly input: SearchUsersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchUsersCommandInput, SearchUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchUsersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "SearchUsersCommand";
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
  private serialize(input: SearchUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchUsersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchUsersCommandOutput> {
    return de_SearchUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
