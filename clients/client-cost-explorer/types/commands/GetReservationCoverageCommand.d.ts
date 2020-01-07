import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetReservationCoverageRequest, GetReservationCoverageResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetReservationCoverageCommandInput = GetReservationCoverageRequest;
export declare type GetReservationCoverageCommandOutput = GetReservationCoverageResponse & __MetadataBearer;
export declare class GetReservationCoverageCommand extends $Command<GetReservationCoverageCommandInput, GetReservationCoverageCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetReservationCoverageCommandInput;
    constructor(input: GetReservationCoverageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReservationCoverageCommandInput, GetReservationCoverageCommandOutput>;
    private serialize;
    private deserialize;
}
