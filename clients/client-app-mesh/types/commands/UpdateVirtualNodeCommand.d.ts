import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { UpdateVirtualNodeInput, UpdateVirtualNodeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateVirtualNodeCommandInput = UpdateVirtualNodeInput;
export declare type UpdateVirtualNodeCommandOutput = UpdateVirtualNodeOutput & __MetadataBearer;
export declare class UpdateVirtualNodeCommand extends $Command<UpdateVirtualNodeCommandInput, UpdateVirtualNodeCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: UpdateVirtualNodeCommandInput;
    constructor(input: UpdateVirtualNodeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVirtualNodeCommandInput, UpdateVirtualNodeCommandOutput>;
    private serialize;
    private deserialize;
}
