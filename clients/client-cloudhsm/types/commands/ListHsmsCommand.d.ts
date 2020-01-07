import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { ListHsmsRequest, ListHsmsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListHsmsCommandInput = ListHsmsRequest;
export declare type ListHsmsCommandOutput = ListHsmsResponse & __MetadataBearer;
export declare class ListHsmsCommand extends $Command<ListHsmsCommandInput, ListHsmsCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: ListHsmsCommandInput;
    constructor(input: ListHsmsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHsmsCommandInput, ListHsmsCommandOutput>;
    private serialize;
    private deserialize;
}
