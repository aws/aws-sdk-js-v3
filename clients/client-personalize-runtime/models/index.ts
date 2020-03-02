import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface GetPersonalizedRankingRequest {
  __type?: "GetPersonalizedRankingRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign to use for generating the personalized
   *       ranking.</p>
   */
  campaignArn: string | undefined;

  /**
   * <p>The contextual metadata to use when getting recommendations. Contextual metadata includes
   *       any interaction information that might be relevant when getting a user's recommendations, such
   *       as the user's current location or device type. For more information, see Contextual
   *       Metadata.</p>
   */
  context?: { [key: string]: string };

  /**
   * <p>A list of items (itemId's) to rank. If an item was not included in the training dataset,
   *       the item is appended to the end of the reranked list. The maximum is 500.</p>
   */
  inputList: Array<string> | undefined;

  /**
   * <p>The user for which you want the campaign to provide a personalized ranking.</p>
   */
  userId: string | undefined;
}

export namespace GetPersonalizedRankingRequest {
  export function isa(o: any): o is GetPersonalizedRankingRequest {
    return __isa(o, "GetPersonalizedRankingRequest");
  }
}

export interface GetPersonalizedRankingResponse {
  __type?: "GetPersonalizedRankingResponse";
  /**
   * <p>A list of items in order of most likely interest to the user. The maximum is 500.</p>
   */
  personalizedRanking?: Array<PredictedItem>;
}

export namespace GetPersonalizedRankingResponse {
  export function isa(o: any): o is GetPersonalizedRankingResponse {
    return __isa(o, "GetPersonalizedRankingResponse");
  }
}

export interface GetRecommendationsRequest {
  __type?: "GetRecommendationsRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.</p>
   */
  campaignArn: string | undefined;

  /**
   * <p>The contextual metadata to use when getting recommendations. Contextual metadata includes
   *       any interaction information that might be relevant when getting a user's recommendations, such
   *       as the user's current location or device type. For more information, see Contextual
   *       Metadata.</p>
   */
  context?: { [key: string]: string };

  /**
   * <p>The item ID to provide recommendations for.</p>
   *          <p>Required for <code>RELATED_ITEMS</code> recipe type.</p>
   */
  itemId?: string;

  /**
   * <p>The number of results to return. The default is 25. The maximum is 500.</p>
   */
  numResults?: number;

  /**
   * <p>The user ID to provide recommendations for.</p>
   *          <p>Required for <code>USER_PERSONALIZATION</code> recipe type.</p>
   */
  userId?: string;
}

export namespace GetRecommendationsRequest {
  export function isa(o: any): o is GetRecommendationsRequest {
    return __isa(o, "GetRecommendationsRequest");
  }
}

export interface GetRecommendationsResponse {
  __type?: "GetRecommendationsResponse";
  /**
   * <p>A list of recommendations sorted in ascending order by prediction score. There can be a
   *       maximum of 500 items in the list.</p>
   */
  itemList?: Array<PredictedItem>;
}

export namespace GetRecommendationsResponse {
  export function isa(o: any): o is GetRecommendationsResponse {
    return __isa(o, "GetRecommendationsResponse");
  }
}

/**
 * <p>An object that identifies an item.</p>
 *          <p>The  and  APIs return a list of
 *       <code>PredictedItem</code>s.</p>
 */
export interface PredictedItem {
  __type?: "PredictedItem";
  /**
   * <p>The recommended item ID.</p>
   */
  itemId?: string;
}

export namespace PredictedItem {
  export function isa(o: any): o is PredictedItem {
    return __isa(o, "PredictedItem");
  }
}

/**
 * <p>Provide a valid value for the field or parameter.</p>
 */
export interface InvalidInputException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  message?: string;
}

export namespace InvalidInputException {
  export function isa(o: any): o is InvalidInputException {
    return __isa(o, "InvalidInputException");
  }
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}
