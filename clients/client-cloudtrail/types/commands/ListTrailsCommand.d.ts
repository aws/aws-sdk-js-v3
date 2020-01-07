import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { ListTrailsRequest, ListTrailsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTrailsCommandInput = ListTrailsRequest;
export declare type ListTrailsCommandOutput = ListTrailsResponse & __MetadataBearer;
export declare class ListTrailsCommand extends $Command<ListTrailsCommandInput, ListTrailsCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: ListTrailsCommandInput;
    constructor(input: ListTrailsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrailsCommandInput, ListTrailsCommandOutput>;
    private serialize;
    private deserialize;
}
