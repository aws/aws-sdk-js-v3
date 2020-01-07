import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { ListLogPatternSetsRequest, ListLogPatternSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLogPatternSetsCommandInput = ListLogPatternSetsRequest;
export declare type ListLogPatternSetsCommandOutput = ListLogPatternSetsResponse & __MetadataBearer;
export declare class ListLogPatternSetsCommand extends $Command<ListLogPatternSetsCommandInput, ListLogPatternSetsCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: ListLogPatternSetsCommandInput;
    constructor(input: ListLogPatternSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLogPatternSetsCommandInput, ListLogPatternSetsCommandOutput>;
    private serialize;
    private deserialize;
}
