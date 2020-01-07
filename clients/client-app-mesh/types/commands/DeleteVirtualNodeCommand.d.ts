import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteVirtualNodeInput, DeleteVirtualNodeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVirtualNodeCommandInput = DeleteVirtualNodeInput;
export declare type DeleteVirtualNodeCommandOutput = DeleteVirtualNodeOutput & __MetadataBearer;
export declare class DeleteVirtualNodeCommand extends $Command<DeleteVirtualNodeCommandInput, DeleteVirtualNodeCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: DeleteVirtualNodeCommandInput;
    constructor(input: DeleteVirtualNodeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVirtualNodeCommandInput, DeleteVirtualNodeCommandOutput>;
    private serialize;
    private deserialize;
}
