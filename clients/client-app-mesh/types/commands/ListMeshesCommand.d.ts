import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { ListMeshesInput, ListMeshesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListMeshesCommandInput = ListMeshesInput;
export declare type ListMeshesCommandOutput = ListMeshesOutput & __MetadataBearer;
export declare class ListMeshesCommand extends $Command<ListMeshesCommandInput, ListMeshesCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: ListMeshesCommandInput;
    constructor(input: ListMeshesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMeshesCommandInput, ListMeshesCommandOutput>;
    private serialize;
    private deserialize;
}
