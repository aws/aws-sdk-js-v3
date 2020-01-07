import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { ListGraphsRequest, ListGraphsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGraphsCommandInput = ListGraphsRequest;
export declare type ListGraphsCommandOutput = ListGraphsResponse & __MetadataBearer;
export declare class ListGraphsCommand extends $Command<ListGraphsCommandInput, ListGraphsCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: ListGraphsCommandInput;
    constructor(input: ListGraphsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGraphsCommandInput, ListGraphsCommandOutput>;
    private serialize;
    private deserialize;
}
