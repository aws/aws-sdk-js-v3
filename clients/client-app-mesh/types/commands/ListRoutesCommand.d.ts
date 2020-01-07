import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { ListRoutesInput, ListRoutesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRoutesCommandInput = ListRoutesInput;
export declare type ListRoutesCommandOutput = ListRoutesOutput & __MetadataBearer;
export declare class ListRoutesCommand extends $Command<ListRoutesCommandInput, ListRoutesCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: ListRoutesCommandInput;
    constructor(input: ListRoutesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRoutesCommandInput, ListRoutesCommandOutput>;
    private serialize;
    private deserialize;
}
