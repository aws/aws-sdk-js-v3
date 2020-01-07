import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListTestsRequest, ListTestsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTestsCommandInput = ListTestsRequest;
export declare type ListTestsCommandOutput = ListTestsResult & __MetadataBearer;
export declare class ListTestsCommand extends $Command<ListTestsCommandInput, ListTestsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListTestsCommandInput;
    constructor(input: ListTestsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTestsCommandInput, ListTestsCommandOutput>;
    private serialize;
    private deserialize;
}
