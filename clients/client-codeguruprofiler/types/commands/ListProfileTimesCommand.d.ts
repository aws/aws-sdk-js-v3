import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { ListProfileTimesRequest, ListProfileTimesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListProfileTimesCommandInput = ListProfileTimesRequest;
export declare type ListProfileTimesCommandOutput = ListProfileTimesResponse & __MetadataBearer;
export declare class ListProfileTimesCommand extends $Command<ListProfileTimesCommandInput, ListProfileTimesCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: ListProfileTimesCommandInput;
    constructor(input: ListProfileTimesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProfileTimesCommandInput, ListProfileTimesCommandOutput>;
    private serialize;
    private deserialize;
}
