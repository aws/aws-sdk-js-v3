import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { ListHapgsRequest, ListHapgsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListHapgsCommandInput = ListHapgsRequest;
export declare type ListHapgsCommandOutput = ListHapgsResponse & __MetadataBearer;
export declare class ListHapgsCommand extends $Command<ListHapgsCommandInput, ListHapgsCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: ListHapgsCommandInput;
    constructor(input: ListHapgsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHapgsCommandInput, ListHapgsCommandOutput>;
    private serialize;
    private deserialize;
}
