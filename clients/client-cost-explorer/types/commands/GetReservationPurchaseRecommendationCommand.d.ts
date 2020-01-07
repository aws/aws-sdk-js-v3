import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetReservationPurchaseRecommendationRequest, GetReservationPurchaseRecommendationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetReservationPurchaseRecommendationCommandInput = GetReservationPurchaseRecommendationRequest;
export declare type GetReservationPurchaseRecommendationCommandOutput = GetReservationPurchaseRecommendationResponse & __MetadataBearer;
export declare class GetReservationPurchaseRecommendationCommand extends $Command<GetReservationPurchaseRecommendationCommandInput, GetReservationPurchaseRecommendationCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetReservationPurchaseRecommendationCommandInput;
    constructor(input: GetReservationPurchaseRecommendationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReservationPurchaseRecommendationCommandInput, GetReservationPurchaseRecommendationCommandOutput>;
    private serialize;
    private deserialize;
}
