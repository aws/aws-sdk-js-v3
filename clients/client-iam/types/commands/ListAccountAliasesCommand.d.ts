import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAccountAliasesRequest, ListAccountAliasesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAccountAliasesCommandInput = ListAccountAliasesRequest;
export declare type ListAccountAliasesCommandOutput = ListAccountAliasesResponse & __MetadataBearer;
export declare class ListAccountAliasesCommand extends $Command<ListAccountAliasesCommandInput, ListAccountAliasesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListAccountAliasesCommandInput;
    constructor(input: ListAccountAliasesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccountAliasesCommandInput, ListAccountAliasesCommandOutput>;
    private serialize;
    private deserialize;
}
