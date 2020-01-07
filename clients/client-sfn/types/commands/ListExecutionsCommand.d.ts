import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { ListExecutionsInput, ListExecutionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListExecutionsCommandInput = ListExecutionsInput;
export declare type ListExecutionsCommandOutput = ListExecutionsOutput & __MetadataBearer;
export declare class ListExecutionsCommand extends $Command<ListExecutionsCommandInput, ListExecutionsCommandOutput, SFNClientResolvedConfig> {
    readonly input: ListExecutionsCommandInput;
    constructor(input: ListExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListExecutionsCommandInput, ListExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
