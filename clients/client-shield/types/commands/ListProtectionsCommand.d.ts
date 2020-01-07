import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { ListProtectionsRequest, ListProtectionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListProtectionsCommandInput = ListProtectionsRequest;
export declare type ListProtectionsCommandOutput = ListProtectionsResponse & __MetadataBearer;
export declare class ListProtectionsCommand extends $Command<ListProtectionsCommandInput, ListProtectionsCommandOutput, ShieldClientResolvedConfig> {
    readonly input: ListProtectionsCommandInput;
    constructor(input: ListProtectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProtectionsCommandInput, ListProtectionsCommandOutput>;
    private serialize;
    private deserialize;
}
