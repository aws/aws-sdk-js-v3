import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { GetDiscoverySummaryRequest, GetDiscoverySummaryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDiscoverySummaryCommandInput = GetDiscoverySummaryRequest;
export declare type GetDiscoverySummaryCommandOutput = GetDiscoverySummaryResponse & __MetadataBearer;
export declare class GetDiscoverySummaryCommand extends $Command<GetDiscoverySummaryCommandInput, GetDiscoverySummaryCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: GetDiscoverySummaryCommandInput;
    constructor(input: GetDiscoverySummaryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDiscoverySummaryCommandInput, GetDiscoverySummaryCommandOutput>;
    private serialize;
    private deserialize;
}
