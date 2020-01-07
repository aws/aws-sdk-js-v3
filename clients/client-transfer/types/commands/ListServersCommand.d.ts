import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { ListServersRequest, ListServersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListServersCommandInput = ListServersRequest;
export declare type ListServersCommandOutput = ListServersResponse & __MetadataBearer;
export declare class ListServersCommand extends $Command<ListServersCommandInput, ListServersCommandOutput, TransferClientResolvedConfig> {
    readonly input: ListServersCommandInput;
    constructor(input: ListServersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServersCommandInput, ListServersCommandOutput>;
    private serialize;
    private deserialize;
}
