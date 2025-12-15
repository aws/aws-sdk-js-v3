// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchUsersRequest, SearchUsersResponse } from "../models/models_0";
import type { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { SearchUsers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
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
 *
 * @example SearchUsers
 * ```javascript
 * // Searches for UserIDs within a collection based on a FaceId or UserId.
 * const input = {
 *   CollectionId: "MyCollection",
 *   MaxUsers: 2,
 *   UserId: "DemoUser",
 *   UserMatchThreshold: 70
 * };
 * const command = new SearchUsersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   FaceModelVersion: "6",
 *   SearchedUser: {
 *     UserId: "DemoUser"
 *   },
 *   UserMatches: [
 *     {
 *       Similarity: 99.88186645507812,
 *       User: {
 *         UserId: "demoUser1",
 *         UserStatus: "ACTIVE"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SearchUsersCommand extends $Command
  .classBuilder<
    SearchUsersCommandInput,
    SearchUsersCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "SearchUsers", {})
  .n("RekognitionClient", "SearchUsersCommand")
  .sc(SearchUsers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchUsersRequest;
      output: SearchUsersResponse;
    };
    sdk: {
      input: SearchUsersCommandInput;
      output: SearchUsersCommandOutput;
    };
  };
}
