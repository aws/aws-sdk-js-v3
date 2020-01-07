import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListUniqueProblemsRequest, ListUniqueProblemsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListUniqueProblemsCommandInput = ListUniqueProblemsRequest;
export declare type ListUniqueProblemsCommandOutput = ListUniqueProblemsResult & __MetadataBearer;
export declare class ListUniqueProblemsCommand extends $Command<ListUniqueProblemsCommandInput, ListUniqueProblemsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListUniqueProblemsCommandInput;
    constructor(input: ListUniqueProblemsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUniqueProblemsCommandInput, ListUniqueProblemsCommandOutput>;
    private serialize;
    private deserialize;
}
