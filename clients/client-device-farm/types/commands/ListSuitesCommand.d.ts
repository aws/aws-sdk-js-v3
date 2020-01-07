import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListSuitesRequest, ListSuitesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSuitesCommandInput = ListSuitesRequest;
export declare type ListSuitesCommandOutput = ListSuitesResult & __MetadataBearer;
export declare class ListSuitesCommand extends $Command<ListSuitesCommandInput, ListSuitesCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListSuitesCommandInput;
    constructor(input: ListSuitesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSuitesCommandInput, ListSuitesCommandOutput>;
    private serialize;
    private deserialize;
}
