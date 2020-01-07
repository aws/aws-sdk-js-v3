import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListCommandsRequest, ListCommandsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCommandsCommandInput = ListCommandsRequest;
export declare type ListCommandsCommandOutput = ListCommandsResult & __MetadataBearer;
export declare class ListCommandsCommand extends $Command<ListCommandsCommandInput, ListCommandsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListCommandsCommandInput;
    constructor(input: ListCommandsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCommandsCommandInput, ListCommandsCommandOutput>;
    private serialize;
    private deserialize;
}
