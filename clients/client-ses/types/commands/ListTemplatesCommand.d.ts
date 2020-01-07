import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListTemplatesRequest, ListTemplatesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTemplatesCommandInput = ListTemplatesRequest;
export declare type ListTemplatesCommandOutput = ListTemplatesResponse & __MetadataBearer;
export declare class ListTemplatesCommand extends $Command<ListTemplatesCommandInput, ListTemplatesCommandOutput, SESClientResolvedConfig> {
    readonly input: ListTemplatesCommandInput;
    constructor(input: ListTemplatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTemplatesCommandInput, ListTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
