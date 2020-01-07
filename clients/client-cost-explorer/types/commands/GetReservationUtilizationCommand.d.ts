import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetReservationUtilizationRequest, GetReservationUtilizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetReservationUtilizationCommandInput = GetReservationUtilizationRequest;
export declare type GetReservationUtilizationCommandOutput = GetReservationUtilizationResponse & __MetadataBearer;
export declare class GetReservationUtilizationCommand extends $Command<GetReservationUtilizationCommandInput, GetReservationUtilizationCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetReservationUtilizationCommandInput;
    constructor(input: GetReservationUtilizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReservationUtilizationCommandInput, GetReservationUtilizationCommandOutput>;
    private serialize;
    private deserialize;
}
