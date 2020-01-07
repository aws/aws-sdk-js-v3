import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListSamplesRequest, ListSamplesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSamplesCommandInput = ListSamplesRequest;
export declare type ListSamplesCommandOutput = ListSamplesResult & __MetadataBearer;
export declare class ListSamplesCommand extends $Command<ListSamplesCommandInput, ListSamplesCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListSamplesCommandInput;
    constructor(input: ListSamplesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSamplesCommandInput, ListSamplesCommandOutput>;
    private serialize;
    private deserialize;
}
