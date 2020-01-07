import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ListAliasesRequest, ListAliasesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAliasesCommandInput = ListAliasesRequest;
export declare type ListAliasesCommandOutput = ListAliasesResponse & __MetadataBearer;
export declare class ListAliasesCommand extends $Command<ListAliasesCommandInput, ListAliasesCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: ListAliasesCommandInput;
    constructor(input: ListAliasesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAliasesCommandInput, ListAliasesCommandOutput>;
    private serialize;
    private deserialize;
}
