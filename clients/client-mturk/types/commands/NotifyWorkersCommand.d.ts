import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { NotifyWorkersRequest, NotifyWorkersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type NotifyWorkersCommandInput = NotifyWorkersRequest;
export declare type NotifyWorkersCommandOutput = NotifyWorkersResponse & __MetadataBearer;
export declare class NotifyWorkersCommand extends $Command<NotifyWorkersCommandInput, NotifyWorkersCommandOutput, MTurkClientResolvedConfig> {
    readonly input: NotifyWorkersCommandInput;
    constructor(input: NotifyWorkersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<NotifyWorkersCommandInput, NotifyWorkersCommandOutput>;
    private serialize;
    private deserialize;
}
